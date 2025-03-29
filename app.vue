<script setup lang="ts">
// const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('history'))

// provide('navigation', navigation)
useHead({
  title: 'Mike Praktikum',
  meta: [
    { name: 'description', content: 'Mike Praktikum - Digitalagentur für Webentwicklung und Design' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#ffffff' }
  ]
})
</script>

<template>
  <NuxtRouteAnnouncer />
  <UApp>
    <UContainer>
    <NuxtPage />
  </UContainer>
  </UApp>
</template>
