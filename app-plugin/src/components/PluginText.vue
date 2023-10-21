<template>
    <global-text value="example value 1">
        <template #namedslot>
            <span>example span 1</span>
        </template>
    </global-text>
    <imported-text value="example value 2">
        <template #namedslot>
            <span>example span 2</span>
        </template>
    </imported-text>
</template>

<script>
const GlobalText = window.api.GlobalText;

export default {
    components: {
        ImportedText: GlobalText,
    }
};
</script>

<style>
</style>
