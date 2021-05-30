import * as React from 'react'
import {mount} from 'enzyme'
import 'jest-styled-components'
import {Popup} from '../src/components/navbar/Navbar'

describe('Popup/Dropdown', () => {
    it('should render correctly', function () {
        const wrap = mount(<Popup/>)
        expect(wrap.find('div')).toHaveLength(1)
    })

    it('should render children correctly', function () {
        const wrap = mount(<Popup><h2>testing children</h2></Popup>)
        expect(wrap.exists('h2')).toEqual(true)
    })

    it('should display block with display block prop', function () {
        const wrap = mount(<Popup display={"block"}/>)
        expect(wrap).toHaveStyleRule('display', 'block')
    })

    it('should display none with display none prop', function () {
        const wrap = mount(<Popup display={"none"}/>)
        expect(wrap).toHaveStyleRule('display', 'none')
    })

})