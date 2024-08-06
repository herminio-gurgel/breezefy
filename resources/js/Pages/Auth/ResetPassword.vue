<script setup>
import GuestLayout from "@/Layouts/GuestLayout.vue";
import { Head, useForm } from "@inertiajs/vue3";

const props = defineProps({
    email: {
        type: String,
        required: true,
    },
    token: {
        type: String,
        required: true,
    },
});

const form = useForm({
    token: props.token,
    email: props.email,
    password: "",
    password_confirmation: "",
});
const submit = () => {
    form.post(route("password.store"), {
        onFinish: () => form.reset("password", "password_confirmation"),
    });
};
</script>

<template>
    <GuestLayout>
        <Head title="Reset Password" />

        <v-form @submit.prevent="submit">
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

            <div class="d-flex items-center justify-end mt-4">
                <v-btn
                    type="submit"
                    color="black"
                    :disabled="form.processing"
                    class="ms-4"
                    text="reset password"
                />
            </div>
        </v-form>
    </GuestLayout>
</template>
