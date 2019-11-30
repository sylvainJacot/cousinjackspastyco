import React from 'react';
import PropTypes from 'prop-types'



export class FileNameInCamelCase extends React.Component {
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
