import "./Services.css";
import ServiceCard from "../ServiceCard/ServiceCard";
import SectionTitle from "../SectionTitle/SectionTitle";
import { servicesData } from "./../../data";

export default function Services() {
  return (
    <>
      <section id="services">
        <div className="container">
          <SectionTitle
            topTitle="CATEGORY"
            mainTitle="We Offer Best Services"
          />
          <div className="services-cards flex-center">
            {servicesData.map((el, idx) => {
              return (
                <div key={idx}>
                  <ServiceCard data={el} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
