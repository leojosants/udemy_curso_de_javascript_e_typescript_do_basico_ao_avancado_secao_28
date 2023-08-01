import { CustomerData } from "./types/customer-data";

export abstract class CustomerDataParser {
    public customerData: CustomerData[] = [];
    constructor(protected filePath: string) { }

    readonly fixCustomerData = async (): Promise<void> => {
        this.customerData = await this.parseDate();
        this.customerData = this.fixCpf();
    }

    private fixCpf(): CustomerData[] {
        return this.customerData.map((customer) => {
            return { ...customer, cpf: customer.cpf.replace(/\D/g, '') }
        });
    }

    protected hook(): void { }

    protected abstract parseDate(): Promise<CustomerData[]>;
    // protected abstract async parseDate(): Promise<CustomerData[]>; // apresentando erro no async
}