import RelatedEntryTypesFieldSettings from './components/RelatedEntryTypesFieldSettings';

const VueSimpleMapPlugin = {
    install(Vue) {
        Vue.component('ret-settings', RelatedEntryTypesFieldSettings);
    }
};

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueSimpleMapPlugin);
}
