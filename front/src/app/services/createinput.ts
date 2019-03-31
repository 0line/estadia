import { attrInput } from './attrinput';

export class createInput extends attrInput<string> {
    controlType = "inputCustom";
    type:string;
    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || 'text';
        this.id=options['id'] || null;
    }
}