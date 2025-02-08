import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import OwnerList from "./Ownerlist";

// const queryClient = new QueryClient();

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
      {/* <QueryClientProvider client={queryClient}>
      </QueryClientProvider> */}
    </Container>
  );
};

export default Owners;
