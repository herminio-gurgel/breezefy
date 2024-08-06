<script setup>
import { Link, useForm, usePage } from "@inertiajs/vue3";

defineProps({
    mustVerifyEmail: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

const user = usePage().props.auth.user;

const form = useForm({
    name: user.name,
    email: user.email,
});
</script>

<template>
    <section>
        <header>
            <h2>Profile Information</h2>
            <p class="mt-1 text-body-2">
                Update your account's profile information and email address.
            </p>
        </header>

        <v-form
            @submit.prevent="form.patch(route('profile.update'))"
            class="my-6"
        >
            <v-text-field
                v-model="form.name"
                max-width="576px"
                label="Name"
                autofocus
                :error-messages="form.errors.name"
            />

            <v-text-field
                v-model="form.email"
                label="Email"
                max-width="576px"
                :error-messages="form.errors.email"
            />

            <div v-if="mustVerifyEmail && user.email_verified_at === null">
                <p class="text-body-2 mt-2">
                    Your email address is unverified.
                    <Link
                        :href="route('verification.send')"
                        method="post"
                        as="button"
                    >
                        Click here to re-send the verification email.
                    </Link>
                </p>

                <div
                    v-show="status === 'verification-link-sent'"
                    class="mt-2 text-body-2"
                >
                    A new verification link has been sent to your email address.
                </div>
            </div>

            <div class="d-flex align-center gap-4">
                <v-btn
                    type="submit"
                    color="black"
                    :disabled="form.processing"
                    text="save"
                />

                <v-snackbar v-model="form.recentlySuccessful">
                    <p class="text-body-2 text-center">Saved.</p>
                </v-snackbar>
            </div>
        </v-form>
    </section>
</template>
