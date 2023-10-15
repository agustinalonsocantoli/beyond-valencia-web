// React
import { useState } from "react";
// Striple
import { PaymentElement, useStripe, useElements, LinkAuthenticationElement } from "@stripe/react-stripe-js";
// Components
import { ModalPaySuccess } from "../modals/ModalPaySuccess";
// Icons
import { GrFormClose } from "react-icons/gr"
import { useRouter } from "next/navigation";
import { toastNotify } from "@/shared/utils/functions/toastNotify";
import { StatusEnumTypes } from "@/shared/utils/types/StatusEnumTypes";
import { Box, Button, CircularProgress, Flex, FormControl, useDisclosure, useToast } from "@chakra-ui/react";
import { Form } from "formik";

interface Props {
    setPaymentVisible: (action: boolean) => void;
    setCurrentOrder: (action: any) => void;
    id: string;
}

export const CheckoutForm = ({ setPaymentVisible, setCurrentOrder, id }: Props) => {
    const toast = useToast();
    const router = useRouter();
    const stripe: any = useStripe();
    const elements = useElements();
    const [message, setMessage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const onCloseSuccess = () => {
        onClose();
        setPaymentVisible(false);
        router.push("/");
    }


    const handleSubmit = async (e: any) => {
        e.preventDefault();

        setIsLoading(true);


        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: "https://www.beyondvalencia.com/#/pay-success",
            },
            redirect: "if_required",
        });

        if (error) {
            setMessage(error.message);
        } else if (paymentIntent && paymentIntent.status === "succeeded") {
            setIsLoading(false);
            onOpen();
        } else {
            setMessage("An unexpected error occurred.");
        }

        setIsLoading(false);
    };

    const paymentElementOptions: any = {
        layout: "tabs"
    }

    const handleCancel = async (e: any) => {
        e.preventDefault();

        if (!process.env.NEXT_PUBLIC_URL_APICANCEL) return

        fetch(process.env.NEXT_PUBLIC_URL_APICANCEL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id: id,
            }),
        })
            .then((res) => res.json())
            .then(() => {
                toastNotify(toast, StatusEnumTypes.SUCCESS, 'Order canceled successfully')
            })
            .catch((error) => console.error(error));

        setPaymentVisible(false);
        setCurrentOrder(null);
        router.push('/')
    };

    const handleChange = (e: any) => {
        const { name, value }: any = e.target;

        setCurrentOrder((prev: any) => ({ ...prev, [name]: value }));
    };

    return (
        <div>
            {!isOpen &&
                <FormControl
                    as={Form}
                    onSubmit={handleSubmit}
                    w={{base: "95%", xs: "90%", lg: "50%"}}
                    position="absolute"
                    p={{base: "20px 30px", xs: "30px", md: "50px"}}
                    bg="#FFFFFF"
                    m="auto"
                    left="0"
                    right="0"
                    top={{base: "1%", xs: "3%", md: "5%"}}
                    rounded="20px"
                    maxH="98vh"
                    overflow="scroll"
                >
                    <GrFormClose 
                        onClick={handleCancel} 
                        style={{
                            position: "absolute",
                            fontSize: "30px",
                            right: "15px",
                            top: "15px",
                            cursor: "pointer"
                        }}
                    />

                    <Box
                        mb="10px"
                    >
                        <LinkAuthenticationElement
                            onChange={handleChange}
                        />
                    </Box>

                    <PaymentElement options={paymentElementOptions} />

                    {isLoading ?
                        <Flex
                            mt="30px"
                            justifyContent="center"
                        >
                            <CircularProgress />
                        </Flex>
                        :
                        <Flex
                            mt="20px"
                        >
                            <Button 
                                disabled={!stripe} 
                                isLoading={isLoading}
                                type="submit"
                                m="auto"
                                border="none"
                                bg="rgba(0, 0, 0, .7)"
                                p="10px"
                                rounded="8px"
                                w="40%"
                                color="#FFF"
                                fontWeight="300"
                                fontSize="13px"
                                _active={{ transform: "scale(0.9)", transition: 'all 200ms ease' }}
                                _hover={{ bg: "rgba(0, 0, 0, 1)" }}
                            >
                                CONFIRM
                            </Button>

                            <Button 
                                onClick={handleCancel}
                                isLoading={isLoading}
                                m="auto"
                                border="none"
                                bg="rgba(0, 0, 0, .7)"
                                p="10px"
                                rounded="8px"
                                w="40%"
                                color="#FFF"
                                fontWeight="300"
                                fontSize="13px"
                                _active={{ transform: "scale(0.9)", transition: 'all 200ms ease' }}
                                _hover={{ bg: "rgba(0, 0, 0, 1)" }}
                            >
                                CANCEL
                            </Button>
                        </Flex>
                    }

                    {message && <Box mt="5px" color="#DC2222">{message}</Box>}
                </FormControl>
            }

            <ModalPaySuccess
                onClose={onCloseSuccess}
                isOpen={isOpen}
            />
        </div>
    );
}