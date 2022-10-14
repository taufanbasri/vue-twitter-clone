<script setup>
import { ChatBubbleOvalLeftEllipsisIcon, ArrowPathIcon, HeartIcon, ArrowUpTrayIcon } from "@heroicons/vue/24/outline";
</script>

<template>
  <div class="flex items-center justify-around w-full">

    <TweetItemActionsIcon color="blue">
      <template v-slot:icon="{classes}">
        <ChatBubbleOvalLeftEllipsisIcon :class="classes" />
      </template>

      <template v-slot:default>
        5
      </template>
    </TweetItemActionsIcon>

    <TweetItemActionsIcon color="green">
      <template v-slot:icon="{classes}">
        <ArrowPathIcon :class="classes" />
      </template>

      <template v-slot:default>
        5
      </template>
    </TweetItemActionsIcon>

    <TweetItemActionsIcon color="red">
      <template v-slot:icon="{classes}">
        <HeartIcon :class="classes" />
      </template>

      <template v-slot:default>
        5
      </template>
    </TweetItemActionsIcon>

    <TweetItemActionsIcon color="blue">
      <template v-slot:icon="{classes}">
        <ArrowUpTrayIcon :class="classes" />
      </template>

      <template v-slot:default>
        5
      </template>
    </TweetItemActionsIcon>

  </div>
</template>