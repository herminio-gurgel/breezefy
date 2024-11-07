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
        <v-list class="d-flex flex-column align-stretch" nav>
            <NavigationLinks responsive />

            <v-divider class="my-4" />

            <v-list-item
                :title="$page.props.auth.user.name"
                :subtitle="$page.props.auth.user.email"
            />
            <MenuLinks />
        </v-list>
    </v-navigation-drawer>
</template>
