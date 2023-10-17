import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

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
  <Html>
    <Head />
    <Body
      style={{
        alignItems: "center",
        background:"#202020",
        padding: "20px",
        borderRadius: "5px",
        gap: "20px",
      }}
    >
      <Img
        src={`https://beyondvalencia.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FlogoW.d647767c.png&w=3840&q=75`}
        alt='logoEmail'
        width={300}
        style={{
          height: "100%",
          objectFit: "cover"
        }}
      />

      <Container
        style={{
          margin: "0 auto 0 auto",
          flexDirection: "column",
          display: "flex",
          background: "#F8F8FC",
          padding: "20px",
          borderRadius: "20px",
          boxShadow: "0px 3px 4px 0px rgba(255, 255, 255, .3)",
          gap: "20px",
        }}
      >
        <Text>
          Dear {name},
        </Text>

        <Text>
          Thank you for choosing our service!
          Below, you will find the details of your transaction:
        </Text>

        <Section
          style={{
            padding: "10px",
            borderRadius: "5px",
            background: "#202020",
            color: "#FFFFFF",
            boxShadow: "0px 3.5px 5.5px 0px rgba(0, 0, 0, 0.02)",
          }}
        >
          <Text>Customer information</Text>

          <Section>
            <Text>- Email 📧 address: {email}</Text>
            <Text>- Phone 📱 number: {phone}</Text>
          </Section>
        </Section>

        <Section
          style={{
            padding: "10px",
            borderRadius: "5px",
            background: "#202020",
            color: "#FFFFFF",
            boxShadow: "0px 3.5px 5.5px 0px rgba(0, 0, 0, 0.02)",
          }}
        >
          <Text>Details</Text>

          <Section>
            <Text>- Drop-off dates: {date}</Text>
            {time && <Text>- Booking time: {time}</Text>}
            {comment && <Text>- Comments: {comment}</Text>}
            <Text>- Total payed: {total}€</Text>
            <Text>- 
              Discount code: {discountCode ? discountCode : "No code used"}
            </Text>
          </Section>

          {type === "lockers" &&
            <>
              <Text>Storage and suitcases:</Text>

              <Section>
                <Text>- Small: {locker?.small}</Text>
                <Text>- Medium: {locker?.medium}</Text>
                <Text>- Normal: {locker?.normal}</Text>
              </Section>
            </>
          }

          {type === "bike" &&
            <>
              <Text>Bike rental:</Text>

              <Section>
                <Text>- Small: {bike?.small}</Text>
                <Text>- Medium: {bike?.medium}</Text>
                <Text>- Children bike: {bike?.childrenBike}</Text>
              </Section>
            </>
          }

          {type === "book" &&
            <>
              <Text>booking</Text>

              <Section>
                <Text>- Adults: {book?.adults}</Text>
                <Text>- Children: {book?.children}</Text>
                <Text>- Infants: {book?.infants}</Text>
              </Section>
            </>
          }
        </Section>

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

        <Section
          style={{
            padding: "10px",
            borderRadius: "5px",
            background: "#202020",
            boxShadow: "0px 3.5px 5.5px 0px rgba(0, 0, 0, 0.02)"
          }}
        >
          <Text
            style={{
              color: "#FFFFFF"
            }}
          >
            Discount code: BEYONDCAR23
          </Text>
        </Section>

        <Text>
          Once again, thank you for choosing our suitcase storage service.
          We appreciate your trust in us and look forward to serving you again in the future.
        </Text>

        <Text>
          Best regards.
        </Text>
      </Container>
    </Body>
  </Html>
);

