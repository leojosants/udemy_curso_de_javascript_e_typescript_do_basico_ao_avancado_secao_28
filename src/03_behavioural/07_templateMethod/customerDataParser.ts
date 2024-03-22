/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { CustomerData } from "./types/customerData";

/* - - - - - - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - - - - - - */
export abstract class CustomerDataParser {
    public customerData: CustomerData[] = [];
    protected filePath: string;

    public constructor(filePath: string) {
        this.filePath = filePath;
    }

    readonly fixCustomerData = async (): Promise<void> =>{
        this.customerData = await this.parseData();
        this.customerData = this.fixCPF();
    }

    private fixCPF(): CustomerData[] {
        return this.customerData.map((customer) => ({
            ...customer, cpf: customer.cpf.replace(/\D/g, '')
        }));
    }

    protected abstract parseData(): Promise<CustomerData[]>;
}