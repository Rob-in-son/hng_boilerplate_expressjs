import { Router } from "express";
import { FAQController } from "../controllers/FaqController";
import { authMiddleware, checkPermissions } from "../middleware";
import { UserRole } from "../enums/userRoles";

const faqRouter = Router();
const faqController = new FAQController();

faqRouter.post("/faqs", authMiddleware, faqController.createFAQ);
faqRouter.patch("/faqs/:id", authMiddleware, faqController.updateFaq);
<<<<<<< HEAD
=======
faqRouter.get("/faqs", faqController.getFaq);
>>>>>>> 78e02e38ee685830aa91acb2e343579bc4d1fd45

export { faqRouter };
