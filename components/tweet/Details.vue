<script setup>

const props = defineProps({
  tweet: {
    type: Object,
    required: true
  },
  user: {
    type: Object,
    required: true
  },
})

const replies = computed(() => props.tweet?.replies || [])

function handleFormSuccess(tweet) {
  navigateTo({
    path: `/status/${tweet.id}`
  })
}

</script>

<template>
  <div>
    <TweetItem :tweet="tweet" />

    <TweetForm :user="user" placeholder="Tweet your reply" :reply-to="props.tweet" @on-success="handleFormSuccess" />

    <TweetListFeed :tweets="replies" />
  </div>
</template>