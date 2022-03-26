<template lang="pug">
section.rounded
  .vstack
    .location.text-dark.mb-3(v-if="!!location")
      | {{ location}}
    .open-time.text-dark.mb-3(v-if="!!openTime")
      | {{ openTime }}
    .phone.text-dark(v-if="!!phone")
      | {{ phoneNumber }}
</template>

<script>
import { ref, watchEffect } from 'vue'

export default {
  props: {
    phone: {
      type: String,
      default: () => ''
    },
    location: {
      type: String,
      default: () => ''
    },
    openTime: {
      type: String,
      default: () => ''
    }
  },
  setup (props) {
    const phoneNumber = ref('')

    watchEffect(() => {
      phoneNumber.value = props.phone.replace('886-', '0')
    })

    return {
      phoneNumber
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  background-color: #3fb19514;
  margin-top: 24px;
  padding: 16px 20px;
}
.text-dark {
  font-size: 1rem;
}
</style>
