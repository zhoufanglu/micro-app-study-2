<template>
  <div class="main-app-nav-bar">nav-bar</div>
</template>

<script setup></script>

<style
  scoped
  lang="scss"
>
.main-app-nav-bar {
  font-size: 16px;
  height: 60px;
  @include vertical-center;
  justify-content: space-between;
  @include boxShadow;
  padding: 0 30px;
  background-color: $theme;
  color: white;
}
</style>
