/// <reference types = "cypress"/>
import demoClass from './test_demo_0'

it('demo', () => {
    let s = new demoClass()
    s.visiteSite()
})
