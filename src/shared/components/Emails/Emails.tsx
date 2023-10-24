import { 
    Body, 
    Column, 
    Container, 
    Head, 
    Heading, 
    Hr, 
    Html, 
    Img, 
    Link, 
    Preview, 
    Row, 
    Section, 
    Text, 
    Tailwind 
} from '@react-email/components';
import * as React from 'react';

const baseUrl = process.env.URL
    ? `https://${process.env.NEXT_PUBLIC_BASE_URL}`
    : '';


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

const Emails = (
    {
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
    }: TemplateEmailInt
) => {
    const previewText = `BeyondValencia`;

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Tailwind>
                <Body className="bg-black my-auto mx-auto font-sans">
                    <Container className="my-10 mx-auto p-5 w-[600px]">
                        <Section className="mt-8">
                            <Img
                                src={`${baseUrl}/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FlogoW.d647767c.png&w=3840&q=75`}
                                width="300"
                                height="100%"
                                alt="Logo example"
                                className="my-0 mx-auto"
                            />
                        </Section>

                        <Heading className="text-2xl font-normal text-center p-0 my-8 mx-0 text-white">
                            Thank you for choosing our services!
                        </Heading>

                        <Row>
                            <Column>
                                <Container className='w-[200px] h-[150px] rounded-md overflow-hidden'>
                                    <Img
                                        src={`${baseUrl}/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2Fc2b9920a-649c-4bc9-8393-0e7aed768e3f-vgjggn.jpg&w=3840&q=75`}
                                        alt="albufera"
                                        className='h-full w-full'
                                    />
                                </Container>
                            </Column>

                            <Column>
                                <Text className="text-sm text-white ml-4 ml-4">
                                    La Albufera Sunset, a captivating boat journey through the serene waterways of Albufera Park near Valencia. As the sun gracefully sets, witness the sky painted in vibrant hues, creating a breathtaking backdrop. Savor local wines, embrace the tranquility of the surroundings, and create cherished memories amidst the enchanting beauty of nature's masterpiece.
                                    <Link
                                        href={`#`}
                                        className="text-blue-600 no-underline pl-2"
                                    >
                                        Read More
                                    </Link>
                                </Text>
                            </Column>
                        </Row>

                        <Row>
                            <Column>
                                <Container className='w-[200px] h-[150px] rounded-md overflow-hidden'>
                                    <Img
                                        src={`${baseUrl}/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2Fa7e13b2b-def2-4d47-b347-e5eb59e805d0-57fgy6.jpg&w=3840&q=75`}
                                        alt="bikeride"
                                        className='h-full w-full'
                                    />
                                </Container>
                            </Column>
                            <Column>
                                <Text className="text-sm text-white ml-4">
                                    Come and explore the vibrant neighborhood of El Cabañal, the up-and-coming hotspot for remote workers and startups in Valencia! Our 2-hour guided bike tour will take you on a journey through the beach town of the city, departing from the Old Town and passing by the iconic City of Arts and Sciences, before arriving at El Cabañal.

                                    <Link
                                        href={`#`}
                                        className="text-blue-600 no-underline pl-2"
                                    >
                                        Read More
                                    </Link>
                                </Text>
                            </Column>
                        </Row>

                        <Row>
                            <Column>
                                <Container className='w-[200px] h-[150px] rounded-md overflow-hidden'>
                                    <Img
                                        src={`${baseUrl}/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F855b6349-509d-4181-acc9-492e994f77fd-ip4oc.jpg&w=3840&q=75`}
                                        alt="villareal"
                                        className='h-full w-full'
                                    />
                                </Container>
                            </Column>
                            <Column>
                                <Text className="text-sm text-white ml-4">
                                    Explore the brand-new Ceramic Stadium in a guided visit. Witness the inner workings of the club as you tour the changing rooms, football field, VIP boxes, and more. Delight in a traditional Valencian lunch, with meal choice at the club's exclusive restaurant, El Ceramista, where you'll experience a contemporary and football-inspired dining experience that captures the essence of Villa-real's present and future.

                                    <Link
                                        href={`#`}
                                        className="text-blue-600 no-underline pl-2"
                                    >
                                        Read More
                                    </Link>
                                </Text>
                            </Column>
                        </Row>

                        <Hr className="border border-solid border-[#eaeaea] my-6 mx-0 w-full" />

                        <Container>
                            <Heading className="text-2xl font-normal text-center py-2 text-white">
                                About your order
                            </Heading>

                            <Text className="text-sm text-white">Name: {name}</Text>
                            <Text className="text-sm text-white">Email 📧 address:: {email}</Text>
                            <Text className="text-sm text-white">Phone 📱 number: {phone}</Text>
                            <Text className="text-sm text-white">Drop-off dates: {date}</Text>
                            {time && <Text className="text-sm text-white">Booking time: {time}</Text>}
                            {(comment && comment !== "") && 
                                <Text className="text-sm text-white">
                                    Comments: {comment}
                                </Text>
                            }
                            <Text className="text-sm text-white">
                                Discount code: {discountCode ? discountCode : "No code used"}
                            </Text>

                            {type === "lockers" &&
                                <ul className='ml-[20px] text-white'>
                                    <li><Text className="text-sm text-white">Small: {locker?.small}</Text></li>
                                    <li><Text className="text-sm text-white">Medium: {locker?.medium}</Text></li>
                                    <li><Text className="text-sm text-white">Normal: {locker?.normal}</Text></li>
                                </ul>
                            }

                            {type === "bike" &&
                                <ul className='ml-[20px] text-white'>
                                    <li><Text className="text-sm text-white">Small: {bike?.small}</Text></li>
                                    <li><Text className="text-sm text-white">Medium: {bike?.medium}</Text></li>
                                    <li><Text className="text-sm text-white">Children bike: {bike?.childrenBike}</Text></li>
                                </ul>
                            }

                            {type === "book" &&
                                <ul className='ml-[20px] text-white'>
                                    <li><Text className="text-sm text-white">Adults: {book?.adults}</Text></li>
                                    <li><Text className="text-sm text-white">Children: {book?.children}</Text></li>
                                    <li><Text className="text-sm text-white">Infants: {book?.infants}</Text></li>
                                </ul>
                            }

                            <Text
                                className="text-lg font-bold py-[5px] px-[15px] text-right text-white"
                            >
                                Total {total}€
                            </Text>
                        </Container>

                        <Hr className="border border-solid border-[#eaeaea] my-6 mx-0 w-full" />

                        <Container
                            className='bg-[#fffbf6] rounded'
                        >
                            <Text className="text-md text-[#202020] font-bold px-5">
                                Discount code "BEYONDCAR23"
                            </Text>
                        </Container>

                        <Text className="text-sm text-white">
                            We appreciate your trust in us and look forward to serving you again in the future.
                        </Text>

                        <Text className="text-sm text-white">
                            Best regards.
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

const resetText = {
    margin: '0',
    padding: '0',
    lineHeight: 1.4,
};

const informationTable = {
    borderCollapse: 'collapse' as const,
    borderSpacing: '0px',
    color: 'rgb(51,51,51)',
    backgroundColor: 'rgb(250,250,250)',
    borderRadius: '3px',
    fontSize: '12px',
};

const informationTableRow = {
    height: '46px',
};

const informationTableColumn = {
    paddingLeft: '20px',
    borderStyle: 'solid',
    borderColor: 'white',
    borderWidth: '0px 1px 1px 0px',
    height: '44px',
};

const informationTableLabel = {
    ...resetText,
    color: 'rgb(102,102,102)',
    fontSize: '10px',
};

const informationTableValue = {
    fontSize: '12px',
    margin: '0',
    padding: '0',
    lineHeight: 1.4,
};


export default Emails;