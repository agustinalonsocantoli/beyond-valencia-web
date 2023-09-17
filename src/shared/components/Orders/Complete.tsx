// React
import { useState } from "react";
// Components
import { CodeOrders } from "./CodeOrders";
import { FormBook } from "../Form/Form";
// Interfaces
import { OrdersDataInt } from "@/interfaces/orders.model";
import { toastNotify } from "@/shared/utils/functions/toastNotify";
import { StatusEnumTypes } from "@/shared/utils/types/StatusEnumTypes";
import { useToast } from "@chakra-ui/react";
import { getStaticData } from "@/shared/middlewares/fetcher";

interface Props {
    title: string; 
    subtitle: string;
    handleSubmit: (action: any) => void; 
    totalPay: number; 
    setTotalPay: (action: number) => void; 
    subTotal: number; 
    data: OrdersDataInt;
    small: number;
    medium: number;
    normal: number;
    setCurrentOrder:(action: any) => void;
}

export const Complete = ({ 
    title, 
    subtitle, 
    handleSubmit, 
    totalPay, 
    setTotalPay, 
    subTotal, 
    data,
    small,
    medium,
    normal,
    setCurrentOrder
}: Props) => {
    const toast = useToast();
    const [ discount, setDiscount ] = useState<number>(0);
    const [ codeDiscount, setCodeDiscount ] = useState<string | null>(null);
    const [ isDiscountAdd, setIsDescountAdd ] = useState<boolean>(false);

    const handleGetCode = ({ target }: any) => {
        const code = target?.value?.toUpperCase();
        const trimCode = code.trim();
        setCodeDiscount(trimCode);
    }
    
    const addedDiscount = (porcent: number, code: string) => {
        setDiscount(porcent)
        setTotalPay(subTotal - ((subTotal * (porcent)) / 100))
        setCurrentOrder((prev: any) => ({...prev, discountCode: code}));
        setIsDescountAdd(true);
        toastNotify(toast, StatusEnumTypes.SUCCESS, "Congratulations you got the discount");
    };

    const validateCode = () => {
        if(!isDiscountAdd && codeDiscount) {
            getStaticData(`codes?code=${codeDiscount}`)
            .then((response: any) => {
                const codes = response?.data?.data
                
                if(codes?.length === 0) {
                    toastNotify(toast, StatusEnumTypes.ERROR, "The code entered is not valid")
                    return
                } else {
                    codes[0]?.state
                    ? addedDiscount(codes[0].discount, codes[0].code)
                    : toastNotify(toast, StatusEnumTypes.ERROR, "The code entered is inactive")
                }   
            })
            .catch(() => toastNotify(toast, StatusEnumTypes.ERROR, "The code entered is not valid"));

        } else {
            toastNotify(toast, StatusEnumTypes.ERROR, "Just one code per order");
        }
    }

    return(
        <div className='contents_complete'>

            <div className="contents_complete-title">
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
            </div>

            <div className="contents_complete-box">
                <CodeOrders
                small={small}
                medium={medium}
                normal={normal}
                subTotal={subTotal}
                discount={discount}
                totalPay={totalPay}
                handleGetCode={handleGetCode}
                validateCode={validateCode}
                data={data}
                />
                
                <FormBook
                handleSubmit={handleSubmit} 
                labelButton={totalPay <= 0 ? "SEND ORDER" : "PAY NOW"}
                nameClass="contents_complete-form"
                />
            </div>
        </div>
    );
};