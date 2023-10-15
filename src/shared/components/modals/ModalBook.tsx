import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    Flex,
    Box,
    Button,
    Text,
} from '@chakra-ui/react'
import { FormBook } from '../Form/Form';
import { CodeBook } from '../Book/CodeBook';
import { SelectQuantity } from '../Book/SelectQuantity';
import { SelectTime } from '../Book/SelectTime';
import { PricesInt } from '@/interfaces/ExperiencesInt';
import { IoReturnDownBackSharp } from "react-icons/io5";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    adults: number;
    children: number;
    infants: number;
    subTotal: number;
    validateCode: (action: any) => void;
    handleGetCode: (action: any) => void;
    discount: number;
    totalPay: number | null;
    handleSubmit: (action: any) => void;
    setAdults: (action: number) => void;
    setChildren: (action: number) => void;
    setInfants: (action: number) => void;
    time: string | null;
    setTime: (action: string | null) => void;
    hours: string[]
    date: any;
    setDate: (date: any) => void;
    setCurrentOrder: (order: any) => void;
    prices: PricesInt | undefined;
}

export const ModalBook = ({
    onClose,
    isOpen,
    adults,
    children,
    subTotal,
    validateCode,
    handleGetCode,
    discount,
    totalPay,
    handleSubmit,
    infants,
    setAdults,
    setChildren,
    setInfants,
    time,
    setTime,
    hours,
    date,
    setDate,
    setCurrentOrder,
    prices
}: Props) => {

    const handleCancel = () => {
        setCurrentOrder(null);
        setAdults(0)
        setChildren(0)
        setInfants(0)
        setTime(null)
        setDate(null)
        onClose();
    };

    return (
        <div>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                closeOnEsc={false}
                closeOnOverlayClick={false}
                isCentered
                size={{ base: "sm", xs: "4xl", lg: "6xl"}}
            >
                <ModalOverlay />
                <ModalContent
                    bg="#FFFBF6"
                >
                    <ModalBody>
                        <Flex
                            gap={{base: "10px", xs: "40px", lg: "100px"}}
                            justifyContent="center"
                            m="3% auto"
                            rounded="12px"
                            direction={{base: "column", xs: "row"}}
                        >
                            <Flex
                                direction="column"
                                alignItems="center"
                                gap="10px"
                            >
                                <Text as="h3">Participants</Text>

                                <SelectQuantity
                                    adults={adults}
                                    setAdults={setAdults}
                                    children={children}
                                    setChildren={setChildren}
                                    infants={infants}
                                    setInfants={setInfants}
                                    isDisable={prices?.children ? false : true}
                                />

                                <CodeBook
                                    adults={adults}
                                    children={children}
                                    subTotal={subTotal}
                                    discount={discount}
                                    totalPay={totalPay}
                                    handleGetCode={handleGetCode}
                                    validateCode={validateCode}
                                    date={date}
                                    time={time}
                                    prices={prices}
                                />

                                    <Box
                                        display={{base: "none", xs: "block"}}
                                        m="0 auto 0 0"
                                    >
                                        <Button 
                                            onClick={handleCancel}
                                            p="5px 20px"
                                            h="fit-content"
                                            fontSize="13px"
                                            alignItems="center"
                                            gap="7px"
                                            display="flex"
                                            border="none"
                                            bg="rgba(0, 0, 0, .1)"
                                            rounded="20px"
                                            color="#FFF"
                                            fontWeight="300"
                                            _active={{ transform: "scale(0.9)", transition: "all 200ms ease" }}
                                            _hover={{ bg: "rgba(0, 0, 0, .7)" }}
                                        >
                                            <IoReturnDownBackSharp />

                                            Back
                                        </Button>
                                    </Box>
                            </Flex>

                            <Flex
                                direction="column"
                                alignItems="center"
                                gap="10px"
                            >
                                <Box
                                    p="20px"
                                    rounded="12px"
                                    w="400px"
                                >
                                    <Text 
                                        as="h3"
                                        textAlign="center"
                                        mb="20px"
                                    >
                                        Select Time
                                    </Text>

                                    <Flex
                                        justifyContent="center"
                                        alignItems="center"
                                        gap="20px"
                                    >
                                        {hours?.map((hour: string, index: number) => (
                                            <SelectTime
                                                time={time}
                                                setTime={setTime}
                                                hour={hour}
                                                key={index}
                                            />

                                        ))}
                                    </Flex>
                                </Box>

                                <FormBook
                                    handleSubmit={handleSubmit}
                                    labelButton="BOOK AND PAY"
                                    fromCall='modal'
                                />
                                    <Box
                                        m="20px auto 0 0"
                                        display={{base: "block", xs: "none"}}
                                    >
                                        <Button 
                                            onClick={handleCancel}
                                            p="5px 15px"
                                            h="fit-content"
                                            fontSize="11px"
                                            alignItems="center"
                                            gap="7px"
                                            display="flex"
                                            border="none"
                                            bg="rgba(0, 0, 0, .1)"
                                            rounded="20px"
                                            color="#FFF"
                                            fontWeight="300"
                                            _active={{ transform: "scale(0.9)", transition: "all 200ms ease" }}
                                            _hover={{ bg: "rgba(0, 0, 0, .7)" }}
                                        >
                                            <IoReturnDownBackSharp />
                                            Back
                                        </Button>
                                    </Box>
                            </Flex>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    );
}