"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Link from "next/link";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import StarIcon from "@mui/icons-material/Star";
import ChecklistIcon from "@mui/icons-material/Checklist";

type Anchor = "top" | "left" | "bottom" | "right";

interface SideDrawerProps {
  icon: React.ReactNode;
}

export default function SideDrawer({ icon }: SideDrawerProps) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const LINKS = [
    { text: "Home", href: "/", icon: HomeIcon },
    { text: "Form", href: "/form", icon: ChecklistIcon },
    { text: "Card", href: "/card", icon: StarIcon },
  ];

  const list = (anchor: Anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {LINKS.map(({ text, href, icon: Icon }) => (
          <ListItem key={href} disablePadding>
            <ListItemButton component={Link} href={href}>
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ mt: "auto" }} />
    </Box>
  );

  return (
    <div>
      {(["left"] as const).map((left) => (
        <React.Fragment key={left}>
          <Button onClick={toggleDrawer(left, true)}>{icon}</Button>
          <Drawer
            anchor={left}
            open={state[left]}
            onClose={toggleDrawer(left, false)}
          >
            {list(left)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
