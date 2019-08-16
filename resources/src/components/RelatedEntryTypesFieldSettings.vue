<template>
  <div>
    <div class="field">
      <div class="heading">
        <label>Sections</label>
      </div>
      <div class="input ltr">
        <div class="checkbox-select">
          <div>
            <input
              type="checkbox"
              name="sections"
              value="*"
              class="all checkbox"
              id="all"
              v-model="allSections"
            />
            <label for="all">All</label>
          </div>
          <div v-for="(section, i) in sectionMap.sections" v-bind:key="section.label">
            <input
              type="checkbox"
              :name="`${namePrefix}[sources][]`"
              :value="`section:${section.uid}`"
              :class="[{ all: section.value == '*' }, 'checkbox']"
              :id="`section-${fieldUid}-${section.uid}`"
              :checked="selectedSections.includes(`section:${section.uid}`)"
              @change="toggleSection"
            />
            <label :for="`section-${fieldUid}-${section.uid}`">{{ section.label }}</label>
          </div>
        </div>
      </div>
    </div>
    <div class="field" v-if="selectedSections || allSections">
      <div class="heading">
        <label>Entry Types</label>
      </div>
      <div class="input ltr">
        <div class="checkbox-select">
          <div v-for="entryType in filteredEntryTypes" v-bind:key="entryType.label">
            <input
              type="checkbox"
              :name="`${namePrefix}[entryTypes][]`"
              class="checkbox"
              :value="entryType.id"
              :id="`entrytype-${fieldUid}-${entryType.id}`"
              :checked="selectedEntryTypes.includes(`${entryType.id}`)"
              @change="toggleEntryType"
            />
            <label :for="`entrytype-${fieldUid}-${entryType.id}`">{{ entryType.label }}</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: {
    sectionOptionsJson: String,
    sectionMapJson: String,
    selectedSectionsJson: String,
    selectedEntryTypesJson: String,
    fieldUidDefault: String
  }
})
export default class RelatedEntryTypesFieldSettings extends Vue {
  sectionOptions = undefined;
  allSections = false;
  sectionMap = {
    entryTypes: [],
    sections: []
  };
  selectedSections = [];
  selectedEntryTypes = [];
  namePrefix = "";
  fieldUid = "";

  get filteredEntryTypes() {
    return this.sectionMap.entryTypes.filter(
      entryType =>
        this.allSections || this.selectedSections.includes(`section:${entryType.sectionUid}`)
    );
  }

  mounted() {
      // Determine the Craft field prefix using a field called 'test'
    const prefixContainer = document.querySelector(
      `[data-vue-field-prefix="${this.$props.fieldUidDefault}"]`
    );
    const prefixInput = prefixContainer.querySelector("input");
    if (!prefixInput) {
      return;
    }

    const name = prefixInput.name;
    if (!name) {
      return;
    }
    while (prefixContainer.hasChildNodes()) {
      prefixContainer.removeChild(prefixContainer.firstChild);
    }

    // Set state based on twig vars/props
    this.namePrefix = name.split(`[test]`)[0];
    this.sectionOptions = JSON.parse(this.$props.sectionOptionsJson);
    this.sectionMap = JSON.parse(this.$props.sectionMapJson);
    this.selectedSections = JSON.parse(this.$props.selectedSectionsJson);
    this.allSections = this.selectedSections.includes("*");
    this.selectedEntryTypes = JSON.parse(this.$props.selectedEntryTypesJson);

    // Make sure field uid is unique
    if (window.retFieldUids === undefined) {
      window.retFieldUids = [];
    }
    if (window.retFieldUids.includes(this.$props.fieldUidDefault)) {
      this.fieldUid = window.Craft.randomString(24);
    } else {
      this.fieldUid = this.$props.fieldUidDefault;
    }
    window.retFieldUids.push(this.fieldUid);
  }

  toggleEntryType(e) {
    const id = `${e.target.value}`;
    const element = this.selectedEntryTypes.includes(id);
    if (element) {
      this.selectedEntryTypes = this.selectedEntryTypes.filter(
        entryType => entryType !== id
      );
    } else {
      this.selectedEntryTypes = [...this.selectedEntryTypes, id];
    }
  }

  toggleSection(e) {
    const uid = e.target.value;
    const element = this.selectedSections.includes(uid);
    if (element) {
      this.selectedSections = this.selectedSections.filter(
        section => section !== uid
      );
    } else {
      this.selectedSections = [...this.selectedSections, uid];
    }
  }
}
</script>
