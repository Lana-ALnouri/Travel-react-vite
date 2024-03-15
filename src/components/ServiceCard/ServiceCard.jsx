import './ServiceCard.css'
export default function ServiceCard({ data }) {
  const { title, image, description } = data;
  return (
    <>
      <div className="card flex-col">
        <img src={image} alt="" />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </>
  );
}
