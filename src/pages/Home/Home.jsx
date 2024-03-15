import './Home.css'
import Header from "../../components/Header/Header";
import home_bg from './../../assets/images/header-bg.png'
import Services from '../../components/Services/Services';
import Explore from '../../components/Explore/Explore';
import PackagesTrending from '../../components/PackagesTrending/PackagesTrending';

export default function Home() {
  return (
    <>
      <div className="home">
        <Header src={home_bg} desc="No matter where you're going to, we'll take you there"/>
        <Services />
        <Explore />
        <PackagesTrending />
      </div>
    </>
  );
}
