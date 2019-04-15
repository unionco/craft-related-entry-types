import IEntryType from './IEntryType';

export default interface IEntryTypeGroup {
    // entryTypes: IEntryType[];
    render(): void;
    setEntryTypes(entryTypes: IEntryType[]): void;
}