<template>
    <span class="element">
        <span>H</span>
        <span class="black line">.</span>
        <span>C</span>
        <span class="black line">.</span>
        <span>H</span>
    </span>
</template>
<script>
export default {
    name:"twoHydrogen"
}
</script>
<style scoped>
.element{
    display: flex;
    flex-direction: column;
}
.line{
    align-self: center;
width: 2px;
}

</style>