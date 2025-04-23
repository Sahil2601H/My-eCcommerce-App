export interface Seller { 
    
    id?:number; 
    
    mobile: string; 
 
    otp: string; 
     
    gstin: string; 
    
    pickupAddress: PickupAddress; 
     
    bankDetails: BankDetails; 
     
    sellerName: string; 
     
    email: string; 
     
    businessDetails: BusinessDetails; 
     
    password: string; 
     
    accountStatus?:string; 
     
    }


export interface PickupAddress { 
    name: string; 
    mobile: string; 
    pincode: string; 
    address: string; 
    locality: string; 
    city: string; 
    state: string; 
    } 
    export interface BankDetails { 
    accountNumber: string; 
    ifscCode: string; 
    accountHolderName: string; 
    } 
    export interface BusinessDetails { 
    businessName: string; 
    }

    export interface SellerReport{

        id:number;
        seller:Seller;
        totalEarning:number;
        totalSales:number;
        totalRefunds:number;
        totalTax:number;
        netEarning:number;
        totalOrders:number;
        cancelOrder:number;
        totalTransection:number;
    }
    
