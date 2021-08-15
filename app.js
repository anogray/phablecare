import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
//app config
const app = express();
const PORT = process.env.PORT || 8001;
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    return res.status(200).send({"msg":"server accessible"});
})

//middleware
// app.use(express.json());
//db config
//api endpoints
import routes from "./routes/v1/route.js";
app.use("/routes/api/v1", routes);

//listener
app.listen(PORT, () => console.log(`server running at port ${PORT}`));
