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
        <v-app-bar>
            <v-app-bar-title>Breezefy</v-app-bar-title>
            <v-spacer/>

            <nav v-if="canLogin">
                <Link
                    v-if="$page.props.auth.user"
                    :href="route('dashboard')"
                >
                    Dashboard
                </Link>

                <template v-else>
                    <Link
                        as="button"
                        :href="route('login')"
                    >
                        <v-btn>Login</v-btn>
                    </Link>

                    <Link
                        as="button"
                        :href="route('register')"
                    >
                        <v-btn>Register</v-btn>
                    </Link>
                </template>
            </nav>

        </v-app-bar>
        <v-main class="d-flex align-center justify-center h-75">
            Main Content
        </v-main>
        <v-footer>
            <p class="w-100 text-center">Laravel v{{ laravelVersion }} (PHP v{{ phpVersion }})</p>
        </v-footer>
    </v-app>
</template>
