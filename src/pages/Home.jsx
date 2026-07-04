
import { Link } from "react-router-dom";

import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";

import googleLogo from "../assets/logos/google.svg";
import microsoftLogo from "../assets/logos/microsoft.svg";
import amazonLogo from "../assets/logos/amazon.svg";
import adobeLogo from "../assets/logos/adobe.svg";
import netflixLogo from "../assets/logos/netflix.svg";
import ibmLogo from "../assets/logos/ibm.svg";
import infosysLogo from "../assets/logos/infosys.svg";
import tcsLogo from "../assets/logos/tcs.svg";
import accentureLogo from "../assets/logos/accenture.svg";

const companies = [
  googleLogo,
  microsoftLogo,
  amazonLogo,
  adobeLogo,
  netflixLogo,
  ibmLogo,
  infosysLogo,
  tcsLogo,
  accentureLogo,
];

const stats = [
  { icon: <WorkRoundedIcon sx={{ fontSize: 30 }} />, number: "20K+", title: "Active Jobs" },
  { icon: <BusinessCenterRoundedIcon sx={{ fontSize: 30 }} />, number: "500+", title: "Top Companies" },
  { icon: <GroupsRoundedIcon sx={{ fontSize: 30 }} />, number: "15K+", title: "Candidates" },
  { icon: <TrendingUpRoundedIcon sx={{ fontSize: 30 }} />, number: "98%", title: "Hiring Success" },
];

const features = [
  {
    icon: <SearchRoundedIcon sx={{ fontSize: 28 }} />,
    title: "Smart Job Discovery",
    desc: "Browse curated opportunities from leading companies with an intuitive experience.",
  },
  {
    icon: <ApartmentRoundedIcon sx={{ fontSize: 28 }} />,
    title: "Trusted Companies",
    desc: "Explore openings from top employers across multiple industries.",
  },
  {
    icon: <FavoriteRoundedIcon sx={{ fontSize: 28 }} />,
    title: "Save Favorites",
    desc: "Bookmark interesting jobs and revisit them anytime from Saved Jobs.",
  },
  {
    icon: <BoltRoundedIcon sx={{ fontSize: 28 }} />,
    title: "Quick Apply",
    desc: "Simple and responsive application flow designed for modern job seekers.",
  },
];

const steps = [
  { step: "01", title: "Browse Jobs", desc: "Explore opportunities from top companies." },
  { step: "02", title: "View Details", desc: "Read job descriptions and requirements." },
  { step: "03", title: "Save Jobs", desc: "Bookmark your favourite jobs." },
  { step: "04", title: "Apply", desc: "Apply quickly with a single click." },
];

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Frontend Developer",
    review: "HireFlow made my job search much easier. The UI is clean and professional.",
  },
  {
    name: "Priya Reddy",
    role: "Software Engineer",
    review: "The platform is simple, responsive and very easy to navigate.",
  },
  {
    name: "Arjun Kumar",
    role: "React Developer",
    review: "One of the most polished demo job portals I've used.",
  },
];


const cardBase = {
  bgcolor: "#fff",
  border: "1px solid #E2E8F0",
  borderRadius: "20px",
  transition: ".25s ease",
  "&:hover": {
    transform: "translateY(-6px)",
    boxShadow: "0 20px 40px rgba(15,23,42,.08)",
  },
};


function Section({ bg = "transparent", children, sx }) {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: bg,
        py: { xs: 8, md: 11 },
        ...sx,
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
        {children}
      </Container>
    </Box>
  );
}

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <Box sx={{ textAlign: "center", maxWidth: 640, mx: "auto", mb: 7 }}>
      {eyebrow && (
        <Typography
          sx={{
            color: "#2563EB",
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            mb: 1.5,
          }}
        >
          {eyebrow}
        </Typography>
      )}
      <Typography
        variant="h3"
        sx={{ fontWeight: 800, color: "#0F172A", fontSize: { xs: 28, md: 36 } }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography sx={{ mt: 2, color: "#64748B", lineHeight: 1.8, fontSize: 16.5 }}>
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}

