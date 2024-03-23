/* - - - - - - - - - - - - - - - - - - - - interfaces - - - - - - - - - - - - - - - - - - - - */
interface Observable {
    subscribe(...observers: Observer[]): void;
    unsubscribe(observer: Observer): void;
    notify(): void;
}

interface Observer {
    update(...args: unknown[]): void;
}

/* - - - - - - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - - - - - - */
class InputObservable implements Observable {
    private observers: Observer[] = [];
    public element: HTMLInputElement;

    public constructor(element: HTMLInputElement) {
        this.element = element;
    }

    public subscribe(...observers: Observer[]): void {
        observers.forEach((observer) => {
            if (!this.observers.includes(observer)) {
                this.observers.push(observer);
            }
        });
    }

    public unsubscribe(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex !== -1) {
            this.observers.splice(observerIndex, 1);
        }
    }

    public notify(): void {
        this.observers.forEach((observer) => {
            observer.update(this);
        });
    }
}

class ParagraphObserver implements Observer {
    public element: HTMLParagraphElement;

    public constructor(element: HTMLParagraphElement) {
        this.element = element;
    }

    public update(observable: Observable): void {
        if (observable instanceof InputObservable) {
            this.element.innerText = observable.element.value;
        }
    }
}

class DivObserver implements Observer {
    public element: HTMLDivElement;

    public constructor(element: HTMLDivElement) {
        this.element = element;
    }

    public update(observable: Observable): void {
        if (observable instanceof InputObservable) {
            this.element.innerText = observable.element.value;
        }
    }
}

/* - - - - - - - - - - - - - - - - - - - - client code - - - - - - - - - - - - - - - - - - - - */
function makeInput(): HTMLInputElement {
    const input = document.createElement('input');
    document.body.appendChild(input);
    return input;
}

function makeParagraph(): HTMLParagraphElement {
    const paragraph = document.createElement('p');
    paragraph.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.<p>'
    document.body.appendChild(paragraph);
    return paragraph;
}

function makeDiv(): HTMLDivElement {
    const div = document.createElement('div');
    div.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.<div>'
    document.body.appendChild(div);
    return div;
}

const input = new InputObservable(makeInput());
const paragraph1 = new ParagraphObserver(makeParagraph());
const paragraph2 = new ParagraphObserver(makeParagraph());
const div = new DivObserver(makeDiv());

input.subscribe(paragraph1, paragraph2, div);

input.element.addEventListener('keyup', function () {
    input.notify();
});

input.unsubscribe(paragraph2);