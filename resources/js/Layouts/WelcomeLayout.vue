<script setup>
const props = defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
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
    <v-app>
        <WelcomeAppBar
            :canRegister="props.canRegister"
            :canLogin="props.canLogin"
        />
        <v-main>
            {{ props.text }}
            <slot />
        </v-main>
        <WelcomeFooter
            :laravelVersion="props.laravelVersion"
            :phpVersion="props.phpVersion"
        />
    </v-app>
</template>
