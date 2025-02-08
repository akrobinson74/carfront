import { useState } from "react";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Owner } from "../types";
import { addOwner } from "../api/carapi";
import OwnerDialogContent from "./OwnerDialogContent";

const AddOwner = () => {
  // Add inside the AddCar component function
  const queryClient = useQueryClient();
  // Add inside the AddCar component function
  const { mutate } = useMutation(addOwner, {
    onSuccess: () => {
      queryClient.invalidateQueries(["owners"]);
    },
    onError: (err) => {
      console.error(err);
    },
  });

  const [open, setOpen] = useState(false);
  const [owner, setOwner] = useState<Owner>({
    firstname: "",
    lastname: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOwner({ ...owner, [event.target.name]: event.target.value });
  };

  const handleSave = () => {
    mutate(owner);
    setOwner({
      firstname: "",
      lastname: "",
    });
    handleClose();
  };

  return (
    <>
      <Button onClick={handleClickOpen}>New Owner</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Owner</DialogTitle>
        <OwnerDialogContent owner={owner} handleChange={handleChange} />
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddOwner;
