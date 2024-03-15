import './Header.css'
export default function Header({ src, desc }) {
  return (
    <>
      <header>
        <img src={src} alt="" />
          <p>{desc}</p>
      </header>
    </>
  );
}
