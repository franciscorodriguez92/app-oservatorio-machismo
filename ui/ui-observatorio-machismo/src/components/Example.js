import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';

class Example extends Component {

    render(){
        console.log(this.props)
        if (this.props.selectedTerm === this.props.ej.term){
            return <Paper>
            {this.props.ej.term}
            <br />
            {this.props.ej.text}
            <br />
            {this.props.ej.label}
            </Paper>
        } else{
            return <div></div>
        }

    }


}

export default Example;
