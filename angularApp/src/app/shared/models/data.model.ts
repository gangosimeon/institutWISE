export interface User{
    firstName:string ;
    lastName:string ; 
    gender:string ; 
    birthDate:string ;
    login:string ;
    password:string ;
    companyName:string
}


export interface Credential{
    login:string ;
    password:string ;
}


export interface WsResponse{
    status:number;
    data: any;
    comment:string
}