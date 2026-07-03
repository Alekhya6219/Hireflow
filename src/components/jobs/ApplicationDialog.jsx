import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Avatar,
  Typography,
  Button,
} from "@mui/material";



function ApplicationDialog({ open, onClose, job }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          borderRadius: "20px",
          p: 3,
          width: 380,
          maxWidth: "90%",
          textAlign: "center",
        },
      }}
    >
      <DialogTitle>
        <Avatar
          sx={{
            bgcolor: "#DCFCE7",
            color: "#16A34A",
            width: 60,
            height: 60,
            mx: "auto",
            mb: 2,
            fontSize: 30,
          }}
        >
          ✓
        </Avatar>

        <Typography variant="h5" fontWeight={700}>
          Application Submitted
        </Typography>
      </DialogTitle>

      <DialogContent>
        <Typography sx={{ color: "#64748B", mb: 2 }}>
     
        </Typography>

        <Typography variant="h6" fontWeight={700}>
          {job.title}
        </Typography>

        <Typography
          color="primary"
          fontWeight={600}
          sx={{ mb: 3 }}
        >
          {job.company}
        </Typography>

        <Typography
          sx={{
            color: "#64748B",
            lineHeight: 1.8,
          }}
        >
          Congratulations! 🎉
          <br />
          <br />
          Your application has been successfully submitted.
          <br />
          <br />
          <strong>Demo:</strong> No real application has been sent.
        </Typography>
      </DialogContent>

      <DialogActions
  sx={{
    justifyContent: "center",
    pb: 2,
  }}
>
  <Button
    variant="contained"
    onClick={onClose}
    sx={{
      borderRadius: "10px",
      textTransform: "none",
      px: 4,
    }}
  >
    Continue Browsing
  </Button>
</DialogActions>
    </Dialog>
  );
}

export default ApplicationDialog;