"use client";
import React, { useState } from "react";
import {
  Typography,
  TextField,
  Box,
  Container,
  Grid,
  Button,
  AlertTitle,
} from "@mui/material";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function FormPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleConfirmChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirm(event.target.value);
  };

  const submission = () => {
    let formIsValid = true;
    const newErrors = {
      name: "",
      email: "",
      password: "",
      confirm: "",
    };

    if (!name.trim() || name.trim().split(" ").length < 2) {
      newErrors.name = "Please enter your full name (First and Last name)";
      formIsValid = false;
    }

    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address";
      formIsValid = false;
    }

    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
      formIsValid = false;
    }

    if (password !== confirm || confirm.length === 0) {
      newErrors.confirm = "Passwords do not match";
      formIsValid = false;
    }

    if (formIsValid) {
      setOpen(true);
      console.log("Form submitted:", { name, email, password, confirm });
      setName("");
      setEmail("");
      setPassword("");
      setConfirm("");
      setErrors({
        name: "",
        email: "",
        password: "",
        confirm: "",
      });
    } else {
      setErrors(newErrors);
    }
  };

  const [open, setOpen] = React.useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Container maxWidth="lg">
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Form Page
      </Typography>
      <Alert severity="info" sx={{ mt: 2, mb: 4 }}>
        <AlertTitle>In this page</AlertTitle>A user can see the values in the
        console after the form got successfully submitted.
      </Alert>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={8} lg={6}>
          <TextField
            label="Full Name"
            variant="outlined"
            fullWidth
            onChange={handleNameChange}
            value={name}
            error={!!errors.name}
            helperText={errors.name}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={6}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            onChange={handleEmailChange}
            value={email}
            error={!!errors.email}
            helperText={errors.email}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={6}>
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            type="password"
            onChange={handlePasswordChange}
            value={password}
            error={!!errors.password}
            helperText={errors.password}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={6}>
          <TextField
            label="Confirm"
            variant="outlined"
            fullWidth
            type="password"
            onChange={handleConfirmChange}
            value={confirm}
            error={!!errors.confirm}
            helperText={errors.confirm}
          />
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <Button variant="contained" onClick={submission}>
          Submit
        </Button>
        <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Form Submitted Successfully !
          </Alert>
        </Snackbar>
      </Box>
    </Container>
  );
}
