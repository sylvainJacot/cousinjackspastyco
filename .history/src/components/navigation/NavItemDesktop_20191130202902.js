import React from 'react';
import PropTypes from 'prop-types'
import logoL from '../../assets/svg/CousinJacks_Logo_Horizontal.svg';
import logoS from '../../assets/svg/CousinJacks_Logo.Vertical.svg';



export class NavItemDesktop extends React.Component {
    render() {
        return (
            <Li key={listItem.id} margesLi={listItem.margesLi}>
                             <a href={listItem.href}>

                                 {listItem.image ?
                                   <ResponsiveImage
                                        sourceMobile={logoS}
                                        altImage='hello'
                                        sourceDesktop={logoL}
                                        breakPoint={sizes.desktopL}
                                   /> 
                                :
                                <>{listItem.label}</>
                                 }
                                 </a>
                        </Li>
        )
    }
}
