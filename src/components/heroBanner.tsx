import carLogo from "../assets/images/sports-car-white.svg";
import bg from "../assets/images/bg-asset.jpeg";


export default function HeroBanner() {
    return (
        <section className="relative">
            <div className="hidden md:block absolute z-[5] top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.3)]"></div>
            <div className="absolute top-0 bottom-0 right-0 left-0">
                <img src={bg} alt="" className="h-full object-cover w-full object-top" />
            </div>
            <div className="xl:max-w-[1500px] xl:mx-auto relative">
                <div className="relative  bg-[rgba(0,0,0,0.3)] text-center py-[80px] px-5 z-10 md:pt-[40px] md:bg-transparent md:px-8 md:max-w-[600px] md:pb-[100px] md:text-left height-lg:pt-58px height-lg:pb-120px height-lg:pt-50px">
                    <h1 className="font-bold text-3xl leading-11 text-white md:text-[90px] md:leading-[100px] height-lg:text-100px height-lg:leading-140px ">Ready to own a car?</h1>
                    <p className="font-reg  text-xl leading-6 text-white md:leading-none md:text-[40px] height-lg:text-50px  ">Your ride, Your savings</p>
                </div>
                <div className="absolute hidden z-10 md:block md:right-10 md:bottom-[80px]">
                    <img src={carLogo} alt="" />
                </div>
            </div>
        </section>
    )
}