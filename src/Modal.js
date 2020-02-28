import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import FilterListIcon from '@material-ui/icons/FilterList';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';




const useStyles = makeStyles(theme => ({
    paper: {
        // position: 'absolute',
        // width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));


export default function SimpleModal (props)
{
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleOpen = (e) =>
    {
        e.stopPropagation();
        e.preventDefault();
        setOpen(true);
    };

    const handleClose = () =>
    {
        setOpen(false);
    };

    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: false,
        valueB:""
    });

    const handleChange = name => event =>
    {
        setState({ ...state, [name]: event.target.checked });
        props.action(event.target.checked);
    };
    const handleChange2 = name => event =>
    {
        setState({ ...state, [name]: event.target.checked });
        props.action2(event.target.checked);
    };
    const handleChange3 = name => event =>
    {
        setState({ ...state, [name]: event.target.value });
        props.action3(event.target.value);
    };


    return (
        <div style={{ display: 'inline' }}>
            <IconButton color='primary' aria-label="filter" onClick={handleOpen}  >
                <FilterListIcon />
            </IconButton>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div className={classes.paper}>
                    <FormGroup row>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={state.checkedA}
                                    onChange={handleChange('checkedA')}
                                    value="checkedA" />
                            }
                            label="Filter Empty"
                        />
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={state.checkedB}
                                    onChange={handleChange2('checkedB')}
                                    value="checkedB"
                                    color="primary"
                                />
                            }
                            label="Filter"
                        />
                             <FormControlLabel
                            control={
                                <TextField
                                id="outlined-secondary"
                                label="Filter Out"
                                variant="outlined"
                                color="secondary"
                                disabled={!state.checkedB}
                                onChange={handleChange3('valueB')}
                                value={state.valueB}
                              />
                            }
                            label=" Filter Keywords"
                        />


                    </FormGroup>
                </div>
            </Modal>
        </div>
    );
}