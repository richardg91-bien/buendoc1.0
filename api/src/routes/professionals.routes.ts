import { Router } from "express";
const router = Router();

import * as professionalsCtrl from "./professionals.controller";

router.get("/professionals", professionalsCtrl.getProfessionals);

router.get("/professionals/:id", professionalsCtrl.getProfessionals);

router.post("/professionals", professionalsCtrl.createProfessional);

router.delete("/professionals/:id", professionalsCtrl.deleteProfessional);

router.put("/professionals/:id", professionalsCtrl.updateProfessional);

export default router;