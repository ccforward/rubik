<template>
  <ul class="pagination" :class="clazz">
    <li>
      <!-- <a class="pagination-nav" href="#" :class="{ 'pagination-nav-disabled': current === 1 }" @click.prevent="current = current - 1"> -->
      <a class="pagination-nav" href="#" :class="{ 'pagination-nav-disabled': current === 1 }" @click.prevent="fn(current-1)">
        <r-icon>chevron_left</r-icon>
      </a>
    </li>
    <li v-for="p in pages">
      <!-- <a class="pagination-item" v-if="!isNaN(p)" href="#" :class="{ 'pagination-item-active': p === sel }" @click.prevent="current = p" v-text="p"></a> -->
      <a class="pagination-item" v-if="!isNaN(p)" href="#" :class="{ 'pagination-item-active': p === sel }" @click.prevent="fn(p)" v-text="p"></a>
      <span class="pagination-dots" v-else v-text="p"></span>
    </li>
    <li>
      <!-- <a class="pagination-nav" href="#" :class="{ 'pagination-nav-disabled': current === total }" @click.prevent="current = current + 1"> -->
      <a class="pagination-nav" href="#" :class="{ 'pagination-nav-disabled': current === total }" @click.prevent="fn(current + 1)">
        <r-icon>chevron_right</r-icon>
      </a>
    </li>
  </ul>
</template>


<script>
  export default {
    name: 'pagination',
    
    data () {
      return {
        sel: null,
        current: this.cur
      }
    },

    props: {
      total: {
        type: Number,
        default: 0
      },

      cur: {
        type: Number,
        default: 1
      },

      cb:{
        type: Function
      },

      round: Boolean,
    },

    watch: {
      current () {
        this.init()
      }
    },

    computed: {

      clazz () {
        return {
          'pagination-round': this.round
        }
      },

      pages () {
        if (this.total <= 5) {
          return this.range(1, this.total)
        }

        let min = this.current - 3
        min = min > 0 ? min : 1

        let max = min + 6
        max = max <= this.total ? max : this.total

        if (max === this.total) {
          min = this.total - 6
        }

        let range = this.range(min, max)

        if (this.current >= 4 && this.total > 6) {
          range.splice(0, 2, 1, '...')
        }

        if (this.current + 3 < this.total && this.total > 6) {
          range.splice(range.length - 2, 2, '...', this.total)
        }

        return range
      }
    },

    mounted () {
      this.init()
    },

    methods: {
      init () {
        this.sel = null
        setTimeout(() => this.sel = this.current, 80)
      },

      fn (p) {
        this.current = p
        this.cb(p)
      },

      range (from, to) {
        let range = []

        from = from > 0 ? from : 1

        for (let i = from; i <= to; i++) {
          range.push(i)
        }

        return range
      }
    }
  }
</script>