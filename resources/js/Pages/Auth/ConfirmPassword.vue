<script setup>
import GuestLayout from "@/Layouts/GuestLayout.vue";
import { Head, useForm } from "@inertiajs/vue3";

const form = useForm({
    password: "",
});

const submit = () => {
    form.post(route("password.confirm"), {
        onFinish: () => form.reset(),
    });
};
</script>

<template>
    <GuestLayout>
        <Head title="Confirm Password" />

        <div class="mb-4 text-body-2">
            This is a secure area of the application. Please confirm your
            password before continuing.
        </div>

        <v-form @submit.prevent="submit">
            <v-text-field
                v-model="form.password"
                label="Password"
                :error-messages="form.errors.password"
                type="password"
            />

            <div class="d-flex justify-end mt-4">
                <v-btn
                    type="submit"
                    color="black"
                    :disabled="form.processing"
                    class="ms-4 text-capitalize"
                    text="confirm"
                />
            </div>
        </v-form>
    </GuestLayout>
</template>
