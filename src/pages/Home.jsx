// import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import SearchCard from "../components/home/SearchCard";
import Stats from "../components/home/Stats";
import FeaturedJobs from "../components/home/FeaturedJobs";

function Home() {
  return (
    <section className="bg-slate-50">
      <Container>
        <div className="flex min-h-[80vh] flex-col items-center justify-center text-center">

         <div className="mt-8 mb-6 text-center">
  <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
    🚀 AI Assisted Hiring Platform
  </span>
</div>

          <h1 className="mt-8 max-w-4xl text-6xl font-extrabold leading-tight text-slate-900">
            Find Your
            <span className="text-blue-600"> Dream Job </span>
            Faster Than Ever
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-600">
            Discover thousands of jobs from leading companies.
            Search, save, and apply with confidence.
          </p>

         
          <SearchCard />
          <Stats />
          <FeaturedJobs />

        </div>
      </Container>
    </section>
  );
}

export default Home;