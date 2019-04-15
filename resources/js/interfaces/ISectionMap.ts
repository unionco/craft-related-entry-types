import IEntryType from './IEntryType';
import IChannel from './IChannel';

export default interface ISectionMap {
    sections: IChannel[];
    entryTypes: IEntryType[];
    getEntryTypesBySectionUid(sectionUid: string): IEntryType[];
    getEntryTypesBySectionUidArray(sectionUid: string[]): IEntryType[];
    getEntryTypesByChannelArray(channels: IChannel[]): IEntryType[];
}