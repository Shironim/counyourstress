<script setup>
import pilihan from "@factories/pilihan";
import questions from "@factories/questions";
definePageMeta({
  layout: "default",
})
useHead({
  title: "StressLevel",
})

const jawaban = ref([])
const current = ref(0)
const show = ref(false)
const last = ref(questions.length - 1)
const currentQuest = ref()
// const questionsAnswered = ref()

watchEffect(() => {
  console.log(jawaban.value)
  // console.log(current.value)
  // console.log(jawaban.value[current.value])
  // const data = jawaban.value.filter(item => item.questions == current.value)
  // if (data.length == 1) {
  //   console.log('ada')
  // }else{
  //   console.log('tidak ada')
  // }
  currentQuest.value = jawaban.value.filter(item => item.questions == current.value)
  // questionsAnswered.value = jawaban.value.filter(item => item.questions == current.value)
})

const clicked = (key) => {
  if (currentQuest.value.length == 1) {
    jawaban.value[current.value] = {questions: current.value, pilihan: key}
  }else{
    jawaban.value = [...jawaban.value, {questions: current.value, pilihan: key}]
  }
}

const next = () => {
  current.value++
}
const back = () => {
  current.value--
}
const toogleModal = (ref) => {
  show.value = ref
}

</script>
<template>
  <div class="flex mx-8">
    <div class="w-full">
      <div class="h-24 sm:h-28">
        <h1 class="text-lg sm:text-2xl text-center mt-8 mb-12">{{ questions[current] }}</h1>
      </div>
      <div>
        <div v-for="(item, key) in pilihan" @click="clicked(key)" :key="key" class="cursor-pointer rounded shadow-md py-4 px-4 sm:py-4 sm:px-6 border mb-6 text-md sm:text-lg" :class="currentQuest[0]?.pilihan == key ? 'bg-slate-200' : 'bg-white'">
          {{ item }}
        </div>
      </div>
      <div class="flex justify-between">
        <div>
          <button @click="current > 0 ? back() : ''" class=" text-white px-4 py-2 rounded mr-8" :class="current === 0 ? 'bg-slate-300 cursor-not-allowed' : 'bg-blue-500 cursor-pointer'">Back</button>
        
          <button @click="current == last ? '' : next()" class="text-white px-4 py-2 rounded" :class="current === last ? 'bg-slate-300 cursor-not-allowed' : 'bg-blue-500 cursor-pointer'">Next</button>
        </div>
        <!-- <button v-if="current == last" @click="toogleModal(true)" class="text-white px-4 py-2 rounded bg-blue-500">Finish</button> -->
      </div>
    </div>
    <!-- <div class="col-span-3">
      <div class="grid grid-cols-6 gap-4 mt-16">
        <div v-for="i in last" :key="i" class="px-3 py-2 text-center border rounded shadow-sm">
          {{ i }}
        </div>
      </div>
    </div> -->
  </div>
  <!-- <ModalFinish :jawaban="jawaban" @close="toogleModal" v-show="show" /> -->
</template>
