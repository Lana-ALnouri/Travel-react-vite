import './SectionTitle.css'

export default function SectionTitle({topTitle , mainTitle}) {
  return (
    <>
      <div className="section-heading">
        <span>{topTitle}</span>
        <h1>{mainTitle}</h1>
      </div>
    </>
  );
}
