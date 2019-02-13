import React from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    textField: {
      display: 'flex',
      margin: theme.spacing.unit,
      width: '100%'
    },
    button: {
      margin: theme.spacing.unit
    },
    root:{
      display: 'flex'
    }
  })
const Search = (props) => (
  
    <form onSubmit={props.getNews} className={props.classes.root}>
    <TextField
        className={props.classes.textField}
        label='Search'
        margin='normal'
        name='searchInput'
        type='search'
        variant='outlined'
        InputLabelProps={{
            required: true,
            color: 'white',
            shrink: true
    }}
    />
     <Button
      className={props.classes.button}
      color='primary'
      type='submit'
      variant='raised'
    >
            Search
        </Button>
        </form>
    )
    
    export default withStyles(styles)(Search)
    