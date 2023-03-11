export type Order = {
    firstName: string;
    middleName?: string;
    lastName: string;
    description?: string;
    contact: string;
    email: string;
    quantity: number;
    deliveryDate: Date;
    address: string;
    city: string;
    state: string;
    postalCode: string;
    productName: string;
    id?: number;
}
