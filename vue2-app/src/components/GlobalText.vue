<template>
    <div class="global-text">
        <input :value="value" />
        <slot name="namedslot" />
    </div>
</template>

<script>
export default {
    props: ['value'],

};
</script>

<style>
.global-text {
    display: inline-flex;
    flex-direction: column;
    padding: 10px;
    border: 2px solid red;
}

.global-text span {
    margin-top: 10px;
    padding: 10px;
    border: 2px solid green;
}

</style>
