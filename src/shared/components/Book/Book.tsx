// React
import { useEffect, useState } from "react";
// Components
import { SelectGroup } from "./SelectGroup";
import { ModalBook } from "../modals/ModalBook"
// Interfaces
import { ExperiencesInt } from "@/interfaces/ExperiencesInt";
import { OrdersGroupsInt, PricesInt } from "@/interfaces/ExperiencesInt";
import { DaystripsInt } from "@/interfaces/DaytripsInt";
import { Calendar } from "primereact/calendar";
import { format } from "date-fns";
import { toastNotify } from "@/shared/utils/functions/toastNotify";
import { StatusEnumTypes } from "@/shared/utils/types/StatusEnumTypes";
import { Box, Flex, Text, useDisclosure, useToast } from "@chakra-ui/react";
import { getDynamicData } from "@/shared/middlewares/fetcher";
;

interface Props {
    setPaymentVisible: (action: boolean) => void;
    setCurrentOrder: (order: any) => void;
    setTotalPay: (action: number | null) => void;
    totalPay: number | null;
    data: ExperiencesInt | DaystripsInt;
    scroll: number;
}

export const Book = (props: Props) => {
    const toast = useToast();
    const dateNow: Date = new Date();
    const { setPaymentVisible, setCurrentOrder, setTotalPay, totalPay, data, scroll } = props;
    const [date, setDate] = useState<any>(dateNow);
    const [time, setTime] = useState<string | null>(null);
    const [hoursOptions, setHoursOptions] = useState<string[]>([]);
    const [typeOrder, setTypeOrder] = useState<string | null>(null);
    const [adults, setAdults] = useState<number>(1);
    const [children, setChildren] = useState<number>(0);
    const [infants, setInfants] = useState<number>(0);
    const [subTotal, setSubTotal] = useState<number>(0);
    const [discount, setDiscount] = useState<number>(0);
    const [isDiscountAdd, setIsDescountAdd] = useState<boolean>(false);
    const [codeDiscount, setCodeDiscount] = useState<string | null>(null);
    const [prices, setPrices] = useState<PricesInt>()

    // Modal Book
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        if (typeOrder) {
            const total = totalCalculate(adults, children);
            setSubTotal(total);
            setTotalPay(total)
        }

    }, [adults, children, infants, typeOrder])

    const totalCalculate = (adults: number, children: number) => {
        let totalAdults = 0;
        let totalChildren = 0;

        if(prices?.adults) totalAdults = adults > 0 ? (adults * prices?.adults) : 0;
        if(prices?.children) totalChildren = children > 0 ? (children * prices?.children) : 0;

        return totalAdults + totalChildren;
    }

    const handleSelect = (type: string) => {
        const { groups } = data;
        const group: any = groups?.find((group: any) => group?.type === type)

        const newDate = !date ? new Date() : date

        setCurrentOrder({
            date: format(newDate, 'dd/MM/yy'),
            typeOrder: type,
        });

        setPrices(group?.prices)
        setHoursOptions(group?.departureTime ? group?.departureTime : [])
        setTypeOrder(type);
        onOpen();
    }

    const handleSubmit = (e: any) => {
        const { name, email, phone, comment } = e;

        setCurrentOrder((prev: any) => ({
            ...prev,
            tourName: data?.title,
            name,
            email,
            phone,
            comment,
            time: time,
            adults: adults,
            children: children,
            infants: infants,
        }));

        toastNotify(toast, StatusEnumTypes.SUCCESS, 'We will proceed to the payment.');
        onClose();
        setPaymentVisible(true);
    }

    const handleGetCode = ({ target }: any) => {
        const code = target?.value?.toUpperCase();
        const trimCode = code.trim();
        setCodeDiscount(trimCode);
    }

    const addedDiscount = (porcent: number, code: string) => {
        setDiscount(porcent)
        setTotalPay(subTotal - ((subTotal * (porcent)) / 100))
        setCurrentOrder((prev: any) => ({ ...prev, discountCode: code }));
        setIsDescountAdd(true);
        toastNotify(toast, StatusEnumTypes.SUCCESS, "Congratulations you got the discount");
    };

    const validateCode = async () => {
        if(!isDiscountAdd && codeDiscount) {
            const { data } = await getDynamicData(`codes?code=${codeDiscount}`)
            const codes = data?.data?.data
            
            if(codes?.length === 0) {
                toastNotify(toast, StatusEnumTypes, "The code entered is not valid")
                return
            } else {
                codes[0]?.state
                ? addedDiscount(codes[0].discount, codes[0].code)
                : toastNotify(toast, StatusEnumTypes, "The code entered is inactive")
                }   

        } else {
            toastNotify(toast, StatusEnumTypes, "Just one code per order");
        }
    }

    return (
        <Flex 
            top={`${scroll <= 40 && (scroll + 10)}%`}
            direction="column"
            alignItems="center"
            pos="relative"
            border="1px solid rgb(221, 221, 221)"
            rounded="12px"
            p="24px"
            position="sticky"
            bg="#FFFBF6"
            boxShadow="0px 3px 10px -5px rgba(0,0,0,0.6)"
            __css={{
                "WebkitBoxShadow": "0px 3px 10px -5px rgba(0,0,0,0.6)",
                "MozBoxShadow": "0px 3px 10px -5px rgba(0,0,0,0.6)"
            }}
        >
            <Flex
                direction="column"
            >
                <Text
                    as="h3"
                    fontSize="18px"
                    fontWeight="700"
                >
                    Choose a Date
                </Text>

                <Flex
                    w="100%"
                    justifyContent="center"
                >
                    <Calendar value={date} onChange={(e) => setDate(e.value)} inline />
                </Flex>
            </Flex>

            <Flex 
                opacity={date === null ? "0.5" : "1" }
                justifyContent="center"
            >
                <SelectGroup
                    handleSelect={handleSelect}
                    groups={data?.groups}
                />
            </Flex>

            <ModalBook
                onClose={onClose}
                isOpen={isOpen}
                adults={adults}
                children={children}
                discount={discount}
                handleGetCode={handleGetCode}
                validateCode={validateCode}
                totalPay={totalPay}
                subTotal={subTotal}
                handleSubmit={handleSubmit}
                infants={infants}
                setAdults={setAdults}
                setChildren={setChildren}
                setInfants={setInfants}
                time={time}
                setTime={setTime}
                hours={hoursOptions}
                date={date && format(date, 'dd/MM/yy')}
                setCurrentOrder={setCurrentOrder}
                setDate={setDate}
                prices={prices}
            />
        </Flex>
    );
}