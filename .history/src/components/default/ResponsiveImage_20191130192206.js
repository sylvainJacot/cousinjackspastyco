import React from 'react';


export class ResponsiveImage extends React.Component {
    staticP
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
