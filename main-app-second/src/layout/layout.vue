<template>
  <div class="layout">
    <!--顶部导航-->
    <navBar></navBar>
    <div class="main">
      <!--左侧导航-->
      <sideBar></sideBar>
      <div class="right-main">
        <!--主主体-->
        <div class="content">
          <router-view v-slot="{ Component }">
            <transition
              name="el-fade-in"
              mode="out-in"
            >
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import navBar from './components/navBar.vue'
import sideBar from './components/sideBar.vue'
</script>

<style
  lang="scss"
  scoped
>
.layout {
  display: flex;
  flex-direction: column;

  .main {
    display: flex;
    height: calc(100vh - 60px);

    .right-main {
      background-color: #efefef;
      width: calc(100% - 200px);
      box-sizing: border-box;
      //overflow-y: scroll;
      display: flex;
      flex-direction: column;

      .alive-router-panel {
        @include boxShadow;
        @include vertical-center;
        height: 48px;
        background-color: white;
      }

      .content {
        box-sizing: border-box;
        height: 100%;
        margin: 20px;
        padding: 20px;
        width: calc(100% - 40px);
        background-color: white;
        overflow-y: auto;
        //box-shadow: 1px 2px 10px 0 rgba(0, 0, 0, .1);
        box-shadow: 0 2px 10px -5px rgba(0, 0, 0, 0.1);
      }
    }
  }
}
</style>
