import React from 'react';
import logoL from '../../assets/svg/CousinJacks_Logo_Horizontal.svg';
import logoS from '../../assets/svg/CousinJacks_Logo.Vertical.svg';


export class ResponsiveImage extends React.Component {
    render() {
        return (
            <picture>
                                        <img src={logoS}
                                            alt="Logo"
                                        />   
                                        <source 
                                            srcSet={logoL}
                                            media="(min-width: 1440px)"
                                        /> 
                                    </picture>
        )
    }
}
