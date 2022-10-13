<script setup>
const loading = ref(false)
const props = defineProps({
  user: {
    type: Object,
    required: true
  }
})

const { postTweet } = useTweets()

async function handleFormSubmit(data) {
  loading.value = true
  try {
    const response = await postTweet({
      text: data.text,
      mediaFiles: data.mediaFiles
    })

    console.log(response)
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
      <TweetFormInput :user="props.user" @on-submit="handleFormSubmit" />
    </div>
  </div>
</template>