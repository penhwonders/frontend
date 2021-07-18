<template>
    <v-dialog
        :value="dialog"
        scrollable
        persistent
        :overlay="false"
        max-width="250px"
        transition="dialog-transition"
    >
        <v-card>
            <v-card-title class="justify-center">
                We're working on it!
            </v-card-title>
            <v-card-text class="text-center">
                <v-progress-circular
                    :indeterminate="true"
                    rounded
                    height="10px"
                ></v-progress-circular>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: "Loading",
    props: {
        dialog: Boolean,
    },
};
</script>

<style></style>
