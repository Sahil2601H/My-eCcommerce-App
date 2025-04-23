import { Seller } from "./SellerType";

export interface Product {
    id?: number;
    title: string;
    description: string;
    mrpPrice: number;
    sellingPrice: number;
    discountPercent: number;
    quantity: number;
    color: string;
    images: string[];
    numRatings?: number;
    category: Category; // You'll need to define Category interface separately
    seller: Seller;     // You'll need to define Seller interface separately
    createdAt: string;  // or Date if you'll convert it to Date object
    Sizes: string;
     // You'll need to define Review interface separately
}

export interface Category{
    id?:number;
    name:String;
    CategoryId:String;
    perentcategoryId?:Category;
    level:number;


}