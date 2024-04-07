import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

const port = process.env.PORT || 8000;

dotenv.config({ path: "./env" });

connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log("Server running on port: ", port);
        });
        app.get("/",(req,res)=>{
            res.send("SERVER RUNNNNNN")
        })
    })
    .catch((err) => {
        console.log("DB failed", err);
    });
