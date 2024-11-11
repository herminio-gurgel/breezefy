<script setup>
import MenuLinks from "@/Layouts/AuthenticatedLayout/Partials/MenuLinks.vue";
import NavigationLinks from "@/Layouts/AuthenticatedLayout/Partials/NavigationLinks.vue";
</script>

<template>
    <v-navigation-drawer
        absolute
        className="d-sm-none"
        disable-resize-watcher
        location="top"
    >
        <NavigationLinks responsive />
        <v-divider class="my-4" />
        <MenuLinks />
    </v-navigation-drawer>
</template>
