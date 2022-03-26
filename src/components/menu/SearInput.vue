<template lang="pug">
//- search input
label(for="keyword")
  small.d-none 輸入關鍵字

  .input-group.border.rounded.bg-light

    input#keyword.form-control.border-0(
      type="search"
      placeholder="搜尋關鍵字"
      v-model="keyword"
      @input.prevent="handleInput"
    )

    button.btn.d-flex(
      type="button"
      title="搜尋"
      @click="handleInput"
    )
      img.my-auto(src="@/assets/icons/search.svg" alt="search icon")
</template>

<script>
import { ref } from 'vue'
import emitter from '@/methods/emitter'

export default {
  setup (props) {
    const keyword = ref('')
    const tempList = ref([])

    emitter.on('emit-attractionList', (list) => {
      tempList.value = list
    })

    function handleInput () {
      let filterList = []
      tempList.value.forEach(attraction => {
        if (('ScenicSpotName' in attraction) && attraction.ScenicSpotName.includes(keyword.value)) {
          filterList = [...filterList, attraction]
        } else if (('Address' in attraction) && attraction.Address.includes(keyword.value)) {
          filterList = [...filterList, attraction]
        } else if (('Class1' in attraction) && attraction.Class1.includes(keyword.value)) {
          filterList = [...filterList, attraction]
        }
      })
      emitter.emit('emit-searchResult', filterList)
    }

    return {
      keyword,
      handleInput
    }
  }
}
</script>

<style lang="scss" scoped>
input {
  font-size: 16px;
  padding: 8px 11.5px 7px 12px;

  &:focus {
    outline: none;
  }
}
</style>
