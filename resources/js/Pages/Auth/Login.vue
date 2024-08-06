<script setup>
import GuestLayout from "@/Layouts/GuestLayout.vue";
import { Head, Link, useForm } from "@inertiajs/vue3";

defineProps({
    canResetPassword: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

const form = useForm({
    email: "",
    password: "",
    remember: false,
});

const submit = () => {
    form.post(route("login"), {
        onFinish: () => form.reset("password"),
    });
};
</script>

<template>
    <GuestLayout>
        <Head title="Log in" />

        <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
            {{ status }}
        </div>
        <v-form @keydown.enter.prevent="submit" @submit.prevent="submit">
            <v-text-field
                label="Email"
                id="email"
                type="email"
                v-model="form.email"
                autofocus
                :error-messages="form.errors.email"
                autocomplete="username"
            />

            <v-text-field
                label="Password"
                id="password"
                type="password"
                v-model="form.password"
                :error-messages="form.errors.password"
                autocomplete="current-password"
            />

            <v-checkbox
                name="remember"
                label="Remember me"
                hide-details
                v-model="form.remember"
            />

            <div class="d-flex align-center justify-end mt-4">
                <Link
                    v-if="canResetPassword"
                    :href="route('password.request')"
                    as="button"
                    class="text-body-2 text-decoration-underline"
                >
                    Forgot your password?
                </Link>

                <v-btn
                    type="submit"
                    color="black"
                    :disabled="form.processing"
                    class="ms-4"
                    text="log in"
                />
            </div>
        </v-form>
    </GuestLayout>
</template>
