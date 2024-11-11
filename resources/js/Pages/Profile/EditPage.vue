<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout/AuthenticatedLayout.vue";
import DeleteUserForm from "./Partials/DeleteUserForm.vue";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm.vue";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm.vue";
import { Head } from "@inertiajs/vue3";

defineProps({
    mustVerifyEmail: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});
</script>

<template>
    <Head title="Profile" />

    <AuthenticatedLayout>
        <template #header>
            <h2>Profile</h2>
        </template>
        <UpdateProfileInformationForm
            :must-verify-email="mustVerifyEmail"
            :status="status"
        />

        <v-divider class="my-4 mx-n6" thickness="5" />

        <UpdatePasswordForm />
        <v-divider class="my-4 mx-n6" thickness="5" />

        <DeleteUserForm />
    </AuthenticatedLayout>
</template>
