import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import SideDrawer from "@/components/SideDrawer";

export const metadata = {
  title: "MUI Practice",
  description: "MUI Practice",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <AppBar position="static" sx={{ zIndex: 2000 }}>
            <Toolbar sx={{ backgroundColor: "background.paper" }}>
              <SideDrawer
                icon={
                  <MenuIcon
                    sx={{ color: "#444", mr: 2, transform: "translateY(-2px)" }}
                  />
                }
              />
              <Typography variant="h6" color="text.primary">
                MUI Practice Project
              </Typography>
            </Toolbar>
          </AppBar>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              bgcolor: "background.default",
              mt: ["48px", "56px", "64px"],
              p: 3,
            }}
          >
            {children}
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
