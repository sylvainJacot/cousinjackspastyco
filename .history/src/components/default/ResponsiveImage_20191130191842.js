import React from 'react';
import logoL from '../../assets/svg/CousinJacks_Logo_Horizontal.svg';
import logoS from '../../assets/svg/CousinJacks_Logo.Vertical.svg';


export class ResponsiveImage extends React.Component {
    render() {
        const {sour}
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
}
