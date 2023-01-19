<template>
    <v-alert type="info" class="my-5">
        <p>Результат {{ answerStore.finalScore }}%</p>
    </v-alert>
</template>
<script>
import { mapStores } from "pinia";
import { useAnswerStore } from "../stores/answer";
export default {
    computed: {
        ...mapStores(useAnswerStore),
    },
};
</script>
