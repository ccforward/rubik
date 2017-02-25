import { fireEvent, createVM, destroyVM } from '../vm'

describe('Tooltip', () => {
  const txt = 'top tooltip'
  let vm
  afterEach(() => {
    destroyVM(vm)
  })


  it('create', done => {
    vm = createVM({
      template: `<div class="tt-top" v-tooltip:top="{ text: '${txt}' }">top</div>`
    }, true)

    vm.$nextTick( _ => {
      const tt = document.querySelector('.tt-top')

      expect(vm.$el.dataset.tooltip).to.be.equal(txt)
      done()
    })
  })

  it('mouse show-hide', done => {
    vm = createVM({
      template: `<div class="tt-left" v-tooltip:left="{ text: '123' }">left</div>`
    }, true)

    vm.$nextTick( _ => {
      const tt = document.querySelector('.tt-left')
      expect(getComputedStyle(tt, ':after').visibility).to.be.equal('hidden')
      fireEvent(vm.$el, 'mouseenter')
      setTimeout( _ => {
        expect(getComputedStyle(tt, ':after').visibility).to.not.equal('hidden')
      }, 300)
      done()
    })
  })

});