<template>
  <div class="article">
    <img src="../assets/images/104.jpg" alt="" />
    <h1
      v-resize-text="{
        ratio: 1.3,
        minFontSize: '20px',
        maxFontSize: '44px',
        delay: 200
      }"
    >
      Article 1
    </h1>
    <p
      v-resize-text="{
        ratio: 1.5,
        minFontSize: '16px',
        maxFontSize: '30px',
        delay: 200
      }"
    >
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa quidem
      minima harum possimus obcaecati eius eos tempora illum! Itaque dolore
      velit vel vero? Numquam fugit, ex optio odit quas velit.
    </p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Article'
}
</script>

<style scoped lang="scss">
@import '../assets/sass/_main.scss';
.article {
  text-align: center;
  padding: 7%;
  color: #fff;
  img {
    width: 90%;
  }
  h1 {
    font-family: $font-one;
    font-weight: 700;
  }
  p {
    font-family: $font-two;
  }
}
</style>
