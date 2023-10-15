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
import { Accordion, AccordionButton, AccordionIcon, AccordionPanel, AccordionItem, Box, Flex, Text, UnorderedList, ListItem, Grid } from '@chakra-ui/react';
import { getStaticData } from '@/shared/middlewares/fetcher';
import { ExperiencesInt } from '@/interfaces/ExperiencesInt';
import { Payments } from '@/shared/components/stripe/Payments';
import { Book } from '@/shared/components/Book/Book';

export default function DetailsExperiences() {
    const { slug } = useParams();
    const [paymentVisible, setPaymentVisible] = useState<boolean>(false);
    const [currentOrder, setCurrentOrder] = useState<any>(null);
    const [totalPay, setTotalPay] = useState<number | null>(null);
    const [scroll, setScroll] = useState<number>(0)
    const [experience, setExperience] = useState<ExperiencesInt>()

    useEffect(() => {
        if (!slug) return

        getStaticData(`experiences/${slug}`)
            .then((response: any) => {
                setExperience(response?.data);
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
        <Box>
            <Navbar title={"Experiences"} subtitle={"Experiences"} />

            <Box
                p="0 0 10px 0"
                bg="#000"
            >
                <Exposure
                    data={experience?.multimedia}
                    fromCall="details"
                />
            </Box>

            <Flex
                gap={{ base: "30px", lg: "100px" }}
                p="0 5% 3% 5%"
                mt="50px"
                direction={{ base: "column", lg: "row" }}
            >
                <Box
                    w={{ base: "100%", lg: "55%" }}
                >
                    <Text
                        as="h1"
                        textDecoration="underline"
                        fontSize={{ base: "30px", xs: "40px", lg: "50px" }}
                        textAlign="left"
                    >
                        {experience?.title}
                    </Text>

                    <Text
                        mb="10px"
                        fontSize={{ base: "20px", xs: "25px", lg: "30px" }}
                        textAlign="left"
                    >
                        <Text as="strong">
                            {experience?.subtitle?.label && `${experience?.subtitle?.label}: `}
                        </Text>
                        {experience?.subtitle?.text}
                    </Text>

                    <Box
                        fontSize={{ base: "15px", xs: "20px" }}
                        fontWeight="200px"
                        mb="50px"
                    >
                        <Text>
                            {experience?.headline}
                        </Text>
                    </Box>

                    <Text
                        as="h3"
                        fontSize={{ base: "17px", xs: "22px" }}
                        textDecoration="underline"
                        mb="20px"
                        fontWeight="400"
                    >
                        Overview
                    </Text>

                    <Box
                        fontSize={{ base: "15px", xs: "20px" }}
                        fontWeight="300"
                        mb="50px"
                    >
                        <Text>
                            {experience?.description}
                        </Text>
                    </Box>

                    <Box
                        display={{ base: "none", sm: "block" }}
                    >
                        <Text
                            as="h3"
                            fontSize={{ base: "17px", xs: "22px" }}
                            textDecoration="underline"
                            mb="20px"
                            fontWeight="400"
                        >
                            Highlights
                        </Text>

                        <UnorderedList
                            mb="50px"
                        >
                            {experience?.highlights?.map((item: string, index: number) => (
                                <ListItem
                                    key={index}
                                    ml="30px"
                                    fontSize={{ base: "15px", xs: "18px" }}
                                    fontWeight="300"
                                >
                                    {item}
                                </ListItem>
                            ))}
                        </UnorderedList>
                    </Box>

                    {experience?.included &&
                        <Box
                            display={{ base: "none", sm: "block" }}
                        >
                            <Text
                                as="h3"
                                fontSize={{ base: "17px", xs: "22px" }}
                                textDecoration="underline"
                                mb="20px"
                                fontWeight="400"
                            >
                                Included
                            </Text>

                            <UnorderedList
                                mb="50px"
                            >
                                {experience?.included?.map((item: any, index: number) => (
                                    <ListItem
                                        listStyleType="none"
                                        ml="30px"
                                        fontSize={{ base: "15px", xs: "18px" }}
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
                        </Box>
                    }

                    <Text
                        as="h3"
                        fontSize={{ base: "17px", xs: "22px" }}
                        textDecoration="underline"
                        mb="20px"
                        fontWeight="400"
                    >
                        Details
                    </Text>

                    <Grid
                        gridTemplateColumns="repeat(2, 1fr)"
                        columnGap={{ base: "20px", xs: "50px" }}
                        rowGap={{ base: "30px", xs: "20px" }}
                        w={{ base: "95%", xs: "80%" }}
                        m="auto"
                        mb={{ base: "40px", xs: "50px" }}
                    >
                        <Text
                            display="flex"
                            alignItems="center"
                            fontSize={{base: "10px", xs: "15px"}}
                            flexDirection={{base: "column", xs: "row"}}
                            justifyContent={{base: "center", xs: "flex-start"}}
                            width={{base: "95%", xs: "100%"}}
                            fontWeight="300"
                            gap="10px"
                        >
                            <Box
                                sx={{
                                    '& > svg': {
                                        fontSize: { base: "25px", xs: "55px" }
                                    }
                                }}
                            >
                                <HiOutlineUserGroup />
                            </Box>

                            <Text as="strong">Age</Text>
                            {experience?.details?.age}
                        </Text>

                        <Text
                            display="flex"
                            alignItems="center"
                            fontSize={{base: "10px", xs: "15px"}}
                            flexDirection={{base: "column", xs: "row"}}
                            justifyContent={{base: "center", xs: "flex-start"}}
                            width={{base: "95%", xs: "100%"}}
                            fontWeight="300"
                            gap="10px"
                        >
                            <Box
                                sx={{
                                    '& > svg': {
                                        fontSize: { base: "25px", xs: "55px" }
                                    }
                                }}
                            >
                                <BiTimer />
                            </Box>

                            <Text as="strong">How long?</Text>
                            {experience?.details?.duration}
                        </Text>

                        <Text
                            display="flex"
                            alignItems="center"
                            fontSize={{base: "10px", xs: "15px"}}
                            flexDirection={{base: "column", xs: "row"}}
                            justifyContent={{base: "center", xs: "flex-start"}}
                            width={{base: "95%", xs: "100%"}}
                            fontWeight="300"
                            gap="10px"
                        >
                            <Box
                                sx={{
                                    '& > svg': {
                                        fontSize: { base: "25px", xs: "55px" }
                                    }
                                }}
                            >
                                <BsTicket />
                            </Box>

                            <Text as="strong">Ticketing</Text>
                            {experience?.details?.ticket}
                        </Text>

                        <Text
                            display="flex"
                            alignItems="center"
                            fontSize={{base: "10px", xs: "15px"}}
                            flexDirection={{base: "column", xs: "row"}}
                            justifyContent={{base: "center", xs: "flex-start"}}
                            width={{base: "95%", xs: "100%"}}
                            fontWeight="300"
                            gap="10px"
                        >
                            <Box
                                sx={{
                                    '& > svg': {
                                        fontSize: { base: "25px", xs: "55px" }
                                    }
                                }}
                            >
                                <IoCalendar />
                            </Box>

                            <Text as="strong">Availability</Text>
                            {experience?.details?.availably}
                        </Text>

                        <Text
                            display="flex"
                            alignItems="center"
                            fontSize={{base: "10px", xs: "15px"}}
                            flexDirection={{base: "column", xs: "row"}}
                            justifyContent={{base: "center", xs: "flex-start"}}
                            width={{base: "95%", xs: "100%"}}
                            fontWeight="300"
                            gap="10px"
                        >
                            <Box
                                sx={{
                                    '& > svg': {
                                        fontSize: { base: "25px", xs: "55px" }
                                    }
                                }}
                            >
                                <GiTalk />
                            </Box>

                            <Text as="strong">Lenguage</Text>
                            {experience?.details?.language}
                        </Text>

                        <Text
                            w="100%"
                            display="flex"
                            alignItems="center"
                            fontSize={{base: "10px", xs: "15px"}}
                            flexDirection={{base: "column", xs: "row"}}
                            justifyContent={{base: "center", xs: "flex-start"}}
                            width={{base: "95%", xs: "100%"}}
                            fontWeight="300"
                            gap="10px"
                        >
                            <Box
                                sx={{
                                    '& > svg': {
                                        fontSize: { base: "25px", xs: "55px" }
                                    }
                                }}
                            >
                                <SlLocationPin />
                            </Box>

                            <Text as="strong">Meeting Point</Text>
                            {experience?.details?.meetengPoint?.label}
                        </Text>

                        <Text
                            display="flex"
                            alignItems="center"
                            fontSize={{base: "10px", xs: "15px"}}
                            flexDirection={{base: "column", xs: "row"}}
                            justifyContent={{base: "center", xs: "flex-start"}}
                            width={{base: "95%", xs: "100%"}}
                            fontWeight="300"
                            gap="10px"
                        >
                            <Box
                                sx={{
                                    '& > svg': {
                                        fontSize: { base: "25px", xs: "55px" }
                                    }
                                }}
                            >
                                <FaUniversalAccess />
                            </Box>

                            <Text as="strong">Accessibility</Text>
                            {experience?.details?.accessibility}
                        </Text>

                        <Text
                            display="flex"
                            alignItems="center"
                            fontSize={{base: "10px", xs: "15px"}}
                            flexDirection={{base: "column", xs: "row"}}
                            justifyContent={{base: "center", xs: "flex-start"}}
                            width={{base: "95%", xs: "100%"}}
                            fontWeight="300"
                            gap="10px"
                        >
                            <Box
                                sx={{
                                    '& > svg': {
                                        fontSize: { base: "25px", xs: "55px" }
                                    }
                                }}
                            >
                                <MdAccessible />
                            </Box>

                            <Text as="strong">Mobility</Text>
                            {experience?.details?.mobility}
                        </Text>
                    </Grid>

                    <Box
                        display={{ base: "block", sm: "none" }}
                    >
                        <Accordion allowToggle>
                            <AccordionItem>
                                <AccordionButton>
                                    <Text
                                        p="20px"
                                        fontSize={{base: "13px", xs: "15px"}}
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
                                        {experience?.highlights?.map((item: string, index: number) => (
                                            <ListItem
                                                key={index}
                                                ml="30px"
                                                fontSize={{base: "10px", xs: "13px"}}
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
                                        fontSize={{base: "13px", xs: "15px"}}
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
                                        {experience?.included?.map((item: any, index: number) => (
                                            <ListItem
                                                listStyleType="none"
                                                ml="30px"
                                                fontSize={{base: "10px", xs: "13px"}}
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
                    </Box>


                    <Accordion allowToggle>
                        <AccordionItem>
                            <AccordionButton
                            >
                                <Text
                                    p="20px"
                                    fontSize={{base: "13px", xs: "15px"}}
                                    fontWeight="600"
                                >
                                    More about experience
                                </Text>

                                <AccordionIcon />
                            </AccordionButton>

                            <AccordionPanel>
                                <Text
                                    p="20px"
                                    fontSize={{base: "10px", xs: "13px"}}
                                    fontWeight="500"
                                >
                                    {experience?.information}
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>

                        {experience?.policies &&
                            <AccordionItem>
                                <AccordionButton
                                >
                                    <Text
                                        p="20px"
                                        fontSize={{base: "13px", xs: "15px"}}
                                        fontWeight="600"
                                    >
                                        Cancelation polices
                                    </Text>

                                    <AccordionIcon />
                                </AccordionButton>

                                <AccordionPanel>
                                    <Text
                                        p="20px"
                                        fontSize={{base: "10px", xs: "13px"}}
                                        fontWeight="500"
                                    >
                                        {experience?.policies}
                                    </Text>
                                </AccordionPanel>
                            </AccordionItem>
                        }

                        <AccordionItem>
                            <AccordionButton
                            >
                                <Text
                                    p="20px"
                                    fontSize={{base: "13px", xs: "15px"}}
                                    fontWeight="600"
                                >
                                    Terms and conditions
                                </Text>

                                <AccordionIcon />
                            </AccordionButton>

                            <AccordionPanel>
                                <Text
                                    p="20px"
                                    fontSize={{base: "10px", xs: "13px"}}
                                    fontWeight="500"
                                >
                                    {experience?.conditions}
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Box>

                {experience?.published &&
                    <Box
                        pos="relative"
                    >
                        <Book
                            setCurrentOrder={setCurrentOrder}
                            setPaymentVisible={setPaymentVisible}
                            setTotalPay={setTotalPay}
                            totalPay={totalPay}
                            data={experience}
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