'use client'

import { TfiMenu } from "react-icons/tfi";
import logo from "../../../../public/logoW.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDisclosure } from "@chakra-ui/react";
import { Menu } from "./Menu";

interface Props {
    title: string;
    subtitle: string;
}

export const Navbar = ({ title, subtitle }: Props) => {
    const router = useRouter()
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <div className="nav">

            <div className="nav_flex">
                <div className="nav_menu">
                    <TfiMenu onClick={onOpen} />

                <Menu 
                    isOpen={isOpen}
                    onClose={onClose}
                />
                </div>

                <Image src={logo} alt="img/logo" onClick={() => router.push("/")} />
            </div>

            <div className="nav_title">
                <h1 data-text={subtitle}>{title}</h1>
            </div>
        </div>
    );
}