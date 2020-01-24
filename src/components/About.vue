<template>
    <div>
        {{ aboutText }}
    </div>
</template>
<script>
    export default {
        data() {
            return {
                aboutText: 'Routes WITHOUT non-ascii characters are matched both in ssr and client'
            };
        }
    };
</script>