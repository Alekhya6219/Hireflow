import { useState, useMemo, } from "react";
import {
  Typography,
  Box,
  Button,
  Pagination,
} from "@mui/material";

import jobs from "../data/jobs";
import JobGrid from "../components/jobs/JobGrid";

function SavedJobs() {
  const savedJobIds = JSON.parse(
    localStorage.getItem("savedJobs") || "[]"
  );

  const savedJobs = jobs.filter((job) =>
    savedJobIds.includes(job.id)
  );

  const [page, setPage] = useState(1);

  const JOBS_PER_PAGE = 4;

 

  const totalPages = Math.ceil(
    savedJobs.length / JOBS_PER_PAGE
  );

  const paginatedJobs = useMemo(() => {
    return savedJobs.slice(
      (page - 1) * JOBS_PER_PAGE,
      page * JOBS_PER_PAGE
    );
  }, [savedJobs, page]);

  const handleClearSavedJobs = () => {
    const confirmClear = window.confirm(
      "Are you sure you want to remove all saved jobs?"
    );

    if (!confirmClear) return;

    localStorage.removeItem("savedJobs");
    window.location.reload();
  };

  return (
    <Box
      sx={{
        bgcolor: "#F8FAFC",
        minHeight: "100vh",
        py: 6,
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: 3,
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
            mb: 5,
          }}
        >
          <Box>
            <Typography
              variant="h3"
              fontWeight={700}
            >
              Saved Jobs
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ mt: 1 }}
            >
              Keep track of your favourite opportunities.
            </Typography>

            <Typography
              sx={{
                mt: 2,
                color: "#2563EB",
                fontWeight: 600,
                fontSize: "16px",
              }}
            >
              {savedJobs.length} Job
              {savedJobs.length !== 1 ? "s" : ""} Saved
            </Typography>
          </Box>

          {savedJobs.length > 0 && (
            <Button
              variant="outlined"
              color="error"
              onClick={handleClearSavedJobs}
              sx={{
                borderRadius: "10px",
                textTransform: "none",
                fontWeight: 600,
              }}
            >
              Clear Saved Jobs
            </Button>
          )}
        </Box>

        {/* Saved Jobs */}
        {savedJobs.length > 0 ? (
          <>
            <JobGrid jobs={paginatedJobs} />

            {totalPages > 1 && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: 5,
                }}
              >
                <Pagination
                  count={totalPages}
                  page={page}
                  onChange={(event, value) =>
                    setPage(value)
                  }
                  color="primary"
                  shape="rounded"
                  size="large"
                />
              </Box>
            )}
          </>
        ) : (
          <Box
            sx={{
              bgcolor: "#fff",
              border: "1px solid #E2E8F0",
              borderRadius: "20px",
              p: 8,
              textAlign: "center",
            }}
          >
            <Typography
              variant="h5"
              fontWeight={700}
              gutterBottom
            >
              No Saved Jobs
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ mb: 3 }}
            >
              You haven't saved any jobs yet.
            </Typography>

            <Button
              variant="contained"
              href="/jobs"
              sx={{
                borderRadius: "12px",
                textTransform: "none",
                fontWeight: 600,
                px: 4,
              }}
            >
              Browse Jobs
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default SavedJobs;