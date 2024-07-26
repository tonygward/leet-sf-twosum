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
        console.log('set target to ' + this.target);
    }

    get runDisabled() {
        console.log('target is ' + this.target);
        if (this.target > 0) {
            console.log('run enabled');
            return false;
        }
        console.log('run disabled');
        return true;
    }
}