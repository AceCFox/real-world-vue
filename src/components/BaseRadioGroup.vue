<template>
    <component
         v-for="option in options"
        :key="option.value || option"
        :is="vertical ? 'div' :  'span'"
        :class= "{
            horozontal: !vertical
        }"
    >
        <BaseRadio
            :label="option.label || option"
            :value="option.label || option"
            :name="name"
            :modelValue="modelValue"
            @update:modelValue="$emit('update:modelValue', event)"
        />
    </component>
</template>

<script>
import BaseRadio from "@/components/BaseRadio.vue";

export default {
    components: {
    BaseRadio
    },
    props: {
      options:{
          type: Array,
          required: true
      },
      name: {
          type: String,
          required: true
      },
      modelValue: {
          type: [String, Number],
          required: true
      },
      vertical: {
          type: Boolean,
          default: false
      },
    },
}
</script>

<style scoped>
.horozontal{
    margin-right: 20px
}
</style>