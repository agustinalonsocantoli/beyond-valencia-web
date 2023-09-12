import { TypeProductEnum } from "../shared/types";

export interface BikesInt {
    small: number;
    medium: number;
    childrenBike: number;
    date: string;
    time: string;
    email: string;
    name: string;
    phone: string;
    comment: string;
    total: number;
    discountCode?: string;
}

export interface LockersInt {
    small: number;
    medium: number;
    large: number;
    date: string;
    time: string;
    email: string;
    name: string;
    phone: string;
    comment: string;
    total: number;
    discountCode?: string;
}

export interface OrdersDataInt {
    s: {
        name: string,
        description: string,
        others?: string
    },
    m: {
        name: string,
        description: string,
        others?: string
    },
    n: {
        name: string,
        description: string,
        others?: string,
    }
}

export interface ProductInt {
    title: string;
    type: TypeProductEnum;
    description: string;
    select: any;
    price: {
        small: number;
        medium: number;
        normal?: number;
    }
}