import "./PackagesTrending.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import PackageCard from "../PackageCard/PackageCard";
import { Fragment } from "react";
import { packagesData } from '../../data.js'


export default function PackagesTrending() {
  return (
    <section className="packages">
      <div className="container">
        <SectionTitle
          topTitle="trendy"
          mainTitle="Our Trending Tour Packages"
        />
        <div className="packages-cards flex-center">
          {packagesData.map((el, idx) => {
            return (
              <Fragment key={idx}>
                <PackageCard packageData={el}/>
              </Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
