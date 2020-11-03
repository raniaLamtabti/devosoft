<template>
  <div class="pricing">
    <div class="categorie">
      <h1>Web Development</h1>
      <div class="packs">
        <PackComponent
          v-for="pack in packs"
          :key="pack.id"
          :pack="pack"
          v-bind:cat="1"
        />
      </div>
    </div>
    <div class="categorie">
      <h1>Mobile Development</h1>
      <div class="packs">
        <PackComponent
          v-for="pack in packs"
          :key="pack.id"
          :pack="pack"
          v-bind:cat="2"
        />
      </div>
    </div>
    <div class="categorie">
      <h1>Graphic Design</h1>
      <div class="packs">
        <PackComponent
          v-for="pack in packs"
          :key="pack.id"
          :pack="pack"
          v-bind:cat="3"
        />
      </div>
    </div>
    <div class="categorie">
      <h1>Web Marketing</h1>
      <div class="packs">
        <PackComponent
          v-for="pack in packs"
          :key="pack.id"
          :pack="pack"
          v-bind:cat="4"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PackComponent from '@/components/PackComponent.vue'
import axios from 'axios'

export default {
  name: 'Pricing',
  components: {
    PackComponent
  },
  data() {
    return {
      packs: []
    }
  },
  created() {
    axios
      .get('http://localhost:3000/pack')
      .then(response => {
        this.packs = response.data
      })
      .catch(error => {
        console.log('There was an error:' + error.response)
      })
  }
}
</script>

<style scoped lang="scss">
@import '../assets/sass/_main.scss';
.pricing {
  .categorie {
    background-color: $color-dark-blue;
    color: #fff;
    margin: 6%;
    padding: 1% 3%;
    border-radius: 20px;
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.25);
    h1 {
      font-family: $font-one;
      font-size: 38px;
    }
    .packs {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      grid-column-gap: 50px;
      grid-row-gap: 20px;
    }
  }
}
</style>
