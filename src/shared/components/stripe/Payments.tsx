// Stripe
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
// Components
import { CheckoutForm } from './CheckoutForm';
import { ModalError } from '../modals/ModalError';
// React
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Box, CircularProgress, Flex, useDisclosure } from '@chakra-ui/react';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC || "");

interface Props {
    setPaymentVisible: (action: boolean) => void;
    totalPay: number | null;
    setCurrentOrder: (action: any) => void;
    description: string;
}

export const Payments = (props: Props) => {
    const { setPaymentVisible, totalPay, setCurrentOrder, description } = props;
    const router = useRouter();
    const [clientSecret, setClientSecret] = useState<any>(null);
    const [id, setId] = useState<string>('');
    const { isOpen, onOpen, onClose } = useDisclosure();

    const onCloseError = () => {
        onClose();
        router.push("/");
    }

    useEffect(() => {
        if (!process.env.NEXT_PUBLIC_URL_APICHECKOUT) return

        fetch(process.env.NEXT_PUBLIC_URL_APICHECKOUT, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                amount: totalPay && Math.floor(totalPay && (totalPay * 100)),
                description: description,
            }),
        })
            .then((res) => res.json())
            .then((data) => {

                setClientSecret(data?.clientSecret);
                setId(data?.id);
            })
            .catch(() => {
                onOpen();
            })

    }, []);


    const appearance: {
        theme: string
    } = {
        theme: 'stripe',
    };

    const options: any = {
        clientSecret,
        appearance,
    };

    return (
        <Box
            position="fixed"
            bg="rgba(0, 0, 0, .7)"
            top="0"
            bottom="0"
            right="0"
            left="0"
        >
            {clientSecret ?
                <Box>
                    <Elements stripe={stripePromise} options={options}>
                        <CheckoutForm
                            setPaymentVisible={setPaymentVisible}
                            setCurrentOrder={setCurrentOrder}
                            id={id}
                        />
                    </Elements>
                </Box>
                :
                isOpen &&
                <Flex
                    bg="#FFF"
                    p="5%"
                    w={{base: "90%", lg: "40%"}}
                    m="auto"
                    justifyContent="center"
                    alignItems="center"
                    rounded="12px"
                    mt="10%"
                >
                    <CircularProgress boxSize="150px" />
                </Flex>
            }

            <ModalError
                onClose={onCloseError}
                isOpen={isOpen}
                message="Server error, try again later."
            />
        </Box>
    );
};