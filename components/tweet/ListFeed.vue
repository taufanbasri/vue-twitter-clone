<script setup>

const { twitterBorderColor, defaultTransition } = useTailwindConfig()

const props = defineProps({
  tweets: {
    type: Array,
    required: true
  }
})

const isEmtpyArray = computed(() => props.tweets.length === 0)

</script>

<template>
  <div>

    <div v-if="isEmtpyArray" class="p-4">
      <p class="text-center text-gray-500">
        No tweets
      </p>
    </div>

    <div v-for="tweet in tweets" :key="tweet.id"
      class="pb-4 border-b cursor-pointer hover:bg-gray-100 dark:hover:bg-dim-300"
      :class="[twitterBorderColor, defaultTransition]">
      <TweetItem :tweet="tweet" />
    </div>
  </div>
</template>