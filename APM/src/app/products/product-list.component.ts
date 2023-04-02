import { Component, OnInit } from "@angular/core";
import { IProduct } from "./IProduct";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
    ngOnInit(): void {
        this.listFilter = 'cart';
    }
    toggleImage() {
        this.showImage = !this.showImage
    }
    imageWidth=50;
    imageMargin= 2;
    filteredProducts : IProduct[] = [];
    products: IProduct[] = [
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2021",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 5,
            "imageUrl": "assets/images/leaf_rake.png"
        },
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2021",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "assets/images/garden_cart.png"
        }];
    pageTitle: string = 'Product List';
    _listFilter: string = 'cart';
    showImage: any;
    errorMessage: any;

    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(listFilter: string) {

        this._listFilter = listFilter;
        console.log(this._listFilter)
        this.filteredProducts=  this.performFilter(listFilter)
    }

    performFilter(filter:string): IProduct[] {

        return this.products.filter( (product: IProduct)  =>  product.productName.toLowerCase().includes(this.listFilter.toLowerCase()));

        //this.products.filter( (product: IProduct))
    }


}