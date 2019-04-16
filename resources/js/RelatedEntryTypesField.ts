import IChannelGroup from './interfaces/IChannelGroup';
import ChannelGroup from './components/ChannelGroup';
import ISectionMap from './interfaces/ISectionMap';
import IChannel from './interfaces/IChannel';
import SectionMap from './components/SectionMap';
import EntryTypeGroup from './components/EntryTypeGroup';
import IEntryTypeGroup from './interfaces/IEntryTypeGroup';

export default class RelatedEntryTypesField {
    public channelGroup: IChannelGroup;
    public fieldContainer: HTMLDivElement;
    public entryTypeGroup: IEntryTypeGroup;
    private sectionMap: ISectionMap;
    public activeSections: IChannel[];

    constructor() {
        this.activeSections = [];
        this.fieldContainer = document.querySelector('#unionco-relatedentrytypes-fields-RelatedEntryTypesField');

        // Initialize the channels select area
        const channelGroupContainer: HTMLDivElement = this.fieldContainer.querySelector('[data-related-entry-types-channels]');
        if (channelGroupContainer) {
            this.channelGroup = new ChannelGroup(channelGroupContainer);
            this.activeSections = this.channelGroup.getActiveChannels();
            const sectionMapData: ISectionMap = JSON.parse(channelGroupContainer.dataset.relatedEntryTypesChannels);
            console.log(sectionMapData);
            this.sectionMap = new SectionMap(sectionMapData.sections, sectionMapData.entryTypes);
        }

        const entryTypesGroupContainer: HTMLDivElement = this.fieldContainer.querySelector('[data-related-entry-types-select-area]');

        if (entryTypesGroupContainer) {
            this.entryTypeGroup = new EntryTypeGroup(entryTypesGroupContainer);

            this.entryTypeGroup.setEntryTypes(this.sectionMap.getEntryTypesByChannelArray(this.activeSections));
            this.entryTypeGroup.render();
        }

        // Method binding
        this.updateActiveSections = this.updateActiveSections.bind(this);

        // Event Listeners
        this.fieldContainer.addEventListener('channelChange', (e: CustomEvent) => {
            const eventDetail = e.detail;
            const { all, active } = eventDetail;
            console.log(eventDetail);
            this.updateActiveSections(all, active); // sectionUid, active);
        });
    }

    public updateActiveSections(all: boolean, active: boolean) {
        if (all) {
            if (active) {
                this.activeSections = this.channelGroup.getChannels();
            } else {
                this.activeSections = [];
            }
        } else {
            this.activeSections = this.channelGroup.getActiveChannels();
        }
        const entryTypes = this.sectionMap.getEntryTypesByChannelArray(this.activeSections);

        this.entryTypeGroup.setEntryTypes(entryTypes);
        this.entryTypeGroup.render();
    }
}

declare global {
    interface Window {
        RelatedEntryTypesField: any;
    }
}

window.RelatedEntryTypesField = RelatedEntryTypesField;