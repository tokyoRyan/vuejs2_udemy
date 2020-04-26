<template>
    <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="card">
            <div class="card-body quote">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>
    .quote {
        font-size: 1.3rem;
        cursor: pointer;
    }

    .quote:hover {
        background-color: #ffe2e2;
    }
</style>