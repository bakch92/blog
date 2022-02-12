<template>
<div>
  <div v-for="(blog_one_data) in blog_data" :key="blog_one_data">
    <a @click="click_alert(blog_one_data.number)">{{blog_one_data.title}}</a>
    <p>{{blog_one_data.date}}</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'List',
  props: {
    blog_data : Array,
  },
  methods: {
    click_alert(number) {
      location.href = "/detail/" + number;
    }
  },
}
</script>

<style>

</style>