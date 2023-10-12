"use client"

// React
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'
// Components
import { Navbar } from '@/shared/components/Navbar/Navbar';
import { Exposure } from '@/shared/components/Exposure/Exposure';
import { Footer } from '@/shared/components/Footer/Footer';
import { Whatsapp } from '@/shared/components/Custom/Whatsapp';
// Icons
import { HiOutlineUserGroup } from 'react-icons/hi';
import { BiTimer } from 'react-icons/bi'
import { IoCalendar } from 'react-icons/io5';
import { GiTalk } from 'react-icons/gi';
import { RxCheck, RxCross1 } from "react-icons/rx"
import { FaUniversalAccess } from "react-icons/fa"
import { SlLocationPin } from "react-icons/sl"
import { MdAccessible } from "react-icons/md"
import { BsTicket } from 'react-icons/bs';
import { Accordion, AccordionButton, AccordionIcon, AccordionPanel, AccordionItem, Box, Text, Flex, Grid, ListItem, UnorderedList } from '@chakra-ui/react';
import { getStaticData } from '@/shared/middlewares/fetcher';
import { DaystripsInt } from '@/interfaces/DaytripsInt';
import { Payments } from '@/shared/components/stripe/Payments';
import { Book } from '@/shared/components/Book/Book';
import { isMobile } from 'react-device-detect';

