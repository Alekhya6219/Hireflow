import {
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
  Box,
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

import companyLogos from "../../utils/CompanyLogos";

function CompanyCard({ company }) {
  return (
    <Card
      sx={{
        borderRadius: "20px",
        border: "1px solid #E2E8F0",
        boxShadow: "none",
        transition: ".3s",

        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 20px 40px rgba(0,0,0,.08)",
        },
      }}
    >
      <CardContent>

        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
        >

          <Box
            sx={{
              width: 65,
              height: 65,
              borderRadius: 3,
              border: "1px solid #E5E7EB",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "#fff",
            }}
          >
            <img
              src={companyLogos[company.name]}
              alt={company.name}
              style={{
                maxWidth: "70%",
                maxHeight: "70%",
              }}
            />
          </Box>

          <Box>

            <Typography
              variant="h6"
              fontWeight={700}
            >
              {company.name}
            </Typography>

            <Typography color="text.secondary">
              {company.industry}
            </Typography>

          </Box>

        </Stack>

        <Typography
          sx={{
            mt: 3,
            color: "#64748B",
          }}
        >
          {company.description}
        </Typography>

        <Stack
          direction="row"
          spacing={4}
          mt={3}
        >

          <Box>
            <Typography
              variant="caption"
              color="text.secondary"
            >
              Location
            </Typography>

            <Typography fontWeight={600}>
              {company.location}
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="caption"
              color="text.secondary"
            >
              Employees
            </Typography>

            <Typography fontWeight={600}>
              {company.employees}
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="caption"
              color="text.secondary"
            >
              Openings
            </Typography>

            <Typography
              color="primary"
              fontWeight={700}
            >
              {company.openings}
            </Typography>
          </Box>

        </Stack>

        <Button
  component={Link}
  to={`/jobs?company=${company.name}`}
  variant="contained"
  endIcon={<ArrowForwardIcon />}
  sx={{
    mt: 4,
    borderRadius: "12px",
    textTransform: "none",
    fontWeight: 600,
  }}
>
  View Jobs
</Button>

      </CardContent>
    </Card>
  );
}

export default CompanyCard;