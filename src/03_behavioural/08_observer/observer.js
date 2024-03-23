/* - - - - - - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - - - - - - */
var InputObservable = /** @class */ (function () {
    function InputObservable(element) {
        this.observers = [];
        this.element = element;
    }
    InputObservable.prototype.subscribe = function () {
        var _this = this;
        var observers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observers[_i] = arguments[_i];
        }
        observers.forEach(function (observer) {
            if (!_this.observers.includes(observer)) {
                _this.observers.push(observer);
            }
        });
    };
    InputObservable.prototype.unsubscribe = function (observer) {
        var observerIndex = this.observers.indexOf(observer);
        if (observerIndex !== -1) {
            this.observers.splice(observerIndex, 1);
        }
    };
    InputObservable.prototype.notify = function () {
        var _this = this;
        this.observers.forEach(function (observer) {
            observer.update(_this);
        });
    };
    return InputObservable;
}());
var ParagraphObserver = /** @class */ (function () {
    function ParagraphObserver(element) {
        this.element = element;
    }
    ParagraphObserver.prototype.update = function (observable) {
        if (observable instanceof InputObservable) {
            this.element.innerText = observable.element.value;
        }
    };
    return ParagraphObserver;
}());
var DivObserver = /** @class */ (function () {
    function DivObserver(element) {
        this.element = element;
    }
    DivObserver.prototype.update = function (observable) {
        if (observable instanceof InputObservable) {
            this.element.innerText = observable.element.value;
        }
    };
    return DivObserver;
}());
/* - - - - - - - - - - - - - - - - - - - - client code - - - - - - - - - - - - - - - - - - - - */
function makeInput() {
    var input = document.createElement('input');
    document.body.appendChild(input);
    return input;
}
function makeParagraph() {
    var paragraph = document.createElement('p');
    paragraph.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.<p>';
    document.body.appendChild(paragraph);
    return paragraph;
}
function makeDiv() {
    var div = document.createElement('div');
    div.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.<div>';
    document.body.appendChild(div);
    return div;
}
var input = new InputObservable(makeInput());
var paragraph1 = new ParagraphObserver(makeParagraph());
var paragraph2 = new ParagraphObserver(makeParagraph());
var div = new DivObserver(makeDiv());
input.subscribe(paragraph1, paragraph2, div);
input.element.addEventListener('keyup', function () {
    input.notify();
});
input.unsubscribe(paragraph2);
