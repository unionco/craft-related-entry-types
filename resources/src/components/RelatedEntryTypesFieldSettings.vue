<template>
  <div>
    <div class="field">
      <!-- <div class="input ltr"> -->
      <div class="heading">
        <label>Sources</label>
      </div>
      <div class="input ltr">
        <div class="checkbox-select">
          <div>
              <input type="checkbox" name="sources" value="*" class="all checkbox" id="all" v-model="allSources"/>
              <label for="all">All</label>
        </div>
          <div
            v-for="(source, i) in sections"
            v-bind:key="source.label"
          >
            <!-- <label> -->
            <input
              type="checkbox"
              :name="namePrefix + '[sources][]'"
              :value="source.value"
              v-bind:class="[{ all: source.value == '*' }, 'checkbox']"
              :id="'sources' +  i "
              v-model="selectedSources[source.uid]"
            />
            <label :for="'sources' + i">{{ source.label }}</label>
          </div>
        </div>
        <!-- </ul> -->
      </div>

      <div class="heading">
        <label>Entry Types</label>
      </div>
      <div class="input ltr">
        <div class="checkbox-select">
          <div
            v-for="entryType in filteredEntryTypes"
            v-bind:key="entryType.label"
          >
            <input
              type="checkbox"
              :name="namePrefix + '[entryTypes][]'"
              class="checkbox"
              :value="entryType.value"
              :id="entryType.id"
              v-model="selectedEntryTypes[entryType.id]"
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

@Component({
  props: {
    sourceOptionsJson: String,
    sectionMapJson: String
  }
})
export default class RelatedEntryTypesFieldSettings extends Vue {
  sourceOptions = undefined;
  allSources = false;
  selectedSources = {};
  selectedEntryTypes = {};
  namePrefix = '';

  created() {
      const prefixContainer = document.querySelector('[data-vue-field-prefix]');
      const prefixInput = prefixContainer.querySelector('input');
      if (!prefixInput) {
          return;
      }

      const name = prefixInput.name;
      if (!name) {
          return;
      }
      prefixContainer.innerHTML = '';
    //   debugger;
      this.namePrefix = name.split("[test]")[0];
  }

  get sourceOptions() {
    return JSON.parse(this.$props.sourceOptionsJson);
  }

  get entryTypes() {
    return this.sectionMap.entryTypes;
  }

  get sectionMap() {
      return JSON.parse(this.$props.sectionMapJson);
  }

  get sections() {
      return this.sectionMap.sections;
  }

  get filteredEntryTypes() {
      return this.entryTypes.filter((entryType) =>this.allSources || this.selectedSources[entryType.sectionUid]);
  }
}
</script>

<style>
</style>
