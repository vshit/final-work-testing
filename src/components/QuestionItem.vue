<template>
    <div class="question-list__item">
        {{ question.question }}
        <Variants
            :pick="pick"
            :rightAnswer="rightAnswer"
            :setPick="setPick"
            :variants="question.variants"
        />
    </div>
</template>
<script>
import { mapStores } from "pinia";
import { useAnswerStore } from "../stores/answer";
import Variants from "./Variants.vue";
export default {
    props: {
        question: {
            type: Object,
            required: true,
        },
    },
    components: {
        Variants,
    },
    data: () => ({
        pick: null,
        rightAnswer: null,
    }),
    methods: {
        setPick(variant) {
            if (this.pick) return;
            this.pick = variant;
            this.answerStore.setAnswerById(this.question.id, this.pick === this.rightAnswer);
        },
        async getAnswerById(id) {
            const URL = `http://localhost:3000/answers/${id}`;
            const res = await fetch(URL);
            const data = await res.json();
            this.rightAnswer = data.answer;
        },
    },
    mounted() {
        this.getAnswerById(this.question.id);
    },
    computed: {
        ...mapStores(useAnswerStore),
    },
};
</script>
<style>
.question-list__item {
    background-color: #fff;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0 0 12px 0 #0000001a;
}
</style>
