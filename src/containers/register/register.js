import React, { Component } from 'react';
import Aux from '../../hoc/common/common';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import Classes from './register.css';


class Register extends Component{
    render(){
        return(
            <Aux>                
                <form className={ Classes.form }>                
                <div>
                    <TextField                      
                        id="txtUsername"
                        label="Username"                        
                        margin="normal"
                        value={ this.props.userVal }
                    /> 
                </div>
                <div>
                    <TextField 
                        id="txtPassword"
                        label="Password"                        
                        margin="normal"
                        value={ this.props.pswdVal }
                    /> 
                </div>
                <div>
                    <TextField 
                        id="txtPassword"
                        label="Confirm password"                        
                        margin="normal"
                        value={ this.props.cpswdVal }
                    />
                </div>
                <div>
                <Button
                    variant="contained"
                    color="primary"   
                    style={ {marginTop:'20px',marginRight:'10px' }}             
                >
                SignUp
                </Button>
                <Button
                    variant="contained"                    
                    style={ {marginTop:'20px' }}             
                >
                Cancel
                </Button>
                </div>
                </form>
            </Aux>
        )                    
    }
}

const mapStateToProps = state => {
    return {
      userVal : state.value,
      pswdVal: state.value,
      cpswdVal: state.value
    };
  };

export default connect(mapStateToProps)(Register);