import { createComponent, createVM, destroyVM } from '../vm'
import Component from 'src/components/Pagination'
const Pagination = Component.Pagination

describe('Pagination', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  it('create', done => {
    vm = createComponent(Pagination, true)
    vm.total = 5
    vm.current = 2

    vm.$nextTick( _ => {
      expect(vm.$el.querySelectorAll('.pagination-item').length).to.be.equal(5)
      setTimeout( _ => {
        expect(vm.$el.querySelector('.pagination-item-active').innerHTML).to.be.equal('2')
        done()
      }, 1000)
    })
  })

  it('click', done => {
    const callback = sinon.spy()
    vm = createComponent(Pagination, true)
    vm.total = 100
    vm.current = 2
    vm.cb = callback

    vm.$nextTick( _ => {
      vm.$el.querySelectorAll('.pagination-item')[5].click()
      setTimeout( _ => {
        expect(callback.called).to.be.true
        expect(vm.$el.querySelectorAll('.pagination-item')[4].innerHTML).to.be.equal('99')
        expect(vm.$el.querySelectorAll('.pagination-nav')[1].classList.contains('pagination-nav-disabled')).to.be.true
        done()
      }, 500)
    })
  })

});