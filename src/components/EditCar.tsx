// EditCar.tsx
import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Tooltip from "@mui/material/Tooltip";

import { CarEntity, FullCarEntity } from "../types";
import CarDialogContent from "./CarDialogContent";
import { updateCarById } from "../api/carapi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type FormProps = {
  cardata: FullCarEntity;
};

const EditCar = ({ cardata }: FormProps) => {
  // Add inside the AddCar component function
  const queryClient = useQueryClient();
  // Add inside the AddCar component function
  const { mutate } = useMutation(updateCarById, {
    onSuccess: () => {
      queryClient.invalidateQueries(["cars"]);
    },
    onError: (err) => {
      console.error(err);
    },
  });
  const [open, setOpen] = useState(false);
  const [car, setCar] = useState<CarEntity>({
    ...cardata,
    ownerId: cardata.owner?.ownerid,
  });

  const handleClickOpen = () => {
    setCar({
      id: cardata.id,
      brand: cardata.brand,
      model: cardata.model,
      color: cardata.color,
      registrationNumber: cardata.registrationNumber,
      modelYear: cardata.modelYear,
      price: cardata.price,
      ownerId: cardata.owner?.ownerid,
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    mutate(car);
    setCar({
      id: 0,
      brand: "",
      model: "",
      color: "",
      registrationNumber: "",
      modelYear: 0,
      price: 0,
      ownerId: 0,
    });
    setOpen(false);
  };

  // Add handleChange function
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCar({ ...car, [event.target.name]: event.target.value });
  };

  return (
    <>
      <Tooltip title="Edit car">
        <IconButton aria-label="edit" size="small" onClick={handleClickOpen}>
          <EditIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit car</DialogTitle>
        <CarDialogContent car={car} handleChange={handleChange} />
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EditCar;
