import React from 'react';
import styled from 'styled-components';
import {Link, Redirect} from 'react-router-dom';
import {media} from '../default/mediaqueries';
import {listItems} from '../../constant/navigation-mock';
import {NavMobileList} from '../navigation/NavMobileList';
import {colorsStyle} from '../default/colors';
import {IcBurger, LogoCousinJackVertical} from '../default/icons';

const NavMobileWrapper = styled.div`
display: flex;
position: relative;
    ${media.tablet`
    justify-content: center;
    `}
h1 {
    z-index: 4;
    a {
        display: block; 
}
}
button {
position: absolute;
z-index: 3;
}
`;


export class NavigationMobile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 0,
            isListMenuOpen: false,
        };
        this.heighnavbar = React.createRef();
    }

    catchHeight = () => {
       this.setState({height : this.heighnavbar.current.clientHeight});
    };
    componentDidMount () {
        this.catchHeight();
        console.log(this.state.height);
    };

    toggleListMenu = () => {
        this.setState(
            {isListMenuOpen: !this.state.isListMenuOpen},
            );
    };

    render() {


        return (
            <>
            <NavMobileWrapper
                ref={this.heighnavbar}>
                <h1>
                    <Link to={listItems[3].pathLink}>
                        <LogoCousinJackVertical
                        id="LogoS"
                        menuActive={this.state.isListMenuOpen}
                        />
                    </Link>
                </h1>
                    <NavMobileList height={this.state.height} menuActive={this.state.isListMenuOpen} onClickLink={this.toggleListMenu}/>

                 <IcBurger
                     isOpen={this.state.menuOpen}
                    borderspasty={`${colorsStyle.secondary}`}
                    onClickListMenuButton={this.toggleListMenu}
                    menuActive={this.state.isListMenuOpen}
                />
            </NavMobileWrapper>

            </>
        )
    }
}

// logoHeight={height}