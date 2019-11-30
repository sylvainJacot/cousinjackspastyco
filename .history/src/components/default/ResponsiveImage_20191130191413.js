import React from 'react';


export class ResponsiveImage extends React.Component {
    render() {
        return (
            <picture>
                                        <source 
                                            srcSet={logoL}
                                            media="(min-width: 1440px)"
                                        />
                                        <img src={logoS}
                                            alt="Logo"
                                            srcSet={logoS}
                                        />    
                                    </picture>
        )
    }
}
