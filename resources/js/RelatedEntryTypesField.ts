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
        this.fieldContainer = document.querySelector('#types-unionco-relatedentrytypes-fields-RelatedEntryType-sources-field');

        // Initialize the channels select area
        const channelGroupContainer: HTMLDivElement = document.querySelector('[data-related-entry-types-channels]');
        if (channelGroupContainer) {
            this.channelGroup = new ChannelGroup(channelGroupContainer);
            this.activeSections = this.channelGroup.getActiveChannels(); //.map((channel: IChannel) => channel.uid);
            const sectionMapData: ISectionMap = JSON.parse(channelGroupContainer.dataset.relatedEntryTypesChannels);
            this.sectionMap = new SectionMap(sectionMapData.sections, sectionMapData.entryTypes);
        }

        const entryTypesGroupContainer: HTMLDivElement = document.querySelector('[data-entry-types-select-area]');
        console.log(entryTypesGroupContainer);
        console.log(this.sectionMap);
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

        console.log(this);

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
        console.log(entryTypes);
        debugger;
        this.entryTypeGroup.setEntryTypes(entryTypes);
        this.entryTypeGroup.render();
        console.log(this.activeSections);
    }

    public static fetchTemplates(sectionUids: string[], entryTypes: string[]): Promise<Response> {
        const opts: RequestInit = {
            credentials: 'same-origin',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
            },
            method: 'post',
            body: JSON.stringify({
                "sectionUids": sectionUids,
                "entryTypes": entryTypes
            })
        };
        console.log(opts);
        return fetch('/admin/related-entry-types/types', opts);
        // .then(resp =>z resp.text())
        // .then(data => resolve(data));
    }
}

new RelatedEntryTypesField();

// const ajaxOpts = {
//     credentials: 'same-origin',
//     headers: {
//         'X-Requested-With': 'XMLHttpRequest',
//     }
// };

// class EntryType {
//     constructor() {
//         this.fieldContainer = document.querySelector('#types-unionco-relatedentrytypes-fields-EntryType-sources-field');
//         if (this.fieldContainer) {
//             this.sectionCheckboxes = this.fieldContainer.querySelectorAll('input[type="checkbox"]');
//             console.log(this.sectionCheckboxes);
//             if (this.sectionCheckboxes) {
//                 this.sectionCheckboxes.forEach(checkbox => checkbox.addEventListener('change', this.handleSourcesChange.bind(this)));
//             }
//         }

//         this.entryTypesSelectArea = document.querySelector('[data-entry-types-select-area]');
//         this.getSelectedSections = this.getSelectedSections.bind(this);
//     }

//     getSelectedSections() {
//         return Array.prototype.filter.call(this.sectionCheckboxes, checkbox => {
//             //console.log(checkbox);
//             return checkbox.checked || false;
//         }).map(checkbox => {
//             return checkbox.value;
//         });
//     }

//     getSelectedEntryTypes() {
//         const entryTypesSection = this.entryTypesSelectArea.querySelector('div');
//         if (entryTypesSection) {
//             const entryTypeCheckboxes = entryTypesSection.querySelectorAll('input[type="checkbox"]');
//             console.log(entryTypeCheckboxes);
//             return Array.prototype.filter.call(entryTypeCheckboxes, checkbox => {
//                 return checkbox.checked;
//             }).map(checkbox => {
//                 return checkbox.value;
//             });
//         }

//         return null;
//     }

//     handleSourcesChange(e) {
//         const selectedSections = this.getSelectedSections();
//         const selectedEntryTypes = this.getSelectedEntryTypes();

//         if (selectedSections.length < 1) {
//             this.entryTypesSelectArea.innerHTML = '';
//         }
//         ApiClient.getTemplate(selectedSections, selectedEntryTypes)
//             .then(data => {
//                 this.entryTypesSelectArea.innerHTML = data;
//             });
//     }
// }

// class ApiClient {
//     static getTemplate(sectionUids, entryTypes) {
//         return new Promise((resolve, reject) => {
//             let opts = {
//                 credentials: 'same-origin',
//                 headers: {
//                     'X-Requested-With': 'XMLHttpRequest',
//                 },
//                 method: 'post',
//                 body: JSON.stringify({
//                     "sectionUids": sectionUids,
//                     "entryTypes": entryTypes
//                 })
//             };
//             console.log(opts);
//             fetch('/admin/related-entry-types/types', opts)
//                 .then(resp => resp.text())
//                 .then(data => resolve(data));
//         });
//     }
// }

// (function ($, window, document, undefined) {

//     var pluginName = "RelatedEntryTypes",
//         defaults = {};

//     // Plugin constructor
//     function Plugin(element, options) {
//         this.element = element;

//         this.options = $.extend({}, defaults, options);

//         this._defaults = defaults;
//         this._name = pluginName;

//         this.init();
//     }

//     Plugin.prototype = {

//         init: function (id) {
//             var _this = this;

//             $(function () {

//                 /* -- _this.options gives us access to the $jsonVars that our FieldType passed down to us */

//             });
//         }
//     };

//     // A really lightweight plugin wrapper around the constructor,
//     // preventing against multiple instantiations
//     $.fn[pluginName] = function (options) {
//         return this.each(function () {
//             if (!$.data(this, "plugin_" + pluginName)) {
//                 $.data(this, "plugin_" + pluginName,
//                     new Plugin(this, options));
//             }
//         });
//     };

// })(jQuery, window, document);

// window.RelatedEntryTypesField = RelatedEntryTypesField;