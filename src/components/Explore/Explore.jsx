import './Explore.css'
import ExploreBanner from '../ExploreBanner/ExploreBanner';
import { ExploreBanners } from './../../data'
export default function Explore() {

  return (
    <section className="explore">
      {ExploreBanners.map((el, idx) => {
        return (
          <div
            key={idx}
            className="explore_banner flex-center"
            style={{ backgroundImage: `url(${el.explore_bg})` }}
          >
            <ExploreBanner exploreData={el} />
          </div>
        );
      })}
    </section>
  );
}
