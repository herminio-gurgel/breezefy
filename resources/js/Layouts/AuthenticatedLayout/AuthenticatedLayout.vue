<script setup>
import { ref } from "vue";
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import { Link } from "@inertiajs/vue3";
import MenuLinks from "@/Layouts/AuthenticatedLayout/Partials/MenuLinks.vue";
import NavigationLinks from "@/Layouts/AuthenticatedLayout/Partials/NavigationLinks.vue";

const drawer = ref(false);
</script>

<template>
    <v-app>
        <v-app-bar>
            <v-row>
                <v-app-bar-title style="flex: none">
                    <Link :href="route('dashboard')">
                        <ApplicationLogo class="d-flex" style="height: 36px" />
                    </Link>
                </v-app-bar-title>

                <v-list nav class="d-none d-sm-flex ml-6">
                    <NavigationLinks />
                </v-list>

                <v-spacer />

                <v-menu>
                    <template v-slot:activator="{ props }">
                        <v-btn
                            class="text-capitalize d-none d-sm-flex"
                            append-icon="mdi-chevron-down"
                            v-bind="props"
                            :text="$page.props.auth.user.name"
                        />
                    </template>

                    <v-list class="d-flex flex-column align-stretch" nav>
                        <MenuLinks />
                    </v-list>
                </v-menu>

                <v-app-bar-nav-icon
                    class="d-sm-none text-grey-darken-1"
                    @click.stop="drawer = !drawer"
                    :icon="drawer ? 'mdi-close' : 'mdi-menu'"
                />
            </v-row>

            <template v-slot:extension>
                <v-row>
                    <div class="border-t-sm w-100" v-if="$slots.header">
                        <div class="d-flex align-center" style="height: 48px">
                            <slot name="header" />
                        </div>
                    </div>
                </v-row>
            </template>
        </v-app-bar>

        <v-navigation-drawer
            absolute
            class="d-sm-none"
            v-model="drawer"
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

        <v-main>
            <slot />
        </v-main>
    </v-app>
</template>
