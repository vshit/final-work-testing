<template>
    <v-container>
        <h1>Вопросы по HTML/CSS</h1>
        <QuestionList />
        <Result v-show="answerStore.finalScore" />
        <v-btn variant="flat" color="green" @click="countFinalScore">Получить результаты</v-btn>
    </v-container>
</template>
<script>
import { mapStores } from "pinia";
import QuestionList from "../components/QuestionList.vue";
import Result from "../components/Result.vue";
import { useAnswerStore } from "../stores/answer";
export default {
    components: {
        QuestionList,
        Result,
    },
    methods: {
        countFinalScore() {
            this.answerStore.getFinalScore();
        },
    },
    computed: {
        ...mapStores(useAnswerStore),
    },
};
</script>
