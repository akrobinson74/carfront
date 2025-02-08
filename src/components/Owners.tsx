import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import OwnerList from "./Ownerlist";

const Owners = () => {
  return (
    <Container maxWidth="xl">
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Owners</Typography>
        </Toolbar>
      </AppBar>
      <OwnerList />
    </Container>
  );
};

export default Owners;
