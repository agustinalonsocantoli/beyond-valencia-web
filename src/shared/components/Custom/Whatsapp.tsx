'use client'
// Icons
import { Box, Icon } from '@chakra-ui/react';
import Link from 'next/link';
import { BsWhatsapp } from 'react-icons/bs'
import { isMobile, isTablet, isDesktop } from "react-device-detect";

export const Whatsapp = () => {
    return(
        <Box
            position="fixed"
            bottom="20px"
            right="20px"
            cursor="pointer"
            zIndex="399"
            bg="white"
            p={{
                base: "7px 9px 2px 9px", sm: "8px 10px 3px 10px",
                md: "8px 10px 3px 10px", lg: "10px 12px 5px 12px"
            }}
            rounded="100%"
        >
            <Link href='https://wa.me/34722648023' target='_blank'  rel='noopener noreferrer'>
                <Icon 
                    as={BsWhatsapp} 
                    color="green" 
                    boxSize={{ base: "20px", xs: "30px", ms: "30px", lg:"40px" }}
                />
            </Link>
        </Box>
    );
};