import express from "express";
import authRouter from "./routes/auth";
import users from "./routes/users";
const app = express();

app.use(express.json());
app.use(authRouter);
app.use(users);
export default app;