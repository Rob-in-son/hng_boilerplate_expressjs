import { Router } from "express";
import { ContactController } from "../controllers/contactController";

const contactRouter = Router();
const contactController = new ContactController();

contactRouter.post(
  "/contact",
  contactController.createContact.bind(contactController),
);

contactRouter.get(
<<<<<<< HEAD:src/routes/contactRoutes.ts
  "/contact-us",
=======
  "/contact",
>>>>>>> 78e02e38ee685830aa91acb2e343579bc4d1fd45:src/routes/contact.ts
  contactController.getAllContact.bind(contactController),
);

export { contactRouter };
