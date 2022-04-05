import { Grid } from "@mui/material";
import Body from "./components/body/Index";
import Layout from "./components/layouts/Layout";
import OrderBy from "./components/OrderBy";
import "./styles/home.css";

function App() {
  return (
    <div className="App">
      <Layout>
        <Grid container>
          <Grid item md={2}>
            <OrderBy />
          </Grid>
          <Grid item md={10}>
            <div className="body-wrapper">
              <Body />
            </div>
          </Grid>
        </Grid>
      </Layout>
    </div>
  );
}

export default App;
