import Container from "../ui/Container";
import JobCard from "../jobs/JobCard";
import jobs from "../../data/jobs";

function FeaturedJobs() {
  return (
    <section className="py-24">
      <Container>
        <div className="text-center">
          <p className="font-semibold text-blue-600">
            Featured Opportunities
          </p>

          <h2 className="mt-3 text-5xl font-bold">
            Explore Top Jobs
          </h2>

          <p className="mt-4 text-slate-500">
            Hand-picked opportunities from top companies.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FeaturedJobs;