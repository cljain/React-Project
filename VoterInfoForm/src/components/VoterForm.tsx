import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Divider,
  Grid,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormTextField from "./FormTextField";
import FormCheckbox from "./FormCheckbox";
import FormAutocomplete from "./FormAutocomplete";
import { maxLength, emailPattern, requiredField } from "./validation";

const VoterInfoForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios
      .get("https://mocki.io/v1/ab79d280-350d-498e-a987-d53fd3b89ff9")
      .then((response) => reset(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [reset]);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setOpen(true);
    // Further processing of the data can be done here
  };

  const handleDialogClose = (action: string) => {
    setOpen(false);
    if (action === "ok") {
      toast.success("Your changes have been saved");
    }
  };

  const prefixes = ["Ms.", "Mr.", "Mrs."];
  const suffixes = ["Jr.", "Sr."];
  const genders = ["Female", "Male"];
  const registrationTypes = ["In Person With...", "Online", "Mail"];
  const identificationTypes = ["Type 1", "Type 2", "Type 3"];

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
            <FormAutocomplete
              name="prefix"
              control={control}
              options={prefixes}
              label="Prefix"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormTextField
              name="lastName"
              label="Last Name"
              control={control}
              rules={{ required: requiredField, maxLength: maxLength(30) }}
              error={errors.lastName}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormTextField
              name="firstName"
              label="First Name"
              control={control}
              rules={{ required: requiredField, maxLength: maxLength(30) }}
              error={errors.firstName}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormTextField
              name="middleName"
              label="Middle Name"
              control={control}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormAutocomplete
              name="suffix"
              control={control}
              options={suffixes}
              label="Suffix"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormAutocomplete
              name="gender"
              control={control}
              options={genders}
              label="Gender"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormTextField
              name="dateOfBirth"
              label="Date of Birth"
              control={control}
              type="date"
              error={errors.dateOfBirth}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormTextField name="age" label="Age" control={control} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormTextField
              name="registrationDate"
              label="Registration Date"
              control={control}
              type="date"
              error={errors.registrationDate}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormAutocomplete
              name="registrationType"
              control={control}
              options={registrationTypes}
              label="Registration Type"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormTextField
              name="changeDate"
              label="Change Date"
              control={control}
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Divider sx={{ borderColor: "red" }} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormCheckbox
              name="usCitizen"
              label="US Citizen"
              control={control}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormTextField
              name="ssn"
              label="SSN"
              control={control}
              rules={{ required: requiredField, maxLength: maxLength(9) }}
              error={errors.ssn}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormTextField
              name="drivingLicense"
              label="Driving License"
              control={control}
              rules={{ maxLength: maxLength(20) }}
              error={errors.drivingLicense}
            />
          </Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormCheckbox
              name="proofOfIdProvided"
              label="Proof of ID Provided"
              control={control}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormAutocomplete
              name="identificationType"
              control={control}
              options={identificationTypes}
              label="Identification Type"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormTextField
              name="identificationNumber"
              label="Identification Number"
              control={control}
            />
          </Grid>
          <Grid item xs={12}>
            <FormCheckbox
              name="noDriversLicense"
              label="No Driver's License"
              control={control}
            />
          </Grid>
          <Grid item xs={12}>
            <Divider sx={{ borderColor: "red" }} />
            <Typography variant="" gutterBottom>
              (Not for public use)
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormTextField
              name="email"
              label="Email"
              control={control}
              rules={{ required: requiredField, pattern: emailPattern }}
              error={errors.email}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormTextField
              name="phoneNumber"
              label="Phone Number"
              control={control}
            />
          </Grid>
          <Grid item xs={12}>
            <Divider sx={{ borderColor: "red" }} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormTextField name="status" label="Status" control={control} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormTextField
              name="statusReason"
              label="Status Reason"
              control={control}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormTextField
              name="disability"
              label="Disability"
              control={control}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormCheckbox
              name="challenged"
              label="Challenged"
              control={control}
            />
          </Grid>
          <Grid item xs={12}>
            <FormCheckbox
              name="furtherAction"
              label="Further Action"
              control={control}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormTextField
              name="furtherActionReason"
              label="Further Action Reason"
              control={control}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormTextField
              name="furtherActionDescription"
              label="Further Action Description"
              control={control}
            />
          </Grid>
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
          <Button variant="contained" color="primary" type="submit">
            Save
          </Button>
        </Box>
      </form>

      <Dialog open={open} onClose={() => handleDialogClose("cancel")}>
        <DialogTitle>Save Changes?</DialogTitle>
        <DialogContent>Do you want to save the changes?</DialogContent>
        <DialogActions>
          <Button onClick={() => handleDialogClose("cancel")} color="secondary">
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
