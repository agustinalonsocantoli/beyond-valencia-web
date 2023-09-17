'use client'

// React
import { useEffect, useState } from 'react';
// Img
import bikes from '../../../public/Options/bikes.jpg';
import bikesMb from '../../../public/Options/bikesMb.jpg';
import logo from '../../../public/logoB.png'
// Components
import { First } from '@/shared/components/Orders/First';
import { Second } from '@/shared/components/Orders/Second';
import { Third } from '@/shared/components/Orders/Third';
import { Complete } from '@/shared/components/Orders/Complete';
// import { Payments } from '../components/stripe/Payments';
// Icons
import { IoReturnDownBackSharp } from 'react-icons/io5';
import { BsCheck2 } from 'react-icons/bs';
// Emails
// import { sendEmail } from '../shared/emails';
import { OrdersDataInt, ProductInt } from '@/interfaces/orders.model';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getStaticData } from '@/shared/middlewares/fetcher';
import { getProdruct } from '@/shared/utils/functions/getProduct';
import { toastNotify } from '@/shared/utils/functions/toastNotify';
import { StatusEnumTypes } from '@/shared/utils/types/StatusEnumTypes';
import { useToast } from '@chakra-ui/react';
import { format } from 'date-fns';


export default function Bikes() {
    const toast = useToast();
    const router = useRouter();
    const dateNow = new Date();
    const resposive = window.innerWidth < 1024 ? true : false;
    const [page, setPage] = useState<number>(0);
    const [currentOrder, setCurrentOrder] = useState<any>(null);
    const [date, setDate] = useState<any>(dateNow);
    const [small, setSmall] = useState<number>(0);
    const [medium, setMedium] = useState<number>(0);
    const [normal, setNormal] = useState<number>(0);
    const [time, setTime] = useState<string | null>(null);
    const [subTotal, setSubTotal] = useState<number>(0);
    const [totalPay, setTotalPay] = useState<number>(0);
    const [paymentVisible, setPaymentVisible] = useState<boolean>(false);
    const [bikesProducts, setBikesProducts] = useState<ProductInt[]>()
    const [selectedProduct, setSelectedProduct] = useState<ProductInt>()

    const data: OrdersDataInt = {
        s: {
            name: 'Small',
            description: "26 inches",
            others: "26 pulgadas"
        },
        m: {
            name: 'Medium',
            description: "28 inches",
            others: "28 pulgadas"
        },
        n: {
            name: 'Children bike',
            description: "Confirm request here: +34-611688865",
        }
    }

    useEffect(() => {
        getStaticData("bikes")
            .then((response: any) => {
                setBikesProducts(response?.data)
            })
    }, [])

    useEffect(() => {
        bikesProducts &&
            setSelectedProduct(getProdruct(bikesProducts, time))

    }, [time, bikesProducts])

    const handleSubmit = (e: any) => {
        const { name, email, phone, comment } = e;

        if (totalPay > 0) {
            toastNotify(toast, StatusEnumTypes.SUCCESS, 'We will proceed to the payment.')
        } else {
            toastNotify(toast, StatusEnumTypes.SUCCESS, 'Order sent.')

            setTimeout(() => {
                router.push("/")
            }, 2000);
        }

        setCurrentOrder((prev: any) => ({
            ...prev,
            name,
            email,
            phone,
            comment,
            total: totalPay
        }));

        { totalPay > 0 && setPaymentVisible(true); }

        // sendEmail({
        //     name: name,
        //     email: email,
        //     phone: phone,
        //     time: currentOrder !== null && currentOrder?.time,
        //     date: currentOrder !== null && currentOrder?.date,
        //     small: currentOrder !== null && currentOrder?.small,
        //     medium: currentOrder !== null && currentOrder?.medium,
        //     childrenBike: currentOrder !== null && currentOrder?.childrenBike,
        //     comment: comment === null || comment === "" ? 'No comment entered' : comment,
        //     total: `${totalPay}€`,
        //     discountCode: currentOrder !== null && currentOrder?.discountCode ? currentOrder?.discountCode : 'No code used',
        // }, import.meta.env.VITE_BASE_EMAIL_TEMPLATEBIKES)
    }

    const handleOk = () => {
        if (page < 3) {
            if (page === 0 && time !== null && time !== undefined) {
                setCurrentOrder((prev: any) => ({ ...prev, time: time }));
                setPage(prev => prev + 1);
            } else if (page === 1 && (small !== 0 || medium !== 0 || normal !== 0)) {
                setCurrentOrder((prev: any) => ({
                    ...prev,
                    small: small,
                    medium: medium,
                    childrenBike: normal,
                }));
                setPage(prev => prev + 1);
            } else if (page === 2 && date !== null && date !== undefined) {
                const total = totalCalculate(small, medium, time);

                setSubTotal(total);
                setTotalPay(total);
                setCurrentOrder((prev: any) => ({ ...prev, date: format(new Date(date), 'dd/MM/yyy')}));
                setPage(prev => prev + 1);
            }
        }
    };

    const handleBack = () => {
        if (page > 0) {
            setPage(prev => prev - 1)
        }
    };

    const totalCalculate = (smallOrder: number, mediumOrder: number, timeValue: string | null) => {
        let totalSmall = 0;
        let totalMedium = 0;

        if (timeValue === 'All-Day') {
            totalSmall = smallOrder > 0 ? (smallOrder * 14) : 0;
            totalMedium = mediumOrder > 0 ? (mediumOrder * 14) : 0;
        }
        else if (timeValue === 'Three-Days') {
            totalSmall = smallOrder > 0 ? (smallOrder * 38) : 0;
            totalMedium = mediumOrder > 0 ? (mediumOrder * 38) : 0;
        }

        return totalSmall + totalMedium;
    }

    return (
        <div className="bikes">

            <div className='bikes_contents'>
                <div className='bikes_contents-logo'>
                    <Link href={'/'}>
                        <Image src={logo} alt="img/logo" />
                    </Link>
                </div>

                {page === 0 && <First
                    title="For how long would you like to rent the bike?"
                    subtitle="¿Por cuánto tiempo le gustaría rentar la bici?"
                    time={time}
                    setTime={setTime}
                    products={bikesProducts}
                    setPage={setPage}
                />}

                {page === 1 && <Second
                    title="How many rental bikes?"
                    subtitle="¿Cuántas bicicletas por un día necesitas?"
                    small={small}
                    setSmall={setSmall}
                    medium={medium}
                    setMedium={setMedium}
                    normal={normal}
                    setNormal={setNormal}
                    data={data}
                    product={selectedProduct}
                />}

                {page === 2 && <Third
                    title="When?"
                    subtitle="¿Para cuándo necesitas tus bicis?"
                    date={date}
                    setDate={setDate}
                />}

                {page === 3 && <Complete
                    title="All set!"
                    subtitle="Todo listo!"
                    handleSubmit={handleSubmit}
                    subTotal={subTotal}
                    totalPay={totalPay}
                    setTotalPay={setTotalPay}
                    data={data}
                    small={small}
                    medium={medium}
                    normal={normal}
                    setCurrentOrder={setCurrentOrder}
                />}

                {page !== 3 &&
                    <div className='btn_ok'>
                        <button onClick={handleOk}>Ok<BsCheck2 /></button>
                    </div>
                }

                {page !== 0 &&
                    <div className='btn_back'>
                        <button onClick={handleBack}><IoReturnDownBackSharp />Back</button>
                    </div>
                }
            </div>

            <div className='bikes_line'></div>

            <div className='bikes_img'>
                <Image src={!resposive ? bikes : bikesMb} alt="img/bikes" loading='lazy' />
            </div>

            {/* {paymentVisible &&
                <Payments
                    setCurrentOrder={setCurrentOrder}
                    setPaymentVisible={setPaymentVisible}
                    totalPay={totalPay}
                    description={`Order Bikes Email: ${currentOrder.email ? currentOrder.email : ""}`}
                />
            } */}
        </div>
    );
};
