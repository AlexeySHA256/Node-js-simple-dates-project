import Router from "express";
import DateHandlers from "./handlers.js";

const router = new Router();

router.get("/current-date", DateHandlers.getCurrentDate);

export default router;
