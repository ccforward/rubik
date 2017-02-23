import { fireEvent, createVM, destroyVM } from '../vm'

describe('Toast', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  it('create', done => {
    vm = createVM({
      template: `<r-btn info @click.native="toast(['bottom info', 'bottom'])">bottom</r-btn>`,
      methods: {
        toast (data) {
          this.$rubik.toast.fire(...data)
        }
      }
    }, true)

    vm.$nextTick( _ => {
      fireEvent(vm.$el, 'click')
      setTimeout( _ => {
        expect(document.querySelector('.toast').classList.contains('toast-bottom')).to.be.true
        expect(document.querySelector('.toast-content-active').innerHTML).to.be.equal('bottom info')
        done()
      }, 100)
    })
  })

  it('click 3 times', done => {
    vm = createVM({
      template: `<r-btn @click.native="toast(['top 3', 'top'])">top</r-btn>`,
      methods: {
        toast (data) {
          this.$rubik.toast.fire(...data)
        }
      }
    }, true)

    vm.$nextTick( _ => {
      fireEvent(vm.$el, 'click')
      fireEvent(vm.$el, 'click')
      fireEvent(vm.$el, 'click')
      setTimeout( _ => {
        expect(document.querySelectorAll('.toast-top .toast-content').length).to.be.equal(3)
        done()
      }, 50)
    })
  })


  it('callback', done => {
    const callback = sinon.spy()
    vm = createVM({
      template: `<r-btn info @click.native="toast()">bottom</r-btn>`,
      methods: {
        toast (data) {
          this.$rubik.toast.fire('callback', 'top', 300, callback)
        }
      }
    }, true)

    vm.$nextTick( _ => {
      fireEvent(vm.$el, 'click')
      setTimeout( _ => {
        expect(callback.called).to.be.true
        done()
      }, 1000)
    })
  })

});