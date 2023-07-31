import { SystemUserProxy } from "./system-user/system-user-proxy";

async function clientCode(): Promise<void> {
    const user = new SystemUserProxy('Leo', 'leoSantos');

    console.log('Isso levará 2 segundos...');
    console.log(await user.getAddresses());
    console.log('\nIsso se repetirá 5x...(CACHE)');

    for (let i = 0; i < 5; i++) {
        console.log('\n' + (i + 1) + 'ª repetição');
        console.log(await user.getAddresses());
    }
}

clientCode();