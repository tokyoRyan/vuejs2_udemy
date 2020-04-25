<template>
    <div class="quote">
        <div class="title">
            <slot name="title"></slot>
            <span><slot name="subtitle">The (default) subtitle</slot></span>
        </div>
        <hr>
        <slot></slot>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>
    .quote {
        border: solid 1px #ccc;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: 30px auto;
        text-align: center;
    }
    .title {
        font-style: italic;;
    }
    .title span {
        color: #ccc;
    }
</style>