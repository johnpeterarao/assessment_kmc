import carLogo from "./assets/images/sports-car-white.svg";
import bg from "./assets/images/bg-asset.jpeg";
import { carData } from "./constants/data";
import carLogoPurple from "./assets/images/sports-car-purple.svg";
import carLogoBlue from "./assets/images/sports-car-blue.svg";

type car = {
  name: string;
  price: number;
  svg: string;  
}
function App() {

  return (
    <>
      <section className="relative">
        <div className="hidden md:block absolute z-[5] top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.3)]"></div>
        <div className="absolute top-0 bottom-0 right-0 left-0">
          <img src={bg} alt="" className="h-full object-cover w-full object-top"/>
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
      <section className="px-5 py-10 md:py-0 md:px-[70px] md:pt-[80px] height-lg:pt-140px">
        <div className="xl:max-w-[1500px] xl:mx-auto xl:px-10">
          <div className="flex flex-wrap md:-mx-9">
            { carData?.map((car: car, index: number) => (
              <div className={`${index % 2 == 0 ? 'even' : 'odd hidden'} w-full pb-10 md:w-1/2 md:px-9 md:pb-[80px] height-lg:dblock height-lg:pb-140px`} key={index}>
                <div className="text-center">
                  <img src={car?.svg == 'purple' ? carLogoPurple : carLogoBlue} alt="" className="max-w-[250px] block mx-auto"/>
                  <h3 className="font-bold mt-3 text-xl md:text-4xl ">{car?.name}</h3>
                  <p className="font-bold  text-base mt-2 flex justify-center align-top md:text-2xl"><span className="text-xs md:text-base mr-2">For</span> ${car?.price}</p>
                  <button className="bg-green w-full mt-4 font-reg text-sm py-2 px-5 md:py-3 md:mt-8 md:text-xl">Get Started</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer className="px-5 py-10 bg-deep-teal md:px-[30px] md:py-[55px] ">
        <div className="xl:max-w-[1500px] xl:mx-auto xl:px-10">
          <div className="text-center md:flex md:justify-between md:items-center">
              <h3 className="font-reg text-xl text-green md:text-[50px]  md:leading-[60px]">JOHN PETER D. ARAO</h3>
              <h3 className="font-bold text-2xl mt-5 text-green md:text-[70px]  md:mt-0 md:leading-[80px]">sesimi</h3>
            </div>
            <div className="mt-12 hidden height-lg:dblock">
              <p className="text-2xl text-green font-reg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta delectus cum enim, facere cupiditate sint magni impedit ad suscipit nisi voluptatibus, molestias, ab eos tempore ullam maiores praesentium eaque id.m</p>
            </div>
        </div>
      </footer>
    </>
  )
}

export default App
