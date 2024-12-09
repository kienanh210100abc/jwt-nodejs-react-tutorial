import e from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoutes from "./routes/web";
require("dotenv").config();

const app = e();
const PORT = process.env.PORT || 8080;

//config view engine
configViewEngine(app);

//init web routes
initWebRoutes(app);

app.listen(PORT, () => {
  console.log(">>>JWT Backend is runnning on PORT = ", PORT);
});
