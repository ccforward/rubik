import { createComponent, createVM, destroyVM, fireEvent } from '../vm'
import Component from 'src/components/Form'
const Checkbox = Component.Checkbox

describe('Checkbox', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  it('create', done => {
    vm = createComponent(Checkbox, true)
    vm.label = 'label txt'

    expect(vm.$el.querySelector('input').getAttribute('type')).to.equal('checkbox')
    
    vm.$nextTick(_ => {
      expect(vm.$el.querySelector('label').innerHTML).to.be.equal('label txt')
      done()
    })
  })


  it('default value', done => {
    vm = createVM({
      template: `
        <div>
          <r-checkbox :selected="sel" :val="'r'"></r-checkbox>
          <r-checkbox :selected="sel" :val="'y'" checked="checked"></r-checkbox>
          <r-checkbox :selected="sel" :val="'b'"></r-checkbox>
        </div>
      `,
      data(){
        return {
          sel: ['r'],
        }
      }
    }, true)


    vm.$nextTick(_ => {
      expect(vm.$data.sel.indexOf('r') >=0 && vm.$data.sel.indexOf('y') >= 0).to.be.true
      done()
    })
  })


  it('select', done => {
    vm = createVM({
      template: `
        <div>
          <r-checkbox :selected="sel" :val="'r'"></r-checkbox>
          <r-checkbox :selected="sel" :val="'y'"></r-checkbox>
          <r-checkbox :selected="sel" :val="'b'"></r-checkbox>
        </div>
      `,
      data(){
        return {
          sel: ['r'],
        }
      }
    }, true)

    const c1 = vm.$children[0].$el.querySelector('input')
    const c2 = vm.$children[1].$el.querySelector('input')
    const c3 = vm.$children[2].$el.querySelector('input')

    vm.$nextTick(_ => {
      fireEvent(c1, 'click')
      fireEvent(c2, 'click')
      setTimeout( _ => {
        expect(vm.$data.sel.indexOf('r') < 0 && vm.$data.sel.indexOf('y') >= 0).to.be.true
        fireEvent(c2, 'click')
        fireEvent(c3, 'click')
        setTimeout( _ => {
          expect(vm.$data.sel.indexOf('y') < 0 && vm.$data.sel.indexOf('b') >= 0).to.be.true
          done()
        }, 100)
      }, 100)
    })
  })

});