// Components
import { Navbar } from "@/shared/components/Navbar/Navbar";
import { Exposure } from "@/shared/components/Exposure/Exposure";
import { GroupServices } from "@/shared/components/Services/GroupServices";
import { Footer } from "@/shared/components/Footer/Footer";
import { Events } from "@/shared/components/Events/Events";
import { Whatsapp } from "@/shared/components/Custom/Whatsapp";
import { Options } from "@/shared/components/Options/Options";
// import { Services } from "../components/shared/Services";
import { DataInt } from "@/interfaces/services.model";
import { getRevalidatedData, getStaticData } from "@/shared/middlewares/fetcher";
import { isMobile } from 'react-device-detect';
import { Services } from "@/shared/components/Services/Services";

export default async function Daytrips() {
    const { data: multimediaDaytrips } = await getStaticData("multimedia?landing=daytrips")
    const { data: contentDaytrips } = await getRevalidatedData("content?landing=daytrips")
    const { data: contentExperiences } = await getRevalidatedData("content?landing=experiences")

    const daytripsData: DataInt = {
        h1: "Transportation and tiquets included",
        h2: "SPORTS EXPERIENCES",
        content: contentDaytrips
    }

    return (
        <div>
            <Navbar title={"Day Trips"} subtitle={"Days Trips"} />

            <Exposure
                data={multimediaDaytrips}
            />

            {isMobile
                ?
                <Services
                    sliderPage1={daytripsData}
                    sliderPage2={contentExperiences}
                />
                :
                <GroupServices
                    sliderPage1={daytripsData}
                    sliderPage2={contentExperiences}
                />
            }


            <Events />

            <Options />

            <Whatsapp />

            <Footer />
        </div>
    );
}