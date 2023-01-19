<template>
    <div class="question-list">
        <question-item v-for="question in questions" :key="question.id" :question="question" />
    </div>
</template>
<script>
import QuestionItem from "./QuestionItem.vue";
export default {
    components: {
        QuestionItem,
    },
    data: () => ({
        questions: [],
    }),
    methods: {
        async getQuestions() {
            const URL = "http://localhost:3000/questions";
            const res = await fetch(URL);
            const data = await res.json();
            this.questions = await data;
        },
    },
    mounted() {
        this.getQuestions();
    },
};
</script>
<style>
.question-list {
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>
