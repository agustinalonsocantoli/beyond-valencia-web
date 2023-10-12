import { Flex, Modal, ModalBody, ModalContent, ModalOverlay, Text } from '@chakra-ui/react';
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
                size="3xl"
            >
                <ModalOverlay />
                <ModalContent
                    bg="#FFF"
                >
                    <ModalBody>
                        <Flex
                            p="20px"
                            m="auto"
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            gap="20px"
                            rounded="12px"
                            mt="10%"
                        >
                            <Text
                                as="h1"
                                fontSize="40px"
                                fontWeight="400"
                            >
                                {message}
                            </Text>

                            <MdError 
                                style={{
                                    color: "#DC2222",
                                    fontSize: "200px"
                                }}
                            />
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    )
};