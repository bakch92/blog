<template>
<div>
  <div v-for="(blog_one_data) in blog_data" :key="blog_one_data">
    <h5>{{blog_one_data.title}}</h5>
    <p>{{blog_one_data.date}}</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'List',
  props: {
    blog_data : Array,
  }
}
</script>

<style>

</style>