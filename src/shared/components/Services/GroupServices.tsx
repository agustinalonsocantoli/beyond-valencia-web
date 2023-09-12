// interfaces
import { ContentInt, DataInt } from "../../../interfaces/services.model"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Link from "next/link";
// import { Skeleton } from "@mui/material";

interface Props {
    loading: boolean;
    sliderPage1: DataInt | undefined;
    sliderPage2?: ContentInt[];
    sliderPage3?: ContentInt[];
}

export const GroupServices = (props: Props) => {
    const { loading, sliderPage1, sliderPage2, sliderPage3, } = props;

    const resposive = window.innerWidth < 1920 ? true : false;

    return (
        <div className="services">
            <div className="services_title">
                <h1>{sliderPage1?.h1}</h1>
                <h2>
                    {sliderPage1?.navigate
                        ? <a href={sliderPage1?.navigate}>{sliderPage1?.h2}</a>
                        : sliderPage1?.h2
                    }
                </h2>
            </div>

            <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={80}
                slidesPerView={1}
                style={{ padding: resposive ? "15px 5%" : "15px 3%" }}
            >
                <SwiperSlide className="services_conteiner" style={{ gap: "70px" }}>
                    {
                    // !loading ?
                        sliderPage1?.content?.map((item: ContentInt, index: number) => (
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
                        // :
                        // sliderPage1?.content?.map((_item: ContentInt, index: number) => (
                        //     <Skeleton
                        //         key={index}
                        //         className="services_img"
                        //         sx={{ bgcolor: "rgba(255, 255, 255, .2)", borderRadius: "20px" }}
                        //         variant="rectangular"
                        //     >

                        //     </Skeleton>
                        // ))
                    }
                </SwiperSlide>


                {sliderPage2 &&
                    <SwiperSlide className="services_conteiner" style={{ gap: "70px" }}>
                        {sliderPage2?.map((item: ContentInt, index: number) => (
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
                        ))}
                    </SwiperSlide>
                }

                {sliderPage3 &&
                    <SwiperSlide className="services_conteiner" style={{ gap: "70px" }}>
                        {sliderPage3?.map((item: ContentInt, index: number) => (
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
                        ))}
                    </SwiperSlide>
                }
            </Swiper>

            <div className="bg_img"></div>

        </div>
    );
}