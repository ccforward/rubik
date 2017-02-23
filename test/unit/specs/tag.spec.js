import { createComponent, createVM, destroyVM } from '../vm'
import Component from 'src/components/Tag'
const Tag = Component.Tag

describe('Tag', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  it('create', () => {
    vm = createComponent(Tag, true)
    expect(vm.$el.nodeName).to.be.equal('SPAN')
    expect(vm.$el.classList.contains('tag')).to.true
  })

  it('close', done => {
    vm = createVM({
      template: `
        <r-tag close>关闭标签</r-tag>
      `
    }, true)

    vm.$nextTick( () => {
      expect(vm.$el.querySelector('a').classList.contains('tag-close')).to.be.true
      vm.$el.querySelector('.tag-close').click()
      expect(vm.$children[0].$data.show).to.be.false
      done()
    })
  })

});