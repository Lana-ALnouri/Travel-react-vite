import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
export default function MainLayout({children}) {
  return (
    <>
      <Nav/>
      {children}
      <Footer />
    </>
  );
}
