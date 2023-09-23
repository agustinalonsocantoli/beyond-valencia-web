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
import { CircularProgress, useDisclosure, useToast } from "@chakra-ui/react";

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
                <form onSubmit={handleSubmit} className="checkout">
                    <GrFormClose className="icon_close" onClick={handleCancel} />

                    <div className="checkout_email">
                        <LinkAuthenticationElement
                            onChange={handleChange}
                        />
                    </div>

                    <PaymentElement options={paymentElementOptions} />

                    {isLoading ?
                        <div className="loading">
                            <CircularProgress />
                        </div>
                        :
                        <div className="checkout_btn">
                            <button disabled={isLoading || !stripe} type="submit">
                                CONFIRM
                            </button>

                            <button onClick={handleCancel}>
                                CANCEL
                            </button>
                        </div>
                    }

                    {message && <div className="checkout_msg">{message}</div>}
                </form>
            }

            <ModalPaySuccess
                onClose={onCloseSuccess}
                isOpen={isOpen}
            />
        </div>
    );
}