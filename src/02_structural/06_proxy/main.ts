/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { SystemUserProxy } from "./system_user/systemUserProxy";

/* - - - - - - - - - - - - - - - - - - - - functions - - - - - - - - - - - - - - - - - - - - */
async function clientCode(): Promise<void> {
    const user = new SystemUserProxy('Leo', 'leoSantos');

    console.log('\nIsso vai levar 2 segundos');
    console.log(await user.getAddresses());
    console.log('\nIsso vai se repetir (cache)');

    for (let i = 0; i < 5; i++) {
        console.log(`->${i + 1}`, await user.getAddresses());
    }
}

/* - - - - - - - - - - - - - - - - - - - - program - - - - - - - - - - - - - - - - - - - - */
clientCode();