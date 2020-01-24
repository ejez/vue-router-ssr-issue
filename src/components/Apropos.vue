<template>
    <div>
        {{ aboutText }}
    </div>
</template>
<script>
    export default {
        data() {
            return {
                aboutText: 'Routes with non ascii characters are not matched when requested directly from server (404 in terminal), these routes are matched only on client (when clicking on links)'
            };
        }
    };
</script>