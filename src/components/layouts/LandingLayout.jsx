import Header from "../Header";
import Footer from "../Footer";

export default function LandingLayout({ children }) {
  return (
    <>
      <Header />
      {/* TODO: Will add styles later - for now, we will use this as it is.   */}
      <main>{children}</main>
      <Footer />
    </>
  );
}
