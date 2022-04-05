import { Grid } from "@mui/material";
import Layout from "./components/layouts/Layout";
function App() {
  return (
    <div className="App">
      <Layout>
        <Grid container>
          <Grid item md={2}>
            menu
          </Grid>
          <Grid item md={10}>
            Body
          </Grid>
        </Grid>
      </Layout>
    </div>
  );
}

export default App;
