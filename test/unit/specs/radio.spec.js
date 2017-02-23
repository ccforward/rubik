import { createComponent, createVM, destroyVM, fireEvent } from '../vm'
import Component from 'src/components/Form'
const Radio = Component.Radio

describe('Radio', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  it('create', done => {
    vm = createComponent(Radio, true)
    vm.label = 'label txt'

    expect(vm.$el.querySelector('input').getAttribute('type')).to.equal('radio')
    
    vm.$nextTick(_ => {
      expect(vm.$el.querySelector('label').innerHTML).to.be.equal('label txt')
      done()
    })
  })


  it('click', done => {
    vm = createVM({
      template: `
        <div>
          <r-radio id="color-b" name="color" value="black" v-model="color" label="B"></r-radio>
          <r-radio id="color-w" name="color" value="white" v-model="color" label="W"></r-radio>
        </div>
      `,
      data(){
        return {
          color: 'black',
        }
      }
    }, true)

    
    vm.$nextTick(_ => {
      const radio1 = vm.$children[0].$el.querySelector('input')
      const radio2 = vm.$children[1].$el.querySelector('input')

      expect(radio1.checked).to.be.true
      expect(radio2.checked).to.be.false

      fireEvent(radio2, 'click')

      setTimeout( _ => {        
        expect(vm.$data.color).to.be.equal('white')
        expect(radio1.checked).to.be.false
        expect(radio2.checked).to.be.true
        done()
      }, 100)

    })
  })

});