import React, { Component } from 'react';
import Aux from '../../hoc/common/common';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import Classes from "./login.css";

class Login extends Component{
    render(){
        return(
            <Aux>
                <form className={ Classes.form }>
                    <div>
                        <TextField 
                            id="txtUsernameLogin"
                            label="Username"
                            margin="normal"
                            value={this.props.logUserVal}
                        />
                    </div>
                    <div>
                        <TextField 
                            id="txtPasswordLogin"
                            label="Password"
                            margin="normal"
                            value={this.props.logPswdVal}
                        />
                    </div>
                    <div>
                    <Button
                    variant="contained"
                    color="primary"   
                    style={ {marginTop:'20px'}}             
                >
                Login
                </Button>
                    </div>
                </form>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        logUserVal : state.value,
        logPswdVal: state.value,
    };
  };

export default connect(mapStateToProps)(Login);
