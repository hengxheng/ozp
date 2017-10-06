import React from "react";
import Category from "../src/js/components/category";
import SingleCategory from "../src/js/components/SingleCategory";

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
        expect(wrapper.find(`div#${ test_category_id }.single-category`)).to.have.length(1);
    });

    // it('should has product box', () => {
    //     expect(wrapper.find('div.productbox')).to.have.length(1);
    // });
    
});
