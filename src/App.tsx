import { carData } from "./constants/data";
import HeroBanner from "./components/heroBanner";
import SimpleColumn from "./components/simple_column";
import Footer from "./components/footer";

function App() {

  return (
    <>
      <HeroBanner />
      <SimpleColumn carData={carData}/>
      <Footer />
    </>
  )
}

export default App
