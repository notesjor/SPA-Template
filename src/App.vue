<template>
  <v-app>
    <v-main class="d-flex align-center justify-center bg-grey-lighten-4">
      <v-card width="400" class="pa-5 text-center" elevation="2">
        
        <!-- Eingebettetes SVG Icon -->
        <svg xmlns="http://w3.org" viewBox="0 0 24 24" width="64" height="64" class="mx-auto mb-4" fill="currentColor">
          <path d="M12 2L2 22h20L12 2zm0 3.99L19.53 19H4.47L12 5.99zM13 16h-2v2h2v-2zm0-6h-2v4h2v-4z"/>
        </svg>

        <v-card-title class="text-h5">Minimalist SPA</v-card-title>
        <v-card-text>Gebaut mit Bun, Vue 3 und Vuetify.</v-card-text>
        
        <v-card-actions>
          <v-btn color="primary" block @click="count++">
            Klicks: {{ count }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';
const count = ref(0);
</script>