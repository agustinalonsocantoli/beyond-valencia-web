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
import { useDisclosure, useToast } from "@chakra-ui/react";
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
        const group = groups?.find((group: OrdersGroupsInt) => group?.type === type)

        setCurrentOrder({
            date: format(date, 'dd/MM/yy'),
            typeOrder: type,
        });

        setPrices(group?.prices)
        setHoursOptions(group?.deapertureTime ? group?.deapertureTime : [])
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
        <div 
            className="book" 
            style={{
                top: `${scroll <= 40 && (scroll - 35)}%`
            }}
        >
            <div className="calendar">
                <h3>Choose a Date</h3>
                <Calendar value={date} onChange={(e) => setDate(e.value)} inline />
            </div>

            <div style={{ opacity: date === null ? "0.5" : "1" }}>
                <SelectGroup
                    handleSelect={handleSelect}
                    groups={data?.groups}
                />
            </div>

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
        </div>
    );
}