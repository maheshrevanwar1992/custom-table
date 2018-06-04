import React from 'react';
import HeaderCell from './HeaderCell';

export default class TableHeader extends React.PureComponent {

    render() {
        return (
            <div className='table-header-row row'>
                {
                    React.Children.map(this.props.children, (child) => {
                        if (child.type === HeaderCell) {
                            return <HeaderCell>{child.props.children}</HeaderCell>
                        }
                        return child;
                    })
                }
            </div>
        );
    }
}