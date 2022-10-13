<script setup>

const props = defineProps({
  user: {
    type: Object,
    required: true
  }
})

const { postTweet } = useTweets()

async function handleFormSubmit(data) {
  try {
    const response = await postTweet(data)

    console.log(response)
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <div>
    <TweetFormInput :user="props.user" @on-submit="handleFormSubmit" />
  </div>
</template>