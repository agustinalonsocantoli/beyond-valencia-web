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
import { getStaticData } from "@/shared/middlewares/fetcher";


export default async function Daytrips() {
    // const isMobile = window.innerWidth < 1025 ? true : false;

    const { data: multimediaDaytrips } = await getStaticData("multimedia?landing=daytrips")
    const { data: contentDaytrips } = await getStaticData("content?landing=daytrips")
    const { data: contentExperiences } = await getStaticData("content?landing=experiences")

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

            {/* {isMobile
            ? 
                <Services 
                    sliderPage1={dataDaytrips} 
                    sliderPage2={contentExperiences}
                    loading={loadingContent}
                />
            : */}
            <GroupServices
                sliderPage1={daytripsData}
                sliderPage2={contentExperiences}
            />


            <Events />

            <Options />

            <Whatsapp />

            <Footer />
        </div>
    );
}