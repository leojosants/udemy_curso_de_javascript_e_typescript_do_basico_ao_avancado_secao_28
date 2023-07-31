import { AdminUser } from "./admin-user";
import { SystemUserAddressProtocol, SystemUserProtocol } from "./interfaces/system-user-protocol";

export class SystemUserProxy implements SystemUserProtocol {
    public firstName: string;
    public userName: string;
    private realtUser: SystemUserProtocol | null = null;
    private realUserAddresses: SystemUserAddressProtocol[] | null = null;

    constructor(firstName: string, userName: string) {
        this.firstName = firstName;
        this.userName = userName;
    }

    private createUser(): SystemUserProtocol {
        if (this.realtUser === null) this.realtUser = new AdminUser(this.firstName, this.userName);
        return this.realtUser;
    }

    async getAddresses(): Promise<SystemUserAddressProtocol[]> {
        this.realtUser = this.createUser();
        if (this.realUserAddresses === null) this.realUserAddresses = await this.realtUser.getAddresses();
        return this.realUserAddresses;
    }
}