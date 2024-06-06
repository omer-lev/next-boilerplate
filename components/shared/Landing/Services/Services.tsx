import { service_cards } from "@/constants"
import ServiceCard from "./ServiceCard"
import Header from "../../Header"

const Services = () => {
  return (
    <section id='services' className='min-h-screen bg-primary py-28 px-5'>
      <Header
        title="Services"
        subtitle='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, corporis.'
        titleProps="text-accent"
      />

      <div className='grid lg:grid-cols-2 gap-y-10 lg:mt-24'>
        {/* CONSTANTS (service_cards) */}
        {service_cards.map((card, index) => (
          <ServiceCard key={index} {...card} />
        ))}
      </div>
    </section>
  )
}

export default Services