import { Box, Button, Flex, FormLabel, Input, Text, Textarea } from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface Props {
    labelButton: string;
    fromCall: "orders" | "modal";
    handleSubmit: (action: any) => void;
}

export const FormBook = ({ handleSubmit, labelButton, fromCall }: Props) => {

    const formik: any = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            comment: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Este campo es obligatorio.'),
            email: Yup.string()
                .email('Email invalido')
                .required('Este campo es obligatorio.'),
            phone: Yup.number()
                .required('Este campo es obligatorio.'),
            comment: Yup.string()
                .notRequired()
                .nullable(),
        }),
        onSubmit: (values: any, { resetForm }) => {
            handleSubmit(values);
            resetForm();
        }
    });

    return (
        <form
            onSubmit={formik.handleSubmit}
            style={ fromCall === "orders" ?
                { flex: "1" } :
                { margin: "auto", width: "90%" }
            }
        >
            <Flex
                direction="column"
            >
                <FormLabel 
                    htmlFor="name"
                    fontSize={fromCall === "orders" ?
                        "15px" :
                        "18px"
                    }
                    fontWeight="600"
                    mb={fromCall === "orders" ?
                        "3px" :
                        "5px"
                    }
                >
                    Name
                    <Text 
                        as="span"
                        ml="5px"
                        color="rgba(198, 40, 40, .8)"
                    >
                        *
                    </Text>
                </FormLabel>

                <Input
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    outline="none"
                    p="5px 2px"
                    h="fit-content"
                    fontSize="13px"
                    fontWeight="300"
                    mb={fromCall === "orders" ? 
                        "5px" :
                        "10px"
                    }
                    border="1px solid #000000"
                    rounded="5px"
                />

                {
                    formik.touched.name && formik.errors.name
                        ?
                        (
                            <Box
                                color="red"
                                fontSize="10px"
                                mt="2px"
                                mb="4px"
                            >
                                {formik.errors.name}
                            </Box>
                        )
                        : null
                }

                <FormLabel 
                    htmlFor="email"
                    fontSize={fromCall === "orders" ?
                        "15px" :
                        "18px"
                    }
                    fontWeight="600"
                    mb={fromCall === "orders" ?
                        "3px" :
                        "5px"
                    }
                >
                    Email
                    <Text 
                        as="span"
                        ml="5px"
                        color="rgba(198, 40, 40, .8)"
                    >
                        *
                    </Text>
                </FormLabel>

                <Input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    outline="none"
                    p="5px 2px"
                    h="fit-content"
                    fontSize="13px"
                    fontWeight="300"
                    mb={fromCall === "orders" ? 
                        "5px" :
                        "10px"
                    }
                    border="1px solid #000000"
                    rounded="5px"
                />

                {
                    formik.touched.name && formik.errors.name
                        ?
                        (
                            <Box
                                color="red"
                                fontSize="10px"
                                mt="2px"
                                mb="4px"
                            >
                                {formik.errors.name}
                            </Box>
                        )
                        : null
                }


                <FormLabel 
                    htmlFor="phone"
                    fontSize={fromCall === "orders" ?
                        "15px" :
                        "18px"
                    }
                    fontWeight="600"
                    mb={fromCall === "orders" ?
                        "3px" :
                        "5px"
                    }
                >
                    Phone
                    <Text 
                        as="span"
                        ml="5px"
                        color="rgba(198, 40, 40, .8)"
                    >
                        *
                    </Text>
                </FormLabel>

                <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                    outline="none"
                    p="5px 2px"
                    h="fit-content"
                    fontSize="13px"
                    fontWeight="300"
                    mb={fromCall === "orders" ? 
                        "5px" :
                        "10px"
                    }
                    border="1px solid #000000"
                    rounded="5px"
                />

                {
                    formik.touched.name && formik.errors.name
                        ?
                        (
                            <Box
                                color="red"
                                fontSize="10px"
                                mt="2px"
                                mb="4px"
                            >
                                {formik.errors.name}
                            </Box>
                        )
                        : null
                }

                <FormLabel 
                    htmlFor="comment"
                    fontSize={fromCall === "orders" ?
                        "15px" :
                        "18px"
                    }
                    fontWeight="600"
                    mb={fromCall === "orders" ?
                        "3px" :
                        "5px"
                    }
                >
                    Comment
                </FormLabel>

                <Textarea
                    id="comment"
                    name="comment"
                    onChange={formik.handleChange}
                    value={formik.values.comment}
                    outline="none"
                    resize="none"
                    p="5px 2px"
                    fontSize="13px"
                    fontWeight="300"
                    mb="20px"
                    h={fromCall === "orders" ?
                        "55px" :
                        "100px"
                    }
                    border="1px solid #000000"
                    rounded="5px"
                />

                <Button 
                    type="submit"
                    m={fromCall === "orders" ?
                        "auto" :
                        "20px auto 0 auto"
                    }
                    border="none"
                    bg="rgba(0, 0, 0, .7)"
                    p="10px 15px"
                    h="fit-content"
                    rounded="20px"
                    w="60%"
                    color="#FFFFFF"
                    fontWeight="600"
                    fontSize="15px"
                    _active={{
                        transform: "scale(0.9)",
                        transition: "all 200ms ease"
                    }}
                    _hover={{
                        bg: "rgba(0, 0, 0, 1)"
                    }}
                >
                        {labelButton}
                </Button>
            </Flex>
        </form>
    );
};