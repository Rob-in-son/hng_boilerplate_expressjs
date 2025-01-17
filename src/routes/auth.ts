import { Router } from "express";
import {
<<<<<<< HEAD
  authenticateUserMagicLink,
=======
  VerifyUserMagicLink,
>>>>>>> 78e02e38ee685830aa91acb2e343579bc4d1fd45
  changePassword,
  changeUserRole,
  createMagicToken,
  forgotPassword,
  googleAuthCall,
  login,
  resetPassword,
  signUp,
  verifyOtp,
} from "../controllers";
import { UserRole } from "../enums/userRoles";

import { authMiddleware, checkPermissions } from "../middleware";
import { requestBodyValidator } from "../middleware/request-validation";
import { emailSchema } from "../utils/request-body-validator";

const authRoute = Router();

authRoute.post("/auth/register", signUp);
authRoute.post("/auth/verify-otp", verifyOtp);
authRoute.post("/auth/login", login);
authRoute.put(
  "/auth/organizations/:organization_id/users/:user_id/role",
  authMiddleware,
  checkPermissions([UserRole.SUPER_ADMIN, UserRole.ADMIN]),
  changeUserRole,
);

authRoute.post("/auth/forgot-password", forgotPassword);
authRoute.post("/auth/reset-password/:token", resetPassword);

authRoute.post("/auth/google", googleAuthCall);

authRoute.patch("/auth/change-password", authMiddleware, changePassword);

authRoute.post(
  "/auth/magic-link",
  requestBodyValidator(emailSchema),
  createMagicToken,
);
<<<<<<< HEAD
authRoute.get("/auth/magic-link", authenticateUserMagicLink);
=======
authRoute.get("/auth/magic-link/verify", VerifyUserMagicLink);
>>>>>>> 78e02e38ee685830aa91acb2e343579bc4d1fd45

export { authRoute };
