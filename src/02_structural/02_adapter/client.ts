/* - - - - - - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - - - - - - */
import { EmailValidatorClassAdapter } from "./validation/emailValidatorClassAdapter";
import { emailValidatorFnAdapter } from "./validation/emailValidatorFnAdapter";
import { EmailValidatorFnProtocol, EmailValidatorProtocol } from "./validation/interfaces/emailValidatorProtocols";

/* - - - - - - - - - - - - - - - - - - - - functions - - - - - - - - - - - - - - - - - - - - */
function validateEmailClass(emailValidator: EmailValidatorProtocol, email: string): void {
    if (emailValidator.isEmail(email)) {
        console.log('E-mail válido (CLASS)');
    }
    else {
        console.log('E-mail inválido (CLASS)');
    }
}

function validateEmailFn(emailValidator: EmailValidatorFnProtocol, email: string): void {
    if (emailValidator(email)) {
        console.log('E-mail válido (FN)');
    }
    else {
        console.log('E-mail inválido (FN)');
    }
}

/* - - - - - - - - - - - - - - - - - - - - program - - - - - - - - - - - - - - - - - - - - */
const email = 'leo@gmail.com';
validateEmailClass(new EmailValidatorClassAdapter(), email);
validateEmailFn(emailValidatorFnAdapter, email);