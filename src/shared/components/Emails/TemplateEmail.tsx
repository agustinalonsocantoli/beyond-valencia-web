import { Flex, Text, Box, UnorderedList, ListItem } from '@chakra-ui/react';
import Image from 'next/image';
import logo from '../../../../public/logoW.png';
import bg from '../../../../public/bg.png';

export interface TemplateEmailInt {
  type: "bike" | "lockers" | "book"

  name: string;
  email: string;
  phone: string;
  comment: string;

  time: string;
  date: string;

  bike?: {
    small: number;
    medium: number;
    childrenBike: number;
  }

  locker?: {
    small: number;
    medium: number;
    normal: number;
  }

  book?: {
    adults: number;
    children: number;
    infants: number;
  }

  total: number;
  discountCode?: string;
}

export const TemplateEmail = ({
  type,
  name,
  email,
  phone,
  comment,
  time,
  date,
  bike,
  locker,
  book,
  total,
  discountCode,
}: TemplateEmailInt) => (
  <Flex
    alignItems="center"
    direction="column"
    bgImage={`url(${bg?.src})`}
    bgSize="cover"
    bgRepeat="no-repeat"
    p="20px"
    gap="20px"
  >
    <Image
      src={logo}
      alt='logoEmail'
      width={300}
      style={{
        height: "100%",
        objectFit: "cover"
      }}
    />

    <Flex
      w="50%"
      mx="auto"
      direction="column"
      bg="#F8F8FC"
      p="40px"
      rounded="20px"
      boxShadow="0px 3px 4px 0px rgba(255, 255, 255, .3)"
      gap="20px"
    >
      <Text
        as="h1"
      >
        Dear {name},
      </Text>

      <Text>
        Thank you for choosing our service!
        Below, you will find the details of your transaction:
      </Text>

      <Box
        p="10px"
        rounded="5px"
        bg="#202020"
        color="#FFFFFF"
        boxShadow="0px 3.5px 5.5px 0px rgba(0, 0, 0, 0.02)"
      >
        <Text>Customer information</Text>

        <UnorderedList>
          <ListItem>Email 📧 address: {email}</ListItem>
          <ListItem>Phone 📱 number: {phone}</ListItem>
        </UnorderedList>
      </Box>

      <Box
        p="10px"
        rounded="5px"
        bg="#202020"
        color="#FFFFFF"
        boxShadow="0px 3.5px 5.5px 0px rgba(0, 0, 0, 0.02)"
      >
        <Text>Details</Text>

        <UnorderedList>
          <ListItem>Drop-off dates: {date}</ListItem>
          {time && <ListItem>Booking time: {time}</ListItem>}
          {comment && <ListItem>Comments: {comment}</ListItem>}
          <ListItem>Total payed: {total}€</ListItem>
          <ListItem>
            Discount code: {discountCode ? discountCode : "No code used"}
          </ListItem>
        </UnorderedList>

        {type === "lockers" &&
          <>
            <Text>Storage and suitcases:</Text>

            <UnorderedList>
              <ListItem>Small: {locker?.small}</ListItem>
              <ListItem>Medium: {locker?.medium}</ListItem>
              <ListItem>Normal: {locker?.normal}</ListItem>
            </UnorderedList>
          </>
        }

        {type === "bike" &&
          <>
            <Text>Bike rental:</Text>

            <UnorderedList>
              <ListItem>Small: {bike?.small}</ListItem>
              <ListItem>Medium: {bike?.medium}</ListItem>
              <ListItem>Children bike: {bike?.childrenBike}</ListItem>
            </UnorderedList>
          </>
        }

        {type === "book" &&
          <>
            <Text>booking</Text>

            <UnorderedList>
              <ListItem>Adults: {book?.adults}</ListItem>
              <ListItem>Children: {book?.children}</ListItem>
              <ListItem>Infants: {book?.infants}</ListItem>
            </UnorderedList>
          </>
        }
      </Box>

      <Text>
        Please retain this email as your receipt for the transaction.
        Should you have any questions or require further assistance,
        please do not hesitate to reach out to our friendly staff at
        +34680841402 or via email at julio@beyondvalencia.com We hope
        you have a wonderful time exploring Valencia without the burden
        of carrying your luggage. Your belongings will be ready for
        pick-up on 17/10/2023 at the time specified in the tag during
        your drop-off. Please bring this confirmation email or any valid
        identification for verification purposes. In addition, you can
        use the following discount code for more services, such as suitcase
        delivery and transfers to the train station or airport
        (including Castellon, Valencia, or Alicante).
      </Text>

      <Box
        p="10px"
        rounded="5px"
        bg="#202020"
        boxShadow="0px 3.5px 5.5px 0px rgba(0, 0, 0, 0.02)"
      >
        <Text
          color="#FFFFFF"
        >
          Discount code: BEYONDCAR23
        </Text>
      </Box>

      <Text>
        Once again, thank you for choosing our suitcase storage service.
        We appreciate your trust in us and look forward to serving you again in the future.
      </Text>

      <Text>
        Best regards.
      </Text>
    </Flex>
  </Flex>
);

