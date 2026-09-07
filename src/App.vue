<template>
  <v-app>
    <app-header />

    <v-main theme="light" class="bg-grey-lighten-4">
      <v-container>
        <RouterView />
      </v-container>
    </v-main>

    <app-footer />
  </v-app>
</template>

<script setup>
import { useCounterStore } from './stores/counter';

const counter = useCounterStore();
</script>