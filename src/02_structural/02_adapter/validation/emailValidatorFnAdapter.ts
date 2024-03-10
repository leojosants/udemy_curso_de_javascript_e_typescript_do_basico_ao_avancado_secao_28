/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import isEmail from "validator/lib/isEmail";
import { EmailValidatorFnProtocol } from "./interfaces/emailValidatorProtocols";

/* - - - - - - - - - - - - - - - - - - - - function - - - - - - - - - - - - - - - - - - - - */
export const emailValidatorFnAdapter: EmailValidatorFnProtocol = (value: string): boolean => {
    return isEmail(value);
}