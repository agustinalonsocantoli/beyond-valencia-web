// Interfaces
import { MultimediaInt } from "@/interfaces/exposure.model";
import Image from "next/image";
import Link from "next/link";
// React

interface Props {
    data: MultimediaInt[] | undefined;
}

export const Exposure = ({ data }: Props) => {

    return (
        <div className="exposure">
            {
                data?.map((item: MultimediaInt, index: number) => (
                    <div key={index} className={`grid-${index + 1}`}>
                        <Link href={item?.navigate ? item?.navigate : ""}>
                            {item?.type === "video" &&
                                <video autoPlay muted loop>
                                    <source src={item?.src} />
                                </video>
                            }

                            {item?.type === "image" &&
                                <Image src={item?.src} alt={`img`} fill={true}/>
                            }

                            <div
                                className={`content-${index + 1}`}
                                style={{
                                    padding: item?.h3 || item?.p ? "5px 0 5px 20px" : 0
                                }}
                            >
                                <h3>{item?.h3}</h3>
                                <p><strong>{item?.span}</strong> {item?.p}</p>
                            </div>
                        </Link>
                    </div>
                ))
            }
        </div>
    );
}