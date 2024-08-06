<script setup>
import { useForm } from "@inertiajs/vue3";
import { nextTick, ref } from "vue";

const confirmingUserDeletion = ref(false);
const passwordInput = ref(null);

const form = useForm({
    password: "",
});

const confirmUserDeletion = () => {
    confirmingUserDeletion.value = true;

    nextTick(() => passwordInput.value.focus());
};

const deleteUser = () => {
    form.delete(route("profile.destroy"), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => passwordInput.value.focus(),
        onFinish: () => form.reset(),
    });
};

const closeModal = () => {
    confirmingUserDeletion.value = false;

    form.reset();
};
</script>

<template>
    <section>
        <header>
            <h2>Delete Account</h2>

            <p style="max-width: 576px" class="mt-1 text-body-2">
                Once your account is deleted, all of its resources and data will
                be permanently deleted. Before deleting your account, please
                download any data or information that you wish to retain.
            </p>
        </header>

        <v-dialog max-width="672px">
            <template v-slot:activator="{ props: activatorProps }">
                <v-btn
                    v-bind="activatorProps"
                    color="error"
                    :disabled="form.processing"
                    text="delete account"
                />
            </template>
            <template v-slot:default="{ isActive }">
                <v-card>
                    <v-card-title class="font-weight-bold text-body-1 pl-6">
                        Are you sure you want to delete your account?
                    </v-card-title>
                    <v-card-text>
                        <p class="text-body-2">
                            Once your account is deleted, all of its resources
                            and data will be permanently deleted. Please enter
                            your password to confirm you would like to
                            permanently delete your account.
                        </p>
                        <v-text-field
                            label="Password"
                            ref="passwordInput"
                            v-model="form.password"
                            type="password"
                            placeholder="Password"
                            max-width="468px"
                            @keyup.enter="deleteUser"
                            :error-messages="form.errors.password"
                        />
                    </v-card-text>
                    <v-card-actions>
                        <v-btn @click="isActive.value = false" text="close" />
                        <v-btn
                            color="error"
                            :disabled="form.processing"
                            @click="deleteUser"
                            text="delete account"
                        />
                    </v-card-actions>
                </v-card>
            </template>
        </v-dialog>
    </section>
</template>
