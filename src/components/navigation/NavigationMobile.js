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
a{
    cursor: pointer;
    svg {
        position: absolute;
        right: 0;
        bottom: 50%;
        transform: translateY(50%);

        #borderspasty {
            fill:${props => props.borderspasty};
        }
    }
}
`

export class NavigationMobile extends React.Component {
    constructor() {
        super()
        this.state = {
            height: 0,
        }
        this.logo = React.createRef();
    }

    catchHeight = () => {
       this.setState({height : this.logo.current.clientHeight});
    }
    componentDidMount () {
        this.catchHeight()
    }
    triggerMenu () {

    }

    render() {
console.log(this.state.height)
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
                <NavMobileList height={this.state.height}/>
                <IcBurger borderspasty={`${colorsStyle.secondary}`}/>
            </NavMobileWrapper>
            </>
        )
    }
}

// logoHeight={height}