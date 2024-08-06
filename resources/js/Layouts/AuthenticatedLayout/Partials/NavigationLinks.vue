<script setup>
import { Link } from "@inertiajs/vue3";
import { ref } from "vue";

defineProps({
    responsive: {
        type: Boolean,
        default: false,
    },
});

const navigationLinks = ref([
    { title: "Dashboard", namedRoute: "dashboard", method: "" },
]);
</script>

<template>
    <Link
        v-for="navigationLink in navigationLinks"
        :key="navigationLink.title"
        :href="route(navigationLink.namedRoute)"
        as="button"
    >
        <v-list-item
            :active="route().current(navigationLink.namedRoute)"
            :active-class="responsive ? 'text-indigo' : ''"
            :class="{ 'text-left': responsive }"
            :title="navigationLink.title"
        />
    </Link>
</template>
