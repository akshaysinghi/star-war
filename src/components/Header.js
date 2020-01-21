import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Logout from 'material-ui/svg-icons/action/exit-to-app';
import {white} from 'material-ui/styles/colors';
import SearchBox from './SearchBox';
import SearchType from './SearchType';
import logo from '../img/logo-light.png'
import {onSignOut} from '../utils/auth';
import {browserHistory} from 'react-router';

const Header = ({searchPlaceHolder, setSearchType, searchBySearchType}) => {

    const logout = () => {
        onSignOut();
        browserHistory.replace('/');
    }

    return (
        <div>
            <AppBar
                title={< div className="search-layout">
                    <SearchBox
                        searchPlaceHolder={searchPlaceHolder}
                        searchBySearchType={searchBySearchType}/>
                    <SearchType
                        setSearchType={setSearchType}
                        searchType={'planets'}/></div>}
                        iconElementLeft={<img
                            alt="logo" className="logo-width" src={logo}/>}
                        iconElementRight={<div style={
                            style.iconsRightContainer
                        }><IconButton onClick={logout}> <Logout color={white}/> </IconButton></div>}/>
        </div>

    );
}

const style = {
    menuButton: {
        marginLeft: 10
    },
    iconsRightContainer: {
        marginLeft: 20
    }
};

export default Header;