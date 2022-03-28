<template lang="pug">
//- search input
label(for="keyword")
  small.d-none 輸入關鍵字

  .input-group.border.rounded.bg-light

    input#keyword.form-control.border-0(
      type="search"
      placeholder="搜尋關鍵字"
      v-model.trim="keyword"
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
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import emitter from '@/methods/emitter'

export default {
  setup (props) {
    const keyword = ref('')
    const cityName = ref('')

    const router = useRouter()
    const route = useRoute()

    keyword.value = route.params.searchKeyword

    emitter.on('emit-cityName', (city) => {
      cityName.value = city
    })

    function handleInput () {
      const routeName = route.name
        .replace('Search', '')
        .replace('OfCity', '')

      if (cityName.value && cityName.value !== 'all') {
        if (keyword.value) {
          router.push({
            name: `${routeName}SearchOfCity`,
            params: {
              cityId: cityName.value,
              searchKeyword: keyword.value
            }
          })
        } else {
          router.push({
            name: `${routeName}OfCity`,
            params: {
              cityId: cityName.value
            }
          })
        }
      } else {
        if (keyword.value) {
          router.push({
            name: `${routeName}Search`,
            params: {
              searchKeyword: keyword.value
            }
          })
        } else {
          router.push({
            name: routeName
          })
        }
      }
    }

    watch(() => route.params.cityId, () => {
      keyword.value = ''
      cityName.value = ''
    })

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
