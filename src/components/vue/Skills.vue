<script setup lang="ts">
import { computed, ref } from 'vue';
import {skillsStore} from '../../store/skills.js'
const _skills = ref('all')

const skills = computed(() => {
    if (_skills.value === 'all') {
        return skillsStore
    }
    console.log(_skills.value);
    
    return skillsStore.filter(skill => skill.type === _skills.value)
})

function getLanguages(){ 
    _skills.value = 'front-end'
}
function reset(){
    _skills.value = 'all'
}

</script>

<template>
    <div class="w-full max-w-6xl space-y-2">
        <div class="relative border border-default bg-offset px-6 pb-4 pt-8">
            <h3 class="absolute right-4 top-0 -translate-y-1/2 uppercase tracking-tight text-xs">
                <div class="badge-container">
                    <span class="rounded-full border border-current bg-default px-4 py-1"><button @click="getLanguages()"
                        >Programming Languages</button></span>
                    <span class="rounded-full border border-current bg-default px-4 py-1"><button
                        @click="reset()">Databases</button></span>
                    <span class="rounded-full border border-current bg-default px-4 py-1">Frameworks</span>
                    <span class="rounded-full border border-current bg-default px-4 py-1">Technology Platforms</span>
                </div>
            </h3>
            <ul class="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-6">
                <li v-for="skill in skills">
                    <div class="flex flex-col items-center gap-2">
                        <img :src="skill.src" :alt="skill.title" class="h-12" />
                        <span>{{ skill.title }}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<style></style>