import { createTest, createVm, destroyVM } from '../vm'
import Component from 'src/components/Alert'
const Alert = Component.Alert

describe('Alert', () => {
  let vm
  afterEach(() => {
    destroyVM(vm);
  })

  it('create', () => {
    vm = createTest(Alert, {
      info: true
    }, true);

    expect(vm.$el.classList.contains('alert')).to.true
  })

  it('close', () => {
    vm = createVm({
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