import DialogContent from "@mui/material/DialogContent";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { Owner } from "../types";

type DialogFormProps = {
  owner: Owner;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function OwnerDialogContent({ owner, handleChange }: DialogFormProps) {
  return (
    <DialogContent>
      <Stack spacing={2} mt={1}>
        <TextField
          label="First Name"
          name="firstname"
          value={owner.firstname}
          onChange={handleChange}
        />
        <TextField
          label="Last Name"
          name="lastname"
          value={owner.lastname}
          onChange={handleChange}
        />
      </Stack>
    </DialogContent>
  );
}

export default OwnerDialogContent;
