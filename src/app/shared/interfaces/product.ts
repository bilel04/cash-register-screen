export interface Product extends OrderDetails{
    id: number;
    name: string;
    price: number;
    tva: number;
    image: string;
}

export interface OrderDetails {
    quantity: number;
}