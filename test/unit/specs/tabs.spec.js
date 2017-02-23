import { createVM, destroyVM } from '../vm'

describe('Tabs', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })
  const template = `
    <r-tabs> 
      <r-tabs-nav >
        <r-tab href="tab1" class="white-after" selected>Tab 1</r-tab>
        <r-tab href="tab2" class="white-after">Tab 2</r-tab>
        <r-tab href="tab3" class="white-after">Tab 3</r-tab>
      </r-tabs-nav>

      <r-tabs-content class="white">
        <r-tabs-item id="tab1">
          <p>txt1</p>
        </r-tabs-item>
        <r-tabs-item id="tab2">txt2</r-tabs-item>
        <r-tabs-item id="tab3">
          <p>txt3</p>
        </r-tabs-item>
      </r-tabs-content>
    </r-tabs>
  `

  it('create', done => {
    vm = createVM({
      template: template
    }, true)

    vm.$nextTick(()=>{
      
      expect(vm.$el.querySelectorAll('.tabs-tab').length).to.be.equal(3)
      expect(vm.$el.querySelectorAll('.tabs-item').length).to.be.equal(3)
      done()
    })
  })

  it('click-show-hide', done => {
    vm = createVM({
      template: template
    }, true)

    const tab2 = vm.$el.querySelectorAll('.tabs-tab')[1]
    const item1 = vm.$el.querySelectorAll('.tabs-item')[0]
    const item2 = vm.$el.querySelectorAll('.tabs-item')[1]

    vm.$nextTick(()=>{
      setTimeout(() => {
        tab2.click()
        vm.$nextTick(()=>{
          setTimeout(()=>{
            expect(item1.style.display).to.be.equal('none')
            expect(item2.style.display).to.be.equal('')
            done()
          }, 500)
        })
      }, 50)
    })

  })

});