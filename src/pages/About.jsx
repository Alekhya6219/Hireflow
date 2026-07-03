import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  Stack,
} from "@mui/material";

import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";

function About() {
  const stats = [
    { value: "500+", label: "Jobs" },
    { value: "50+", label: "Companies" },
    { value: "2K+", label: "Candidates" },
    { value: "100%", label: "Responsive" },
  ];

  const features = [
    {
      icon: <WorkOutlineOutlinedIcon color="primary" sx={{ fontSize: 42 }} />,
      title: "Browse Jobs",
      desc: "Explore opportunities from top companies across multiple technologies.",
    },
    {
      icon: <BusinessOutlinedIcon color="primary" sx={{ fontSize: 42 }} />,
      title: "Top Companies",
      desc: "Discover leading companies actively hiring talented developers.",
    },
    {
      icon: (
        <BookmarkBorderOutlinedIcon
          color="primary"
          sx={{ fontSize: 42 }}
        />
      ),
      title: "Save Jobs",
      desc: "Bookmark jobs and come back anytime to continue your application.",
    },
    {
      icon: <RocketLaunchOutlinedIcon color="primary" sx={{ fontSize: 42 }} />,
      title: "Fast Experience",
      desc: "Built using React, Material UI and Vite for maximum performance.",
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: "#F8FAFC",
        minHeight: "100vh",
        py: 7,
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: 3,
        }}
      >
        {/* HERO */}

        <Box
          sx={{
            background:
              "linear-gradient(135deg,#2563EB,#1D4ED8)",
            borderRadius: "24px",
            color: "#fff",
            textAlign: "center",
            py: 5,
            px: 4,
            mb: 6,
          }}
        >
          <Typography
            variant="h4"
            fontWeight={700}
          >
            About HireFlow
          </Typography>

          <Typography
            sx={{
              mt: 2,
              maxWidth: 700,
              mx: "auto",
              opacity: .92,
              fontSize: 17,
              lineHeight: 1.8,
            }}
          >
            HireFlow helps developers discover amazing job
            opportunities, explore top companies and manage
            their favourite jobs through a clean and modern
            experience.
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            mt={4}
          >
            <Button
              component={Link}
              to="/jobs"
              variant="contained"
              sx={{
                bgcolor: "#fff",
                color: "#2563EB",
                fontWeight: 700,
                px: 4,
                borderRadius: "10px",
                textTransform: "none",

                "&:hover": {
                  bgcolor: "#F8FAFC",
                },
              }}
            >
              Explore Jobs
            </Button>

            <Button
              component={Link}
              to="/companies"
              variant="outlined"
              sx={{
                borderColor: "#fff",
                color: "#fff",
                px: 4,
                borderRadius: "10px",
                textTransform: "none",

                "&:hover": {
                  borderColor: "#fff",
                  bgcolor: "rgba(255,255,255,.08)",
                },
              }}
            >
              Companies
            </Button>
          </Stack>
        </Box>

        {/* STATS */}

        <Grid container spacing={3} mb={7}>
          {stats.map((item) => (
            <Grid item xs={6} md={3} key={item.label}>
              <Card
                sx={{
                  textAlign: "center",
                  borderRadius: "18px",
                  boxShadow: "none",
                  border: "1px solid #E2E8F0",
                  py: 3,
                }}
              >
                <Typography
                  variant="h4"
                  color="primary"
                  fontWeight={700}
                >
                  {item.value}
                </Typography>

                <Typography color="text.secondary">
                  {item.label}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* FEATURES */}

        <Typography
          variant="h4"
          fontWeight={700}
          mb={1}
        >
          Why Choose HireFlow
        </Typography>

        <Typography
          color="text.secondary"
          mb={4}
        >
          Everything you need for a smooth job search experience.
        </Typography>

        <Grid container spacing={3}>
          {features.map((item) => (
            <Grid item xs={12} md={6} key={item.title}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: "18px",
                  border: "1px solid #E2E8F0",
                  boxShadow: "none",
                  transition: ".3s",

                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow:
                      "0 18px 35px rgba(0,0,0,.08)",
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  {item.icon}

                  <Typography
                    variant="h6"
                    fontWeight={700}
                    mt={2}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    mt={1}
                    color="text.secondary"
                    lineHeight={1.8}
                  >
                    {item.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
                {/* OUR MISSION */}

        <Box
          sx={{
            mt: 8,
            p: 5,
            bgcolor: "#FFFFFF",
            borderRadius: "20px",
            border: "1px solid #E2E8F0",
          }}
        >
          <Typography
            variant="h4"
            fontWeight={700}
            gutterBottom
          >
            Our Mission
          </Typography>

          <Typography
            sx={{
              color: "#64748B",
              fontSize: 17,
              lineHeight: 1.9,
            }}
          >
            Our mission is to simplify the job search process by
            connecting talented professionals with leading
            companies through a modern, fast and intuitive
            platform. We believe finding the right opportunity
            should be simple, transparent and enjoyable.
          </Typography>
        </Box>

        {/* TECH STACK */}

        <Box sx={{ mt: 8 }}>
          <Typography
            variant="h4"
            fontWeight={700}
            mb={1}
          >
            Built With
          </Typography>

          <Typography
            color="text.secondary"
            mb={4}
          >
            HireFlow is built using modern frontend technologies.
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            flexWrap="wrap"
            useFlexGap
          >
            {[
              "React",
              "Vite",
              "Material UI",
              "Tailwind CSS",
              "JavaScript",
              "React Router",
              "REST APIs",
              "Responsive Design",
            ].map((tech) => (
              <Chip
                key={tech}
                label={tech}
                color="primary"
                variant="outlined"
                sx={{
                  borderRadius: "10px",
                  fontWeight: 600,
                  py: 2.4,
                  px: 1,
                  bgcolor: "#fff",
                }}
              />
            ))}
          </Stack>
        </Box>

        {/* CTA */}

        <Box
          sx={{
            mt: 8,
            borderRadius: "24px",
            background:
              "linear-gradient(135deg,#2563EB,#1D4ED8)",
            color: "#fff",
            textAlign: "center",
            py: 5,
            px: 4,
          }}
        >
          <Typography
            variant="h4"
            fontWeight={700}
          >
            Ready to Find Your Dream Job?
          </Typography>

          <Typography
            sx={{
              mt: 2,
              mb: 4,
              maxWidth: 650,
              mx: "auto",
              opacity: 0.92,
              lineHeight: 1.8,
            }}
          >
            Browse hundreds of opportunities from top companies
            and take the next step in your career with HireFlow.
          </Typography>

          <Button
            component={Link}
            to="/jobs"
            variant="contained"
            sx={{
              bgcolor: "#fff",
              color: "#2563EB",
              px: 4,
              py: 1.2,
              borderRadius: "10px",
              textTransform: "none",
              fontWeight: 700,

              "&:hover": {
                bgcolor: "#F8FAFC",
              },
            }}
          >
            Browse Jobs
          </Button>
        </Box>

      </Box>
    </Box>
  );
}

export default About;