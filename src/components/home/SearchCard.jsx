import {
  Card,
  CardContent,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

function SearchCard() {
  return (
    <Card
      elevation={8}
      sx={{
        borderRadius: 4,
        mt: 6,
      }}
    >
      <CardContent>
        <div className="grid gap-4 md:grid-cols-4">

          <TextField
            label="Job Title"
            fullWidth
            variant="outlined"
          />

          <TextField
            select
            label="Location"
            fullWidth
          >
            <MenuItem value="Hyderabad">
              Hyderabad
            </MenuItem>

            <MenuItem value="Bangalore">
              Bangalore
            </MenuItem>

            <MenuItem value="Remote">
              Remote
            </MenuItem>

          </TextField>

          <TextField
            select
            label="Job Type"
            fullWidth
          >
            <MenuItem>Full Time</MenuItem>

            <MenuItem>Hybrid</MenuItem>

            <MenuItem>Remote</MenuItem>

          </TextField>

          <Button
            variant="contained"
            size="large"
            startIcon={<SearchIcon />}
            sx={{
              borderRadius: 3,
              height: "56px",
            }}
          >
            Search Jobs
          </Button>

        </div>
      </CardContent>
    </Card>
  );
}

export default SearchCard;