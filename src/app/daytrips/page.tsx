// Components
import { Navbar } from "@/shared/components/Navbar/Navbar";
import { Exposure } from "@/shared/components/Exposure/Exposure";
import { GroupServices } from "@/shared/components/Services/GroupServices";
import { Footer } from "@/shared/components/Footer/Footer";
import { Events } from "@/shared/components/Events/Events";
import { Whatsapp } from "@/shared/components/Custom/Whatsapp";
import { Options } from "@/shared/components/Options/Options";
import { DataInt } from "@/interfaces/services.model";
import { getRevalidatedData, getStaticData } from "@/shared/middlewares/fetcher";
import { Services } from "@/shared/components/Services/Services";
import { Box } from "@chakra-ui/react";

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
        <Box>
            <Navbar title={"Day Trips"} subtitle={"Days Trips"} />

            <Exposure
                data={multimediaDaytrips}
            />

            <Box
                display={{base: "block", xs: "none"}}
            >
                <Services
                    sliderPage1={daytripsData}
                    sliderPage2={contentExperiences}
                />
            </Box>

            <Box
                display={{base: "none", xs: "block"}}
            >
                <GroupServices
                    sliderPage1={daytripsData}
                    sliderPage2={contentExperiences}
                />
            </Box>


            <Events />

            <Options />

            <Whatsapp />

            <Footer />
        </Box>
    );
}