import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles'

const styles = (theme) => ({
    button: {
        margin: theme.spacing.unit,
        flexGrow: 1
    },
    root: {
        display: "flex"
    }
})


class Buttons extends Component{
    state = {
        country: ""
    }
    
    
    handler = async(event, country) => {
        await this.setState({
            country: country
        });
        console.log("the country is: " + this.state.country)
        this.props.onChange(this.state.country)
        // this.props.onChange(event, country)
    };
    
    render(){
        const { classes } = this.props;

        return (
            <div className={classes.root}>
            <Button
            color='primary'
            type='submit'
            variant='raised'
            className={classes.button}
            onClick={(event) => {
                this.handler(event, "ca")
            }}
            >
            Canada
            </Button>
            <Button
            color='primary'
            type='submit'
            variant='raised'
            className={classes.button}
            onClick={(event) => {
                this.handler(event, "us")
            }}
            >
            USA
            </Button>
            <Button
            color='default'
            type='submit'
            variant='raised'
            className={classes.button}
            onClick={(event) => {
                this.handler(event, "")
            }}
            >
            Search Results
            </Button>
            <Button
            color='primary'
            type='submit'
            variant='raised'
            className={classes.button}
            onClick={(event) => {
                this.handler(event, "gb")
            }}
            >
            United Kingdom	
            </Button>
            
            <Button
            color='primary'
            type='submit'
            variant='raised'
            className={classes.button}
            onClick={(event) => {
                this.handler(event, "au")
            }}
            >
            Australia	
            </Button>
            </div>
            )
        }
    }
    
    export default withStyles(styles)(Buttons)
    