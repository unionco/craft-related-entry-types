import { observable, action, computed } from 'mobx';

export default class Store {
  @observable sectionOptions = undefined;

  @observable allSections = undefined;

  @observable sectionMap = {
    entryTypes: [],
    sections: []
  };

  @observable selectedSections = [];

  @observable selectedEntryTypes = [];

  @observable namePrefix = undefined;

  @action.bound setNamePrefix(namePrefix) {
    this.namePrefix = namePrefix;
  }

  @action.bound setSectionOptions(options) {
    this.sectionOptions = options;
  }

  @action.bound setSectionMap(sectionMap) {
    this.sectionMap = sectionMap;
  }

  @action.bound setSelectedSections(selected) {
    this.selectedSections = selected;
  }

  @action.bound setSelectedEntryTypes(selected) {
    this.selectedEntryTypes = selected;
  }

  @computed get filteredEntryTypes() {
    return this.sectionMap.entryTypes.filter(
      entryType => this.allSections || this.selectedSections.includes(entryType.sectionUid)
    );
  }

  @action.bound toggleEntryType(id) {
    const element = this.selectedEntryTypes.includes(id);
    if (element) {
        this.selectedEntryTypes = this.selectedEntryTypes.filter(entryType => entryType !== id);
    } else {
        this.selectedEntryTypes = [...this.selectedEntryTypes, id];
    }
  }
  
  @action.bound toggleSection(uid) {
      console.log(uid);
    const element = this.selectedSections.includes(uid);
    if (element) {
        this.selectedSections = this.selectedSections.filter(section => section !== uid);
    } else {
        this.selectedSections = [...this.selectedSections, uid];
    }
  }
}
