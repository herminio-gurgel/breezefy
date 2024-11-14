<script setup>
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
const barClass = ref("d-none d-sm-flex ml-6");
const drawerClass = ref("d-flex flex-column align-stretch");
</script>

<template>
    <v-list nav :class="responsive ? drawerClass : barClass">
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
    </v-list>
</template>
