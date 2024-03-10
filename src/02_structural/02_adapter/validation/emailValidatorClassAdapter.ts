/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { EmailValidatorProtocol } from "./interfaces/emailValidatorProtocols";
import isEmail from "validator/lib/isEmail";

/* - - - - - - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - - - - - - */
export class EmailValidatorClassAdapter implements EmailValidatorProtocol {
    isEmail(value: string): boolean {
        return isEmail(value);
    }
}