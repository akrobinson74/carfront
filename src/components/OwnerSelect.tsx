import Select, { SelectChangeEvent } from "@mui/material/Select";
import { ChangeEvent, useEffect, useState } from "react";
import { MenuItem } from "@mui/material";
import { OwnerEntity } from "../types";

type FormProps = {
  ownerdata: number;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const OwnerSelect = ({ ownerdata, handleChange }: FormProps) => {
  const [ownerId, setOwnerId] = useState(ownerdata || -1);
  const [owners, setOwners] = useState<OwnerEntity[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleSelectChange = (e: SelectChangeEvent) => {
    const { name, value } = e.target;
    setOwnerId(Number(value));
    const changeEvent: ChangeEvent<HTMLInputElement> = {
      // @ts-ignore
      target: {
        name: name,
        value: value,
      },
      // @ts-ignore
      currentTarget: { name: name, value: value },
      type: "change",
      bubbles: true,
      cancelable: true,
    };

    handleChange(changeEvent);
  };

  useEffect(() => {
    const setupOwners = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/owners`);
        const data = await response.json();
        setOwners(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    setupOwners();
  }, []);

  return (
    <>
      {isLoading ? (
        <>
          <span>Loading...</span>
        </>
      ) : (
        <Select
          id="owner-select"
          label="owner"
          onChange={handleSelectChange}
          value={String(ownerId)}
        >
          <MenuItem key={-1} value={-1}>
            Owner
          </MenuItem>
          {owners.map((o) => {
            const fullName = o.firstname + " " + o.lastname;
            return (
              <MenuItem key={o.ownerid} value={o.ownerid}>
                {fullName}
              </MenuItem>
            );
          })}
        </Select>
      )}
    </>
  );
};

export default OwnerSelect;
