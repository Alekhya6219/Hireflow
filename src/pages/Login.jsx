import { Box, Typography, Button, Paper } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

function Login() {
  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#F8FAFC",
        px: 3,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          maxWidth: 500,
          width: "100%",
          p: 5,
          borderRadius: "24px",
          textAlign: "center",
          border: "1px solid #E2E8F0",
        }}
      >
        <LockOutlinedIcon
          sx={{
            fontSize: 70,
            color: "#2563EB",
            mb: 2,
          }}
        />

        <Typography variant="h4" fontWeight={700}>
          Login
        </Typography>

        <Typography
          sx={{
            mt: 2,
            color: "#64748B",
            lineHeight: 1.8,
          }}
        >
          Authentication is not included in this frontend
          assessment.
        </Typography>

        <Typography
          sx={{
            mt: 1,
            color: "#94A3B8",
            fontSize: 14,
          }}
        >
          🚧 Coming Soon
        </Typography>

        <Button
          component={Link}
          to="/jobs"
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          sx={{
            mt: 4,
            borderRadius: "12px",
            textTransform: "none",
            px: 4,
            py: 1.3,
            fontWeight: 600,
          }}
        >
          Browse Jobs
        </Button>
      </Paper>
    </Box>
  );
}

export default Login;