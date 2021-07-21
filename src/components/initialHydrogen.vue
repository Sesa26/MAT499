<template>
<div class="d-flex align-content-center">
        <span class="align-self-center">H</span>
    <span class="black align-self-center horizontalline">.</span>
    <span class="element ">
        <span>H</span>
        <span class="black verticalline">.</span>
        <span class="d-inline">C</span>
        <span class="black verticalline">.</span>
        <span>H</span>
    </span>
    
</div>
</template>
<script>
export default {
    name:"initialHydrogen"
}
</script>
<style scoped>
.element{
    display: flex;
    flex-direction: column;
}
.verticalline{
    align-self: center;
width: 2px;
}
.horizontalline{
    /* justify-self: center; */
height:2px;
width: 20px;
}

</style>