function Home() {
  return (
    <Box sx={{ bgcolor: "#F8FAFC" }}>
      {/* ================= Hero ================= */}
      <Section bg="#F8FAFC" sx={{ pt: { xs: 9, md: 13 } }}>
        <Box sx={{ textAlign: "center", maxWidth: 760, mx: "auto" }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              bgcolor: "#DBEAFE",
              color: "#2563EB",
              px: 3,
              py: 1,
              borderRadius: "999px",
              fontWeight: 700,
              fontSize: 14,
              mb: 4,
            }}
          >
            <RocketLaunchRoundedIcon fontSize="small" />
            AI Assisted Hiring Platform
          </Box>

          <Typography
            sx={{
              fontSize: { xs: "40px", md: "64px" },
              fontWeight: 800,
              color: "#0F172A",
              lineHeight: 1.1,
            }}
          >
            Find Your Dream Career
            <br />
            With Confidence
          </Typography>

          <Typography
            sx={{
              mt: 4,
              fontSize: { xs: 16.5, md: 19 },
              color: "#64748B",
              lineHeight: 1.85,
              maxWidth: "640px",
              mx: "auto",
            }}
          >
            HireFlow is a modern job portal designed to help job seekers
            discover opportunities from leading companies, save favourite
            jobs and confidently take the next step in their career journey.
          </Typography>

           <Stack
  direction={{ xs: "column", sm: "row" }}
  spacing={3}
  sx={{
    mt: 5,          // space above the buttons
    ml: { md: 4 },  // move buttons slightly to the right on desktop
    justifyContent: "center",
    alignItems: "center",
  }}
>
  <Button
    component={Link}
    to="/jobs"
    variant="contained"
    endIcon={<ArrowForwardRoundedIcon />}
    sx={{
      minWidth: 240,
      px: 5,
      py: 1.7,
      borderRadius: "14px",
      textTransform: "none",
      fontWeight: 700,
      fontSize: 16,
      boxShadow: "0 15px 35px rgba(37,99,235,.25)",
      "&:hover": {
        transform: "translateY(-3px)",
        boxShadow: "0 20px 45px rgba(37,99,235,.35)",
      },
    }}
  >
    Browse Jobs
  </Button>

  <Button
    component={Link}
    to="/companies"
    variant="outlined"
    sx={{
      minWidth: 220,
      px: 5,
      py: 1.7,
      borderRadius: "14px",
      textTransform: "none",
      fontWeight: 700,
      fontSize: 16,
    }}
  >
    Explore Companies
  </Button>
</Stack>
        
        </Box>

        <Box
          sx={{
            mt: 8,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 3,
          }}
        >
          {stats.map((item) => (
            <Box
              key={item.title}
              sx={{
                ...cardBase,
                width: 260,
                height: 260,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  bgcolor: "#EFF6FF",
                  borderRadius: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#2563EB",
                }}
              >
                {item.icon}
              </Box>
              <Typography sx={{ mt: 3, fontSize: 38, fontWeight: 800, color: "#0F172A" }}>
                {item.number}
              </Typography>
              <Typography sx={{ color: "#64748B", mt: 0.5, fontSize: 15.5 }}>
                {item.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </Section>

      <Section bg="#FFFFFF">
        <SectionHeading
          eyebrow="Why HireFlow"
          title="Why Choose HireFlow?"
          subtitle="Everything you need to discover opportunities, explore companies and manage your job search — all in one beautiful platform."
        />

        <Grid
  container
  spacing={3}
  justifyContent="center"
  alignItems="stretch"
>
  {features.map((item) => (
    <Grid
      item
      xs={12}
      sm={6}
      md={3}
      key={item.step}
      sx={{
        display: "flex",
      }}
    >
             <Box
  sx={{
    ...cardBase,
    p: 3.5,
    width: "100%",
    minHeight: 230,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    bgcolor: "#EFF6FF",
                    color: "#2563EB",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {item.icon}
                </Box>
                <Typography sx={{ mt: 2.5, fontWeight: 700, fontSize: 17, color: "#0F172A" }}>
                  {item.title}
                </Typography>
                <Typography sx={{ mt: 1.25, color: "#64748B", lineHeight: 1.65, fontSize: 14 }}>
                  {item.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Section>
      <Section bg="#F1F5F9">
        <SectionHeading
          eyebrow="Trusted Hiring Partners"
          title="Trusted Hiring Partners"
          subtitle="Discover career opportunities from some of the world's most trusted technology companies."
        />

        <Grid container spacing={2.5} justifyContent="center">
          {companies.map((logo, index) => (
            <Grid item xs={6} sm={4} md={2.4} key={index}>
              <Box
                sx={{
                  ...cardBase,
                  height: 110,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={logo}
                  alt="company"
                  style={{ width: "100px", height: "40px", objectFit: "contain" }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Section>

      <Section bg="#FFFFFF">
        <SectionHeading
          eyebrow="How It Works"
          title="How HireFlow Works"
          subtitle="Get started in four simple steps."
        />

        <Grid container spacing={3}>
          {steps.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.step}>
              <Box
                sx={{
                  ...cardBase,
                  p: 3.5,
                  height: 230,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    bgcolor: "#DBEAFE",
                    color: "#2563EB",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: 22,
                    fontWeight: 800,
                  }}
                >
                  {item.step}
                </Box>
                <Typography fontWeight={700} mt={2.5} fontSize={16}>
                  {item.title}
                </Typography>
                <Typography sx={{ mt: 1, color: "#64748B", fontSize: 14 }}>
                  {item.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Section>

      <Section bg="#F1F5F9">
        <SectionHeading eyebrow="Testimonials" title="Loved by Job Seekers" />

        <Grid container spacing={3}>
          {testimonials.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.name}>
              <Box
                sx={{
                  ...cardBase,
                  p: 3.5,
                  height: 240,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography sx={{ color: "#F59E0B", fontSize: 22 }}>★★★★★</Typography>
                <Typography sx={{ mt: 2, lineHeight: 1.7, color: "#64748B", flexGrow: 1, fontSize: 14.5 }}>
                  "{item.review}"
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Typography fontWeight={700} fontSize={14.5}>{item.name}</Typography>
                  <Typography color="text.secondary" fontSize={13}>{item.role}</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Section>

      <Section bg="#FFFFFF">
        <Box
  sx={{
    borderRadius: "22px",
    background: "linear-gradient(135deg,#2563EB,#1D4ED8)",
    py: { xs: 5, md: 6 },
    px: { xs: 4, md: 5 },
    maxWidth: "900px",
    mx: "auto",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <Typography variant="h4" fontWeight={800} fontSize={{ xs: 24, md: 28 }}>
            Ready to Start Your Career?
          </Typography>
          <Typography sx={{ mt: 2.5, maxWidth: 620, mx: "auto", opacity: 0.95, lineHeight: 1.8 }}>
            Join thousands of professionals exploring opportunities from top
            companies through HireFlow.
          </Typography>
          <Button
            component={Link}
            to="/jobs"
            variant="contained"
            color="inherit"
            endIcon={<ArrowForwardRoundedIcon />}
            sx={{
              mt: 3,
              px: 6,
              py: 1.7,
              color: "#2563EB",
              fontWeight: 700,
              borderRadius: "14px",
              textTransform: "none",
              fontSize: 16,
              "&:hover": { bgcolor: "#fff", transform: "translateY(-3px)" },
            }}
          >
            Browse Jobs
          </Button>
        </Box>
      </Section>
    </Box>
  );
}

export default Home;
