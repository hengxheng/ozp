import React from "react";

import Category from "./category";
import SingleCategory from "./singleCategory";
import chai from 'chai';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

const expect = chai.expect;

configure({ adapter: new Adapter() });

describe('Category page', () => {
    const wrapper = shallow(<Category />);

    it('should be the category list page', () => {
        expect(wrapper.type()).to.eql('div');
        expect(wrapper.find('div.category-page')).to.have.length(1);
    });
});

describe('Single category page', () => {
    let test_category_id = "139732";
    const wrapper = mount(<SingleCategory match = { {params:{ id: test_category_id } } }/>);

    it('should be the category single page', () => {
        expect(wrapper.find('div.single-category')).to.have.length(1);
        expect(wrapper.find(`div#cat-${test_category_id}`)).to.have.length(1);
    });
    
});
