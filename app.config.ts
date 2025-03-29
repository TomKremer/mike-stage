export default defineAppConfig({
  uiPro: {
    contentToc: {
      slots: {
        root: "sticky top-0 bg-(--ui-bg)/75 lg:bg-[initial] backdrop-blur -mx-4 px-4 sm:px-6 sm:-mx-6 overflow-y-auto max-h-[calc(100vh-var(--ui-header-height))]",
      },
    },
  },
});
