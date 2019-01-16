import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});

class NumberField extends React.Component {
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.props.onNumChange(event.target.value)
    }

    render() {
        const { classes } = this.props;
        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="outlined-number"
                    label={this.props.label}
                    value={this.props.num}
                    onChange={this.handleChange}
                    type="number"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                    variant="outlined"
                />
            </form>
        );
    }
}

NumberField.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NumberField);
