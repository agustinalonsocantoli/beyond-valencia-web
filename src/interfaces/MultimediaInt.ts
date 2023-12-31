import { TypeLanding } from "@/shared/utils/types/types";

export interface MultimediaInt {
    _id?: string;
    navigate?: string;
    src: string;
    h3?: string;
    p?: string;
    span?: string;
    type: 'image' | "video";
    landing?: TypeLanding;
}