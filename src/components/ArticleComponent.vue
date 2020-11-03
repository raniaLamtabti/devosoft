<template>
  <div class="article">
    <img class="article-image" :src="picture_src" alt="" />
    <h1>{{ titel }}</h1>
    <p>
      {{ brief }}
    </p>
    <a href=""
      >Plus
      <img class="plus-icone" src="../assets/images/right-arrow.svg" alt=""
    /></a>
  </div>
</template>

<script>
export default {
  name: "ArticleComponent",
  props: {
    picture_src: String,
    titel: String,
    brief: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/sass/_main.scss";
.article {
  text-decoration: none;
  color: #fff;
  text-align: center;
  background-color: #c4c4c4;
  border-radius: 20px;
  color: black;
  h1 {
    font-family: $font-one;
    margin: 10px;
  }
  p {
    font-family: $font-two;
    margin: 10px;
    font-size: 20px;
    line-height: 120%;
  }
  .article-image {
    overflow: hidden;
    width: 100%;
    height: 180px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
  a {
    float: right;
    display: flex;
    align-items: center;
    font-size: 20px;
    color: $color-light-blue;
    font-family: $font-two;
    text-decoration: none;
    margin-right: 20px;
    .plus-icone {
      height: 30px;
      margin-left: 5px;
    }
  }
}
</style>
