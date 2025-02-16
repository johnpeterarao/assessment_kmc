import carLogoPurple from "../assets/images/sports-car-purple.svg";
import carLogoBlue from "../assets/images/sports-car-blue.svg";
import SimpleCard from "./card";
import { carDTO } from "../data-types";

export default function SimpleColumn(data: {
    carData: carDTO[]
}) {
    
    return (
        <section className="px-5 py-10 md:py-0 md:px-[70px] md:pt-[92px] height-lg:pt-144px">
            <div className="xl:max-w-[1500px] xl:mx-auto xl:px-10">
                <div className="flex flex-wrap md:-mx-9">
                    { data?.carData?.map((car: carDTO, index: number) => (
                    <div className={`${index % 2 == 0 ? 'even' : 'odd hidden'} w-full pb-10 md:w-1/2 md:px-9 md:pb-[91px] height-lg:dblock height-lg:pb-144px`} key={index}>
                        <SimpleCard car={car} logoUrl={car?.svg == 'purple' ? carLogoPurple : carLogoBlue}/>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    )
}