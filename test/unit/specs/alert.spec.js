import { createTest, createVue, destroyVM } from '../util'
import Comp from 'src/components/Alert'

debugger
describe('Alert', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Comp.Alert, {
      info: true
    }, true);

    expect(vm.$el.classList.contains('alert')).to.true;
  });
});