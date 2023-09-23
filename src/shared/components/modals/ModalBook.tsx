import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
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

    const isMobile = window.innerWidth < 1025 ? true : false;

    return (
        <div>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                isCentered
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalBody>
                        <div className="modal_book">
                            <div className="modal_flex">
                                <h3>Participants</h3>
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

                                {!isMobile &&
                                    <div className='btn_cancel '>
                                        <button onClick={handleCancel}><IoReturnDownBackSharp />Back</button>
                                    </div>
                                }
                            </div>

                            <div className="modal_flex">
                                <div className="time_container">
                                    <h3>Select Time</h3>

                                    <div className="time">
                                        {hours?.map((hour: string, index: number) => (
                                            <SelectTime
                                                time={time}
                                                setTime={setTime}
                                                hour={hour}
                                                key={index}
                                            />

                                        ))}
                                    </div>
                                </div>

                                <FormBook
                                    handleSubmit={handleSubmit}
                                    labelButton="BOOK AND PAY"
                                    nameClass="book_form"
                                />

                                {isMobile &&
                                    <div className='btn_cancel '>
                                        <button onClick={handleCancel}><IoReturnDownBackSharp />Back</button>
                                    </div>
                                }

                            </div>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    );
}