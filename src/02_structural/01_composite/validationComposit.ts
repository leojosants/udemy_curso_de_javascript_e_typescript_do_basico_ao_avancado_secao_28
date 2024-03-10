/* - - - - - - - - - - - - - - - - - - - - abstract classes - - - - - - - - - - - - - - - - - - - -*/
export abstract class ValidationComponent {
    abstract validate(value: unknown): boolean;
}

/* - - - - - - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - - - - - - */
export class ValidateEmail extends ValidationComponent {
    public validate(value: unknown): boolean {
        if (typeof value !== 'string') {
            return false;
        }
        return /@/.test(value);
    }
}

export class ValidateString extends ValidationComponent {
    public validate(value: unknown): boolean {
        return typeof value === 'string';
    }
}

export class ValidateNumber extends ValidationComponent {
    public validate(value: unknown): boolean {
        if (typeof value !== 'string') {
            return false;
        }
        return /\d+/.test(value);
    }
}

export class ValidationComposite extends ValidationComponent {
    private readonly children: ValidationComponent[] = [];

    public validate(value: unknown): boolean {
        for (const child of this.children) {
            const validation = child.validate(value);
            if (!validation) {
                return false;
            }
        }
        return true;
    }

    public add(...validations: ValidationComponent[]): void {
        validations.forEach((validation) => this.children.push(validation));
    }
}

/* - - - - - - - - - - - - - - - - - - - - program - - - - - - - - - - - - - - - - - - - - */
const validateEmail = new ValidateEmail();
const validateNumber = new ValidateNumber();
const validateString = new ValidateString();

const validationComposite = new ValidationComposite();

validationComposite.add(validateEmail);
console.log('Email válido: ' + validationComposite.validate('leo@'));
console.log('Email válido: ' + validationComposite.validate('leo'));

// validationComposite.add(validateNumber);
// console.log('Número válido: ' + validationComposite.validate('1'));
// console.log('Número válido: ' + validationComposite.validate(1));

// validationComposite.add(validateString);
// console.log('String válida: ' + validationComposite.validate('1'));
// console.log('String válida: ' + validationComposite.validate(1));