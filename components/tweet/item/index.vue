<script setup>
const { twitterBorderColor } = useTailwindConfig()

const props = defineProps({
  tweet: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div>

    <TweetItemHeader :tweet="props.tweet" />

    <div class="ml-16">
      <p class="flex-shrink w-auto font-medium text-gray-800 dark:text-white">
        {{ tweet.text }}
      </p>

      <div v-for="image in tweet.mediaFiles" :key="image.id" class="flex my-3 mr-2 overflow-hidden border-2 rounded-2xl"
        :class="twitterBorderColor">
        <img :src="image.url" alt="" class="w-full">
      </div>

      <div class="mt-2">
        <TweetItemActions />
      </div>

    </div>
  </div>
</template>