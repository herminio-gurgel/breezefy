<script setup>
import GuestLayout from "@/Layouts/GuestLayout.vue";
import { Head, Link, useForm } from "@inertiajs/vue3";

const form = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
});

const submit = () => {
    form.post(route("register"), {
        onFinish: () => form.reset("password", "password_confirmation"),
    });
};
</script>

<template>
    <GuestLayout>
        <Head title="Register" />
        <v-form @keydown.enter.prevent="submit" @submit.prevent="submit">
            <v-text-field
                v-model="form.name"
                label="Name"
                autofocus
                :error-messages="form.errors.name"
            />

            <v-text-field
                v-model="form.email"
                label="Email"
                :error-messages="form.errors.email"
            />

            <v-text-field
                v-model="form.password"
                label="Password"
                :error-messages="form.errors.password"
                type="password"
            />

            <v-text-field
                v-model="form.password_confirmation"
                label="Confirm Password"
                :error-messages="form.errors.password_confirmation"
                type="password"
            />

            <div class="d-flex align-center justify-end mt-4">
                <Link
                    :href="route('login')"
                    as="button"
                    class="text-body-2 text-decoration-underline"
                >
                    Already registered?
                </Link>

                <v-btn
                    type="submit"
                    color="black"
                    :disabled="form.processing"
                    class="ms-4"
                    text="register"
                />
            </div>
        </v-form>
    </GuestLayout>
</template>
