<script setup lang="ts">

import HresultInput from "./components/HresultInput.vue";
import HresultDisplay from "./components/HresultDisplay.vue";
import {ref} from "vue";

const hresult = ref('');
</script>

<template>
    <div id="app-title">HRESULT Debug Tool</div>
    <div id="app-subtitle">By Sam Byass (Samboy063)</div>
    <div id="app-instructions">
        This tool allows you to interpret Windows error codes (called HRESULTs) in a human-readable way. It is a little-known fact that these actually have a format and are (somewhat) documented.
        <br/>
        Simply paste an HRESULT (in either hexadecimal or decimal format) into the box below to see the facility (area of the system it originated from) and, if we have it, the error description.
        <br/>
        The table shows, in order: bit indices, their meanings (hover for more info), whether they are set in the HRESULT you entered (1/0), and what the value in your input means.
    </div>
    <div id="app" :class="{expanded: !!hresult}">
        <HresultInput v-model="hresult"/>
        <HresultDisplay :hresult="hresult"/>
    </div>
</template>

<style scoped lang="scss">
    #app-title {
        font-size: 2em;
        text-align: center;
        margin: 1em 0 0;
    }
    
    #app-subtitle {
        font-size: 1.5em;
        text-align: center;
        margin: 0 0 1em 0;
    }
    
    #app-instructions {
        font-size: 1.2em;
        text-align: center;
        margin: 0 0 1em 0;
    }

    #app {
        width: 80%;
        margin: 0 auto;
        padding: 0;
        background-color: rgb(18, 18, 18);
        border-radius: 0.5em;
        overflow: hidden;
        height: 4.5em;
        transition: height 0.5s;
        will-change: height;
        color: whitesmoke;
        
        &.expanded {
            height: 20em;
        }
    }
</style>
