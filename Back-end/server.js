import sequelize from "./config/db.js";
import express from "express";
import cors from "cors";
import articalRoutes from "./routes/articleRoute.js";
const app = express();
const corsOptions = {
  origin: "http://localhost:3000", // Allow only your frontend origin
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  optionsSuccessStatus: 200, // Some legacy browsers choke on 204
};

app.use(cors(corsOptions));
app.use(express.json());
sequelize
  .sync()
  .then(() => {
    console.log("Database synchronized successfully");
  })
  .catch((error) => {
    console.error("Failed to synchronize database: ", error);
  });
app.use("/api/artical", articalRoutes);
  const port = process.env.PORT || 4000;

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
