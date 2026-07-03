import { useMemo, useState,  } from "react";
import { Pagination } from "@mui/material";
import { useSearchParams } from "react-router-dom";

import Container from "../components/ui/Container";
import JobFilters from "../components/jobs/JobFilter";
import JobGrid from "../components/jobs/JobGrid";

import jobs from "../data/jobs";

function Jobs() {
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");

  const [searchParams] = useSearchParams();
  const company = searchParams.get("company") || "";

  const [search, setSearch] = useState(company);

  const [page, setPage] = useState(1);

  const JOBS_PER_PAGE = 4;

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const searchText = search.toLowerCase();

      const matchSearch =
        job.title.toLowerCase().includes(searchText) ||
        job.company.toLowerCase().includes(searchText) ||
        job.location.toLowerCase().includes(searchText) ||
        job.skills.some((skill) =>
          skill.toLowerCase().includes(searchText)
        );

      const matchLocation =
        !location || job.location === location;

      const matchType =
        !jobType || job.type === jobType;

      return (
        matchSearch &&
        matchLocation &&
        matchType
      );
    });
  }, [search, location, jobType]);

 

  const totalPages = Math.ceil(
    filteredJobs.length / JOBS_PER_PAGE
  );

  const paginatedJobs = filteredJobs.slice(
    (page - 1) * JOBS_PER_PAGE,
    page * JOBS_PER_PAGE
  );

  return (
    <section
      style={{
        background: "#F8FAFC",
        minHeight: "100vh",
        paddingTop: "40px",
        paddingBottom: "40px",
      }}
    >
      <Container>
        <div className="mb-8">
          <h1
            className="text-5xl font-bold"
            style={{
              color: "#0F172A",
            }}
          >
            Find Your Next Opportunity
          </h1>

          <p className="mt-2 text-slate-500">
            Discover jobs from top companies around the world.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-4">
          <JobFilters
            search={search}
            setSearch={setSearch}
            location={location}
            setLocation={setLocation}
            jobType={jobType}
            setJobType={setJobType}
          />

          <div className="lg:col-span-3">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "24px",
              }}
            >
              <h2
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#0F172A",
                }}
              >
                {filteredJobs.length} Jobs Found
              </h2>
            </div>

            <JobGrid jobs={paginatedJobs} />

            {totalPages > 1 && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "40px",
                }}
              >
                <Pagination
                  count={totalPages}
                  page={page}
                  onChange={(event, value) => setPage(value)}
                  color="primary"
                  shape="rounded"
                  size="large"
                />
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Jobs;