export default function DetailsDaytrips() {
    const { slug } = useParams();
    const [paymentVisible, setPaymentVisible] = useState<boolean>(false);
    const [currentOrder, setCurrentOrder] = useState<any>(null);
    const [totalPay, setTotalPay] = useState<number | null>(null);
    const [scroll, setScroll] = useState<number>(0)
    const [daytrips, setDaytrips] = useState<DaystripsInt>()

    useEffect(() => {
        if (!slug) return

        getStaticData(`daytrips/${slug}`)
            .then((response: any) => {
                setDaytrips(response?.data);
            })

    }, [slug])

    // useEffect(() => {

    //     const handleScroll = () => {
    //         //Calcular el porcentaje que el usuario ha scrolleado y mostrarlo
    //         let scrollTop = document.documentElement['scrollTop'] || document.body['scrollTop'];
    //         let scrollBottom = (document.documentElement['scrollHeight'] || document.body['scrollHeight']) - document.documentElement.clientHeight;
    //         const scrollTotal = Math.round(Number((scrollTop / scrollBottom) * 100));
    //         setScroll(scrollTotal);
    //     }

    //     window.addEventListener('scroll', handleScroll, false);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     }
    // }, [])

    return (
        daytrips &&
        <Box>

            <Navbar title={"Experiences"} subtitle={"Experiences"} />

            <Box
                p="0 0 10px 0"
                bg="#000"
            >
                <Exposure
                    data={daytrips?.multimedia}
                    fromCall="details"
                />
            </Box>

            <Flex
                gap="100px"
                p="0 5% 3% 5%"
                mt="50px"
            >
                <Box
                    w="55%"
                >
                    <Text
                        as="h1"
                        textDecoration="underline"
                        fontSize="50px"
                        textAlign="left"
                    >
                        {daytrips?.title}
                    </Text>

                    <Text
                        mb="10px"
                        fontSize="30px"
                        textAlign="left"
                    >
                        <Text as="strong">
                            {daytrips?.subtitle?.label && `${daytrips?.subtitle?.label}: `}
                        </Text>
                        {daytrips?.subtitle?.text}
                    </Text>

                    <Box
                        fontSize="20px"
                        fontWeight="200px"
                        mb="50px"
                    >
                        <Text>
                            {daytrips?.headline}
                        </Text>
                    </Box>

                    <Text
                        as="h3"
                        fontSize="22px"
                        textDecoration="underline"
                        mb="20px"
                        fontWeight="400"
                    >
                        Overview
                    </Text>

                    <Box
                        fontSize="20px"
                        fontWeight="300"
                        mb="50px"
                    >
                        <Text>
                            {daytrips?.description}
                        </Text>
                    </Box>

                    {!isMobile &&
                        <>
                            <Text
                                as="h3"
                                fontSize="22px"
                                textDecoration="underline"
                                mb="20px"
                                fontWeight="400"
                            >
                                Highlights
                            </Text>

                            <UnorderedList
                                mb="50px"
                            >
                                {daytrips?.highlights?.map((item: string, index: number) => (
                                    <ListItem
                                        key={index}
                                        ml="30px"
                                        fontSize="18px"
                                        fontWeight="300"
                                    >
                                        {item}
                                    </ListItem>
                                ))}
                            </UnorderedList>
                        </>
                    }

                    {(daytrips?.included && !isMobile) &&
                        <>
                            <Text
                                as="h3"
                                fontSize="22px"
                                textDecoration="underline"
                                mb="20px"
                                fontWeight="400"
                            >
                                Included
                            </Text>

                            <UnorderedList
                                mb="50px"
                            >
                                {daytrips?.included?.map((item: any, index: number) => (
                                    <ListItem
                                        listStyleType="none"
                                        ml="30px"
                                        fontSize="18px"
                                        fontWeight="300"
                                        key={index}
                                        display="flex"
                                    >
                                        {item?.state
                                            ? <RxCheck style={{ color: 'green', marginRight: 5, }} />
                                            : <RxCross1 style={{ color: 'red', marginRight: 5 }} />
                                        }
                                        {item?.text}
                                    </ListItem>
                                ))}
                            </UnorderedList>
                        </>
                    }

                    <Text
                        as="h3"
                        fontSize="22px"
                        textDecoration="underline"
                        mb="20px"
                        fontWeight="400"
                    >
                        Details
                    </Text>

                    <Grid
                        gridTemplateColumns="repeat(2, 1fr)"
                        columnGap="50px"
                        rowGap="20px"
                        w="80%"
                        m="auto"
                        mb="50px"
                    >
                        <Text
                            display="flex"
                            alignItems="center"
                            fontSize="15px"
                            fontWeight="300"
                            gap="10px"
                        >
                            <HiOutlineUserGroup
                                style={{
                                    fontSize: "55px"
                                }}
                            />
                            <Text as="strong">Age</Text>
                            {daytrips?.details?.age}
                        </Text>

                        <Text
                            display="flex"
                            alignItems="center"
                            fontSize="15px"
                            fontWeight="300"
                            gap="10px"
                        >
                            <BiTimer
                                style={{
                                    fontSize: "55px"
                                }}
                            />
                            <Text as="strong">How long?</Text>
                            {daytrips?.details?.duration}
                        </Text>

                        <Text
                            display="flex"
                            alignItems="center"
                            fontSize="15px"
                            fontWeight="300"
                            gap="10px"
                        >
                            <BsTicket
                                style={{
                                    fontSize: "55px"
                                }}
                            />
                            <Text as="strong">Ticketing</Text>
                            {daytrips?.details?.ticket}
                        </Text>

                        <Text
                            display="flex"
                            alignItems="center"
                            fontSize="15px"
                            fontWeight="300"
                            gap="10px"
                        >
                            <IoCalendar
                                style={{
                                    fontSize: "55px"
                                }}
                            />
                            <Text as="strong">Availability</Text>
                            {daytrips?.details?.availably}
                        </Text>

                        <Text
                            display="flex"
                            alignItems="center"
                            fontSize="15px"
                            fontWeight="300"
                            gap="10px"
                        >
                            <GiTalk
                                style={{
                                    fontSize: "55px"
                                }}
                            />
                            <Text as="strong">Lenguage</Text>
                            {daytrips?.details?.language}
                        </Text>

                        <Text
                            w="100%"
                            display="flex"
                            alignItems="center"
                            fontSize="15px"
                            fontWeight="300"
                            gap="10px"
                        >
                            <SlLocationPin
                                style={{
                                    fontSize: "75px"
                                }}
                            />
                            <Text as="strong">Meeting Point</Text>
                            {daytrips?.details?.meetengPoint?.label}
                        </Text>

                        <Text
                            display="flex"
                            alignItems="center"
                            fontSize="15px"
                            fontWeight="300"
                            gap="10px"
                        >
                            <FaUniversalAccess
                                style={{
                                    fontSize: "55px"
                                }}
                            />
                            <Text as="strong">Accessibility</Text>
                            {daytrips?.details?.accessibility}
                        </Text>

                        <Text
                            display="flex"
                            alignItems="center"
                            fontSize="15px"
                            fontWeight="300"
                            gap="10px"
                        >
                            <MdAccessible
                                style={{
                                    fontSize: "55px"
                                }}
                            />
                            <Text as="strong">Mobility</Text>
                            {daytrips?.details?.mobility}
                        </Text>
                    </Grid>

                    {isMobile &&
                        <Accordion>
                            <AccordionItem>
                                <AccordionButton>
                                    <Text
                                        p="20px"
                                        fontSize="15px"
                                        fontWeight="600"
                                    >
                                        Highlights
                                    </Text>

                                    <AccordionIcon />
                                </AccordionButton>

                                <AccordionPanel>
                                    <UnorderedList
                                        mb="50px"
                                    >
                                        {daytrips?.highlights?.map((item: string, index: number) => (
                                            <ListItem
                                                key={index}
                                                ml="30px"
                                                fontSize="18px"
                                                fontWeight="300"
                                            >
                                                {item}
                                            </ListItem>
                                        ))}
                                    </UnorderedList>
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionButton>
                                    <Text
                                        p="20px"
                                        fontSize="15px"
                                        fontWeight="600"
                                    >
                                        Included
                                    </Text>

                                    <AccordionIcon />
                                </AccordionButton>

                                <AccordionPanel>
                                    <UnorderedList
                                        mb="50px"
                                    >
                                        {daytrips?.included?.map((item: any, index: number) => (
                                            <ListItem
                                                listStyleType="none"
                                                ml="30px"
                                                fontSize="18px"
                                                fontWeight="300"
                                                key={index}
                                                display="flex"
                                            >
                                                {item?.state
                                                    ? <RxCheck style={{ color: 'green', marginRight: 5, }} />
                                                    : <RxCross1 style={{ color: 'red', marginRight: 5 }} />
                                                }
                                                {item?.text}
                                            </ListItem>
                                        ))}
                                    </UnorderedList>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    }

                    <Accordion allowToggle allowMultiple>
                        <AccordionItem>
                            <AccordionButton
                            >
                                <Text
                                    p="20px"
                                    fontSize="15px"
                                    fontWeight="600"
                                >
                                    More about experiences
                                </Text>

                                <AccordionIcon />
                            </AccordionButton>

                            <AccordionPanel>
                                <Text
                                    p="20px"
                                    fontSize="13px"
                                    fontWeight="500"
                                >
                                    {daytrips?.information}
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>

                        {daytrips?.policies &&
                            <AccordionItem>
                                <AccordionButton
                                >
                                    <Text
                                        p="20px"
                                        fontSize="15px"
                                        fontWeight="600"
                                    >
                                        Cancelation polices
                                    </Text>

                                    <AccordionIcon />
                                </AccordionButton>

                                <AccordionPanel>
                                    <Text
                                        p="20px"
                                        fontSize="13px"
                                        fontWeight="500"
                                    >
                                        {daytrips?.policies}
                                    </Text>
                                </AccordionPanel>
                            </AccordionItem>
                        }

                        <AccordionItem>
                            <AccordionButton
                            >
                                <Text
                                    p="20px"
                                    fontSize="15px"
                                    fontWeight="600"
                                >
                                    Terms and conditions
                                </Text>

                                <AccordionIcon />
                            </AccordionButton>

                            <AccordionPanel>
                                <Text
                                    p="20px"
                                    fontSize="13px"
                                    fontWeight="500"
                                >
                                    {daytrips?.conditions}
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Box>

                {daytrips?.published &&
                    <Box
                        pos="relative"
                    >
                        <Book
                            setCurrentOrder={setCurrentOrder}
                            setPaymentVisible={setPaymentVisible}
                            setTotalPay={setTotalPay}
                            totalPay={totalPay}
                            data={daytrips}
                            scroll={scroll}
                        />
                    </Box>
                }
            </Flex>

            {paymentVisible &&
                <Payments
                    setCurrentOrder={setCurrentOrder}
                    setPaymentVisible={setPaymentVisible}
                    totalPay={totalPay}
                    description={`${currentOrder.tourName ? currentOrder.tourName : ""}, Email: ${currentOrder.email ? currentOrder.email : ""}`}
                />}

            <Whatsapp />

            <Footer />
        </Box>
    );
}