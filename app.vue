<script setup>
const darkMode = ref(false)
const { useAuthUser, initAuth, useAuthLoading } = useAuth()
const isAuthLoading = useAuthLoading()
const { closePostTweetModal, usePostTweetModal, openPostTweetModal, useReplyTweet } = useTweets()
const user = useAuthUser()

const poastTweetModal = usePostTweetModal()
const emitter = useEmitter()
const replyTweet = useReplyTweet()

emitter.$on('replyTweet', (tweet) => {
  openPostTweetModal(tweet)
})

emitter.$on('toggleDarkMode', () => {
  darkMode.value = !darkMode.value
})

onBeforeMount(() => {
  initAuth()
})

function handleFormSuccess(tweet) {
  closePostTweetModal()

  navigateTo({
    path: `/status/${tweet.id}`
  })
}

function handleModalClose() {
  closePostTweetModal()
}

function handleOpenTweetModal() {
  openPostTweetModal(null)
}

</script>
  
<template>
  <div :class="{'dark': darkMode}">
    <div class="bg-white dark:bg-dim-900">

      <LoadingPage v-if="isAuthLoading" />

      <!-- App -->
      <div v-else-if="user" class="min-h-full">
        <div class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-10">
          <!-- Left Sidebar -->
          <div class="hidden md:block xs:col-span-1 xl:col-span-2">
            <div class="sticky top-0">
              <SidebarsLeft @on-tweet="handleOpenTweetModal" />
            </div>
          </div>
          <!-- End Left Sidebar -->

          <!-- Main Content -->
          <main class="col-span-12 md:col-span-8 xl:col-span-6">
            <router-view></router-view>
          </main>
          <!-- End Main Content -->


          <!-- Right Sidebar -->
          <div class="hidden col-span-12 md:block xl:col-span-4 md:col-span-3">
            <div class="sticky top-0">
              <SidebarsRight />
            </div>
          </div>
          <!-- End Right Sidebar -->
        </div>
      </div>
      <!-- End App -->

      <AuthPage v-else />

      <UIModal :isOpen="poastTweetModal" @on-close="handleModalClose">
        <TweetForm :replyTo="replyTweet" showReply :user="user" @on-success="handleFormSuccess" />
      </UIModal>

    </div>
  </div>
</template>
  