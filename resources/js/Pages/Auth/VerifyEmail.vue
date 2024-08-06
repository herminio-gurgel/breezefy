<script setup>
import { computed } from "vue";
import GuestLayout from "@/Layouts/GuestLayout.vue";
import { Head, Link, useForm } from "@inertiajs/vue3";

const props = defineProps({
    status: {
        type: String,
    },
});

const form = useForm({});

const submit = () => {
    form.post(route("verification.send"));
};

const verificationLinkSent = computed(
    () => props.status === "verification-link-sent",
);
</script>

<template>
    <GuestLayout>
        <Head title="Email Verification" />

        <div class="mb-4 text-body-2">
            Thanks for signing up! Before getting started, could you verify your
            email address by clicking on the link we just emailed to you? If you
            didn't receive the email, we will gladly send you another.
            <p
                class="text-success mt-2 font-weight-bold"
                v-if="verificationLinkSent"
            >
                A new verification link has been sent to the email address you
                provided during registration.
            </p>
        </div>

        <form @submit.prevent="submit">
            <div class="mt-4 d-flex align-center justify-space-between">
                <v-btn
                    type="submit"
                    class="xl-0"
                    color="black"
                    :disabled="form.processing"
                    text="resend verification email"
                />

                <Link
                    :href="route('logout')"
                    method="post"
                    as="button"
                    class="text-decoration-underline text-body-2"
                >
                    Log Out
                </Link>
            </div>
        </form>
    </GuestLayout>
</template>
