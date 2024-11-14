<script setup>
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
