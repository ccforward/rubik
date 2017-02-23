import { createComponent, createVM, destroyVM, fireEvent } from '../vm'
import Component from 'src/components/Dropdown'
const Dropdown = Component.Dropdown

describe('Dropdown', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  it('create', () => {
    Dropdown.props.id = 'id'
    vm = createComponent(Dropdown, true)
    expect(vm.$el.classList.contains('dropdown')).to.true

  })

  it('mouse show-hide', done => {
    vm = createVM({
      template: `
        <div>
          <r-btn class="green white-text" v-dropdown:dropdown>下拉菜单</r-btn>
          <r-dropdown id="dropdown" right hover>
            <li><a class="dropdown-item" href="#">吃饭</a></li>
            <li><a class="dropdown-item" href="#">睡觉</a></li>
          </r-dropdown>
        </div>
      `
    }, true)

    const btn = vm.$children[0].$el
    const dropdown = vm.$children[1].$el
    fireEvent(btn, 'mouseenter')

    vm.$nextTick( _ => {
        expect(dropdown.clientWidth > 0 && dropdown.clientHeight > 0).to.be.true
        fireEvent(document.querySelector('body'), 'click')
        setTimeout(() => {
          expect(dropdown.classList.contains('dropdown-open-from-right')).to.be.true
          destroyVM(vm)
          done()
        }, 200)
    })

  })

  it('click show-hide', done => {
    vm = createVM({
      template: `
        <div>
          <r-btn class="green white-text" v-dropdown:dropdown>下拉菜单</r-btn>
          <r-dropdown id="dropdown">
            <li><a class="dropdown-item" href="#">吃饭</a></li>
            <li><a class="dropdown-item" href="#">睡觉</a></li>
          </r-dropdown>
        </div>
      `
    }, true)


    const btn = vm.$children[0].$el
    const dropdown = vm.$children[1].$el

    fireEvent(btn, 'click')
    
    vm.$nextTick(()=>{
      expect(dropdown.clientWidth > 0 && dropdown.clientHeight > 0).to.be.true
      fireEvent(document.querySelector('body'), 'click')
      setTimeout(() => {
        expect(dropdown.classList.contains('dropdown-open-from-right')).to.be.false
        destroyVM(vm)
        done()
      }, 200)
    })

  })

});