import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import MediaCard from "@/components/MediaCard";
import { Grid } from "@mui/material";

export default function CardPage() {
  return (
    <Container maxWidth="lg">
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Cards Page
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {[1, 2, 3, 4].map((index) => (
          <Grid key={index} item xs={12} sm={6} md={5}>
            <MediaCard
              heading={`Heading ${index}`}
              text={`Text for card ${index}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac libero vel nisi feugiat tempor.`}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
