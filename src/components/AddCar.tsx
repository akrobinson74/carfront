import { useState } from "react";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { CarEntity } from "../types";
import { addACar } from "../api/carapi";
import CarDialogContent from "./CarDialogContent";

const AddCar = () => {
  // Add inside the AddCar component function
  // const queryClient = useQueryClient();
  // Add inside the AddCar component function
  // const { mutate } = useMutation(addCar, {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries(["cars"]);
  //   },
  //   onError: (err) => {
  //     console.error(err);
  //   },
  // });

  const [open, setOpen] = useState(false);
  const [car, setCar] = useState<CarEntity>({
    id: 0,
    brand: "",
    model: "",
    color: "",
    registrationNumber: "",
    modelYear: 0,
    price: 0,
    ownerId: 0,
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(`Event: ${event.target.name}`);
    setCar({ ...car, [event.target.name]: event.target.value });
  };

  const handleSave = () => {
    // mutate(car);
    addACar(car);
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
    handleClose();
  };

  return (
    <>
      <Button onClick={handleClickOpen}>New Car</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New car</DialogTitle>
        <CarDialogContent car={car} handleChange={handleChange} />
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default AddCar;
