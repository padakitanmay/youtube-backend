import { Router } from "express";
import {
    loginUser,
    registerUser,
    logoutUser,
} from "../controllers/user.controller.js";
import { upload } from "../middleware/multer.js";
import {verifyJWT} from "../middleware/auth.js";

const router = Router();

router.route("/register").post(
    upload.fields([
        { name: "avatar", maxCount: 1 },
        { name: "coverImage", maxCount: 1 },
    ]),
    registerUser
);

router.route("/login").post(loginUser);

router.route("/logout").post(verifyJWT,logoutUser);

export default router;
