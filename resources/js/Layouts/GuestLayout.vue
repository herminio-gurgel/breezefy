<script setup>
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import { Link } from "@inertiajs/vue3";
</script>

<template>
    <div
        class="d-flex flex-column justify-md-center align-center pt-sm-0 pt-6 bg-grey-lighten-4"
        style="min-height: 100vh"
    >
        <Link href="/">
            <ApplicationLogo style="width: 80px; height: 80px" />
        </Link>

        <v-sheet
            rounded="lg"
            elevation="2"
            class="sheet w-100 mt-6 px-6 py-4 bg-white overflow-hidden"
        >
            <slot />
        </v-sheet>
    </div>
</template>

<style scoped>
@media only screen and (min-width: 600px) {
    .sheet {
        max-width: 448px;
    }
}
</style>
