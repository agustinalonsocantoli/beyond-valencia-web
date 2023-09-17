import { ProductInt } from "@/interfaces/orders.model";
import { TypeProductEnum } from "../types/types";

export const getProdruct = (listProducts: ProductInt[], time: string | null) => {
    let select: any;

    if(listProducts && time)
        listProducts?.forEach((product: ProductInt) => {
            if (product?.type === TypeProductEnum.LONGER) {
                if (product?.select.includes(time))
                    select = product
            } else {
                if (product?.select === time)
                    select = product
            }
        });

        return select
}