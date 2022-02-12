<template>
    <div class="card text-dark bg-light mb-3" style="max-width: 30rem;">
      <div class="card-header">{{ blog_data[$route.params.id].title }}</div>
      <div class="card-body">
        <h5 class="card-title">{{ blog_data[$route.params.id].content }}</h5>
        <p class="card-text">{{ blog_data[$route.params.id].date }}</p>
      </div>
    </div>
</template>

<script>

export default {
  name: 'Detail',
  props: {
    blog_data: Array,
  }
}
</script>

<style>
.bg-light {
  margin: auto;
}

</style>