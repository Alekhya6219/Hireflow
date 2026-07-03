import { Link } from "react-router-dom";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import FavoriteIcon from "@mui/icons-material/Favorite";

function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid gap-10 md:grid-cols-4">

          <div>
            <h2 className="text-2xl font-bold text-blue-600">
              HireFlow
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Discover opportunities from top companies, save your
              favourite jobs and build your career with confidence.
            </p>
          </div>

        
          <div>
            <h3 className="mb-4 font-semibold text-slate-900">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-slate-600">

              <li>
                <Link
                  to="/jobs"
                  className="hover:text-blue-600 transition"
                >
                  Jobs
                </Link>
              </li>

              <li>
                <Link
                  to="/companies"
                  className="hover:text-blue-600 transition"
                >
                  Companies
                </Link>
              </li>

              <li>
                <Link
                  to="/saved-jobs"
                  className="hover:text-blue-600 transition"
                >
                  Saved Jobs
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-blue-600 transition"
                >
                  About
                </Link>
              </li>

            </ul>
          </div>

       
          <div>
            <h3 className="mb-4 font-semibold text-slate-900">
              Built With
            </h3>

            <ul className="space-y-3 text-sm text-slate-600">
              <li>React.js</li>
              <li>Vite</li>
              <li>Material UI</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-slate-900">
              Connect
            </h3>

            <div className="flex gap-4">

              <a
                href="https://github.com/Alekhya6219/Hireflow"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border p-3 transition hover:bg-slate-100"
              >
                <GitHubIcon fontSize="small" />
              </a>

              <a
                href="https://www.linkedin.com/in/alekhya-vadapally-702164277/"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border p-3 transition hover:bg-slate-100"
              >
                <LinkedInIcon fontSize="small" />
              </a>

              <a
                href="vadapallyalekhya6219@gmail.com"
                className="rounded-lg border p-3 transition hover:bg-slate-100"
              >
                <EmailIcon fontSize="small" />
              </a>

            </div>
          </div>

        </div>

        <div className="mt-10 border-t pt-6">

          <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">

            <p>
              © {new Date().getFullYear()} HireFlow. All rights reserved.
            </p>

            <p className="flex items-center gap-1">
              Made with
              <FavoriteIcon
                sx={{
                  color: "#EF4444",
                  fontSize: 18,
                  mx: 0.5,
                }}
              />
              using React & Material UI
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;