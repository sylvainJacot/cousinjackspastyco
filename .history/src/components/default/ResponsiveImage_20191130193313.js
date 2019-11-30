import React from 'react';
import PropTypes from 'prop-types';


export class ResponsiveImage extends React.Component {
    static propTypes = {
        sourceMobile: PropTypes.string,
        altImage: PropTypes.string,
        sourceDesktop: PropTypes.string,
        sizeScreen:PropTypes.number
    }
    render() {
        const {sourceMobile, altImage, sourceDesktop, sizeScreen} = this.props;
        return (
            <picture>                                        
                <source 
                    srcSet={sourceDesktop}
                    media={"(min-width: " + sizeScreen + "px)"
                /> 
                <img 
                    src={sourceMobile}
                    alt={altImage}
                    srcSet={sourceMobile}
                />   
            </picture>
        )
    }
};
