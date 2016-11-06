import React from 'react';

export const CheckBox = (props) => (
    <label className="label-checkbox item-content">
        <input type="checkbox" name="my-checkbox" value="Books" checked="checked" />
        <div className="item-media">
            <i className="icon icon-form-checkbox"></i>
        </div>
        <div className="item-inner">
            <div className="item-title">Books</div>
        </div>
    </label>
);
