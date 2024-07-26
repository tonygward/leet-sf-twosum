import { createElement } from 'lwc';
import TwoSum from 'c/twoSum';

describe('c-two-sum', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
        jest.clearAllMocks();
    });

    it('selected numbers defaults to nothing', () => {
        const element = newComponent();
        const actual = element.shadowRoot.querySelector('lightning-formatted-text[data-id="selected-numbers"]');
        expect(actual.value).toBe('');
    });

    it('available numbers are 1 to 9', () => {
        const element = newComponent();
        const actual = element.shadowRoot.querySelector('lightning-select[data-id="available-numbers"]');
        expect(actual).not.toBeNull();

        const expected = [
            {label: 1, value: 1},
            {label: 2, value: 2},
            {label: 3, value: 3},
            {label: 4, value: 4},
            {label: 5, value: 5},
            {label: 6, value: 6},
            {label: 7, value: 7},
            {label: 8, value: 8},
            {label: 9, value: 9}];
        expect(actual.options).toStrictEqual(expected);
    });

    it('select numbers 1 and 2', async () => {
        const element = newComponent();
        await selectNumbers(element, [1, 2]);

        const actual = element.shadowRoot.querySelector('lightning-formatted-text[data-id="selected-numbers"]');
        expect(actual.value).toBe('1,2');

        const run = element.shadowRoot.querySelector('lightning-button');
        expect(run.disabled).toBe(true);
    });

    it('select numbers and invalid target disables run button', async () => {
        const element = newComponent();
        await selectNumbers(element, [1, 2]);
        await setTarget(element, 0);

        const run = element.shadowRoot.querySelector('lightning-button');
        expect(run.disabled).toBe(true);
    });

    it('select numbers and valid target enables run button', async () => {
        const element = newComponent();
        await selectNumbers(element, [1, 2]);
        await setTarget(element, 3);

        const run = element.shadowRoot.querySelector('lightning-button');
        expect(run.disabled).toBe(false);
    });
});

async function setTarget(element, value) {
    const target = element.shadowRoot.querySelector('lightning-input[data-id="target"]');
    target.value = value;
    const targetChanged = new CustomEvent(
        'change',
        { detail: { value: value}}
    );
    target.dispatchEvent(targetChanged);
    await flushPromises();
}

async function selectNumbers(element, values) {
    const numbers = element.shadowRoot.querySelector('lightning-select[data-id="available-numbers"]');
    const selectNumber = new CustomEvent(
        'change',
        { detail: { value: values } }
    );
    numbers.dispatchEvent(selectNumber);
    await flushPromises();
}

function newComponent() {
    const element = createElement('c-two-sum', {
        is: TwoSum
    });
    document.body.appendChild(element);
    return element;
}

async function flushPromises() {
    return Promise.resolve();
}