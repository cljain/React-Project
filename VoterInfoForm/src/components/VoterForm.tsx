import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  MenuItem,
  TextField,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm, Controller } from "react-hook-form";

const VoterInfoForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      prefix: "",
      lastName: "",
      firstName: "",
      middleName: "",
      suffix: "",
      gender: "",
      dateOfBirth: "",
      age: "",
      registrationDate: "",
      registrationType: "",
      changeDate: "",
      usCitizen: false,
      ssn: "",
      drivingLicense: "",
      identificationType: "",
      identificationNumber: "",
      proofOfIdProvided: false,
      noDriversLicense: false,
      email: "",
      phoneNumber: "",
      status: "",
      statusReason: "",
      disability: "",
      challenged: false,
      furtherAction: false,
      furtherActionReason: "",
      furtherActionDescription: "",
    },
  });

  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios
      .get("https://mocki.io/v1/ab79d280-350d-498e-a987-d53fd3b89ff9")
      .then((response) => {
        reset(response.data); // Reset the form with fetched data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [reset]);

  const onSubmit = (data: any) => {
    console.log(data);
    setOpen(true);
  };

  const handleDialogClose = (action: string) => {
    setOpen(false);
    if (action === "ok") {
      toast.success("Your changes have been saved");
    }
  };

  return (
    <Box
      sx={{
        padding: 3,
        backgroundColor: "#fff",
        borderRadius: 1,
        boxShadow: 1,
      }}
    >
      <ToastContainer />
      <Typography variant="h6" gutterBottom>
        Voter Info
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Controller
              name="prefix"
              control={control}
              render={({ field }) => (
                <TextField label="Prefix" fullWidth select {...field}>
                  <MenuItem value="Ms.">Ms.</MenuItem>
                  <MenuItem value="Mr.">Mr.</MenuItem>
                  <MenuItem value="Mrs.">Mrs.</MenuItem>
                </TextField>
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Controller
              name="lastName"
              control={control}
              rules={{
                required: "Last Name is required",
                maxLength: {
                  value: 30,
                  message: "Last Name should not be greater than 30 characters",
                },
              }}
              render={({ field }) => (
                <TextField
                  label="Last Name"
                  fullWidth
                  error={!!errors.lastName}
                  helperText={errors.lastName ? errors.lastName.message : ""}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Controller
              name="firstName"
              control={control}
              rules={{
                required: "First Name is required",
                maxLength: {
                  value: 30,
                  message:
                    "First Name should not be greater than 30 characters",
                },
              }}
              render={({ field }) => (
                <TextField
                  label="First Name"
                  fullWidth
                  error={!!errors.firstName}
                  helperText={errors.firstName ? errors.firstName.message : ""}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Controller
              name="middleName"
              control={control}
              render={({ field }) => (
                <TextField label="Middle Name" fullWidth {...field} />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Controller
              name="suffix"
              control={control}
              render={({ field }) => (
                <TextField label="Suffix" fullWidth select {...field}>
                  <MenuItem value="Jr.">Jr.</MenuItem>
                  <MenuItem value="Sr.">Sr.</MenuItem>
                </TextField>
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Controller
              name="gender"
              control={control}
              render={({ field }) => (
                <TextField label="Gender" fullWidth select {...field}>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Male">Male</MenuItem>
                </TextField>
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Controller
              name="dateOfBirth"
              control={control}
              render={({ field }) => (
                <TextField
                  label="Date of Birth"
                  fullWidth
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Controller
              name="age"
              control={control}
              render={({ field }) => (
                <TextField label="Age" fullWidth {...field} />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Controller
              name="registrationDate"
              control={control}
              render={({ field }) => (
                <TextField
                  label="Registration Date"
                  fullWidth
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Controller
              name="registrationType"
              control={control}
              render={({ field }) => (
                <TextField
                  label="Registration Type"
                  fullWidth
                  select
                  {...field}
                >
                  <MenuItem value="In Person With...">
                    In Person With...
                  </MenuItem>
                  <MenuItem value="Online">Online</MenuItem>
                  <MenuItem value="Mail">Mail</MenuItem>
                </TextField>
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Controller
              name="changeDate"
              control={control}
              render={({ field }) => (
                <TextField
                  label="Change Date"
                  fullWidth
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Divider sx={{ borderColor: "red" }} />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="usCitizen"
              control={control}
              render={({ field }) => (
                <FormControlLabel
                  control={<Checkbox checked={field.value} {...field} />}
                  label="US Citizen"
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Controller
              name="ssn"
              control={control}
              render={({ field }) => (
                <TextField label="Last 4 of SSN" fullWidth {...field} />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Controller
              name="drivingLicense"
              control={control}
              render={({ field }) => (
                <TextField label="Driving License" fullWidth {...field} />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Controller
              name="identificationType"
              control={control}
              render={({ field }) => (
                <TextField
                  label="Type of Identification"
                  fullWidth
                  select
                  {...field}
                >
                  <MenuItem value="Select">Select</MenuItem>
                </TextField>
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Controller
              name="identificationNumber"
              control={control}
              render={({ field }) => (
                <TextField label="Identification Number" fullWidth {...field} />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="proofOfIdProvided"
              control={control}
              render={({ field }) => (
                <FormControlLabel
                  control={<Checkbox checked={field.value} {...field} />}
                  label="Proof of ID Provided"
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Divider sx={{ borderColor: "red" }} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">Not for public use</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Enter a valid email address",
                },
              }}
              render={({ field }) => (
                <TextField
                  label="E-Mail"
                  fullWidth
                  error={!!errors.email}
                  helperText={errors.email ? errors.email.message : ""}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="phoneNumber"
              control={control}
              rules={{
                required: "Phone Number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter a valid 10-digit phone number",
                },
              }}
              render={({ field }) => (
                <TextField
                  label="Phone Number"
                  fullWidth
                  error={!!errors.phoneNumber}
                  helperText={
                    errors.phoneNumber ? errors.phoneNumber.message : ""
                  }
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Divider sx={{ borderColor: "red" }} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Controller
              name="status"
              control={control}
              render={({ field }) => (
                <TextField label="Status" fullWidth select {...field}>
                  <MenuItem value="Active">Active</MenuItem>
                  <MenuItem value="Inactive">Inactive</MenuItem>
                </TextField>
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Controller
              name="statusReason"
              control={control}
              render={({ field }) => (
                <TextField label="Status Reason" fullWidth select {...field}>
                  <MenuItem value="DMV Impo...">DMV Impo...</MenuItem>
                </TextField>
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Controller
              name="disability"
              control={control}
              render={({ field }) => (
                <TextField label="Disability" fullWidth select {...field}>
                  <MenuItem value="Select">Select</MenuItem>
                </TextField>
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Controller
              name="challenged"
              control={control}
              render={({ field }) => (
                <FormControlLabel
                  control={<Checkbox checked={field.value} {...field} />}
                  label="Challenged"
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Controller
              name="furtherAction"
              control={control}
              render={({ field }) => (
                <FormControlLabel
                  control={<Checkbox checked={field.value} {...field} />}
                  label="Further Action"
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Controller
              name="furtherActionReason"
              control={control}
              render={({ field }) => (
                <TextField
                  label="Further Action Reason"
                  fullWidth
                  select
                  {...field}
                >
                  <MenuItem value="Select">Select</MenuItem>
                </TextField>
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Controller
              name="furtherActionDescription"
              control={control}
              render={({ field }) => (
                <TextField
                  label="Further Action Description"
                  fullWidth
                  {...field}
                />
              )}
            />
          </Grid>
        </Grid>
        <Box sx={{ mt: 3 }}>
          <Button variant="contained" color="primary" type="submit">
            Save
          </Button>
        </Box>
      </form>
      <Dialog open={open} onClose={() => handleDialogClose("cancel")}>
        <DialogTitle>Save Changes</DialogTitle>
        <DialogContent>Do you want to save the changes?</DialogContent>
        <DialogActions>
          <Button onClick={() => handleDialogClose("cancel")} color="primary">
            Cancel
          </Button>
          <Button onClick={() => handleDialogClose("ok")} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default VoterInfoForm;
