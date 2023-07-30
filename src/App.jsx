import { Container, Grid, Typography } from "@mui/material";
import Formulario from "./components/Formulario";
import ListadoNoticias from "./components/ListadoNoticias";
import { NewsProvider } from "./context/NewsProvider";

function App() {
  return (
    <NewsProvider>
      <Container>
        <header>
          <Typography align="center" marginY={5} component="h1" variant="h3">
            Buscador de Noticias
          </Typography>
        </header>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item md={6}>
            <Formulario />
          </Grid>
        </Grid>
        <ListadoNoticias />
      </Container>
    </NewsProvider>
  );
}

export default App;
