export default interface IEntryType {
    id: number;
    label: string;
    sectionUid: string;
    active: boolean;
    
    toHtml(): string;
}