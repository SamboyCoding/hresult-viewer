<script setup lang="ts">
const hresult = defineModel<string>();
</script>

<template>
    <div id="hresult-input">
        <input type="text" v-model="hresult" id="hresult-input-box" placeholder="Enter HRESULT (hex or decimal)...">
        
    </div>
</template>

<style scoped>
#hresult-input {
    margin: 0 auto 1em auto;
    display: block;
    width: 98%;
    
    #hresult-input-box {
        display: block;
        width: 100%;
        padding: 1em 0;
        font-size: 1.5em;
        outline: none;
        border: none;
        border-radius: 0.5em;
    }
}
</style>