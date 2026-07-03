import { useMemo, useState } from "react";

import {
  Box,
  Typography,
  Grid,
  TextField,
  InputAdornment,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

import Container from "../components/ui/Container";
import CompanyCard from "../components/company/CompanyCard";
import companies from "../data/companies";

function Companies() {
  const [search, setSearch] = useState("");

  const filteredCompanies = useMemo(() => {
    return companies.filter((company) =>
      company.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <section
      style={{
        background: "#F8FAFC",
        minHeight: "100vh",
        padding: "40px 0",
      }}
    >
      <Container>

        {/* Heading */}

        <Typography
          variant="h4"
          fontWeight={700}
          gutterBottom
        >
          Explore Companies
        </Typography>

        <Typography
          color="text.secondary"
          sx={{
            mb: 4,
          }}
        >
          Discover top companies hiring React, Java,
          Full Stack and Software Engineers.
        </Typography>

        {/* Search */}

        <TextField
          fullWidth
          placeholder="Search companies..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          sx={{
            mb: 7,
            bgcolor: "#fff",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        {/* Stats */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 4,
          }}
        >
          <Typography
            fontWeight={700}
            fontSize={20}
          >
            {filteredCompanies.length} Companies
          </Typography>

         
        </Box>

        {/* Grid */}

        <Grid container spacing={3}>
          {filteredCompanies.map((company) => (
            <Grid
              item
              xs={12}
              md={6}
              key={company.id}
            >
              <CompanyCard
                company={company}
              />
            </Grid>
          ))}
        </Grid>

      </Container>
    </section>
  );
}

export default Companies;