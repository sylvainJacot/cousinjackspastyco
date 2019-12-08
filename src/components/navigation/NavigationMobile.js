import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {listItems} from '../../constant/navigation-mock';
import {NavMobileList} from '../navigation/NavMobileList';
import LogoS from '../../assets/svg/CousinJacks_Logo.Vertical.svg';
import {colorsStyle} from '../default/colors';
import {IcBurger} from '../default/icons';

const NavMobileWrapper = styled.div`
display: flex;
position: relative;
h1 {
    z-index: 1;

    a {
        display: block;
    #LogoS {
        height:104px;
    }
}
}
button {
position: absolute;
z-index: 99;
}
`;

export class NavigationMobile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 0,
            isListMenuOpen: false,
        };
        this.logo = React.createRef();
    }

    catchHeight = () => {
       this.setState({height : this.logo.current.clientHeight});
    };
    componentDidMount () {
        this.catchHeight();
    };

    toggleListMenu = () => {
        this.setState(
            {isListMenuOpen: !this.state.isListMenuOpen});
    };

    render() {


        return (
            <>
            <NavMobileWrapper>
                <h1>
                    <Link to={listItems[3].pathLink}>
                        <img 
                        src={LogoS} 
                        id="LogoS" 
                        ref={this.logo}
                        />
                    </Link>
                </h1>
                    <NavMobileList height={this.state.height} menuActive={this.state.isListMenuOpen}/>
                }
                 <IcBurger
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