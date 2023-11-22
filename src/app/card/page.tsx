import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MediaCard from "@/components/MediaCard";
import { Grid } from "@mui/material";

export default function StarredPage() {
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
      <Grid container rowSpacing={3} columnSpacing={3}>
        <Grid item xs={6}>
          <MediaCard
            heading="CMYK"
            text="The CMYK color model (also known as process color, or four color) is a subtractive color model, based on the CMY color model, used in color printing, and is also used to describe the printing process itself."
          />
        </Grid>
        <Grid item xs={6}>
          <MediaCard
            heading="HSL and HSV"
            text="HSL (for hue, saturation, lightness) and HSV (for hue, saturation, value; also known as HSB, for hue, saturation, brightness) are alternative representations of the RGB color model, designed in the 1970s by computer graphics researchers."
          />
        </Grid>
        <Grid item xs={6}>
          <MediaCard
            heading="RGB"
            text="An RGB color space is any additive color space based on the RGB color model. RGB color spaces are commonly found describing the input signal to display devices such as television screens and computer monitors."
          />
        </Grid>
        <Grid item xs={6}>
          <MediaCard
            heading="CIELAB"
            text="The CIELAB color space, also referred to as L*a*b*, was intended as a perceptually uniform space, where a given numerical change corresponds to a similar perceived change in color."
          />
        </Grid>
      </Grid>
    </Container>
  );
}
