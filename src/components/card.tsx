import { carDTO } from "../data-types";

const SimpleCard = ( props: {
    car: carDTO,
    logoUrl: string
}) => {
    return (  
        <div className="text-center">
            <img src={props?.logoUrl} alt="" className="max-w-[250px] block mx-auto md:max-w-none"/>
            <h3 className="font-bold mt-3 text-xl md:text-4xl ">{props?.car?.name}</h3>
            <p className="font-bold  text-base mt-2 flex justify-center align-top md:text-2xl">
                <span className="text-xs md:text-base mr-2">For</span> 
                ${props?.car?.price}
            </p>
            <button className="bg-green w-full mt-4 font-reg text-sm py-2 px-5 md:py-3 md:mt-9 md:text-xl">Get Started</button>
        </div>
    );
}
 
export default SimpleCard;