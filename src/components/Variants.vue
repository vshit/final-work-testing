<template>
    <v-radio-group
        :class="{
            disabled: pick,
        }"
    >
        <v-radio
            :color="rightAnswer === variant && pick === variant ? 'green' : 'red'"
            v-for="variant in variants"
            :label="variant"
            :value="variant"
            @change="setPick(variant)"
        ></v-radio>
        <p class="right-answer" v-show="pick">
            Правильный ответ: <strong>{{ rightAnswer }}</strong>
        </p>
    </v-radio-group>
</template>
<script>
export default {
    props: {
        variants: {
            type: Array,
            required: true,
        },
        setPick: {
            type: Function,
            required: true,
        },
        pick: {
            type: String || null,
        },
        rightAnswer: {
            type: String || null,
        },
    },
};
</script>
<style>
.disabled {
    pointer-events: none;
}

.right-answer {
    color: green;
}
</style>
