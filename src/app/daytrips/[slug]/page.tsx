"use client"

// React
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'
// Components
import { Navbar } from '@/shared/components/Navbar/Navbar';
import { Exposure } from '@/shared/components/Exposure/Exposure';
// import { Book } from "../components/book/Book";
// import { Payments } from '../components/stripe/Payments';
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
import { Accordion, AccordionButton, AccordionIcon, AccordionPanel, AccordionItem } from '@chakra-ui/react';
import { getStaticData } from '@/shared/middlewares/fetcher';
import { DaystripsInt } from '@/interfaces/DaytripsInt';
// Data
// import { ExperiencesInt } from '../data/Api/experiences';
// import { useLocation, useParams } from 'react-router-dom';
// import { DaystripsInt } from '../data/Api/daytrips';

export default function DetailsDaytrips() {
    const { slug } = useParams();
    // const [paymentVisible, setPaymentVisible] = useState<boolean>(false);
    // const [currentOrder, setCurrentOrder] = useState<any>(null);
    // const [totalPay, setTotalPay] = useState<number | null>(null);
    // const [scroll, setScroll] = useState<number>(0)
    const [daytrips, setDaytrips] = useState<DaystripsInt>()

    const isMobile = window.innerWidth < 1025 ? true : false;

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
        <div className="details">

            <Navbar title={"Daytrips"} subtitle={"Daytrips"} />

            <div className="details_exposure">
                <Exposure
                    data={daytrips?.multimedia}
                />
            </div>

            <div className="details_description">
                <div className="description">
                    <h1>{daytrips?.title}</h1>
                    <p className='subtitle'><strong>{daytrips?.subtitle?.label && `${daytrips?.subtitle?.label}: `}</strong>{daytrips?.subtitle?.text}</p>

                    <div className="description_slogan">
                        <p>
                            {daytrips?.headline}
                        </p>
                    </div>

                    <h3>Overview</h3>
                    <div className="description_text">
                        <p>
                            {daytrips?.description}
                        </p>
                    </div>

                    {!isMobile &&
                        <>
                            <h3>Highlights</h3>
                            <ul className="highlights">
                                {daytrips?.highlights?.map((item: string, index: number) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </>
                    }

                    {(daytrips?.included && !isMobile) &&
                        <>
                            <h3>Included</h3>
                            <ul className="highlights">
                                {daytrips?.included?.map((item: any, index: number) => (
                                    <li style={{ listStyle: 'none' }} key={index}>
                                        {item?.state
                                            ? <RxCheck style={{ color: 'green', marginRight: 5, }} />
                                            : <RxCross1 style={{ color: 'red', marginRight: 5 }} />
                                        }
                                        {item?.text}
                                    </li>
                                ))}
                            </ul>
                        </>
                    }

                    <h3>Details</h3>
                    <div className="information">
                        <p><HiOutlineUserGroup /><strong>Age</strong> {daytrips?.details?.age}</p>
                        <p><BiTimer /><strong>How long?</strong> {daytrips?.details?.duration}</p>
                        <p><BsTicket /><strong>Ticketing</strong> {daytrips?.details?.ticket}</p>
                        <p><IoCalendar /><strong>Availability</strong> {daytrips?.details?.availably}</p>
                        <p><GiTalk /> <strong>Lenguage</strong> {daytrips?.details?.language}</p>
                        <p className='location'><SlLocationPin /><strong>Meeting Point</strong> {daytrips?.details?.meetengPoint?.label}</p>
                        <p><FaUniversalAccess /><strong>Accessibility</strong> {daytrips?.details?.accessibility}</p>
                        <p><MdAccessible /><strong>Mobility</strong> {daytrips?.details?.mobility}</p>
                    </div>

                    {isMobile &&
                        <Accordion>
                            <AccordionItem>
                                <AccordionButton>
                                    <p>Highlights</p>

                                    <AccordionIcon />
                                </AccordionButton>

                                <AccordionPanel>
                                    <ul className="highlights">
                                        {daytrips?.highlights?.map((item: string, index: number) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionButton>
                                    <p>Included</p>

                                    <AccordionIcon />
                                </AccordionButton>

                                <AccordionPanel>
                                    <ul className="highlights">
                                        {daytrips?.included?.map((item: any, index: number) => (
                                            <li style={{ listStyle: 'none' }} key={index}>
                                                {item?.state
                                                    ? <RxCheck style={{ color: 'green', marginRight: 5, }} />
                                                    : <RxCross1 style={{ color: 'red', marginRight: 5 }} />
                                                }
                                                {item?.text}
                                            </li>
                                        ))}
                                    </ul>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    }

                    <Accordion allowToggle allowMultiple>
                        <AccordionItem>
                            <AccordionButton
                            >
                                <p>More about experience</p>

                                <AccordionIcon />
                            </AccordionButton>

                            <AccordionPanel>
                                <p>{daytrips?.information}</p>
                            </AccordionPanel>
                        </AccordionItem>

                        {daytrips?.policies &&
                            <AccordionItem>
                                <AccordionButton
                                >
                                    <p>Cancelation polices</p>

                                    <AccordionIcon />
                                </AccordionButton>

                                <AccordionPanel>
                                    <p>{daytrips?.policies}</p>
                                </AccordionPanel>
                            </AccordionItem>
                        }

                        <AccordionItem>
                            <AccordionButton
                            >
                                <p>Terms and conditions</p>

                                <AccordionIcon />
                            </AccordionButton>

                            <AccordionPanel>
                                <p>{daytrips?.conditions}</p>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </div>

                {/* {daytrips?.published &&
                    <div className='book_container'>
                        <Book
                            setCurrentOrder={setCurrentOrder}
                            setPaymentVisible={setPaymentVisible}
                            setTotalPay={setTotalPay}
                            totalPay={totalPay}
                            daytrips={daytrips}
                            scroll={scroll}
                        />
                    </div>
                } */}
            </div>

            {/* {paymentVisible &&
                <Payments
                    setCurrentOrder={setCurrentOrder}
                    setPaymentVisible={setPaymentVisible}
                    totalPay={totalPay}
                    description={`${currentOrder.tourName ? currentOrder.tourName : ""}, Email: ${currentOrder.email ? currentOrder.email : ""}`}
                />} */}

            <Whatsapp />

            <Footer />
        </div>
    );
}