import { PasswordService } from "@samoznew/common";
import { CONFIG } from "../config";

export const passwordManager = new PasswordService(CONFIG.JWT_KEY);
<<<<<<< HEAD
=======

console.log(CONFIG.JWT_KEY);
>>>>>>> 89871aa (Add Dockerfile and .dockerignore for tickets service)
