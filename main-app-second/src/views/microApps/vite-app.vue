<template>
  <div>
    <micro-app
      name="appname-vite"
      :url="url"
      inline
      disablesandbox
    ></micro-app>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Vite',
  data() {
    return {
      url: `http://localhost:4007`
    }
  },
  methods: {}
}
</script>

<style></style>
