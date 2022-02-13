
export interface Item {
    item:
    {
        id: string
        title: string
        details: string
        photos: string[]
        coordinates: number[]
        bookedDates: Date[]
        price: number
    }
}

export interface Database {
    items: Item[]
}

export function cloneDate(date: string): string;

export function addDays(date: Date, days: number): string;

export class FlatRentSdk {
    data: string
    localStorageKey: string
    database: Database
}

export interface parameters {
    city: string
    checkInDate: string
    checkOutDate: string
    priceLimit: number
}
