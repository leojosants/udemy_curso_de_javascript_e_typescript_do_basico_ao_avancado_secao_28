import { SystemUserAddressProtocol, SystemUserProtocol } from "./interfaces/system-user-protocol";

export class AdminUser implements SystemUserProtocol {
    constructor(
        public firstName: string,
        public userName: string,
    ) { }

    async getAddresses(): Promise<SystemUserAddressProtocol[]> {
        return new Promise((resolve) => {
            return setTimeout(() => {
                return resolve([
                    { street: 'Av Leite de Castro', number: 45 },
                    { street: 'Av Joana de Mastro', number: 35 },
                ]);
            }, 2000);
        });
    }
}