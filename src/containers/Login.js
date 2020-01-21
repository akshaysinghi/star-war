import React, {useState} from "react";
import Paper from 'material-ui/Paper';
import TextField from "material-ui/TextField";
import FlatButton from 'material-ui/FlatButton';
import Snackbar from 'material-ui/Snackbar';
import {blue600} from 'material-ui/styles/colors';

import {browserHistory} from 'react-router';
import logo from '../img/logo-dark.png'
import {onLogin} from '../utils/api-service';
import {onSignIn, onSignOut} from '../utils/auth';

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (username && password) {
            validateLogin(username, password);
        } else {
            setStatusMsg('Enter username and password to login.');
        }
    }

    const validateLogin = (username, password) => {
        onLogin(username).then(res => {
            console.log(res.results[0]);
            if (res && res.count > 0) {
                let people = res.results[0];
                if (people && people.name === username && people.birth_year === password) {
                    onSignIn();
                    browserHistory.push('/dashboard');
                } else {
                    setStatusMsg('The username or password you entered is incorrect.');
                }
            } else {
                onSignOut();
                setStatusMsg('The username or password you entered is incorrect.');
            }

        }).catch(err => {
        });
    }

    const setStatusMsg = (errorMsg) => {
        setMessage(errorMsg);
        setOpen(true);
    }

    return (
        <div>
            <div style={styles.signInContainer}>
                <Paper style={styles.paper}>
                    <div style={styles.divCenter}>
                        <img className="logo-width" src={logo} alt="star war"/>
                    </div>
                    <form>
                        <div>
                            <TextField
                                id="username"
                                underlineFocusStyle={{
                                    borderColor: blue600
                                }}
                                type="text"
                                hintText="Username*"
                                value={username}
                                fullWidth={true}
                                onChange={handleUsernameChange}/>
                        </div>
                        <div>
                            <TextField
                                underlineFocusStyle={{
                                    borderColor: blue600
                                }}
                                type="password"
                                id="password"
                                hintText="Password*"
                                value={password}
                                fullWidth={true}
                                onChange={handlePasswordChange}/>
                        </div>
                        <div style={styles.buttonDiv}>
                            <FlatButton
                                label="Login"
                                onClick={handleSubmit}
                                primary={true}
                                fullWidth={true}/>
                        </div>
                    </form>

                </Paper>

            </div>
            <Snackbar
                open={open}
                message={message}
                autoHideDuration={4000}/>
        </div>
    );
}

const styles = {
    signInContainer: {
        minWidth: 320,
        maxWidth: 400,
        height: 'auto',
        position: 'absolute',
        top: '30%',
        left: 0,
        right: 0,
        margin: 'auto'
    },
    paper: {
        padding: 20,
        overflow: 'auto'
    },
    buttonDiv: {
        marginTop: 10
    },
    divCenter: {
        textAlign: 'center'
    }

};

export default Login;
