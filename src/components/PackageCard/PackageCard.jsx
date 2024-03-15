import './PackageCard.css'
import calendar_icon from './../../assets/images/uil_calender.svg'
import user_icon from "./../../assets/images/user-avatar.svg";
import star_icon from "./../../assets/images/star.svg";
export default function PackageCard({packageData})
{
  const { image, flag, days, people_number, description, city_name } = packageData;
  return (
    <>
      <div className="package_card">
        <div className="image">
          <img src={image} alt="" className="card_img" />
          <img src={flag} alt="" className="flag" />
        </div>
        <div
          style={{
            background: "#f9f9f9",
            padding: "30px 0",
            marginTop: "-7px",
          }}
        >
          <div className="details-1 flex-bw">
            <div>
              <img src={calendar_icon} alt="" />
              <span>{days} Days</span>
            </div>
            <div>
              <img src={user_icon} alt="" />
              <span>{people_number} People going</span>
            </div>
          </div>

          <div className="details-2 flex-bw">
            <h3>{city_name}</h3>
            <div className="stars">
              <img src={star_icon} alt="" />
              <img src={star_icon} alt="" />
              <img src={star_icon} alt="" />
              <img src={star_icon} alt="" />
              <img src={star_icon} alt="" />
            </div>
          </div>

          <p>{description}</p>
          <button>Explore Now</button>
        </div>
      </div>
    </>
  );
}
