<script setup>
import {ref} from 'vue';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import {Link} from '@inertiajs/vue3';

const navigationLinks = ref([
    {title: 'Dashboard', namedRoute: 'dashboard'},
]);

const menuLinks = ref([
    {title: 'Profile', namedRoute: 'profile.edit'},
    {title: 'Log Out', namedRoute: 'logout', method: 'post'}
])

const drawer = ref(false)

</script>

<template>
    <v-app>
        <div class="d-flex justify-space-around" style="max-width: 100vw">
            <v-app-bar flat class="px-6 position-static" style="max-width: 80rem">

                <v-app-bar-title class="bar-title" style="flex: none">
                    <Link :href="route('dashboard')">
                        <ApplicationLogo class="d-flex" style="height: 36px;"/>
                    </Link>
                </v-app-bar-title>

                <v-list nav class="d-none d-sm-flex ml-6">
                    <Link
                        v-for="navigatioLink in navigationLinks"
                        :key="navigatioLink.title"
                        :href="route(navigatioLink.namedRoute)"
                        as="button"
                    >
                        <v-list-item
                            :active="route().current(navigatioLink.namedRoute)"
                            :title="navigatioLink.title"
                        />
                    </Link>
                </v-list>

                <v-spacer/>

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
                        <Link
                            v-for="menuLink in menuLinks"
                            :key="menuLink.title"
                            :href="route(menuLink.namedRoute)"
                            class="text-left"
                            as="button"
                            :method="menuLink.method"
                        >
                            <v-hover>
                                <template v-slot:default="{isHovering, props}">
                                    <v-list-item
                                        v-bind="props"
                                        :title="menuLink.title"
                                        :class="isHovering ? 'bg-grey-lighten-4' : undefined"
                                    />
                                </template>
                            </v-hover>
                        </Link>
                    </v-list>
                </v-menu>

                <template v-slot:append>
                    <v-app-bar-nav-icon
                        class="d-sm-none text-grey-darken-1"
                        @click.stop="drawer = !drawer"
                        :icon="drawer ? 'mdi-close' : 'mdi-menu'"
                    />
                </template>
                <template v-slot:extension>
                    <div class="px-6 border-t-sm w-100" v-if="$slots.header">
                        <div class="d-flex align-center" style="height: 48px">
                            <slot name="header"/>
                        </div>
                    </div>
                </template>

            </v-app-bar>
        </div>

        <v-navigation-drawer
            class="d-sm-none"
            v-model="drawer"
            disable-resize-watcher
            location="top"
        >
            <v-list
                class="d-flex flex-column align-stretch"
                nav
            >
                <Link
                    v-for="link in navigationLinks"
                    :key="link.title"
                    :href="route(link.namedRoute)"
                    as="button"
                >
                    <v-list-item
                        :active="route().current(link.namedRoute)"
                        active-class="text-indigo"
                        class="text-left"
                        :title="link.title"
                    />
                </Link>

                <v-divider class="my-4"/>

                <v-list-item
                    :title="$page.props.auth.user.name"
                    :subtitle="$page.props.auth.user.email"
                />
                <Link
                    v-for="menuLink in menuLinks"
                    :key="menuLink.title"
                    :href="route(menuLink.namedRoute)"
                    class="text-left"
                    as="button"
                    :method="menuLink.method"
                >
                    <v-hover>
                        <template v-slot:default="{isHovering, props}">
                            <v-list-item
                                v-bind="props"
                                :title="menuLink.title"
                                :class="isHovering ? 'bg-grey-lighten-4' : undefined"
                            />
                        </template>
                    </v-hover>
                </Link>
            </v-list>
        </v-navigation-drawer>

        <v-main class="bg-grey-lighten-4 pt-0">
            <v-container class="px-0 px-md-6 mt-4" style="max-width: 80rem">
                <div class="bg-white overflow-hidden elevation-1 rounded-lg pa-6 text-grey-darken-4">
                    <slot/>
                </div>
            </v-container>
        </v-main>

    </v-app>
</template>
