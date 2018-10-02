import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const styles = {
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    }
  };

const appbar = ( props ) => {
    const { classes } = props;
    console.log(props);
    return(    
    <div>
        <AppBar position='static'>
            <Toolbar>
                <IconButton 
                    className={classes.menuButton} 
                    color="inherit" aria-label="Menu"                    
                    style = {{ display: !props.menuIconDisplay ? 'none': '' }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="title" color="inherit" className={classes.grow}>
                    Ruby Expenses
                </Typography>
                <Button color="inherit" style = {{ display: !props.loginDisable ? 'none': '' }} >Login</Button>
                <Button color="inherit" style = {{ display: !props.signupDisable ? 'none': '' }} >SignUp</Button>
            </Toolbar>
        </AppBar>
    </div> )   
}

export default withStyles(styles)(appbar);