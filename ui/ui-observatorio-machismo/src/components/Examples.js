import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


class Examples extends Component {
    render(){
        return this.props.examples.map((e,i) => <Grid item xs={4} key={i}>
            <Paper>{e.term}
            <br />
            {e.text}
            <br />
            {e.label}
            </Paper>

            </Grid> )
    }
    
}

export default Examples;