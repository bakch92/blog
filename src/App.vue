<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">블로그</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link active" aria-current="page">홈</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/list" class="nav-link">소개</router-link>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>

    <!--    <router-link to="/list">리스트페이지</router-link>-->
    <div class="mt-5">
      <router-view :blog_data="blog_data"></router-view>
    </div>
    <!--    <List :blog_data="blog_data" ></List>-->
  </div>
</template>

<script>
/*import List from './components/List';*/
import Data from "@/assets/data";
/*import Home from './components/Home.vue';*/
/*import Detail from './components/Detail.vue';*/

export default {
  name: 'App',
  components: {
    /*List,*/
    /*Detail,*/
    /*    Home,*/
  },
  data() {
    return {
      blog_data: [...Data],
    }
  },
  methods: {}
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
