import { TypeLanding } from "../shared/types";

export interface DataInt {
    h1: string;
    h2: string;
    navigate?: string;
    content: ContentInt[] | undefined;
}

export interface ContentInt {
    landing?: TypeLanding;
    link: string;
    img: string;
    imgW?: string;
    type: 'image' | "video";
    h3: string;
    p?: string;
    span?: string;
}