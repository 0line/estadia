export class attrInput<T>  {
    value: T;
    key: string;
    label: string;
    required: boolean;
    order: number;
    controlType: string;
    placeholder:string;
    id: number;
    constructor(options: {
        value?: T,
        key?: string,
        label?: string,
        required?: boolean,
        order?: number,
        controlType?: string,
        placeholder?:string,
        id?:number
    } = {}) {
        this.value = options.value || null;
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
        this.placeholder=options.placeholder || '';
        this.id=options.id ||null;
    }
}
