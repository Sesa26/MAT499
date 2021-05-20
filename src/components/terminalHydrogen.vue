<template>
<div class="d-flex align-content-center">
    <span class="element ">
        <span>H</span>
        <span class="black verticalline">.</span>
        <span class="d-inline">C</span>
        <span class="black verticalline">.</span>
        <span>H</span>
    </span>
       <horizontal />
    <!-- <span class="black align-self-center horizontalline">.</span> -->
        <span class="align-self-center">H</span>
    
</div>
</template>
<script>
export default {
    name:"twoHydrogen"
}
</script>
<style >
.element{
    display: flex;
    flex-direction: column;
}
.verticalline{
    align-self: center;
width: 2px;
}
.horizontalline{
height:2px;
width: 20px;
}

</style>