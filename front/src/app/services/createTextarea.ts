import { attrInput } from './attrinput';

export class textAreaInput extends attrInput<string> {
    controlType = "textAreaCustom";
    constructor(options: {} = {}) {
        super(options);
        this.id=options['id'] || null;
    }
}