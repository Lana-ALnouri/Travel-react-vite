import './TourPlans.css'
import TourPlans_img from './../../assets/images/TourPlans-img.png'
export default function TourPlans() {
  return (
    <>
      <section className="TourPlans">
        <div className="container flex-bw">
          <div className="image">
            <img src={TourPlans_img} alt="" />
          </div>
          <div className="info">
            <span>Trend</span>
            <h2>Our Popular Tour Plans</h2>
            <p>
              Et labore harum non nobis ipsum eum molestias mollitia et corporis
              praesentium a laudantium. Et labore harum non nobis ipsum eum
              molestias mollitia et corporis praesentium a laudantium.
            </p>
            <div className='rate flex-al-c'>
              <div>
                <p>78%</p>
                <h4>Vacations</h4>
              </div>
              <div>
                <p>55%</p>
                <h4>Honeymoon</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
