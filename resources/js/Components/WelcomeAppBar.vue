<script setup>
const props = defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
});
</script>

<template>
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
                <nav class="d-flex justify-end pr-6" v-if="props.canLogin">
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
                            <v-btn class="text-capitalize" text="login" />
                        </Link>

                        <Link
                            v-if="props.canRegister"
                            as="button"
                            :href="route('register')"
                        >
                            <v-btn class="text-capitalize" text="register" />
                        </Link>
                    </template>
                </nav>
            </v-col>
        </v-row>
    </v-app-bar>
</template>
