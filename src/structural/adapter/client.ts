import { EmailValidatorFnProtocol, EmailValidatorProtocol } from './validation/interfaces/email-validator-protocol';
import { EmailValidatorClassAdapter } from './validation/email-validator-class-adapter';
import { emailValidatorFnAdapter } from './validation/email-validator-fn-adapter';

function validatorEmailClass(emailValidator: EmailValidatorProtocol, email: string): void {
    if (emailValidator.isEmail(email)) { console.log('E-mail válido. (CLASSE)'); }
    else { console.log('E-mail inválido. (CLASSE)'); }
}

function validatorEmailFn(emailValidator: EmailValidatorFnProtocol, email: string): void {
    if (emailValidator(email)) { console.log('E-mail válido. (FUNÇÃO)'); }
    else { console.log('E-mail inválido. (FUNÇÃO)'); }
}

const email = 'leonardojosantos@gmail.com';

validatorEmailClass(new EmailValidatorClassAdapter(), email);
validatorEmailFn(emailValidatorFnAdapter, email);