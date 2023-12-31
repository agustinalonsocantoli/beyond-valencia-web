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
import { Payments } from '@/shared/components/stripe/Payments';
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
import { Box, Button, Flex, useToast } from '@chakra-ui/react';
import { format } from 'date-fns';
import { isMobile } from 'react-device-detect';
import { POST } from '../api/send/route';

export default function Bikes() {
    const toast = useToast();
    const router = useRouter();
    const dateNow = new Date();
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
    const [emailPartner, setEmailPartnet] = useState<string>()

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

    const handleSubmit = async (e: any) => {
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

        const sendersList: string[] = [];

        if(email && email !== null && email !== undefined) sendersList.push(email)
        if(emailPartner && emailPartner !== null && emailPartner !== undefined) sendersList.push(emailPartner)

        await fetch('/api/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                senders: sendersList,
                templateData: {
                    type: "bike",
                    name: name,
                    email: email,
                    phone: phone,
                    time: currentOrder?.time,
                    date: currentOrder?.date,
                    bike: {
                        small: currentOrder?.small,
                        medium: currentOrder?.medium,
                        childrenBike: currentOrder?.childrenBike,
                    },
                    comment: comment,
                    total: totalPay,
                    discountCode: currentOrder?.discountCode,
                }
            })
        })
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

    const getEmailsSenders = () => {

    }

    return (
        <Flex
            h={{ base: "auto", lg: "100vh"}}
            w={{ base: "100%", lg: "auto"}}
            direction={{ base: "column-reverse", lg: "row"}}
            bg="#FFFBF6"
        >
            <Box
                flex="1"
                bg="#FFFBF6"
                pos="relative"
                h={{base: "80vh", sm: "70vh", lg: "auto"}}
            >
                <Box
                    w={{base: "200px", xs: "300px"}}
                    mt="-5px"
                    ml="-6px"
                >
                    <Link href={'/'}>
                        <Image 
                            src={logo} 
                            alt="img/logo" 
                            style={{
                                objectFit: "cover",
                                height: "100%",
                                width: "100%"
                            }}
                        />
                    </Link>
                </Box>

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
                    setEmailPartnet={setEmailPartnet}
                />}

                {page !== 3 &&
                    <Box
                        pos="absolute"
                        bottom={{base: "30px", md: "20%", lg: "40px"}}
                        right={{base: "50px", md: "100px", lg: "100px"}}
                    >
                        <Button 
                            border="none"
                            bg="rgba(0, 0, 0, .7)"
                            rounded="20px"
                            color="#FFF"
                            fontWeight="300"
                            _active={{
                                transform: "scale(0.9)",
                                transition: "all 200ms ease"
                            }}
                            _hover={{
                                bg: "rgba(0, 0, 0, 1)"
                            }}
                            fontSize="15px"
                            textTransform="uppercase"
                            display="flex"
                            alignItems="center"
                            gap="5px"
                            h="fit-content"
                            p="5px 15px"
                            onClick={handleOk}
                        >
                            Ok
                            <BsCheck2 style={{ fontSize: "20px"}}/>
                        </Button>
                    </Box>
                }

                {page !== 0 &&
                    <Box
                        pos="absolute"
                        bottom="10px"
                        left="20px"
                    >
                        <Button 
                            border="none"
                            bg="rgba(0, 0, 0, .7)"
                            rounded="20px"
                            color="#FFF"
                            fontWeight="300"
                            _active={{
                                transform: "scale(0.9)",
                                transition: "all 200ms ease"
                            }}
                            _hover={{
                                bg: "rgba(0, 0, 0, 1)"
                            }}
                            p="5px 20px"
                            fontSize="13px"
                            alignItems="center"
                            gap="7px"
                            h="fit-content"
                            onClick={handleBack}
                        >
                            <IoReturnDownBackSharp style={{ fontSize: "20px"}}/>
                            Back
                        </Button>
                    </Box>
                }
            </Box>

            <Box w="10px" bg="#000000" />

            <Box
                flex={{base: "auto", lg: "1"}}
                h={{base: "20vh", xs: "30vh", lg: "auto"}}
            >
                <Image 
                    src={!isMobile ? bikes : bikesMb} 
                    alt="img/bikes" 
                    loading='lazy' 
                    style={{
                        objectFit: "cover",
                        height: "100%",
                        width: "100%"
                    }}
                />
            </Box>

            {paymentVisible &&
                <Payments
                    setCurrentOrder={setCurrentOrder}
                    setPaymentVisible={setPaymentVisible}
                    totalPay={totalPay}
                    description={`Order Bikes Email: ${currentOrder.email ? currentOrder.email : ""}`}
                />
            }
        </Flex>
    );
};
