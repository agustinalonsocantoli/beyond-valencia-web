import { ContentInt } from "@/interfaces/ContentInt"
import { DataInt } from "@/interfaces/services.model";
import { Flex } from "@chakra-ui/react"
import Link from "next/link"

interface Props {
    data: DataInt | undefined;
}

export const Cards = ({ data }: Props) => {

    return (
        <div className="services">
            <div className="services_title">
                <h1>{data?.h1}</h1>
                <h2>
                    {data?.navigate
                        ? <a href={data?.navigate}>{data?.h2}</a>
                        : data?.h2
                    }
                </h2>
            </div>

            <Flex
                // style={{ padding: resposive ? "15px 5%" : "15px 3%" }}
                style={{ padding: "15px 5%" }}
                mb="150px"
            >
                <Flex className="services_conteiner" style={{ gap: "70px" }} mb="-50px">
                    {
                        data?.content?.map((item: ContentInt, index: number) => (
                            <Link key={index} className="services_img" href={item?.link}>
                                <picture>
                                    <source srcSet={item?.imgW} type="image/webp" />
                                    <img src={item?.img} alt={`img/${item?.h3}`} />
                                </picture>

                                <div className="img_content">
                                    <h3>{item?.h3}</h3>
                                    <p>{item?.p}</p>
                                </div>
                            </Link>
                        ))
                    }
                </Flex>
            </Flex>
        </div>
    )
}