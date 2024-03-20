/* - - - - - - - - - - - - - - - - - - - - types - - - - - - - - - - - - - - - - - - - - */
import { SystemUserAddressProtocol } from "../types/systemUserAddressProtocol";

/* - - - - - - - - - - - - - - - - - - - - interfaces - - - - - - - - - - - - - - - - - - - - */
export interface SystemUserProtocol {
    fistName: string;
    userName: string;
    getAddresses(): Promise<SystemUserAddressProtocol[]>;
}