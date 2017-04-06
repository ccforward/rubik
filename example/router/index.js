import Vue from 'vue'
import Router from 'vue-router'
import About from '../views/About.vue'

Vue.use(Router)

const router = new Router({
  routes:[
    { name: 'home', path: '/', component: About},
    { name: 'about', path: '/about', component: About},
    {
      name: 'color',
      path: '/color',
      component: resolve => {
        require.ensure([], require => {
          resolve(require('../views/Color.vue'));
        })
      }
    },
    {
      name: 'grid',
      path: '/grid',
      component: resolve => {
        require.ensure([], require => {
          resolve(require('../views/Grid.vue'))
        })
      }
    },
    {
      name: 'helper',
      path: '/helper',
      component: resolve => {
        require.ensure([], require => {
          resolve(require('../views/Helper.vue'))
        })
      }
    },
    {
      name: 'alert',
      path: '/alert',
      component: resolve => {
        require.ensure([], require => {
          resolve(require('../views/Alert.vue'))
        })
      }
    },
    {
      name: 'shadow',
      path: '/shadow',
      component: resolve => {
        require.ensure([], require => {
          resolve(require('../views/Shadow.vue'))
        })
      }
    },
    {
      name: 'table',
      path: '/table',
      component: resolve => {
        require.ensure([], require => {
          resolve(require('../views/Table.vue'))
        })
      }
    },
    {
      name: 'breadcrumb',
      path: '/breadcrumb',
      component: resolve => {
        require.ensure([], require => {
          resolve(require('../views/Breadcrumb.vue'))
        })
      }
    },
    {
      name: 'card',
      path: '/card',
      component: resolve => {
        require.ensure([], require => {
          resolve(require('../views/Card.vue'))
        })
      }
    },
    {
      name: 'slider',
      path: '/slider',
      component: resolve => {
        require.ensure([], require => {
          resolve(require('../views/Slider.vue'))
        })
      }
    },
    {
      name: 'dropdown',
      path: '/dropdown',
      component: resolve => {
        require.ensure([], require => {
          resolve(require('../views/Dropdown.vue'))
        })
      }
    },
    {
      name: 'tab',
      path: '/tab',
      component: resolve => {
        require.ensure([], require => {
          resolve(require('../views/Tab.vue'))
        })
      }
    },
    {
      name: 'modal',
      path: '/modal',
      component: resolve => {
        require.ensure([], require => {
          resolve(require('../views/Modal.vue'))
        })
      }
    },
    {
      name: 'tag',
      path: '/tag',
      component: resolve => {
        require.ensure([], require => {
          resolve(require('../views/Tag.vue'))
        })
      }
    },
    {
      name: 'icon',
      path: '/icon',
      component: resolve => {
        require.ensure([], require => {
          resolve(require('../views/Icon.vue'))
        })
      }
    },
    {
      name: 'button',
      path: '/button',
      component: resolve => {
        require.ensure([], require => {
          resolve(require('../views/Button.vue'))
        })
      }
    },
    {
      name: 'sidenav',
      path: '/sidenav',
      component: resolve => {
        require.ensure([], require => {
          resolve(require('../views/Sidenav.vue'))
        })
      }
    },
    {
      name: 'pagination',
      path: '/pagination',
      component: resolve => {
        require.ensure([], require => {
          resolve(require('../views/Pagination.vue'))
        })
      }
    },
    {
      name: 'input',
      path: '/input',
      component: resolve => {
        require.ensure([], require => {
          resolve(require('../views/Input.vue'))
        })
      }
    },
    {
      name: 'radio',
      path: '/radio',
      component: resolve => {
        require.ensure([], require => {
          resolve(require('../views/Radio.vue'))
        })
      }
    },
    {
      name: 'checkbox',
      path: '/checkbox',
      component: resolve => {
        require.ensure([], require => {
          resolve(require('../views/Checkbox.vue'))
        })
      }
    },
    {
      name: 'select',
      path: '/select',
      component: resolve => {
        require.ensure([], require => {
          resolve(require('../views/Select.vue'))
        })
      }
    },
    {
      name: 'file',
      path: '/file',
      component: resolve => {
        require.ensure([], require => {
          resolve(require('../views/File.vue'))
        })
      }
    },
    {
      name: 'badge',
      path: '/badge',
      component: resolve => {
        require.ensure([], require => {
          resolve(require('../views/Badge.vue'))
        })
      }
    },
    {
      name: 'tooltip',
      path: '/tooltip',
      component: resolve => {
        require.ensure([], require => {
          resolve(require('../views/Tooltip.vue'))
        })
      }
    },
    {
      name: 'toast',
      path: '/toast',
      component: resolve => {
        require.ensure([], require => {
          resolve(require('../views/Color.vue'))
        })
      }
    },
    {
      name: 'waves',
      path: '/waves',
      component: resolve => {
        require.ensure([], require => {
          resolve(require('../views/Waves.vue'))
        })
      }
    },
    {
      name: 'img-lazy',
      path: '/img-lazy',
      component: resolve => {
        require.ensure([], require => {
          resolve(require('../views/Lazy.vue'))
        })
      }
    },
    {
      name: 'loader',
      path: '/Loader',
      component: resolve => {
        require.ensure([], require => {
          resolve(require('../views/Loader.vue'))
        })
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  let top = document.body.scrollTop
  if(top > 0){
    const timer = setInterval(()=>{
      scrollTo(0, top)
      top -= 100
      if(top <= 0){
        scrollTo(0, 0)
        clearInterval(timer)
      }
    }, 20)
  }
  next()
})

export default router