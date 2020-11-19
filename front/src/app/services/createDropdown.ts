import { attrInput } from './attrinput';

export class createDropdown extends attrInput<string> {
    controlType = 'dropdownCustom';
    options: {key: string, value: string}[] = [];

    constructor(options: {} = {}) {
        super(options);
        this.options = options['options'] || [];
    }
}