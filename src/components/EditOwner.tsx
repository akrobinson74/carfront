import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Tooltip from "@mui/material/Tooltip";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { Owner, OwnerEntry, OwnerResponse } from "../types";
import OwnerDialogContent from "./OwnerDialogContent";
import { updateOwner } from "../api/carapi";

type FormProps = {
  ownerdata: OwnerResponse;
};
const EditOwner = ({ ownerdata }: FormProps) => {
  // Get query client
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);
  const [owner, setOwner] = useState<Owner>({
    firstname: "",
    lastname: "",
  });

  // Use useMutation hook
  const { mutate } = useMutation(updateOwner, {
    onSuccess: () => {
      queryClient.invalidateQueries(["owners"]);
    },
    onError: (err) => {
      console.error(err);
    },
  });

  const handleClickOpen = () => {
    setOwner({
      firstname: ownerdata.firstname,
      lastname: ownerdata.lastname,
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    const url = ownerdata._links.self.href;
    const ownerEntry: OwnerEntry = { owner, url };
    mutate(ownerEntry);
    setOwner({
      firstname: "",
      lastname: "",
    });
    setOpen(false);
  };

  // Add handleChange function
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOwner({ ...owner, [event.target.name]: event.target.value });
  };

  return (
    <>
      <Tooltip title="Edit owner">
        <IconButton aria-label="edit" size="small" onClick={handleClickOpen}>
          <EditIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit car</DialogTitle>
        <OwnerDialogContent owner={owner} handleChange={handleChange} />
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default EditOwner;
