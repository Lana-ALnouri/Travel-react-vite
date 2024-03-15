import './CityCard.css'
import star from './../../assets/images/star_2.svg'
export default function CityCard({ data })
{
  const { date, people_number, city_name, description, price, rate, image } = data;
  return (
    <>
      <div className="city_card">
        <img src={image} alt="" className='city_img' />
        <div className="details_bottom">
          <p>{date}</p>
          <p>{people_number} People</p>
        </div>
        <div>
          <h3 className='cityName'>{city_name}</h3>
          <p className='desc'>{description}</p>
          <div className='price flex-al-c'>
            <span>{price} $</span>
            <span>
              <img src={star} alt=""className='star' />
              {rate}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
