import express from "express";
import {login, signIn} from "../controllers/auth";
import {validateJWT} from "../middlewares/jwt"
import {allUsers, idUser} from "../controllers/users"
const router = express.Router();

router.post("/login", login);
router.post("/signin", signIn);
router.get("/users", validateJWT, allUsers);
router.get("/users/{id}", validateJWT, idUser);
export default router;