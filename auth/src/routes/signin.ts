import {
  AuthErrors,
  NotFoundError,
  authPayloadVerification,
  validateRequest,
} from "@samoznew/common";
import { Request, Response, Router } from "express";
import { getUserByEmail } from "../services";
import { passwordManager } from "../utils";
const route = Router();

route.post(
  "/signin",
  ...authPayloadVerification,
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const user = await getUserByEmail(email);

    if (!user) {
      throw new NotFoundError();
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      throw new AuthErrors();
    }
    const jwt = passwordManager.generateJWT(user);

    req.session = {
      ...req.session,
      jwt,
    };

    return res.status(200).send({
      data: user,
    });
  }
);

export { route as signinRoute };
