import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Chip,
  Button,
  IconButton,
  Box,
  Stack,
  Divider,
  
} from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FavoriteIcon from "@mui/icons-material/Favorite";
import useSavedJobs from "../../hooks/useSavedJobs";
import companyLogos from "../../utils/CompanyLogos";
import ApplicationDialog from "./ApplicationDialog";

const badgeStyles = {
  warning: {
    bgcolor: "#FEF3C7",
    color: "#92400E",
  },
  error: {
    bgcolor: "#FEE2E2",
    color: "#B91C1C",
  },
  success: {
    bgcolor: "#DCFCE7",
    color: "#166534",
  },
  info: {
    bgcolor: "#DBEAFE",
    color: "#1D4ED8",
  },
  secondary: {
    bgcolor: "#EDE9FE",
    color: "#6D28D9",
  },
};


function JobCard({ job }) {
  const [open, setOpen] = useState(false);

const handleApply = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};

 
  const { savedJobs, toggleSave } = useSavedJobs();

const isSaved = savedJobs.includes(job.id);
  return (
    <Card
      sx={{
        position: "relative",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: "20px",
        border: "1px solid #E2E8F0",
        transition: "all .3s ease",
        cursor: "pointer",
        overflow: "hidden",

        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 18px 40px rgba(0,0,0,.10)",
        },
      }}
    >
      <CardContent
        sx={{
          flex: 1,
          p: 4,
        }}
      >
       



<Stack
  direction="row"
  justifyContent="space-between"
  alignItems="flex-start"
>


  <Box
    sx={{
      width: 60,
      height: 60,
      borderRadius: "16px",
      border: "1px solid #E5E7EB",
      bgcolor: "#fff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
      flexShrink: 0,
    }}
  >
    <img
      src={companyLogos[job.company]}
      alt={job.company}
      style={{
        width: "75%",
        height: "75%",
        objectFit: "contain",
        display: "block",
      }}
      onError={(e) => {
        e.target.style.display = "none";
      }}
    />
  </Box>

  <IconButton
    onClick={(e) => {
      e.stopPropagation();
      toggleSave(job.id);
    }}
    disableRipple
    sx={{
      position: "absolute",
      top: 24,
      right: 24,
      p: 0,
      bgcolor: "transparent",

      "&:hover": {
        bgcolor: "transparent",
      },
    }}
  >
    {isSaved ? (
      <FavoriteIcon
        sx={{
          color: "#EF4444",
          fontSize: 30,
        }}
      />
    ) : (
      <FavoriteBorderIcon
        sx={{
          color: "#94A3B8",
          fontSize: 30,
        }}
      />
    )}
  </IconButton>
</Stack>


        {job.badge && (
          <Chip
            label={job.badge}
            size="small"
            sx={{
              mt: 3,
              mb: 1,
              fontWeight: 700,
              borderRadius: "8px",
              width: "fit-content",
              ...badgeStyles[job.badgeColor],
            }}
          />
        )}

        {/* Title */}

        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            color: "#0F172A",
            lineHeight: 1.35,
            mt: job.badge ? 0 : 3,
          }}
        >
          {job.title}
        </Typography>

        {/* Company */}

        <Typography
          sx={{
            mt: 1,
            fontSize: "15px",
            fontWeight: 600,
            color: "#475569",
          }}
        >
          {job.company}
        </Typography>

        {/* Posted */}

        <Typography
          variant="caption"
          sx={{
            color: "#94A3B8",
            display: "block",
            mt: .5,
            fontWeight: 500,
          }}
        >
          Posted {job.posted}
        </Typography>

        {/* Meta */}

        <Stack
          direction="row"
          spacing={3}
          flexWrap="wrap"
          sx={{
            mt: 3,
          }}
        >
          <Stack
            direction="row"
            spacing={.5}
            alignItems="center"
          >
            <LocationOnOutlinedIcon
              sx={{
                color: "#2563EB",
                fontSize: 18,
              }}
            />

            <Typography variant="body2">
              {job.location}
            </Typography>
          </Stack>

          <Stack
            direction="row"
            spacing={.5}
            alignItems="center"
          >
            <WorkOutlineOutlinedIcon
              sx={{
                color: "#2563EB",
                fontSize: 18,
              }}
            />

            <Typography variant="body2">
              {job.type}
            </Typography>
          </Stack>
        </Stack>

        {/* Salary */}

        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{
            mt: 3,
          }}
        >
          <Stack
            direction="row"
            spacing={.5}
            alignItems="center"
          >
            <CurrencyRupeeOutlinedIcon
              color="success"
              fontSize="small"
            />

            <Typography
              sx={{
                color: "#16A34A",
                fontWeight: 700,
                fontSize: 18,
              }}
            >
              {job.salary}
            </Typography>
          </Stack>

          <Stack
            direction="row"
            spacing={.5}
            alignItems="center"
          >
            <AccessTimeOutlinedIcon
              fontSize="small"
              color="action"
            />

            <Typography variant="body2">
              {job.experience}
            </Typography>
          </Stack>
        </Stack>

        {/* Skills */}

        <Stack
          direction="row"
          spacing={1}
          flexWrap="wrap"
          useFlexGap
          sx={{
            mt: 3,
          }}
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
                fontSize: "11px",
                height: 28,
                borderRadius: "8px",

                "& .MuiChip-label": {
                  px: 1.4,
                },

                "&:hover": {
                  bgcolor: "#DBEAFE",
                },
              }}
            />
          ))}
        </Stack>
      </CardContent>

      <Divider />

      <CardActions
        sx={{
          p: 3,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 2,
        }}
      >
        <Button
          fullWidth
          component={Link}
          to={`/jobs/${job.id}`}
          variant="outlined"
          sx={{
            borderRadius: "12px",
            textTransform: "none",
            fontWeight: 600,
          }}
        >
          View Details
        </Button>

    <Button
  fullWidth
  variant="contained"
  endIcon={<ArrowForwardIcon />}
  onClick={handleApply}
  
  sx={{
    borderRadius: "12px",
    textTransform: "none",
    fontWeight: 600,
  }}
>
  Apply Now
</Button>
      </CardActions>
<ApplicationDialog
  open={open}
  onClose={handleClose}
  job={job}
/>
    </Card>
  );
}

export default JobCard;