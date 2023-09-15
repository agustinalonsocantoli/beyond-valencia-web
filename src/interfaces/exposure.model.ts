import { TypeLanding } from "@/shared/utils/types/types";
import { StaticImageData } from "next/image";

export interface MultimediaInt {
    navigate?: string;
    src: any;
    h3?: string;
    p?: string;
    span?: string;
    type: 'image' | "video";
    landing?: TypeLanding;
}