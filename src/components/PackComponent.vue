<template>
  <div v-if="pack.categorie === cat" class="pack">
    <h1>{{ pack.type }}</h1>
    <span>A partire de {{ pack.price }}</span>
    <p v-for="(element, index) in pack.elements" :key="index">
      {{ element.content }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'PackCompnent',
  props: {
    pack: Object,
    cat: Number
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/sass/_main.scss';
.pack {
  text-align: center;
  h1 {
    font-family: $font-two;
    font-size: 30px;
    color: $color-light-blue;
  }
  span {
    font-family: $font-one;
    font-size: 32px;
  }
  p {
    font-family: $font-two;
    font-size: 26px;
    color: rgb(194, 194, 194);
  }
}
</style>
