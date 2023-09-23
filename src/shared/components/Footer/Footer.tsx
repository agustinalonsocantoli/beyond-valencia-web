// Img
import visa from '../../../../public/cart/visa.svg'
import amex from '../../../../public/cart/amex.svg'
import master from '../../../../public/cart/master.svg'
import cc from '../../../../public/cart/cc.svg'
import apl from '../../../../public/cart/appay.svg'
import goo from '../../../../public/cart/gpay.jpg'
import ali from '../../../../public/cart/ali.jpg'
import we from '../../../../public/cart/wec.png'
import id from '../../../../public/cart/ideal.svg'
import pho from '../../../../public/cart/phone.svg'
import logo from '../../../../public/logoW.png'
import { IoLocationSharp } from 'react-icons/io5'
import { IoMdPhonePortrait } from 'react-icons/io'
import { MdEmail } from 'react-icons/md'
import { FiInstagram, FiLinkedin } from 'react-icons/fi'
import Link from 'next/link'
import Image from 'next/image'
import { Box, Flex, ListItem, Text, UnorderedList } from '@chakra-ui/react'

export const Footer = () => {
    return (
        <Flex
            direction='column'
            bg='#000000'
            color='#FFFFFF'
            padding="4% 2%" 
        >
            <Flex 
                justifyContent="space-around"
            >
                <Box
                    w='25%'
                    mb="50px"
                >
                    <Box
                        border="1px solid #FFFFFF"
                        p="10px 20px 30px 20px"
                        mb="20px"
                    >
                        <Text 
                            fontSize="25px" 
                            mb="25px" 
                            as="h3"
                        >
                            Office Hours
                        </Text>

                        <Text
                            fontWeight="200"
                            color="rgba(255, 255, 255, .5)"
                        >
                            Monday to Sunday
                        </Text>

                        <Text
                            fontWeight="200"
                            color="rgba(255, 255, 255, .5)"
                        >
                            9:00 am to 8:00 pm
                        </Text>
                    </Box>

                    <Box>
                        <Text 
                            fontSize="25px" 
                            mb="25px" 
                            as="h3"
                        >
                            More about us
                        </Text>
                        <Text
                            fontWeight="200"
                            color="rgba(255, 255, 255, .5)"
                        >
                            <Text as="span" color="#FFFFFF">We are</Text> a dynamic and forward-thinking team that embodies a modern and contemporary
                            image of the Valencian community. <Text as="span" color="#FFFFFF">Our aim</Text> is to resonate with independent travellers
                            visiting the region in the small groups, with family, as couples, or as solo adventures.
                            <Text as="span" color="#FFFFFF">We provide</Text> a curated selection of activities and services for both local and global
                            visitors who want to embrance the Valencian community beyond the city.
                        </Text>
                    </Box>
                </Box>

                <Box
                    w='25%'
                    mb="50px" 
                >
                    <Box
                        border="1px solid #FFFFFF"
                        p="10px 20px 30px 20px"
                        mb="20px"
                    >
                        <Text 
                            fontSize="25px" 
                            mb="25px" 
                            as="h3"
                        >
                            Drop Off {">"} Old Town
                        </Text>

                        <Text
                            display="flex"
                            gap="10px"
                            alignItems="center"
                            color="#FFFFFF" 
                        >
                            <IoLocationSharp style={{ color: "red", fontSize: "50px" }}/>
                            <Link 
                                href='https://goo.gl/maps/G5UcGWaBxEkd1VF99' 
                                target='_blank' 
                                rel='noopener noreferrer'
                                style={{
                                    color: "rgba(255, 255, 255, .7)",
                                    fontWeight: '200',
                                }}
                            >
                                Carrer del Fron dels Apòstol, 4, Bajo Izquierdo, 46001 Valencia
                            </Link>
                        </Text>
                    </Box>

                    <Box 
                        border="1px solid #FFFFFF"
                        p="10px 20px 30px 20px"
                        mb="20px"
                    >
                        <Text 
                            fontSize="25px" 
                            mb="25px" 
                            as="h3"
                        >
                            Drop Off {">"} Beachside
                        </Text>
                        <Text
                            display="flex"
                            gap="10px"
                            alignItems="center"
                            color="#FFFFFF" 
                        >
                            <IoLocationSharp  style={{ color: "red", fontSize: "50px" }}/>
                            <Link 
                                href='https://goo.gl/maps/ggzkikLQQAnNueQx5' 
                                target='_blank' 
                                rel='noopener noreferrer'
                                style={{
                                    color: "rgba(255, 255, 255, .7)",
                                    fontWeight: '200',
                                }}
                            >
                                C/ de I'Arquitecte Alfaro, 40, 46011, València, Valencia
                            </Link>
                        </Text>
                    </Box>

                    <Box>
                        <Text 
                            fontSize="25px" 
                            mb="25px" 
                            as="h3"
                        >
                            Services
                        </Text>
                        <UnorderedList
                            fontWeight="200"
                            color="rgba(255, 255, 255, .7)"
                        >
                            <ListItem><Link href='/daytrips/villareal'>Visit Villarreal with transportation</Link></ListItem>
                            <ListItem><Link href='daytrips/sunset'>Day Trips</Link></ListItem>
                            <ListItem><Link href='/bikes'>Vintage Bike Rentals</Link></ListItem>
                            <ListItem><Link href='/lockers'>Luggage Storage Service</Link></ListItem>
                            <ListItem><Link href='/experiences'>Experiences</Link></ListItem>
                            <ListItem>Deals</ListItem>
                            <ListItem>Tailored travel services</ListItem>
                        </UnorderedList>
                    </Box>
                </Box>

                <Box
                    w='25%'
                    mb="50px" 
                >
                    <Box
                        border="1px solid #FFFFFF"
                        p="10px 20px 30px 20px"
                        mb="20px"
                    >
                        <Text 
                            fontSize="25px" 
                            mb="25px" 
                            as="h3"
                        >
                            Get Social
                        </Text>
                        <Text 
                            display="flex"
                            gap="10px"
                            alignItems="center"
                            color="#FFFFFF"
                        >
                            <IoMdPhonePortrait />
                            +34 680841402
                        </Text>

                        <Text 
                            display="flex"
                            gap="10px"
                            alignItems="center"
                            color="#FFFFFF"
                        >
                            <MdEmail />
                            admin@beyondvalencia.com
                        </Text>

                        <Flex
                            mt="30px"
                            mb="35px"
                            gap='10px' 
                        >
                            <Box 
                                border="1px solid #FFFFFF"
                                rounded="50%"
                                p="10px"
                            >
                                <FiLinkedin style={{ fontSize: "30px"}}/>
                            </Box>

                            <Box 
                                border="1px solid #FFFFFF"
                                rounded="50%"
                                p="10px"
                            >
                                <MdEmail style={{ fontSize: "30px"}}/>
                            </Box>

                            <Box 
                                border="1px solid #FFFFFF"
                                rounded="50%"
                                p="10px"
                            >
                                <Link href="https://www.instagram.com/beyond_valencia_/" target='_blank'  rel='noopener noreferrer'>
                                    <FiInstagram style={{ fontSize: "30px"}}/>
                                </Link>
                            </Box>
                        </Flex>

                        <Box 
                            border="1px solid #FFFFFF"
                            textAlign="center"
                            p='15px'
                            mb="25px"
                            rounded="50px"
                        >
                            <Text
                                as="span"
                                fontWeight='200px'
                                fontSize="13px"
                                color="rgba(255, 255, 255, .7)"
                            >
                                Chat with us
                            </Text>
                        </Box>
                               
                                

                        <Box 
                            border="1px solid #FFFFFF"
                            textAlign="center"
                            p='15px'
                            mb="15px"
                            rounded="50px"
                        >
                            <Text
                                as="span"
                                fontWeight='200px'
                                fontSize="13px"
                                color="rgba(255, 255, 255, .7)"
                            >
                                Join our newsletter
                            </Text>
                        </Box>
                               
                                
                    </Box>

                    <Box 
                        w='150px'
                        ml="auto"
                    >
                        <Image 
                            src={logo} alt="logo/beyondvalencia" 
                            style={{
                                objectFit: "cover",
                                width: '100%',
                                height: '100%'
                            }}
                        />
                    </Box>
                </Box>
            </Flex>


            <Flex 
                justifyContent="space-between"
                alignItems="center"
            >
                <Flex 
                    gap="10px"
                >
                    <Image src={visa} alt="img/" style={{ objectFit: "cover", width: "45px", height: "25px" , borderRadius: "2px"}} />
                    <Image src={amex} alt="img/" style={{ objectFit: "cover", width: "45px", height: "25px" , borderRadius: "2px"}} />
                    <Image src={master} alt="img/" style={{ objectFit: "cover", width: "45px", height: "25px" , borderRadius: "2px"}} />
                    <Image src={cc} alt="img/" style={{ objectFit: "cover", width: "45px", height: "25px" , borderRadius: "2px"}} />
                    <Image src={apl} alt="img/" style={{ objectFit: "cover", width: "45px", height: "25px" , borderRadius: "2px"}} />
                    <Image src={goo} alt="img/" style={{ objectFit: "cover", width: "45px", height: "25px" , borderRadius: "2px"}} />
                    <Image src={ali} alt="img/" style={{ objectFit: "cover", width: "45px", height: "25px" , borderRadius: "2px"}} />
                    <Image src={we} alt="img/" style={{ objectFit: "cover", width: "45px", height: "25px" , borderRadius: "2px"}} />
                    <Image src={id} alt="img/" style={{ objectFit: "cover", width: "45px", height: "25px" , borderRadius: "2px"}} />
                    <Image src={pho} alt="img/" style={{ objectFit: "cover", width: "45px", height: "25px" , borderRadius: "2px"}} />
                </Flex>

                <Text 
                    fontSize="15px" 
                    mr='7%' 
                    as="h3"
                >
                    2023 &copy; All Rights Reserved
                </Text>
            </Flex>
        </Flex>
    );
}