<script setup>
import { HomeIcon } from "@heroicons/vue/24/solid";
import { HashtagIcon, BellIcon, InboxIcon, BookmarkIcon, DocumentTextIcon, UserIcon, EllipsisHorizontalCircleIcon, PencilIcon } from "@heroicons/vue/24/outline";

const { defaultTransition } = useTailwindConfig()
const emits = defineEmits(['onTweet'])


</script>

<template>
  <div class="flex flex-col h-screen">
    <div class="p-2 my-2 rounded-full w-min dark:hover:bg-white/20 hover:bg-blue-50" :class="defaultTransition">
      <nuxt-link to="/">
        <div class="w-8 h-8">
          <LogoTwitter />
        </div>
      </nuxt-link>
    </div>

    <div class="mt-2 space-y-3">
      <SidebarsLeftTab active>
        <template v-slot:icon>
          <HomeIcon />
        </template>
        <template v-slot:name>
          Home
        </template>
      </SidebarsLeftTab>

      <SidebarsLeftTab>
        <template v-slot:icon>
          <HashtagIcon />
        </template>
        <template v-slot:name>
          Explore
        </template>
      </SidebarsLeftTab>

      <SidebarsLeftTab>
        <template v-slot:icon>
          <BellIcon />
        </template>
        <template v-slot:name>
          Notifications
        </template>
      </SidebarsLeftTab>

      <SidebarsLeftTab>
        <template v-slot:icon>
          <InboxIcon />
        </template>
        <template v-slot:name>
          Messages
        </template>
      </SidebarsLeftTab>

      <SidebarsLeftTab>
        <template v-slot:icon>
          <BookmarkIcon />
        </template>
        <template v-slot:name>
          Bookmark
        </template>
      </SidebarsLeftTab>

      <SidebarsLeftTab>
        <template v-slot:icon>
          <DocumentTextIcon />
        </template>
        <template v-slot:name>
          Lists
        </template>
      </SidebarsLeftTab>

      <SidebarsLeftTab>
        <template v-slot:icon>
          <UserIcon />
        </template>
        <template v-slot:name>
          Profile
        </template>
      </SidebarsLeftTab>

      <SidebarsLeftTab>
        <template v-slot:icon>
          <EllipsisHorizontalCircleIcon />
        </template>
        <template v-slot:name>
          More
        </template>
      </SidebarsLeftTab>

      <div class="hidden xl:block">
        <UIButton size="lg" liquid @on-click="emits('onTweet')">
          <span class="font-bold">
            Tweet
          </span>
        </UIButton>
      </div>
      <div class="xl:hidden">
        <UIButton @on-click="emits('onTweet')">
          <div class="w-6 h-6 font-bold">
            <PencilIcon />
          </div>
        </UIButton>
      </div>

    </div>
  </div>
</template>