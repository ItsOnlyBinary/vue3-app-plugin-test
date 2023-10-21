<template>
    <div class="demo">
        <div>
            <div class="title">built in</div>
            <global-text value="example value">
                <template #namedslot>
                    <span>example span</span>
                </template>
            </global-text>
        </div>
        <div>
            <div class="title">plug in - text</div>
            <component :is="plugin" v-if="plugin" />
            <div v-else class="plugin-none">no plugin</div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['plugin'],
};
</script>

<style>
.demo {
    display: inline-flex;
    flex-direction: column;
    gap: 10px;
}

.demo > div {
    border: 2px solid blue;
    padding: 10px;
}

.title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 10px;
}

.plugin-none {
    color: red;
}
</style>
