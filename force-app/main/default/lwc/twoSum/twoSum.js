import { LightningElement } from 'lwc';

export default class TwoSum extends LightningElement {

    get options() {
        const values = [];
        for (let i = 1; i < 10; i++) {
            values.push( { label: i, value: i });
        }
        return values;
    }

    numbers = [];

    changeNumbers(event) {
        this.numbers = event.detail.value;
    }

    get selectedNumbers() {
        return this.numbers.join(',');
    }

    target = 0;

    targetChanged(event) {
        this.target = event.detail.value;
    }

    get runDisabled() {
        if (this.target > 0) {
            return false;
        }
        return true;
    }

    result = '';
    run() {
        this.result = '0,1';
    }
}