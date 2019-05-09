import IEntryTypeGroup from '../interfaces/IEntryTypeGroup';
import IEntryType from '../interfaces/IEntryType';

export default class EntryTypeGroup implements IEntryTypeGroup {
    private entryTypes: IEntryType[];
    private node: HTMLDivElement;

    constructor(entryTypesGroupContainer: HTMLDivElement) {
        this.node = entryTypesGroupContainer;
    }

    public render(): void {
        console.log(this.entryTypes);
        const fields = this.node.querySelectorAll('.field.checkboxfield');
        const entryTypeIds: string[] = this.entryTypes.map((entryType: IEntryType) => entryType.id.toString());

        fields.forEach((fieldContainer: HTMLDivElement) => {
            
            const checkbox: HTMLInputElement = fieldContainer.querySelector('input[type="checkbox"]');
            const id: string = checkbox.value;

            if (entryTypeIds.includes(id)) {
                // show
                fieldContainer.style.display = 'block';
            } else {
                fieldContainer.style.display = 'none';
            }
        });
    }

    public setEntryTypes(entryTypes: IEntryType[]): void {
        this.entryTypes = entryTypes;
    }
}