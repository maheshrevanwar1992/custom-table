import React from 'react';

export default class Cell extends React.PureComponent {
    render() {
        return (
            <div className='table-cell cell'>{this.props.children}</div>
        );
    }
} 