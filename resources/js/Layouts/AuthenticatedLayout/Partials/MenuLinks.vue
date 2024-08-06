<script setup>
import { Link } from "@inertiajs/vue3";
import { ref } from "vue";

const menuLinks = ref([
    { title: "Profile", namedRoute: "profile.edit", method: "" },
    { title: "Log Out", namedRoute: "logout", method: "post" },
]);
</script>

<template>
    <Link
        v-for="menuLink in menuLinks"
        :key="menuLink.title"
        :href="route(menuLink.namedRoute)"
        class="text-left"
        as="button"
        :method="menuLink.method"
    >
        <v-hover>
            <template v-slot:default="{ isHovering, props }">
                <v-list-item
                    v-bind="props"
                    :title="menuLink.title"
                    :class="isHovering ? 'bg-grey-lighten-4' : undefined"
                />
            </template>
        </v-hover>
    </Link>
</template>
