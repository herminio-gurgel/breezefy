<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import {Link} from '@inertiajs/vue3';
</script>

<template>
    <div class="h-screen d-flex flex-column justify-center align-center pt-6 pt-sm-0 bg-grey-lighten-4">
        <div>
            <Link href="/">
                <ApplicationLogo style="width: 80px; height: 80px"/>
            </Link>
        </div>

        <div
            class="w-100 mt-6 px-6 py-4 bg-white elevation-2 overflow-hidden rounded-lg"
            style="max-width: 448px"
        >
            <slot/>
        </div>
    </div>
</template>
