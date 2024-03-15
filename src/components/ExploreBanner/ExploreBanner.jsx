import './ExploreBanner.css'
export default function ExploreBanner({ exploreData }) {
  const { top_title, main_title } = exploreData;
  return (
    <>
      <div className="explore-content">
        <span>{top_title}</span>
        <h2>{main_title}</h2>
        <button>View Packages</button>
      </div>
    </>
  );
}
