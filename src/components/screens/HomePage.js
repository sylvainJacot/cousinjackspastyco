import React from 'react';
import {Firstsection} from '../homepage/firstsection/firstsection';
import {Button} from "../buttons/Button";


export class HomePage extends React.Component {


    render() {
        return (
            <>
                <Firstsection/>
                <Button pathName="/MenuPage">
                    Test
                </Button>
            </>
        )
    }
}
