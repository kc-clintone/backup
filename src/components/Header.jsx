import { useAuth, UserButton } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

function Header() {
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "artists", label: "For Artists" },
    { id: "categories", label: "Categories" },
  ];

  const [activeSection, setActiveSection] = useState("home");

  // Scroll effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );

    links.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Nav link extra styles
  const navLinkClass = (id) =>
    `
      font-lato font-semibold text-sm uppercase transition-all duration-200 
      ${
        activeSection === id
          ? "text-red-600 underline underline-offset-4 decoration-red-600"
          : "text-black"
      }
      hover:text-red-600 hover:underline hover:underline-offset-4 hover:decoration-red-600
    `;

  return (
    <header className="fixed top-0 left-0 w-full bg-black h-20 z-50">
      <nav className="max-w-screen-xl mx-auto h-full flex items-center px-8">
        <div className="w-full flex items-center justify-between bg-white rounded-full px-10 py-2">
          <Link
            to="/"
            className="font-adumu text-3xl mt-1.5 uppercase tracking-wide text-black"
          >
            SANAA
          </Link>
          <div className="flex items-center gap-10">
            {links.map(({ id, label }) => (
              <a key={id} href={`#${id}`} className={navLinkClass(id)}>
                {label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-6">
            {isSignedIn ? (
              <>
                <Link
                  to="/dashboard"
                  className="bg-red-600 text-white font-bold rounded-full px-5 py-2 text-sm font-lato hover:bg-red-700 transition"
                >
                  Dashboard
                </Link>
              </>
            ) : (
              <>
                <Button
                  onClick={() => navigate("/sign-in")}
                  className="
                    border border-red-600 text-red-600 font-bold 
                    rounded-full px-5 py-2
                    hover:bg-red-600 hover:text-white hover:border-transparent
                    transition bg-transparent
                  "
                >
                  Log In
                </Button>

                <Button
                  onClick={() => navigate("/sign-up")}
                  className="
                    bg-red-600 text-white font-bold rounded-full px-5 py-2
                    hover:bg-red-700 
                    transition
                  "
                >
                  Sign Up
                </Button>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
