import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";

export default defineConfig({
    plugins: [
        laravel({
            input: "resources/js/app.js",
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        Components({
            dirs: ["./resources/js/**/*"],
            resolvers: [
                (name) => {
                    if (name === "Head") {
                        return {
                            importName: "Head",
                            path: "@inertiajs/vue3",
                        };
                    }

                    if (name === "Link") {
                        return {
                            importName: "Link",
                            path: "@inertiajs/vue3",
                        };
                    }
                },
            ],
        }),
        AutoImport({
            eslintrc: {
                enabled: true,
            },
            imports: [
                "vue",
                {
                    "@inertiajs/vue3": ["router", "usePage", "useForm"],
                },
                {
                    vuetify: [
                        "useDate",
                        "useDefaults",
                        "useDisplay",
                        "useGoTo",
                        "useLayout",
                        "useLocale",
                        "useRtl",
                        "useTheme",
                    ],
                },
            ],
        }),
    ],
});
