/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { AdminUser } from './adminUser';
import { SystemUserProtocol } from './interfaces/systemUserProtocol';
import { SystemUserAddressProtocol } from "./types/systemUserAddressProtocol";

/* - - - - - - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - - - - - - */
export class SystemUserProxy implements SystemUserProtocol {

    public fistName: string;
    public userName: string;
    private realUser: SystemUserProtocol | null = null;
    private realUserAddresses: SystemUserAddressProtocol[] | null = null;

    public constructor(fistName: string, userName: string) {
        this.fistName = fistName;
        this.userName = userName;
    }

    private createUser(): SystemUserProtocol {
        if (this.realUser === null) {
            this.realUser = new AdminUser(this.fistName, this.userName);
        }
        return this.realUser;
    }

    public async getAddresses(): Promise<SystemUserAddressProtocol[]> {
        this.realUser = this.createUser();

        if (this.realUserAddresses === null) {
            this.realUserAddresses = await this.realUser.getAddresses();
        }

        return this.realUserAddresses;
    }
}