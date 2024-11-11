import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";

/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ["**/*.{js,mjs,cjs,vue}"] },
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                route: "readonly",
            },
        },
    },
    pluginJs.configs.recommended,
    ...pluginVue.configs["flat/essential"],
    {
        rules: {
            "vue/valid-v-slot": [
                "error",
                {
                    allowModifiers: true,
                },
            ],
        },
    },
];