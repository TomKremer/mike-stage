<script setup lang="ts">
const route = useRoute();
const { data: page } = await useAsyncData(() =>
  queryCollection("content").where("slug", "==", route.params.slug).first()
);
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: "Page not found", fatal: true });
}
</script>

<template>
  <UPage v-if="page">
    <UPageBody>
      <nuxt-img
        v-if="page?.image"
        :src="page.image"
        class="mb-4 w-auto lg:max-w-lg h-auto rounded-2xl"
        alt="Page Image"/>
      <ContentRenderer v-if="page" :value="page" />
      <div v-else>Home not found</div>
    </UPageBody>
    <template v-if="page?.body?.toc?.links?.length" #right>
      <UContentToc title="Auf dieser Seite" :links="page.body.toc.links" :highlight="true" />
    </template>
  </UPage>
</template>
