<script setup>
import GuestLayout from "@/Layouts/GuestLayout.vue";
import { Head, useForm } from "@inertiajs/vue3";

defineProps({
    status: {
        type: String,
    },
});

const form = useForm({
    email: "",
});

const submit = () => {
    form.post(route("password.email"));
};
</script>

<template>
    <GuestLayout>
        <Head title="Forgot Password" />

        <div class="mb-4 text-body-2">
            Forgot your password? No problem. Just let us know your email
            address and we will email you a password reset link that will allow
            you to choose a new one.
        </div>

        <div v-if="status" class="mb-4">
            {{ status }}
        </div>

        <v-form @submit.prevent="submit">
            <v-text-field
                v-model="form.email"
                label="Email"
                :error-messages="form.errors.email"
            />

            <div class="d-flex justify-end mt-4">
                <v-btn
                    type="submit"
                    color="black"
                    :disabled="form.processing"
                    class="ms-4 text-capitalize"
                    text="email password reset link"
                />
            </div>
        </v-form>
    </GuestLayout>
</template>
