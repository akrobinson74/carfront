import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Snackbar from "@mui/material/Snackbar";
import {
  DataGrid,
  GridCellParams,
  GridColDef,
  GridToolbar,
} from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteOwner, getOwners } from "../api/carapi";
import AddOwner from "./AddOwner";
import EditOwner from "./EditOwner";

const OwnerList = () => {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();
  const { data, error, isSuccess } = useQuery({
    queryKey: ["owners"],
    queryFn: getOwners,
  });

  const { mutate } = useMutation(deleteOwner, {
    onSuccess: () => {
      setOpen(true);
      queryClient.invalidateQueries({ queryKey: ["owners"] });
    },
    onError: (err: Error) => {
      console.error(err);
    },
  });

  const columns: GridColDef[] = [
    { field: "firstname", headerName: "First Name", width: 200 },
    { field: "lastname", headerName: "Last Name", width: 200 },
    {
      field: "edit",
      headerName: "",
      width: 90,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params: GridCellParams) => (
        <EditOwner ownerdata={params.row} />
      ),
    },
    {
      field: "delete",
      headerName: "",
      width: 90,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params: GridCellParams) => (
        <IconButton
          aria-label="delete"
          size="small"
          onClick={() => {
            if (
              window.confirm(
                `Are you sure you want to delete ${params.row.brand} ${params.row.model}?`
              )
            ) {
              mutate(params.row._links.owner.href);
            }
          }}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      ),
    },
  ];

  if (!isSuccess) {
    return <span>Loading...</span>;
  } else if (error) {
    return <span>Error when fetching owners...</span>;
  } else {
    return (
      <>
        <AddOwner />
        <DataGrid
          rows={data}
          columns={columns}
          disableRowSelectionOnClick={true}
          getRowId={(row) => row._links.self.href}
          slots={{ toolbar: GridToolbar }}
        />
        <Snackbar
          open={open}
          autoHideDuration={2000}
          onClose={() => setOpen(false)}
          message="Owner deleted"
        />
      </>
    );
  }
};
export default OwnerList;
