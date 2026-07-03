import { BriefcaseBusiness } from "lucide-react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-2"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg">
        <BriefcaseBusiness size={22} />
      </div>

      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          HireFlow
        </h1>

        <p className="text-xs text-slate-500">
          AI Job Platform
        </p>
      </div>
    </Link>
  );
}

export default Logo;