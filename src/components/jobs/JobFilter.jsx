import {
  Card,
  CardContent,
  TextField,
  Typography,
  MenuItem,
  Stack,
} from "@mui/material";

function JobFilter({
  search,
  setSearch,
  location,
  setLocation,
  jobType,
  setJobType,
}) {
  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: "20px",
        border: "1px solid #E2E8F0",
        boxShadow: "0 8px 24px rgba(15,23,42,.06)",
        position: "sticky",
        top: 100,
        height: "fit-content",
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Typography
          variant="h5"
          fontWeight={700}
          mb={3}
        >
          Filters
        </Typography>

        <Stack spacing={2.5}>
          <TextField
            fullWidth
            label="Search"
            size="small"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <TextField
            select
            fullWidth
            label="Location"
            size="small"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <MenuItem value="">All Locations</MenuItem>
            <MenuItem value="Hyderabad">Hyderabad</MenuItem>
            <MenuItem value="Bangalore">Bangalore</MenuItem>
            <MenuItem value="Pune">Pune</MenuItem>
            <MenuItem value="Remote">Remote</MenuItem>
            <MenuItem value="Chennai">Chennai</MenuItem>
          </TextField>

          <TextField
            select
            fullWidth
            label="Job Type"
            size="small"
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
          >
            <MenuItem value="">All Types</MenuItem>
            <MenuItem value="Full Time">Full Time</MenuItem>
            <MenuItem value="Hybrid">Hybrid</MenuItem>
            <MenuItem value="Remote">Remote</MenuItem>
          </TextField>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default JobFilter;