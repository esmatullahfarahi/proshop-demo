import  express  from "express";
 dotenv.config();
import connectDB from "./config/db.js";
import {notFound, errorHandler} from "./middleware/errorMiddleware.js";
import dotenv from "dotenv"
const port =process.env.PORT || 5000;
import productRoutes from "./routes/productRoutes.js";

connectDB(); // Connect to MongoDB

const app = express();


app.get("/",(req,res)=>{
    res.send("Api is running...");
});

app.use("/api/products", productRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(port, () =>console.log(`Server is running on port ${port} `));
