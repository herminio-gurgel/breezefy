<script setup>
import {Head, Link} from '@inertiajs/vue3';

defineProps({
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
    <Head title="Welcome"/>
    <v-app>
        <div class="d-flex justify-space-around" style="max-width: 100vw">
            <v-app-bar flat class="px-sm-6 position-static" style="max-width: 80rem">
                <v-app-bar-title>Breezefy</v-app-bar-title>
                <v-spacer/>

                <nav v-if="canLogin">
                    <Link
                        v-if="$page.props.auth.user"
                        as="button"
                        :href="route('dashboard')"
                        class="px-3 py-2"
                    >
                        Dashboard
                    </Link>

                    <template v-else>
                        <Link
                            as="button"
                            :href="route('login')"
                        >
                            <v-btn class="text-capitalize">Login</v-btn>
                        </Link>

                        <Link
                            as="button"
                            :href="route('register')"
                        >
                            <v-btn class="text-capitalize">Register</v-btn>
                        </Link>
                    </template>
                </nav>

            </v-app-bar>
        </div>
            <v-main class="d-flex align-center justify-center h-75">
                Main Content
            </v-main>
            <v-footer>
                <p class="w-100 text-center">Laravel v{{ laravelVersion }} (PHP v{{ phpVersion }})</p>
            </v-footer>
    </v-app>
</template>
