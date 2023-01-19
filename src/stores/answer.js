import { defineStore } from "pinia";

export const useAnswerStore = defineStore("answer", {
    state: () => ({
        answers: {
            1: null,
            2: null,
            3: null,
            4: null,
            5: null,
            6: null,
            7: null,
            8: null,
            9: null,
            10: null,
        },
        finalScore: null,
    }),
    actions: {
        setAnswerById(id, answer) {
            this.$state.answers[id] = answer;
        },
        getFinalScore() {
            let score = 0;

            Object.values(this.$state.answers).forEach((item) => {
                if (typeof item !== "boolean") {
                    score = null;
                    return;
                }

                if (item) {
                    score += 10;
                }
            });

            if (score) {
                this.finalScore = score;
            }
        },
    },
});
