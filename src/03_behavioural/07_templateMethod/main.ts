/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { resolve } from "path";
import { CustomerDataParserTxt } from './customerDataParserTxt';
import { CustomerDataParserJson } from "./customerDataParserJson";

/* - - - - - - - - - - - - - - - - - - - - program - - - - - - - - - - - - - - - - - - - - */
async function run() {
    const filePathTxt = resolve(__dirname, 'files', 'customer.txt');
    const customerDataParserTxt = new CustomerDataParserTxt(filePathTxt);
    await customerDataParserTxt.fixCustomerData();

    console.log('\nTXT');
    console.log(customerDataParserTxt.customerData, '\n');
    console.log('JSON');

    const filePathJson = resolve(__dirname, 'files', 'customer.Json');
    const customerDataParserJson = new CustomerDataParserJson(filePathJson);
    await customerDataParserJson.fixCustomerData();

    console.log(customerDataParserJson.customerData);
}

run();