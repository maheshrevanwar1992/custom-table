import React from 'react';
import Cell from './Cell';

export default class Row extends React.PureComponent {
    render() {
        return (
            <div className='table-row row'>
                {
                    React.Children.map(this.props.children, (child) => {
                        if (child.type === Cell) {
                            return (<Cell>{child.props.children}</Cell>);
                        }
                        return child;
                    })
                }
            </div>
        );
    }
} 