import express from "express";
import authRouter from "./routes/auth";
import users from "./routes/users";
import email from "./routes/mail";
const app = express();

app.use(express.json());
app.use(authRouter);
app.use(users);
app.use(email);
export default app;