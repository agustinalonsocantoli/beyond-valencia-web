import { Box, Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react';
import { MdError } from 'react-icons/md';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    message: string;
}

export const ModalError = ({ onClose, isOpen, message }: Props) => {

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
                        <Box className='payment_error'>
                            <h1>{message}</h1>
                            <MdError />
                        </Box>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    )
};