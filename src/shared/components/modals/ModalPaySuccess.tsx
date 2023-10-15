import { Box, Flex, Modal, ModalBody, ModalContent, ModalOverlay, Text } from '@chakra-ui/react';
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
            size={{ base: "sm", xs: "2xl", lg: "3xl"}}
            >
            <ModalOverlay />

            <ModalContent
                color="#FFF"
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
                            fontSize={{base: "25px", xs: "35px", lg: "40px"}}
                            fontWeight="400"
                        >
                            Successful Payment
                        </Text>

                        <BsCheckCircleFill 
                            style={{
                                color: "#52DD11",
                                fontSize: '150px'
                            }}
                        />
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
};