<template>
  <div id="app" class="wrapper">
    <div class="logo">
      <img src="./assets/rubik-256.png" :class="loaded && loadClass">
    </div>
    <p class="ui-name">
      <i>R</i><i>U</i><i>B</i><i>I</i><i>K</i> <i>U</i><i>I</i>
    </p>
    <r-row class="wrapper-container">
      <r-col xs2 class="wrapper-navigate">
        <Navigator />
      </r-col>
      <r-col xs10>
        <transition name="fade" mode="out-in">
          <router-view class="wrapper-content"></router-view>
        </transition>
      </r-col>
    </r-row>
  </div>
</template>

<script>
import Navigator from './components/Navigator.vue'
import Markup from './components/Markup.vue'

export default {
  name: 'app',
  data() {
    return {
      loaded: false,
      loadClass: 'load'
    }
  },
  components: {
    Navigator,
    Markup
  },
  mounted(){
    this.$rubik.init()
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
    .logo {
      margin 10px auto
      height 80px
      text-align center
      img {
        width 80px
        transition all .7s cubic-bezier(0, 0.51, 0.69, 1.15)
        transform rotate(0) scale(10)
        transform-origin center center
        opacity 0
        &.load {
          transform rotate(1080deg) scale(1)
          opacity 1
        }
      }
    }
    .ui-name {
      font-size 2.2rem
      text-align center
      i {
        font-style normal
        &:nth-child(1){
          color #f06
        }
        &:nth-child(2){
          color #0089ce
        }
        &:nth-child(3){
          color #f1d800
        }
        &:nth-child(4){
          color #00d39a
        }
        &:nth-child(5){
          color #94e827
        }
        
      }
    }
    .wrapper-container {
      background #fcfcfc
      width 90%
      margin 10px auto 20px
      border-radius 6px
      box-shadow 0 1px 1px 0 rgba(0,0,0,.1)
      overflow hidden
    }

    .wrapper-content {
      padding 20px
      .demo-link {
        font-size 1rem
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
        background #e1e1e1
        font-size 1rem
        transition all .5s ease
        &:hover {
          box-shadow 0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12), 0 3px 5px -1px rgba(0,0,0,0.3)
        }
      }
    }
  }

  @media (max-width: 600px) {
    .wrapper {
      .logo {
        margin 10px 0
        height 40px
        img {
          width 40px
        }
      }
      .ui-name {
        font-size 1.7rem
      }
      .wrapper-container {
        width 98%
        margin 15px 0 10px
      }
      .wrapper-navigate {
        li {
          text-align center
          div {
            font-size 13.5px
            text-align left
          }
          a {
            padding-left 5px
            font-size 12px
            .icon {
              margin auto
              width 20px
            }
            span {
              display none
            }
          }
        }
      }
      
    }
  }
</style>
