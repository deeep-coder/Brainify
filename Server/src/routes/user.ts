import {Router} from "express";
import {userMiddleware} from "../middlewares/userMiddleware.js";
import{
    userSignup,
    userSignin,
    addContent,
    findContent,
    shareBrain,
    getShareLink,
    updateContent
} from '../controllers/controllers.js'

const serverRouter =Router();

serverRouter.post("/signup",userSignup);
serverRouter.post("/signin",userSignin);
serverRouter.put("/content",userMiddleware,updateContent);


serverRouter.post("/content", userMiddleware, addContent);
serverRouter.get("/content", userMiddleware, findContent);
serverRouter.delete("/content", userMiddleware, deleteContent);


serverRouter.post("/brain/share", userMiddleware, shareBrain);
serverRouter.get("/brain/share/:shareLink", getsharelink);

export default serverRouter;


