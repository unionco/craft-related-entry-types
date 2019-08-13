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
              v-model="$store.allSections"
            />
            <label for="all">All</label>
          </div>
          <div v-for="(section, i) in $store.sectionMap.sections" v-bind:key="section.label">
            <input
              type="checkbox"
              :name="`${$store.namePrefix}[sections][]`"
              :value="section.uid"
              :class="[{ all: section.value == '*' }, 'checkbox']"
              :id="'sections' +  i "
              :checked="$store.selectedSections.includes(section.uid)"
              @change="toggleSection"
            />
            <label :for="'sections' + i">{{ section.label }}</label>
          </div>
        </div>
      </div>
    </div>
    <div class="field" v-if="$store.selectedSections || $store.allSections">
      <div class="heading">
        <label>Entry Types</label>
      </div>
      <div class="input ltr">
        <div class="checkbox-select">
          <div v-for="entryType in $store.filteredEntryTypes" v-bind:key="entryType.label">
            <input
              type="checkbox"
              :name="`${$store.namePrefix}[entryTypes][]`"
              class="checkbox"
              :value="entryType.id"
              :id="entryType.id"
              :checked="$store.selectedEntryTypes.includes(entryType.id)"
              @change="toggleEntryType"
            />
            <label :for="entryType.id">{{ entryType.label }}</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import { Observer } from "mobx-vue";
import Store from "../store/store";

@Observer
@Component({
  props: {
    sectionOptionsJson: String,
    sectionMapJson: String,
    selectedSectionsJson: String,
    selectedEntryTypesJson: String,
    fieldUid: String
  }
})
export default class RelatedEntryTypesFieldSettings extends Vue {
  // Use a unique instance of the store per component
  $store = new Store();

  mounted() {
      console.log(this.$props.fieldUid);
    const prefixContainer = document.querySelector(
      `[data-vue-field-prefix="${this.$props.fieldUid}"]`
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
    this.$store.setNamePrefix(name.split(`[test]`)[0]);
    this.$store.setSectionOptions(JSON.parse(this.$props.sectionOptionsJson));
    this.$store.setSectionMap(JSON.parse(this.$props.sectionMapJson));
    this.$store.setSelectedSections(
      JSON.parse(this.$props.selectedSectionsJson)
    );
    this.$store.setSelectedEntryTypes(
      JSON.parse(this.$props.selectedEntryTypesJson)
    );
  }

  toggleEntryType(e) {
      const id = e.target.value;
      console.log(id);
      this.$store.toggleEntryType(id);
  }

  toggleSection(e) {
      const uid = e.target.value;
      console.log(uid)
      this.$store.toggleSection(uid);
  }
}
</script>

<style>
</style>
