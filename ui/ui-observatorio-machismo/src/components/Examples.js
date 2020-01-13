import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Example from './Example';

class Examples extends Component {
    render(){
        //console.log(this.props.selectedTerm)
        return this.props.examples.map((e,i) => 
        
        <Grid item xs={4} key={i}>
            <Example ej={e} selectedTerm={this.props.selectedTerm}>

            </Example>

            


            </Grid> 
            )
    }
    
}

export default Examples;