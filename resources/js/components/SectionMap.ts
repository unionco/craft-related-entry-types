import ISectionMap from "../interfaces/ISectionMap";
import IEntryType from '../interfaces/IEntryType';
import IChannel from '../interfaces/IChannel';
import EntryType from "./EntryType";

export default class SectionMap implements ISectionMap {
    public sections: IChannel[];
    public entryTypes: IEntryType[];

    constructor(sections: IChannel[], entryTypes: IEntryType[]) {
        this.sections = sections;
        this.entryTypes = entryTypes.map((entryTypeObject: IEntryType) => new EntryType(entryTypeObject));

        this.getEntryTypesBySectionUid = this.getEntryTypesBySectionUid.bind(this);
        this.getEntryTypesBySectionUidArray = this.getEntryTypesBySectionUidArray.bind(this);
        this.getEntryTypesByChannelArray = this.getEntryTypesByChannelArray.bind(this);
    }

    public getEntryTypesBySectionUid(uid: string): IEntryType[] {
        if (!uid || !uid.length) {
            return [];
        }
        const matchingUid: IEntryType[] = this.entryTypes.filter((entryType: IEntryType) => {
            console.log(entryType.sectionUid, uid);
            return entryType.sectionUid === uid;
        });
        if (matchingUid && matchingUid.length) {
            return matchingUid;
        }

        return [];
    }

    public getEntryTypesBySectionUidArray(uids: string[]): IEntryType[] {
        const entryTypes: IEntryType[] = [];
        uids.forEach((uid: string) => {
            this.getEntryTypesBySectionUid(uid).forEach((entryType: IEntryType) => {
                console.log(entryType);
                entryTypes.push(entryType);
            });
        });

        return entryTypes;
    }

    public getEntryTypesByChannelArray(channels: IChannel[]): IEntryType[] {
        const uids: string[] = channels.map((channel: IChannel) => channel.uid);
        return this.getEntryTypesBySectionUidArray(uids);
    }
}