/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { SystemUserProtocol } from "./interfaces/systemUserProtocol";
import { SystemUserAddressProtocol } from "./types/systemUserAddressProtocol";

/* - - - - - - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - - - - - - */
export class AdminUser implements SystemUserProtocol {

    public fistName: string;
    public userName: string;

    public constructor(fistName: string, userName: string) {
        this.fistName = fistName;
        this.userName = userName;
    }

    public async getAddresses(): Promise<SystemUserAddressProtocol[]> {
        return new Promise((resolve) => {
            return setTimeout(() => {
                return resolve([
                    {
                        street: 'Rua A',
                        number: 0,
                    },
                    {
                        street: 'Rua B',
                        number: 1,
                    },
                ]);
            }, 2000);
        });
    }
}