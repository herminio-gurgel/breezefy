<script setup>
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
