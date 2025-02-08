import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Carlist from "./Carlist";

// const queryClient = new QueryClient();

const CarShop = () => {
  return (
    <Container maxWidth="xl">
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Car Shop</Typography>
        </Toolbar>
      </AppBar>
      <Carlist />
      {/* <QueryClientProvider client={queryClient}>
      </QueryClientProvider> */}
    </Container>
  );
};

export default CarShop;
