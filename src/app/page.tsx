import * as React from "react";
import { Container, Typography } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

export default function HomePage() {
  return (
    <Container maxWidth="lg">
      <div>
        <Alert severity="info" sx={{ mt: 2, mb: 5 }}>
          <AlertTitle>Hello 👋</AlertTitle>
          This is a Next.js application with Material UI (Practice).
        </Alert>
      </div>
      <Typography
        variant="h6"
        component="h1"
        sx={{
          textAlign: "center",
        }}
      >
        You can navigate to other pages using side drawer
      </Typography>
    </Container>
  );
}
