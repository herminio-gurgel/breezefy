<script setup>
import { ref } from "vue";
import AppBar from "@/Components/AppBar.vue";
import AppDrawer from "@/Components/AppDrawer.vue";

const drawer = ref(false);
</script>

<template>
    <v-app>
        <AppBar v-model="drawer" />
        <AppDrawer v-model="drawer" />
        <v-main>
            <slot />
        </v-main>
    </v-app>
</template>
