import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import jobs from "../data/jobs";

import {
  Container,
  Box,
  Typography,
  Chip,
  Button,
  Stack,
  Paper,
  Divider,
} from "@mui/material";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ApplicationDialog from "../components/jobs/ApplicationDialog";
import companyLogos from "../utils/CompanyLogos";

function JobDetails() {
  const [open, setOpen] = useState(false);

const handleApply = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};
  const { id } = useParams();

  const job = jobs.find((item) => item.id === Number(id));

  if (!job) {
    return (
      <Container sx={{ py: 8 }}>
        <Typography variant="h4">
          Job Not Found
        </Typography>
      </Container>
    );
  }

  return (
    <Box
      sx={{
        bgcolor: "#F8FAFC",
        minHeight: "100vh",
        py: 6,
      }}
    >
      <Container maxWidth="lg">
      <Button
  component={Link}
  to="/jobs"
  startIcon={<ArrowBackIcon />}
  sx={{
    mb: 3,
    textTransform: "none",
    fontWeight: 600,
  }}
>
  Back to Jobs
</Button>

        <Paper
          elevation={0}
          sx={{
            p: 5,
            borderRadius: 4,
            border: "1px solid #E2E8F0",
          }}
        >

          {/* Header */}

          <Stack
            direction="row"
            spacing={3}
            alignItems="center"
          >

            <Box
              sx={{
                width: 90,
                height: 90,
                bgcolor: "#fff",
                borderRadius: 3,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid #E2E8F0",
              }}
            >
              <img
                src={companyLogos[job.company]}
                alt={job.company}
                style={{
                  width: "70%",
                }}
              />
            </Box>

            <Box>

              <Typography
                variant="h4"
                fontWeight={700}
              >
                {job.title}
              </Typography>

              <Typography
                color="text.secondary"
                mt={1}
              >
                {job.company}
              </Typography>

              <Stack
                direction="row"
                spacing={1}
                mt={2}
              >
                {job.badge && (
                  <Chip
                    label={job.badge}
                    color={job.badgeColor}
                  />
                )}

                <Chip
                  label={`Posted ${job.posted}`}
                  variant="outlined"
                />
              </Stack>

            </Box>

          </Stack>

          <Divider sx={{ my: 5 }} />

          {/* Job Info */}

          <Stack
            direction="row"
            spacing={4}
            flexWrap="wrap"
          >

            <Stack direction="row" spacing={1}>
              <LocationOnOutlinedIcon color="primary"/>
              <Typography>{job.location}</Typography>
            </Stack>

            <Stack direction="row" spacing={1}>
              <WorkOutlineOutlinedIcon color="primary"/>
              <Typography>{job.type}</Typography>
            </Stack>

            <Stack direction="row" spacing={1}>
              <CurrencyRupeeOutlinedIcon color="success"/>
              <Typography
                color="success.main"
                fontWeight={700}
              >
                {job.salary}
              </Typography>
            </Stack>

            <Stack direction="row" spacing={1}>
              <AccessTimeOutlinedIcon/>
              <Typography>
                {job.experience}
              </Typography>
            </Stack>

          </Stack>

          <Divider sx={{ my: 5 }} />

          <Typography
           variant="h5"
fontWeight={700}
sx={{
  color: "#0F172A",
}}
          >
            About this role
          </Typography>

          <Typography
            mt={2}
            color="text.secondary"
            lineHeight={2}
          >
            {job.description}
          </Typography>

          <Divider sx={{ my: 5 }} />

          <Typography
            variant="h5"
fontWeight={700}
sx={{
  color: "#0F172A",
}}
          >
            Skills
          </Typography>

          <Stack
            direction="row"
            spacing={1}
            mt={3}
            flexWrap="wrap"
            useFlexGap
          >
           {job.skills.map((skill) => (
  <Chip
    key={skill}
    label={skill}
    size="small"
    sx={{
      bgcolor: "#EFF6FF",
      color: "#2563EB",
      border: "1px solid #DBEAFE",
      fontWeight: 600,
      borderRadius: "8px",
      px: 1,
      py: 0.5,

      "&:hover": {
        bgcolor: "#DBEAFE",
      },
    }}
  />
))}
          </Stack>

          <Divider sx={{ my: 5 }} />

          <Typography
            variant="h5"
fontWeight={700}
sx={{
  color: "#0F172A",
}}
          >
            Requirements
          </Typography>

          <Box mt={2}>

         {job.requirements.map((item) => (
  <Stack
    key={item}
    direction="row"
    spacing={1}
    alignItems="center"
    sx={{ mb: 1.5 }}
  >
   <CheckCircleIcon
  color="success"
  fontSize="small"
/>

    <Typography>{item}</Typography>
  </Stack>
))}

          </Box>

          <Divider sx={{ my: 5 }} />

          <Typography
           variant="h5"
fontWeight={700}
sx={{
  color: "#0F172A",
}}
          >
            Benefits
          </Typography>

          <Box mt={2}>

           {job.benefits.map((item) => (
  <Stack
    key={item}
    direction="row"
    spacing={1}
    alignItems="center"
    sx={{ mb: 1.5 }}
  >
    <WorkspacePremiumIcon
      color="primary"
      fontSize="small"
    />

    <Typography>{item}</Typography>
  </Stack>
))}

          </Box>

          <Button
  variant="contained"
  size="large"
  endIcon={<ArrowForwardIcon />}
  onClick={handleApply}
  sx={{
    mt: 5,
    px: 6,
    py: 1.7,
    borderRadius: "14px",
    fontWeight: 700,
    fontSize: "16px",
    textTransform: "none",
    boxShadow: "0 10px 30px rgba(37,99,235,.30)",

    "&:hover": {
      boxShadow: "0 16px 40px rgba(37,99,235,.35)",
    },
  }}
>
  Apply Now
</Button>
          <ApplicationDialog
  open={open}
  onClose={handleClose}
  job={job}
/>

        </Paper>

      </Container>
    </Box>
  );
}

export default JobDetails;