import express from "express";
import {Email} from "../controllers/mail";

const router = express.Router();


router.post("/send-email", Email);

export default router;