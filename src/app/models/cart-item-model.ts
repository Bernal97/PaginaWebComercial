import { Product } from './product';
export class CartItemModel {
    productoId: number;
    productName: string;
    productPrice: number;
    qty: number;

    constructor(product: Product){
        this.productoId = product.id;
        this.productName = product.name;
        this.productPrice = product.price;
        this.qty = 1;
    }
}

