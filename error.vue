<template>
  <div>
    Error {{ error.statusCode }}
    <br />
    <div>
      {{ error.message }}
    </div>
  </div>
</template>

<script setup>

  defineProps(['error'])

</script>