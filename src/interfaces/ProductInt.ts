import { TypeProductEnum } from "../shared/types";

export interface ProductInt {
    title?: string;
    type?: TypeProductEnum;
    description?: string;
    select?: string | string[];
    price?: {
        small: number;
        medium: number;
        normal?: number;
    }
}