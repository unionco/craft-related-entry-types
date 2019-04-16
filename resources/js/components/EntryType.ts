import IEntryType from '../interfaces/IEntryType';

export default class EntryType implements IEntryType {
    public id: number;
    public label: string;
    public sectionUid: string;
    public active: boolean;

    constructor(entryType: IEntryType) {
        this.id = entryType.id;
        this.label = entryType.label;
        this.sectionUid = entryType.sectionUid;
        this.active = entryType.active;

        this.toHtml = this.toHtml.bind(this);
    }

    public toHtml(): string {
        return `<div>
            <input type="checkbox" name="types[unionco\\relatedentrytypes\\fields\\RelatedEntryType][entryTypes][]" class="checkbox" value="${this.id}" id="entryType-${this.id}" ${this.active ? 'checked' : '' }/>
            <label for="entryType-${this.id}">${this.label}</label>
        </div>`;
    }
}