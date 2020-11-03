<template>
  <div class="menu" id="menu">
    <div class="nav">
      <a class="nav-brand" to="/">
        <img src="../assets/images/logo-long-white.svg" alt="" />
      </a>
      <div class="nav-items" ref="items">
        <ul type="none">
          <li><router-link to="/">Accuiel</router-link></li>
          <li><router-link to="/agency">Agence</router-link></li>
          <!-- <li><router-link to="/pricing">Prix</router-link></li> -->
          <li><router-link to="/contact">Contact</router-link></li>
          <!-- <li><router-link to="/blog">Blog</router-link></li> -->
        </ul>
      </div>
    </div>
    <!-- <div class="lang">
      <select class="">
        <option value="" class="selected-lang">
          <li><img src="../assets/images/france.svg" alt=""></li>
        </option>
      </select>
    </div> -->
    <div class="menu-btn" ref="nav">
      <div id="burger" class="menu-btn__burger" v-on:click="makeRed"></div>
    </div>
    <!-- <Slide>
      <ul type="none">
          <li><router-link to="/">Accuiel</router-link></li>
          <li><router-link to="/agency">Agence</router-link></li>
          <li><router-link to="/pricing">Prix</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
          <li><router-link to="/blog">Blog</router-link></li>
        </ul>
    </Slide> -->
  </div>
</template>
<script>
export default {
  methods: {
    makeRed: function() {
      const burger = this.$refs.nav.classList;
      burger.contains("open") ? burger.remove("open") : burger.add("open");
      const items = this.$refs.items.classList;
      items.contains("nav-items-show")
        ? items.remove("nav-items-show")
        : items.add("nav-items-show");
    }
  }
};
</script>
<style lang="scss">
@import "../assets/sass/_main.scss";

.menu {
  display: flex;
  justify-content: space-between;
  padding: 0px 6%;
  align-items: center;
  .nav {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .nav-brand {
      width: 140px;
    }
    .nav-items {
      ul {
        display: flex;
        margin: 0;
        margin-bottom: -10px;
        li {
          padding: 0px 20px;
          font-family: $font-one;
          color: $color-dark-blue;
          font-weight: 500;
          color: #e8e8e8;
          a {
            text-decoration: none;
            font-family: $font-one;
            color: $color-dark-blue;
            font-weight: 500;
            color: #e8e8e8;
            font-size: 20px;
          }
        }
        .dropdown-li {
          position: relative;
          .dropspan {
            .dropdown {
              background-color: #fff;
              padding: 0;
              position: absolute;
              top: calc(100% + 30px);
              left: -33%;
              transform: translateX(-50%);
              display: flex;
              width: 150px;
              flex-flow: wrap;
              border-radius: 5px;
              max-height: 500px;
              opacity: 0;
              pointer-events: none;
              transform: translateY(-10px);
              transition: opacity 300ms linear, max-height 500ms linear;
              li {
                padding: 10px 20px;
                display: flex;
                justify-content: center;
                width: 100%;
                a {
                  color: $color-light-blue;
                }
                &:hover {
                  background-color: $color-light-blue;
                  border-radius: 5px;
                  a {
                    color: #e8e8e8;
                  }
                }
              }
              span {
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                top: -30px;
                font-size: 47px;
                color: #fff;
                z-index: -1;
              }
            }
            &:focus .dropdown {
              opacity: 1;
              pointer-events: all;
              transform: translateY(0);
              top: calc(100% + 18px);
            }
          }
        }
      }
    }
  }
  .lang {
    transform: translateX(100%);
    .selected-lang {
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      line-height: 2;
      width: 80px;
      // &:before{
      //   content: '';
      //   display: block;
      //   width: 32px;
      //   height: 32px;
      //   background-image: url("https://www.countryflags.io/fr/flat/32.png");
      // }
    }
  }
  .menu-btn {
    margin-top: 40px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    transition: all 0.5s ease-in-out;
    display: none;
  }
  .menu-btn__burger {
    width: 20px;
    height: 3px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 5px rgba(255, 101, 37, 0.2);
    transition: all 0.5s ease-in-out;
  }
  .menu-btn__burger::before,
  .menu-btn__burger::after {
    content: "";
    position: absolute;
    width: 30px;
    height: 3px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
    transition: all 0.5s ease-in-out;
  }
  .menu-btn__burger::before {
    transform: translateY(-8px);
  }
  .menu-btn__burger::after {
    transform: translateY(8px);
  }
  /* ANIMATION */
  .menu-btn.open .menu-btn__burger {
    transform: translateX(-50px);
    background: transparent;
    box-shadow: none;
  }
  .menu-btn.open .menu-btn__burger::before {
    transform: rotate(45deg) translate(35px, -35px);
  }
  .menu-btn.open .menu-btn__burger::after {
    transform: rotate(-45deg) translate(35px, 35px);
  }

  @media screen and (max-width: 768px) {
    .menu-btn {
      display: block;
    }
    .lang {
      display: none;
    }
    .nav-items {
      position: absolute;
      top: 60px;
      width: 100%;
      height: calc(100vh - 60px);
      background: $color-light-gradient;
      transform: translateX(100%);
      transition: transform 2s ease-in-out;
      ul {
        padding: 0;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        :nth-child(1) {
          transform: translateX(200%);
          transition: transform 2s ease-in-out .8s;
        }
        :nth-child(2) {
          transform: translateX(200%);
          transition: transform 2s ease-in-out 1.2s;
        }
        :nth-child(3) {
          transform: translateX(250%);
          transition: transform 2s ease-in-out 1.6s;
        }
        :nth-child(4) {
          transform: translateX(200%);
          transition: transform 2s ease-in-out 2s;
        }
        // :nth-child(5) {
        //   transform: translateX(200%);
        //   transition: transform 2s ease-in-out 6s;
        // }
        // :nth-child(6) {
        //   transform: translateX(300%);
        //   transition: transform 2s ease-in-out 7s;
        // }
        li {
          font-size: 25px;
        }
      }
      .dropdown-li {
        display: none;
        pointer-events: none;
      }
      .dropdown-li-mobile {
        display: block !important;
        text-align: center;
        button {
          background: none;
          border: none;
          cursor: pointer;
          text-decoration: none;
          color: #e8e8e8;
          overflow: hidden;
          outline: none;
        }
        .dropdown-mobile {
          top: 90px;
          width: 100%;
          transform: translateY(-100px);
          pointer-events: none;
          display: none;
          transition: all 2s ease-in-out;
          li {
            a {
              color: $color-dark-blue !important;
            }
          }
        }
      }
    }
    .nav-items-show {
      left: 0;
      transform: translateX(0%);
      ul {
        :nth-child(1) {
          transform: translateX(0%);
        }
        :nth-child(2) {
          transform: translateX(0%);
        }
        :nth-child(3) {
          transform: translateX(0%);
        }
        :nth-child(4) {
          transform: translateX(0%);
        }
        :nth-child(5) {
          transform: translateX(0%);
        }
        :nth-child(6) {
          transform: translateX(0%);
        }
      }
    }

    .dropdown-mobile-toggle {
      transform: translateY(0);
      display: block;
      cursor: pointer;
    }
    .dropdown-toggle {
      display: none;
    }
  }
  @media screen and (max-width: 768px) {
    .menu-btn {
      display: block;
    }
    .menu {
      margin-top: -20px;
    }
    .lang {
      display: none;
    }
  }
}
</style>
