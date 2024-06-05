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

const VoterInfoForm: React.FC = () => {
  const [formData, setFormData] = useState({
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
  });

  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios
      .get("https://mocki.io/v1/ab79d280-350d-498e-a987-d53fd3b89ff9")
      .then((response) => {
        setFormData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleSaveClick = () => {
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
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <TextField label="Prefix" fullWidth select value={formData.prefix}>
            <MenuItem value="Ms.">Ms.</MenuItem>
            <MenuItem value="Mr.">Mr.</MenuItem>
            <MenuItem value="Mrs.">Mrs.</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField label="Last Name" fullWidth value={formData.lastName} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField label="First Name" fullWidth value={formData.firstName} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            label="Middle Name"
            fullWidth
            value={formData.middleName}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField label="Suffix" fullWidth select value={formData.suffix}>
            <MenuItem value="Jr.">Jr.</MenuItem>
            <MenuItem value="Sr.">Sr.</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField label="Gender" fullWidth select value={formData.gender}>
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="Male">Male</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            label="Date of Birth"
            fullWidth
            type="date"
            value={formData.dateOfBirth}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField label="Age" fullWidth value={formData.age} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            label="Registration Date"
            fullWidth
            type="date"
            value={formData.registrationDate}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            label="Registration Type"
            fullWidth
            select
            value={formData.registrationType}
          >
            <MenuItem value="In Person With...">In Person With...</MenuItem>
            <MenuItem value="Online">Online</MenuItem>
            <MenuItem value="Mail">Mail</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            label="Change Date"
            fullWidth
            type="date"
            value={formData.changeDate}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12}>
          <Divider sx={{ borderColor: "red" }} />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox checked={formData.usCitizen} />}
            label="US Citizen"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField label="Last 4 of SSN" fullWidth value={formData.ssn} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            label="Driving License"
            fullWidth
            value={formData.drivingLicense}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            label="Type of Identification"
            fullWidth
            select
            value={formData.identificationType}
          >
            <MenuItem value="Select">Select</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            label="Identification Number"
            fullWidth
            value={formData.identificationNumber}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox checked={formData.proofOfIdProvided} />}
            label="Proof of ID Provided"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox checked={formData.noDriversLicense} />}
            label="Applicant Did Not Provide Driver's License, State ID or SSN"
          />
        </Grid>
        <Grid item xs={12}>
          <Divider sx={{ borderColor: "red" }} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1">Not for public use</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="E-Mail" fullWidth value={formData.email} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Phone Number"
            fullWidth
            value={formData.phoneNumber}
          />
        </Grid>
        <Grid item xs={12}>
          <Divider sx={{ borderColor: "red" }} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField label="Status" fullWidth select value={formData.status}>
            <MenuItem value="Active">Active</MenuItem>
            <MenuItem value="Inactive">Inactive</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            label="Status Reason"
            fullWidth
            select
            value={formData.statusReason}
          >
            <MenuItem value="DMV Impo...">DMV Impo...</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            label="Disability"
            fullWidth
            select
            value={formData.disability}
          >
            <MenuItem value="Select">Select</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FormControlLabel
            control={<Checkbox checked={formData.challenged} />}
            label="Challenged"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FormControlLabel
            control={<Checkbox checked={formData.furtherAction} />}
            label="Further Action"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            label="Further Action Reason"
            fullWidth
            select
            value={formData.furtherActionReason}
          >
            <MenuItem value="Select">Select</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <TextField
            label="Further Action Description"
            fullWidth
            value={formData.furtherActionDescription}
          />
        </Grid>
      </Grid>
      <Box sx={{ mt: 3 }}>
        <Button variant="contained" color="primary" onClick={handleSaveClick}>
          Save
        </Button>
      </Box>
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
