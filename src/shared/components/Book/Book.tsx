// React
import { useEffect, useState } from "react";
// Calendar
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
// Toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Components
import { SelectGroup } from "./SelectGroup";
import { ModalBook } from "../modals/ModalBook"
// Interfaces
import { notifyError, notifySuccess } from "../../shared/notify";
import { ExperiencesInt } from "../../data/Api/experiences";
import { OrdersGroupsInt, PricesInt } from "../../interfaces/books.model";
import { DaystripsInt } from "../../data/Api/daytrips";
import { getCode } from "../../middlewares/codes.middlewares";
import { AxiosResponse } from "axios";
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
    const dateNow: Date = new Date();
    const { setPaymentVisible, setCurrentOrder, setTotalPay, totalPay, data, scroll } = props;
    const [date, setDate] = useState<any>(null);
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
    const [openBook, setOpenBook] = useState<boolean>(false);
    const onOpenBook = () => setOpenBook(true);
    const onCloseBook = () => {
        setOpenBook(false);
    }

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
            date: dayjs(date.$d).format('DD/MM/YYYY'),
            typeOrder: type,
        });

        setPrices(group?.prices)
        setHoursOptions(group?.deapertureTime ? group?.deapertureTime : [])
        setTypeOrder(type);
        onOpenBook();
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

        notifySuccess('We will proceed to the payment.');
        onCloseBook();
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
        notifySuccess("Congratulations you got the discount");
    };

    const validateCode = () => {
        if(!isDiscountAdd && codeDiscount) {
            getCode(codeDiscount)
            .then((response: AxiosResponse) => {
                const codes = response?.data?.data
                
                if(codes?.length === 0) {
                    notifyError("The code entered is not valid")
                    return
                } else {
                    codes[0]?.state
                    ? addedDiscount(codes[0].discount, codes[0].code)
                    : notifyError("The code entered is inactive")
                }   
            })
            .catch(() => notifyError("The code entered is not valid"));

        } else {
            notifyError("Just one code per order");
        }
    }

    return (
        <div 
            className="book" 
            style={{
                top: `${scroll <= 40 && (scroll - 35)}%`
            }}
        >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <h3>Choose a Date</h3>
                <DateCalendar value={date} onChange={(value) => setDate(value)} minDate={dayjs(dateNow)} />
            </LocalizationProvider>

            <div style={{ opacity: date === null ? "0.5" : "1" }}>
                <SelectGroup
                    handleSelect={handleSelect}
                    groups={data?.groups}
                />
            </div>

            <ModalBook
                handleClose={onCloseBook}
                open={openBook}
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
                date={date && dayjs(date.$d).format('DD/MM')}
                setCurrentOrder={setCurrentOrder}
                setDate={setDate}
                prices={prices}
            />

            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="colored"
            />
        </div>
    );
}