import JobCard from "./JobCard";

function JobGrid({ jobs }) {
  if (jobs.length === 0) {
    return (
      <div className="rounded-3xl bg-white p-12 text-center shadow">
        No jobs found.
      </div>
    );
  }

  return (
    <div className="grid gap-6 xl:grid-cols-2">
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          job={job}
        />
      ))}
    </div>
  );
}

export default JobGrid;