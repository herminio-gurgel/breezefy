import "./bootstrap";
import "@mdi/font/css/materialdesignicons.css";
import "../css/main.scss";

import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ZiggyVue } from "../../vendor/tightenco/ziggy";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
    components,
    directives,
    defaults: {
        VApp: {
            class: "bg-grey-lighten-4",
        },
        VAppBar: {
            flat: true,
            class: "px-sm-6 position-static",
            style: "padding: 0 !important;",
            VRow: {
                noGutters: true,
                class: "width mx-auto my-auto",
                align: "center",
            },
        },
        VMain: {
            class: "width mx-auto w-100 pa-6 elevation-1 my-5 rounded-lg bg-white flex-grow-0",
        },
        VFooter: {
            class: "width mx-auto w-100 bg-transparent flex-grow-0",
        },
        VTextField: {
            variant: "outlined",
            color: "indigo",
            density: "compact",
            class: "mt-4",
        },
    },
});

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob("./Pages/**/*.vue"),
        ),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .use(vuetify)
            .mount(el);
    },
    progress: {
        color: "#4B5563",
    },
});
