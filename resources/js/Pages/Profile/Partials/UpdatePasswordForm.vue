<script setup>
import { useForm } from "@inertiajs/vue3";
import { ref } from "vue";

const passwordInput = ref(null);
const currentPasswordInput = ref(null);

const form = useForm({
    current_password: "",
    password: "",
    password_confirmation: "",
});

const updatePassword = () => {
    form.put(route("password.update"), {
        preserveScroll: true,
        onSuccess: () => form.reset(),
        onError: () => {
            if (form.errors.password) {
                form.reset("password", "password_confirmation");
                passwordInput.value.focus();
            }
            if (form.errors.current_password) {
                form.reset("current_password");
                currentPasswordInput.value.focus();
            }
        },
    });
};
</script>

<template>
    <section>
        <header>
            <h2>Update Password</h2>

            <p class="mt-1 text-body-2">
                Ensure your account is using a long, random password to stay
                secure.
            </p>
        </header>

        <v-form @submit.prevent="updatePassword" class="mt-6">
            <v-text-field
                type="password"
                max-width="576px"
                v-model="form.current_password"
                :error-messages="form.errors.current_password"
                ref="currentPasswordInput"
                label="Current Password"
            />

            <v-text-field
                type="password"
                max-width="576px"
                v-model="form.password"
                :error-messages="form.errors.password"
                ref="passwordInput"
                label="New Password"
            />

            <v-text-field
                type="password"
                max-width="576px"
                v-model="form.password_confirmation"
                :error-messages="form.errors.password_confirmation"
                ref="passwordInput"
                label="Confirm Password"
            />

            <div class="d-flex align-center gap-4">
                <v-btn
                    type="submit"
                    color="black"
                    :disabled="form.processing"
                    text="save"
                />

                <v-snackbar v-model="form.recentlySuccessful" :timeout="2000">
                    <p class="text-body-2 text-center">Saved.</p>
                </v-snackbar>
            </div>
        </v-form>
    </section>
</template>
