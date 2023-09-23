// Stripe
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
// Components
import { CheckoutForm } from './CheckoutForm';
import { ModalError } from '../modals/ModalError';
// React
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { CircularProgress, useDisclosure } from '@chakra-ui/react';

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
    const [ clientSecret, setClientSecret ] = useState<any>(null);
    const [ id, setId ] = useState<string>('');
    const { isOpen, onOpen, onClose } = useDisclosure();

    const onCloseError = () => { 
        onClose(); 
        router.push("/");
    }

    useEffect(() => {
        if(!process.env.NEXT_PUBLIC_URL_APICHECKOUT) return

        fetch(process.env.NEXT_PUBLIC_URL_APICHECKOUT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ 
            amount: totalPay && (totalPay * 100), 
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

    return(
        <div className='payment'>
            {clientSecret ?
            <div>
            <Elements stripe={stripePromise} options={options}>
                <CheckoutForm 
                setPaymentVisible={setPaymentVisible} 
                setCurrentOrder={setCurrentOrder} 
                id={id} 
                />
            </Elements>
            </div>
            :
            isOpen &&
            <div className='payment_loading'>
                <CircularProgress size="150px" />
            </div>
            }
            
            <ModalError 
            onClose={onCloseError} 
            isOpen={isOpen} 
            message="Server error, try again later."
            />
        </div>
    );
};