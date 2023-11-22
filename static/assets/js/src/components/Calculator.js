import BaseComponent from './BaseComponent.js';
import SelectorEngine from './dom/SelectorEngine.js';

import opts from './Math.js';

const NAME = 'calculator';

const EVENT_CLICK = 'click';
const EVENT_KEYDOWN = 'keydown';
const EVENT_LOAD = 'load';

const SELECTOR_DATA_VALUE = '[data-jsx-number], [data-jsx-point], [data-jsx-operator], [data-jsx-equals], [data-jsx-clear], [data-jsx-delete]';

const MAX_LENGTH = 9;

const Default = {
    keyboard: true
};

const DefaultType = {
    keyboard: 'boolean'
};

export default class Calculator extends BaseComponent {
    constructor(element, config) {
        super(element, config);

        this._previousOperandEl = SelectorEngine.findOne('.calculator__operand--prev', this._element);
        this._currentOperandEl =  SelectorEngine.findOne('.calculator__operand--current', this._element);

        this._result = null;

        this._clear();
    };

    // getters/setters
    static get NAME() {
        return NAME;
    }

    static get Default() {
        return Default;
    }

    static get DefaultType() {
        return DefaultType;
    }

    // public methods 

    // private methods
    _append(v) {
        if ((v === '.' && this._currentOperand.includes('.')) || this._currentOperand.length > MAX_LENGTH) return;

        this._currentOperand += v.toString();
    }

    _getop(op) {
        if (this._currentOperand === ' ') return;
        if (this._previousOperand !== ' ') this._compute();
        
        this._operation = op;
        this._previousOperand = this._currentOperand;
        this._currentOperand = ' ';
    }

    _compute() {
        const prev = parseFloat(this._previousOperand);
        const curr = parseFloat(this._currentOperand);

        if (isNaN(prev) || isNaN(curr)) return;

        const math = opts[this._operation];
        
        const ans = math(prev, curr);

        this._currentOperand = ans;
        this._previousOperand = ' ';
        this._operation = undefined;
    }

    _displayToScreen(num) {
        const sNum = num.toString();
        const integerPart = parseFloat(sNum.split('.')[0]);
        const fractionalPart = sNum.split('.')[1];

        this._result = isNaN(integerPart) ? ' ' : integerPart.toLocaleString('en', { maximumFractionDigits: 0 } );
        return (fractionalPart != null) ? `${this._result}.${fractionalPart}` : this._result;
    }

    _update() {
        this._currentOperandEl.textContent = this._displayToScreen(this._currentOperand);

        if (this._operation !== undefined) {
            this._previousOperandEl.textContent = `${this._displayToScreen(this._previousOperand)} ${this._operation}`;
        } else {
            this._previousOperandEl.textContent = ' ';
        }
    }

    _clear() {
        this._currentOperand = ' ';
        this._previousOperand = ' ';
        this._operation = undefined;
    }

    _delete() {
        this._currentOperand = this._currentOperand.toString().slice(0, -1);
    }

    // static methods
    static clickHandler(event) {
        const calculator = SelectorEngine.findOne('.calculator');

        const instance = Calculator.getOrCreateInstance(calculator);

        if (this.hasAttribute('data-jsx-number') || this.hasAttribute('data-jsx-point')) {
            const value = this.dataset.jsxNumber || this.dataset.jsxPoint;

            instance._append(value);
            instance._update();
        }

        if (this.hasAttribute('data-jsx-operator')) {
            const op = this.dataset.jsxOperator;

            instance._getop(op);
            instance._update();
        }

        if (this.hasAttribute('data-jsx-equals')) {
            instance._compute();
            instance._update();
        }

        if (this.hasAttribute('data-jsx-clear')) {
            instance._clear();
            instance._update();
        }

        if (this.hasAttribute('data-jsx-delete')) {
            instance._delete();
            instance._update();
        }
    }

    static keydownHandler(event) {
        const calculator = SelectorEngine.findOne('.calculator');

        const instance = Calculator.getOrCreateInstance(calculator);

        event.preventDefault();

        if (event.key >= 0 && event.key <= 9) {
            instance._append(event.key);
            instance._update();
        }

        if (/[\/\+\-\*]/g.test(event.key)) {
            instance._getop(event.key);
            instance._update();
        }

        if (event.key === '=' || event.key === 'Enter') {
            instance._compute();
            instance._update();
        }

        if (event.key === 'Escape') {
            instance._clear();
            instance._update();
        }

        if (event.key === 'Backspace') {
            instance._delete();
            instance._update();
        }
    }
};


SelectorEngine.find(SELECTOR_DATA_VALUE)
    .forEach((selector) => {
        selector.addEventListener(EVENT_CLICK, Calculator.clickHandler);
    });

document.addEventListener(EVENT_KEYDOWN, Calculator.keydownHandler);

window.addEventListener(EVENT_LOAD, () => {
    const calculator = SelectorEngine.findOne('.calculator');

    Calculator.getOrCreateInstance(calculator);
});