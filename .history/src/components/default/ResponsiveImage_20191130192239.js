import React from 'react';
import PropTypes from 'pr'


export class ResponsiveImage extends React.Component {
    static PropTypes = {

    }
    render() {
        const {sourceMobile, altImage, sourceDesktop} = this.props;
        return (
            <picture>
                                        <img src={sourceMobile}
                                            alt={altImage}
                                        />   
                                        <source 
                                            srcSet={sourceDesktop}
                                            media="(min-width: 1440px)"
                                        /> 
                                    </picture>
        )
    }
};
