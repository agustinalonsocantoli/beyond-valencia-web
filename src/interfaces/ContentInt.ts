import { TypeLanding } from "../shared/types";


export interface ContentInt {
    _id?: string;
    landing?: TypeLanding;
    link: string;
    img: string;
    imgW?: string;
    type: 'image' | "video";
    h3: string;
    p?: string;
    span?: string;
}