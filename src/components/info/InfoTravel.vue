<template lang="pug">
section.mt-4
  h6.text-primary.mb-3 交通方式

  //- map
  .rounded.overflow-hidden
    ol-map.map(
      :loadtileswhileanimating='true'
      :loadtileswhileinteracting='true'
    )

      ol-view(ref='view'
        :center='center'
        :zoom='zoom',
        :projection="projection"
      )

      ol-tile-layer
        ol-source-osm

      ol-vector-layer
        ol-source-vector
          ol-feature
            ol-geom-point(:coordinates="center")
            ol-style
              ol-style-icon(:src="mark" scale="1.7")
</template>

<script>
import { ref, toRefs, watch } from 'vue'
import mark from '@/assets/icons/location_icon_red.svg'

export default {
  props: {
    position: {
      type: Object,
      default: () => ({
        PositionLon: 120.9798175,
        PositionLat: 23.9739881
      })
    }
  },
  setup (props) {
    const { position } = toRefs(props)
    const center = ref([
      position.value.PositionLon,
      position.value.PositionLat
    ])
    const projection = ref('EPSG:4326')
    const zoom = ref(15)

    watch(position, (newPosition) => {
      center.value = [
        newPosition.PositionLon,
        newPosition.PositionLat
      ]
    }, { deep: true })

    return {
      center,
      projection,
      zoom,
      mark
    }
  }
}
</script>
