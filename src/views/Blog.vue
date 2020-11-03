<template>
  <div class="blog">
    <ArticleComponent
      v-bind:titel="'Article 1'"
      v-bind:brief="
        'Adipisci veritatis rerum cumque facere, voluptatibus quisquam consequuntur. rerum cumque facere, voluptatibus quisquam consequuntur.'
      "
      v-bind:picture_src="'../assets/images/104.jpg'"
    />
    <ArticleComponent
      v-bind:titel="'Article 2'"
      v-bind:brief="
        'Adipisci veritatis rerum cumque facere, voluptatibus quisquam consequuntur. rerum cumque facere, voluptatibus quisquam consequuntur.'
      "
      v-bind:picture_src="'../assets/images/download.jpg'"
    />
    <ArticleComponent
      v-bind:titel="'Article 2'"
      v-bind:brief="
        'Adipisci veritatis rerum cumque facere, voluptatibus quisquam consequuntur. rerum cumque facere, voluptatibus quisquam consequuntur.'
      "
      v-bind:picture_src="'../assets/images/2564.jpg'"
    />
    <ArticleComponent
      v-bind:titel="'Article 2'"
      v-bind:brief="
        'Adipisci veritatis rerum cumque facere, voluptatibus quisquam consequuntur. rerum cumque facere, voluptatibus quisquam consequuntur.'
      "
      v-bind:picture_src="'../assets/images/2564.jpg'"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import ArticleComponent from '@/components/ArticleComponent.vue'

export default {
  name: 'Blog',
  components: {
    ArticleComponent
  }
}
</script>

<style scoped lang="scss">
@import '../assets/sass/_main.scss';
.blog {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 50px;
  grid-row-gap: 20px;
  padding: 10%;
}
</style>
