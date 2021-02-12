import express from "express";
import {validateJWT} from "../middlewares/jwt"
import {allUsers, idUser} from "../controllers/users"
const router = express.Router();


router.get("/users", validateJWT, allUsers);
router.get("/users/:id", validateJWT, idUser);
export default router;