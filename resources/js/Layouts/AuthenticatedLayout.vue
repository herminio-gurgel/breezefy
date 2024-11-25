<script setup>
const drawer = ref(false);

router.on("start", () => {
    drawer.value = false;
});
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
