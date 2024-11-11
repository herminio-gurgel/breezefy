<script setup>
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import { Link } from "@inertiajs/vue3";
import NavigationLinks from "@/Layouts/AuthenticatedLayout/Partials/NavigationLinks.vue";
import MenuLinks from "@/Layouts/AuthenticatedLayout/Partials/MenuLinks.vue";

const model = defineModel({
    required: true,
    type: Boolean,
    default: false,
});

function update() {
    model.value = !model.value;
}
</script>

<template>
    <v-app-bar>
        <v-row>
            <v-app-bar-title style="flex: none">
                <Link :href="route('dashboard')">
                    <ApplicationLogo class="d-flex" style="height: 36px" />
                </Link>
            </v-app-bar-title>
            <NavigationLinks />
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
                <MenuLinks />
            </v-menu>
            <v-app-bar-nav-icon
                class="d-sm-none text-grey-darken-1"
                :icon="model ? 'mdi-close' : 'mdi-menu'"
                @click.stop="update"
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
</template>
