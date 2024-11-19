<script setup>
defineProps({
    laravelVersion: {
        type: String,
        required: true,
    },
    phpVersion: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <v-footer>
        <p class="w-100 text-center text-body-2">
            Laravel v{{ laravelVersion }} (PHP v{{ phpVersion }})
        </p>
    </v-footer>
</template>
