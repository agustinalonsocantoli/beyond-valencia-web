// Components
import { GroupServices } from "@/shared/components/Services/GroupServices";
import { Footer } from "@/shared/components/Footer/Footer";
import { Events } from "@/shared/components/Events/Events";
import { Whatsapp } from "@/shared/components/Custom/Whatsapp";
import { Options } from "@/shared/components/Options/Options";
import { Navbar } from "@/shared/components/Navbar/Navbar";
import { Exposure } from "@/shared/components/Exposure/Exposure";
// import { Services } from "../components/shared/Services";
import { DataInt } from "../../interfaces/services.model";
import { getRevalidatedData, getStaticData } from "@/shared/middlewares/fetcher";
import { isMobile } from 'react-device-detect';
import { Services } from "@/shared/components/Services/Services";

export default async function Experiences() {
    const { data: multimediaExperiences } = await getStaticData("multimedia?landing=experiences")
    const { data: contentExperiences } = await getRevalidatedData("content?landing=experiences")
    const { data: contentDaytrips } = await getRevalidatedData("content?landing=daytrips")

    const experiencesData: DataInt = {
        h1: "Meeting point in the City",
        h2: "PERSONALIZED EXPERIENCE",
        content: contentExperiences
    }

    return (
        <div >
            <Navbar title={"Experiences"} subtitle={"Experiences"} />

            <Exposure
                data={multimediaExperiences}
            />

            {isMobile
            ? 
                <Services
                    sliderPage1={experiencesData} 
                    sliderPage2={contentDaytrips}
                />
            :
            <GroupServices 
                    sliderPage1={experiencesData} 
                    sliderPage2={contentDaytrips}
                />
            }


            <Events />

            <Options />

            <Whatsapp />

            <Footer />
        </div>
    );
}