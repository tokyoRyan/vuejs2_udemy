<template>
    <div class="row">
        <div class="col-12">
            <h3>Quotes Added</h3>
            <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"
                    :style="{width: (quoteCount/maxQuotes) * 100 + '%'}">{{ quoteCount }} / {{ maxQuotes }}</div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        props: ['quoteCount', 'maxQuotes']
    }
</script>

<style scoped>

</style>