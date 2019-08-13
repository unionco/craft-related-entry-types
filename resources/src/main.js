import RelatedEntryTypesFieldSettings from './components/RelatedEntryTypesFieldSettings';
// import Store from './store/store';

// window.Vue.prototype.$store = new Store();

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
