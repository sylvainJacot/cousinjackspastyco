import React from 'react';
import PropTypes from 'prop-types';


export class ResponsiveImage extends React.Component {
    static propTypes = {
        sourceMobile: PropTypes.string,
        altImage: PropTypes.string,
        sourceDesktop: PropTypes.string,
        breakPoint: PropTypes.number
    }
    render() {
        const {sourceMobile, altImage, sourceDesktop, breakPoint} = this.props;
        return (
            <picture {...props}>                                        
                <source 
                    srcSet={sourceDesktop}
                    media={"(min-width: " + breakPoint + "px)"}
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
