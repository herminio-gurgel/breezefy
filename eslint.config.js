import fs from "fs";
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
                ...JSON.parse(
                    fs.readFileSync("./.eslintrc-auto-import.json", "utf-8"),
                ).globals,
            },
        },
    },
    pluginJs.configs.recommended,
    ...pluginVue.configs["flat/essential"],
];
