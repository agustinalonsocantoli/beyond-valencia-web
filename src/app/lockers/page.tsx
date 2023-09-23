'use client'

// React
import { useEffect, useState } from 'react';
// Img
import lockers from '../../../public/Options/lockers.jpg';
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
// import { sendEmail } from '../shared/emails';
import { OrdersDataInt, ProductInt } from '@/interfaces/orders.model';
import { getProdruct } from '@/shared/utils/functions/getProduct';
import { useRouter } from 'next/navigation';
import { useToast } from '@chakra-ui/react';
import { toastNotify } from '@/shared/utils/functions/toastNotify';
import { StatusEnumTypes } from '@/shared/utils/types/StatusEnumTypes';
import { getStaticData } from '@/shared/middlewares/fetcher';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';

export default  function Lockers() {
    const toast = useToast();
    const dateNow = new Date();
    const router = useRouter();
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
    const [lockersProducts, setLockersProducts] = useState<ProductInt[]>()
    const [selectedProduct, setSelectedProduct] = useState<ProductInt>()

    const data: OrdersDataInt = {
        s: {
            name: 'Small',
            description: "Bags and backpacks",
            others: "Mochilas / Bolsas"
        },
        m: {
            name: 'Medium',
            description: "Cabins / Carry-On",
            others: "Equipaje de cabina"
        },
        n: {
            name: 'Large',
            description: "Suitcase / Checked luggage",
            others: "Maleta chequeada"
        }
    }

    useEffect(() => {
        getStaticData("lockers")
        .then((response: any) => {
            setLockersProducts(response?.data)
        })
    }, [])

    useEffect(() => {
        lockersProducts && 
            setSelectedProduct(getProdruct(lockersProducts, time))

    }, [time, lockersProducts])

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
        //     time: currentOrder !== null && currentOrder.time,
        //     date: currentOrder !== null && currentOrder.date,
        //     small: currentOrder !== null && currentOrder.small,
        //     medium: currentOrder !== null && currentOrder.medium,
        //     normal: currentOrder !== null && currentOrder.normal,
        //     comment: comment === null || comment === "" ? 'No comment entered' : comment,
        //     total: `${totalPay}€`,
        //     discountCode: currentOrder !== null && currentOrder.discountCode ? currentOrder.discountCode : 'No code used',
        // }, import.meta.env.VITE_BASE_EMAIL_TEMPLATELOCKERS)
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
                    large: normal,
                }));
                setPage(prev => prev + 1);
            } else if (page === 2 && date !== null && date !== undefined) {
                const total = totalCalculate(small, medium, normal, time);

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

    const totalCalculate = (smallOrder: number, mediumOrder: number, normalOrder: number, timeValue: string | null) => {
        let totalSmall = 0;
        let totalMedium = 0;
        let totalNormal = 0;

        if (timeValue === '2-Hours') {
            totalSmall = smallOrder > 0 ? (smallOrder * 3) : 0;
            totalMedium = mediumOrder > 0 ? (mediumOrder * 5) : 0;
            totalNormal = normalOrder > 0 ? (normalOrder * 8) : 0;
        }
        else if (timeValue === 'All-Day') {
            totalSmall = smallOrder > 0 ? (smallOrder * 5) : 0;
            totalMedium = mediumOrder > 0 ? (mediumOrder * 8) : 0;
            totalNormal = normalOrder > 0 ? (normalOrder * 10) : 0;
        }
        else {
            totalSmall = smallOrder > 0 ? (smallOrder * 4) : 0;
            totalMedium = mediumOrder > 0 ? (mediumOrder * 7) : 0;
            totalNormal = normalOrder > 0 ? (normalOrder * 11) : 0;
        }

        return totalSmall + totalMedium + totalNormal;
    }

    return (
        <div className="lockers">
            <div className='lockers_img'>
                <Image src={lockers} alt="img/lockers" loading='lazy' />
            </div>

            <div className='lockers_line'></div>

            <div className='lockers_contents'>
                <div className='lockers_contents-logo'>
                    <Link href={'/'}>
                        <Image src={logo} alt="img/logo" />
                    </Link>
                </div>

                {page === 0 && <First
                    title="For how long would you like to storage your belongings?"
                    subtitle="¿Por cuánto tiempo le gustaría almacenar sus pertenencias?"
                    time={time}
                    setTime={setTime}
                    products={lockersProducts}
                    setPage={setPage}
                />}


                {page === 1 && <Second
                    title="How many pieces?"
                    subtitle="¿Cuantas piezas?"
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
                    subtitle="¿Que día necesitas guardar tus pertenencias?"
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

            {/* {paymentVisible &&
                <Payments
                    setCurrentOrder={setCurrentOrder}
                    setPaymentVisible={setPaymentVisible}
                    totalPay={totalPay}
                    description={`Order Lockers Email: ${currentOrder.email ? currentOrder.email : ""}`}
                />
            } */}
        </div>
    );
};