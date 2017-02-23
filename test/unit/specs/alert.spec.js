import { createComponent, createVM, destroyVM } from '../vm'
import Component from 'src/components/Alert'
const Alert = Component.Alert

describe('Alert', () => {
  let vm
  afterEach(() => {
    destroyVM(vm);
  })

  it('create', done => {
    vm = createComponent(Alert, true)

    vm.info = true

    expect(vm.$el.classList.contains('alert')).to.true
    
    vm.$nextTick(() => {
      expect(vm.$el.classList.contains('alert-info')).to.true
      done()
    })
  })

  it('close', () => {
    vm = createVM({
      template: `
        <div class="alert-container">
          <r-alert close >close</r-alert>
        </div>
      `
    }, true)
    
    expect(vm.$children[0].$data.show.default).to.true
    vm.$el.querySelector('.alert-close-icon').click()
    expect(vm.$children[0].$data.show).to.false
  });

});