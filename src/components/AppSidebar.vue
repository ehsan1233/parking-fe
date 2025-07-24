<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

const navItems = [
  { key: 'home', to: '/', title: 'Home', icon: 'mdi-home' },
  { key: 'account', to: '/account', title: 'Account', icon: 'mdi-account' },
  { key: 'about', to: '/about', title: 'About', icon: 'mdi-information' },
];
</script>

<template>
  <v-navigation-drawer app permanent>
    <v-list nav dense>
      <v-list-item
        v-for="item in navItems"
        :key="item.key"
        :to="item.to"
        :active="route.path === item.to"
        :exact="true"
      >
        <template #prepend>
          <v-icon :color="route.path === item.to ? 'primary' : undefined">
            {{ item.icon }}
          </v-icon>
        </template>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped></style>
