import React from 'react';

class Headers extends React.Component {

    render() {

        let style = {
                width: this.props.headerWidth
            },
            headers = [];

        this.props.data.forEach((category, index) => headers.push(<span className='header' style={style} key={index}>{category.category}</span>));

        return (
            <div className='headers' style={{color: "#9E8DD1"}}>
                {headers}
            </div>
        );
    }

};

export default Headers;
