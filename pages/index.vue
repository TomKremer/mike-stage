<script setup lang="ts">
const { data: pages } = await useAsyncData(() => queryCollection("content").all());

if (!pages.value) {
  throw createError({ statusCode: 404, statusMessage: "Content not found", fatal: true });
}
</script>

<template>
  <UPage v-if="pages">
    <!-- <pre>{{ pages }}</pre> -->
    <UPageBody>
      <UPageHero
        headline="Praktikum"
        title="Hallo Mike"
        description="Hier kannst du die Grundlagen lernen, die wir in der Digitalagentur täglich nutzen. Du wirst etwas über die Geschichte des Internets und Kerntechnologien lernen. Am Ende wirst du deinen eigenen Lebenslauf programmieren und gestalten."
        orientation="horizontal">
        <nuxt-img src="img/mike-hero.png" alt="Mike" width="400" height="400" class="rounded" />
      </UPageHero>
      <UBlogPosts>
        <UBlogPost
          v-for="page in pages"
          :key="page.id"
          :image="page.image"
          :alt="page.title"
          :title="page.title"
          :badge="page.category"
          :description="page.description"
          :to="`/page/${page.slug}`" />
      </UBlogPosts>
    </UPageBody>
  </UPage>
</template>
