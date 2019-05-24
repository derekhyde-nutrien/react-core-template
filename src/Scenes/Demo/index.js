import React,  { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter } from 'react-router-dom';
import './styles.scss';
//import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    demoItem:{
        margin:5,
    },
    demoItemContent:{
        padding: 25,
    }
})

const demoItems = [
    {
        title: "OLS Logsheet",
        path: "/OLS",
    },
    {
        title: "Todo",
        path: "/todo",
    }
]

class Demo extends Component{
    constructor(props){
        super(props);
        this.state = {anything: demoItems};
    }
    render(){
        const {classes} = this.props;
        const items = this.state.anything.map((item, key) =>
            <Paper className={classes.demoItem}>
                <Grid className={classes.demoItemContent}>
                    <Typography variant="title">{item.title}</Typography>
                </Grid>
            </Paper>
        )
        return(
            <React.Fragment>
                <Grid container justify="center">
                    <Grid item xs={6}>
                        {items}        
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

export default withRouter(withStyles(styles)(Demo));