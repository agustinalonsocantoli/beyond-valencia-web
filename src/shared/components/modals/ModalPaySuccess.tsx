import { Box, Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react';
import { BsCheckCircleFill } from 'react-icons/bs';

interface Props {
    onClose: () => void;
    isOpen: boolean;
}

export const ModalPaySuccess = ({ onClose, isOpen }: Props) => {

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            isCentered
        >
            <ModalOverlay />

            <ModalContent>
                <ModalBody>
                    <Box className="pay_success">
                        <h1>Successful Payment</h1>
                        <BsCheckCircleFill />
                    </Box>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
};