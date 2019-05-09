import IEntryTypeGroup from '../interfaces/IEntryTypeGroup';
import IEntryType from '../interfaces/IEntryType';

export default class EntryTypeGroup implements IEntryTypeGroup {
    private entryTypes: IEntryType[];
    private node: HTMLDivElement;

    constructor(entryTypesGroupContainer: HTMLDivElement) {
        this.node = entryTypesGroupContainer;
    }

    public render(): void {
        console.log('render');
        let entryTypes = '';
        if (this.entryTypes.length) {
            entryTypes = this.entryTypes
                .map((entryType: IEntryType) => entryType.toHtml())
                .reduce((prev: string, current: string) => prev + current);
        }
        
        this.node.innerHTML = `
        <div class="field">
            <div class="heading">
                <label>EntryTypes</label>
            </div>
            <div class="input ltr">
                <div class="checkbox-select">
                    ${entryTypes}
                </div>
            </div>
        </div>`;
    }

    public setEntryTypes(entryTypes: IEntryType[]): void {
        this.entryTypes = entryTypes;
    }
}