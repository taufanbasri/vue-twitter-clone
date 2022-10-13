<script setup>
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'md'
  },
  liquid: {
    type: Boolean,
    default: false
  }
})

const paddingClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-3 py-2'
    case 'lg':
      return 'px-4 py-3'
    default:
      return 'px-3 py-3'
  }
})

const textFontSize = computed(() => {
  switch (props.size) {
    case 'lg':
      return 'text-md'
    default:
      return 'text-sm'
  }
})

const classes = computed(() => `${paddingClasses.value}`)

</script>

<template>
  <button
    class="flex items-center justify-center text-sm text-white bg-blue-400 rounded-full hover:bg-blue-500 disabled:bg-blue-300 disabled:cursor-not-allowed"
    :disabled="props.disabled" :class="classes">
    <span :class="textFontSize">
      <slot></slot>
    </span>
  </button>
</template>

<!-- <UIButton size="sm">
  <span class="font-bold">
    Tweet
  </span>
</UIButton> -->