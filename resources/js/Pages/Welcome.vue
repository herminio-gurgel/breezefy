<script setup>
import {Head, Link} from '@inertiajs/vue3';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';


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

            <v-app-bar density="prominent">
                <v-row no-gutters class="my-auto">
                    <v-col cols="0" md="5" />
                    <v-col cols="2" md="2">
                        <v-app-bar-title>
                            <Link :href="route('dashboard')">
                                <ApplicationLogo class="mx-auto d-flex" style="height: 70px;"/>
                            </Link>
                        </v-app-bar-title>
                    </v-col>

                    <v-col cols="10" md="5" align-self="center">
                        <nav class="d-flex justify-end" v-if="canLogin">
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
                    </v-col>
                </v-row>
            </v-app-bar>

        </div>

        <v-main class="d-flex align-center justify-center" style="min-height: 500px">
            Main Content
        </v-main>

        <v-footer>
            <p class="w-100 text-center">Laravel v{{ laravelVersion }} (PHP v{{ phpVersion }})</p>
        </v-footer>
    </v-app>
</template>
