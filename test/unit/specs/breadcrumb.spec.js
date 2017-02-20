import { createVM, destroyVM } from '../vm'

describe('Breadcrumb', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  it('create', done => {
    vm = createVM({
      template: `
          <r-breadcrumb separator="/" :items="[{link: 'javascript:;',text: '首页',disable: false},{link: 'javascript:;',text: '导航',disable: false}]"></r-breadcrumb>
      `
    }, true)

    vm.$nextTick( () => {
      expect(vm.$el.classList.contains('breadcrumb')).to.true
      expect(vm.$el.querySelectorAll('li').length).to.be.equal(2)
      done()
    })

  })



});