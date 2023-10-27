// React
import { useState } from "react";
// Components
import { CodeOrders } from "./CodeOrders";
import { FormBook } from "../Form/Form";
// Interfaces
import { OrdersDataInt } from "@/interfaces/orders.model";
import { toastNotify } from "@/shared/utils/functions/toastNotify";
import { StatusEnumTypes } from "@/shared/utils/types/StatusEnumTypes";
import { Box, Flex, Text, useToast } from "@chakra-ui/react";
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
    setEmailPartnet: (email: string) => void;
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
    setCurrentOrder,
    setEmailPartnet
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
                const codes = response?.data

                if(codes?.length === 0) {
                    toastNotify(toast, StatusEnumTypes.ERROR, "The code entered is not valid")

                    return
                } else {
                    setEmailPartnet(codes[0]?.partner?.email)

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
        <Box
            p="0 3%"
            mt={{base: "10px", xs: "30px", lg: "50px"}}
        >

            <Box
                w={{base: "85%", xs: "75%", lg: "70%"}}
                margin="auto"
                mb="30px"
                mt={{base: "10px", xs: "30px", lg: "0"}}
            >
                <Text
                    as="h2"
                    fontSize={{base: "30px", xs: "35px", lg: "40px"}}
                    fontWeight="700"
                >
                    {title}
                </Text>

                <Text
                    as="h3"
                    fontSize="15px"
                    color="#6D6D6D"
                    fontWeight="700"
                >
                    {subtitle}
                </Text>
            </Box>

            <Flex
                gap="15px"
                mb="50px"
                direction={{base: "column", xs: "row"}}
            >
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
                    fromCall="orders"
                />
            </Flex>
        </Box>
    );
};