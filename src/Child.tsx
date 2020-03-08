import React from 'react';
import './Child.css';

interface IProps {
    name: string;
}

class Child extends React.Component<IProps> {

    // the render method
    public render() {

        const name = this.props.name;

        // return the HTML
        return (
            <p>Hello {name}</p>
        );
    }
}


export default Child;
