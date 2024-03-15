import './PromotionSection.css'
import promotion_img from './../../assets/images/promotion_img.png'
export default function PromotionSection()
{
  return (
    <>
      <section className="promotion flex-bw">
        <div className="promotion_content">
          <span>Promotion</span>
          <h2>We Provide You Best Europe Sightseeing Tours</h2>
          <p>
            Et labore harum non nobis ipsum eum molestias mollitia et corporis
            praesentium a laudantium internos. Non quis eius quo eligendi
            corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut
            ducimus illum aut optio quibusdam!
          </p>
          <button>View Packages</button>
        </div>
        <div className="promotion_img">
          <img src={promotion_img} alt="" />
        </div>
      </section>
    </>
  );
}
