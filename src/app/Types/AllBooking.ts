export interface AllBooking{
    bookingId:number,
    userId:string,
    shipId:number,
    shipName: string,
    shipType: string,
    source: string,
    destination: string,
    departureDate:string,
    departureTime: string,
    arrivalDate: string,
    arrivalTime: string,
    product:string,
    quantity:number,
    amount:number
}