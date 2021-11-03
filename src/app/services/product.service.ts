import { Product } from '../models/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  products: Product [] = [
    new Product(1, 'GTX 1060 3GB', "Graphic Card from Nvidia", "Graphics Card", 18000, "./../assets/img/gtx_1060.jpg"),
    new Product(2, ' RX 580 4GB', "Graphic Card from AMD", "Graphics Card", 20000,"./../assets/img/RX_580.jpg" ),
    new Product(3, 'I7-7700k 4.8Ghz', "Processor from the family Intel", "Processors", 22000, "./../assets/img/intel_i7.jpg"),
    new Product(4, 'Ryzen 5 4.5Ghz', "Proccessor from the family AMD", "Processors", 21000, "./../assets/img/ryzen_5.jpg"),
    new Product(5, "Kumara K552 QWERtY", "A gaming Keyboard from the redragon", "Keyboard", 10000, "./../assets/img/Kumara_552.jpg"),
    new Product(6, "NKB-91", "A keyboard from the Noga Company", "Keyboard", 7000, "./../assets/img/nkb_91.jpg"),
    new Product(7, "Logitech G203", "A Gaming mouse from logitech", "Mouses", 4000,"./../assets/img/logitech_g203.jpg"),
    new Product(8, "Griffin M607", "A Gaming Mouse from Redragon", "Mouses", 5000, "./../assets/img/griffin_m607.jpg")
  ]

  
  constructor() { }

  getProducts(): Product[]{
    return this.products;
  }
}
