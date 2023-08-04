import Express  from "express";
import appCampus from "./../controller/campus.js";

let router = Express();

router.use('/campus', appCampus);

export default router;