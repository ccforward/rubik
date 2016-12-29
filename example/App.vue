<template>
  <div id="app" class="wrapper">
    <div class="logo">
      <img src="./assets/rubik-256.png" :class="loaded && loadClass">
    </div>
    <div class="wrapper-container">
      <div class="wrapper-navigate">
        <Navigator />
      </div>
      <transition name="fade" mode="out-in">
        <router-view class="view wrapper-content"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import Navigator from './components/Navigator.vue'

export default {
  name: 'app',
  data() {
    return {
      loaded: false,
      loadClass: 'load'
    }
  },
  components: {
    Navigator
  },
  mounted(){
    setTimeout(()=>{
      this.loaded = true
    }, 150)
  }
}
</script>

<style lang="stylus">
@import './style/common.styl'

.wrapper {
  background #eee
  padding 1px
}
.logo {
  margin 20px auto
  height 80px
  text-align center
  img {
    width 80px
    transition all .7s cubic-bezier(0, 0.51, 0.69, 1.15)
    transform rotate(0) scale(10)
    transform-origin center center
    opacity .1
    &.load {
      transform rotate(1080deg) scale(1)
      opacity 1
    }
  }
}
.wrapper-container {
  background #fff
  width 90%
  margin 30px auto 20px
  border-radius 6px
  box-shadow 0 1px 1px 0 rgba(0,0,0,.1)
  overflow hidden
}
.wrapper-navigate {
  float left
  flex 0 0 auto
  display block
  width 16.66666667%
}

.wrapper-content {
  float left
  flex 0 0 auto
  display block
  width 83.33333333%
  padding 20px 25px
  
  h1 {
    margin-bottom 15px
    font-size 2.2rem
  }
  h2 {
    font-size 1.8rem
    margin 15px 0
  }
  
  h3 {
    font-size 1.4rem
    margin 10px 0
  }
  a, p {
    font-size 1rem
  }
  a {
    color $txt-green
    &:hover {
      text-decoration underline
    }
  }
  table {
    margin-bottom 30px
  }
  code {
    width 100%
    margin-bottom 20px
    background #f7f7f7
    font-size 1rem
  }
}

@media (max-width: 600px) {
  .logo {
    margin 10px 0
    height 40px
    img {
      width 40px
    }
  }
  .wrapper-container {
    width 98%
    margin 15px 0 10px
  }
  .wrapper-navigate {
    li {
      text-align center
      div {
        font-size 14px
      }
      a {
        padding-left 5px
        font-size 12px
        .icon {
          width 20px
        }
        span {
          display none
        }
      }
    }
  }
}

</style>
