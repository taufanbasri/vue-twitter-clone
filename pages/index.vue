<script setup>
const { twitterBorderColor } = useTailwindConfig()
const loading = ref(false)
const { useAuthUser } = useAuth()
const user = useAuthUser()
const homeTweets = ref([])
const { getTweets } = useTweets()

onBeforeMount(async () => {
  loading.value = true

  try {

    const { tweets } = await getTweets()

    homeTweets.value = tweets

  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
})

function handleFormSuccess(tweet) {
  navigateTo({
    path: `/status/${tweet.id}`
  })
}

</script>

<template>
  <div>
    <MainSection title="Home" :loading="loading">

      <Head>
        <Title>Home / Twitter</Title>
      </Head>

      <div class="border-b" :class="twitterBorderColor">
        <TweetForm :user="user" @on-success="handleFormSuccess" />
      </div>

      <TweetListFeed :tweets="homeTweets" />

    </MainSection>
  </div>
</template>