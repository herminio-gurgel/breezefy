<script setup>
import { Head, Link } from "@inertiajs/vue3";
import ApplicationLogo from "@/Components/ApplicationLogo.vue";

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
    <Head title="Welcome" />

    <v-app>
        <div class="d-flex justify-space-around">
            <v-app-bar density="prominent" class="bg-transparent">
                <v-row>
                    <v-col cols="0" md="5" />
                    <v-col cols="3" md="2">
                        <v-app-bar-title>
                            <ApplicationLogo
                                class="mx-auto d-flex"
                                style="height: 70px"
                            />
                        </v-app-bar-title>
                    </v-col>

                    <v-col cols="9" md="5">
                        <nav class="d-flex justify-end pr-6" v-if="canLogin">
                            <Link
                                v-if="$page.props.auth.user"
                                as="button"
                                :href="route('dashboard')"
                                class="px-0 py-2"
                            >
                                Dashboard
                            </Link>

                            <template v-else>
                                <Link as="button" :href="route('login')">
                                    <v-btn
                                        class="text-capitalize"
                                        text="login"
                                    />
                                </Link>

                                <Link as="button" :href="route('register')">
                                    <v-btn
                                        class="text-capitalize"
                                        text="register"
                                    />
                                </Link>
                            </template>
                        </nav>
                    </v-col>
                </v-row>
            </v-app-bar>
        </div>

        <v-main>Main Content</v-main>

        <v-footer>
            <p class="w-100 text-center text-body-2">
                Laravel v{{ laravelVersion }} (PHP v{{ phpVersion }})
            </p>
        </v-footer>
    </v-app>
</template>
