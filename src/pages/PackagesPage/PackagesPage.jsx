import './PackagesPage.css'
import CityCard from "../../components/CityCard/CityCard";
import Header from "../../components/Header/Header";
import packages_bg from "./../../assets/images/packages-bg.png";
import {citiesData} from './../../data'
export default function PackagesPage() {
  return (
    <>
      <Header src={packages_bg} desc="Travel With Us" />
      <div className="container">
        <div className="cities-cards flex-center">
          {citiesData.map((el, idx) => {
            return (
              <div key={idx}>
                <CityCard data={el} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
