<script setup>

const props = defineProps({
  jawaban: {
    type: Array,
    required: true,
  },
})
const emit = defineEmits(['close'])
const anxietyNum = [1,2,3]

const { jawaban } = toRefs(props)

watchEffect(() => {
  // console.log(jawaban.value)
  for (let i = 0; i < jawaban.value.length; i++) {
    console.log(jawaban[i].questions)
  }
})

// const anxiety = () =>{
//   const data = []
  // for (let i = 0; i < jawaban.length; i++) {
  //   for (let j = 0; j < anxietyNum.length; j++) {
  //     if (jawaban[i].questions == anxietyNum[j]) {
  //       data.push(jawaban[i])
  //     }
  //   }
  // }
//   return data;
// };

</script>

<template>
  <div class="modal-overlay">
    <div class="modal">
      <div class="flex" @click="$emit('close', false)">
        close
      </div>
      <h1>Haloo</h1>
      <!-- {{ anxiety() }} -->
      <!-- <div v-for="(jawab, key) in jawaban" :key="key">
        
      </div> -->
    </div>
  </div>
</template>