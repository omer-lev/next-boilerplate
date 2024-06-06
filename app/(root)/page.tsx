import Footer from "@/components/shared/Landing/Footer";
import Hero from "@/components/shared/Landing/Hero";
import HowItWorks from "@/components/shared/Landing/HowItWorks";
import Pricing from "@/components/shared/Landing/Pricing/Pricing";
import Services from "@/components/shared/Landing/Services/Services";
import UseCases from "@/components/shared/Landing/UseCases/UseCases";
import MobileNavbar from "@/components/shared/MobileNavbar"
import Navbar from "@/components/shared/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <MobileNavbar />

      <Hero />

      <Services />

      <UseCases />

      <HowItWorks />

      <Pricing />

      <Footer />
    </>
  )
}

export default Home;