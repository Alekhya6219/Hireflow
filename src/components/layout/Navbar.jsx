import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Bookmark } from "lucide-react";

import Logo from "./logo";
import Container from "../ui/Container";
import { navigation } from "../../constants/navigation";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const savedJobs = JSON.parse(
    localStorage.getItem("savedJobs") || "[]"
  );

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${
                    isActive
                      ? "text-blue-600"
                      : "text-slate-600 hover:text-blue-600"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Side */}
         <div className="hidden items-center gap-3 lg:flex">

  <NavLink
    to="/login"
    className="rounded-xl border border-slate-300 px-5 py-2 text-sm font-medium hover:border-blue-600 hover:text-blue-600"
  >
    Login
  </NavLink>

  <NavLink
    to="/signup"
    className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700"
  >
    Sign Up
  </NavLink>

  <NavLink
    to="/saved-jobs"
    className={({ isActive }) =>
      `relative flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition ${
        isActive
          ? "bg-blue-600 text-white"
          : "text-slate-600 hover:bg-slate-100 hover:text-blue-600"
      }`
    }
  >
    <Bookmark size={18} />

    Saved Jobs

    {savedJobs.length > 0 && (
      <span className="rounded-full bg-white px-2 py-0.5 text-xs font-semibold text-blue-600">
        {savedJobs.length}
      </span>
    )}
  </NavLink>

</div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 lg:hidden"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t bg-white lg:hidden">
          <Container>
            <div className="flex flex-col gap-5 py-6">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="font-medium text-slate-700"
                >
                  {item.name}
                </NavLink>
              ))}

              <NavLink
                to="/saved-jobs"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 font-medium text-slate-700"
              >
                <Bookmark size={18} />

                Saved Jobs

                {savedJobs.length > 0 && (
                  <span className="rounded-full bg-blue-600 px-2 py-0.5 text-xs font-semibold text-white">
                    {savedJobs.length}
                  </span>
                )}
              </NavLink>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}

export default Navbar;