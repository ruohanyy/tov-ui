import { mount } from '@vue/test-utils'
import { Button } from 'tov-ui'

describe('button', () => {
    it('should work', () => {
        const wrapper = mount(<Button type="primary">测试</Button>)
        const btnEl = wrapper.find('button')
        const hasPrimay = btnEl.element.classList.contains('tov-button--primary')
        expect(hasPrimay).toBe(true)
        wrapper.unmount()
    })

    //测试按钮大小
    it('size', () => {
        const wrapper = mount(<Button size="small">测试</Button>)
        const btnEl = wrapper.find('button')
        const hasPrimay = btnEl.element.classList.contains('tov-button-size--small')
        expect(hasPrimay).toBe(true)
        wrapper.unmount()
    })

    it('click', () => {
        let clickState = false
        const handleClick = () => {
            clickState = true
        }
        const wrapper = mount(<Button onClick={handleClick}>测试</Button>)
        wrapper.trigger('click')
        expect(clickState).toBe(true)
        wrapper.unmount()
    })
})