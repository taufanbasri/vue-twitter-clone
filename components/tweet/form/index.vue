<script setup>
const emits = defineEmits(['onSuccess'])
const loading = ref(false)
const props = defineProps({
  user: {
    type: Object,
    required: true
  },
  placeholder: {
    type: String,
    default: "What's happening?"
  },
  replyTo: {
    type: Object,
    default: null
  },
  showReply: {
    type: Boolean,
    default: false
  }
})

const { postTweet } = useTweets()

async function handleFormSubmit(data) {
  loading.value = true
  try {
    const response = await postTweet({
      text: data.text,
      mediaFiles: data.mediaFiles,
      replyTo: props.replyTo?.id
    })

    emits('onSuccess', response.tweet)
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
}

</script>

<template>
  <div>
    <div v-if="loading" class="flex items-center justify-center py-6">
      <UISpinner />
    </div>

    <div v-else>
      <TweetItem :tweet="replyTo" v-if="replyTo && showReply" hideActions />
      <TweetFormInput :user="props.user" @on-submit="handleFormSubmit" :placeholder="placeholder" />
    </div>
  </div>
</template>