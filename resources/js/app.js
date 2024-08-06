import './bootstrap';
import '@mdi/font/css/materialdesignicons.css'

import {createApp, h} from 'vue';
import {createInertiaApp} from '@inertiajs/vue3';
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers';
import {ZiggyVue} from '../../vendor/tightenco/ziggy';
import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const maxWidth = '80rem';

const vuetify = createVuetify({
    components,
    directives,
    defaults: {
        VApp: {
            class: 'bg-grey-lighten-4',
        },
        VAppBar: {
            flat: true,
            class: 'px-sm-6 position-static',
            style: 'padding: 0 !important;',
            VRow: {
                noGutters: true,
                class: 'mx-auto my-auto px-sm-0 px-6',
                style: `max-width: ${maxWidth}`,
                align: 'center'
            }
        },
        VMain: {
            maxWidth: maxWidth,
            class: 'mx-auto pa-6 w-100 flex-grow-0 elevation-1 my-5 rounded-lg bg-white'
        },
        VFooter: {
            class: 'mx-auto',
            style: `max-width: ${maxWidth}`,
        },
        VTextField: {
            variant: 'outlined',
            color: 'indigo',
            density: 'compact',
            class: 'mt-4',
        }
    }
})

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({el, App, props, plugin}) {
        return createApp({render: () => h(App, props)})
            .use(plugin)
            .use(ZiggyVue)
            .use(vuetify)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
