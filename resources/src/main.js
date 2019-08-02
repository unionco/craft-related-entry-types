import RelatedEntryTypesFieldSettings from './components/RelatedEntryTypesFieldSettings';

const VueSimpleMapPlugin = {
    install(Vue) {
        Vue.component('ret-settings', RelatedEntryTypesFieldSettings);
        // Vue.component('sync-settings', SyncSettings);
        // Vue.component('environment-config', EnvironmentConfig);
    }
};

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueSimpleMapPlugin);
}
