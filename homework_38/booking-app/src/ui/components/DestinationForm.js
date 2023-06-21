import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Field } from 'react-final-form';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from './TextField';
import DatePicker from './DatePicker';
import Select from './Select';
import { destinationsAsyncActions } from '../../engine/core/destinations/saga/asyncActions';
import { items, loading } from '../../engine/core/destinations/slice';
import Button from './Button';
import { hotelsAsyncActions } from '../../engine/core/hotels/saga/asyncActions';
import formValidation from '../../_helpers/formValidation';

export default function DestinationForm() {
    const destinationsItems = useSelector(items);
    const destinationsLoading = useSelector(loading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(destinationsAsyncActions.getDestinationsAsync());
    }, []);
    const onSubmit = (value) => {
        dispatch(hotelsAsyncActions.getHotelsAsync(value));
    };
    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        display: 'flex',
                        background: '#fff',
                        margin: '30px 0',
                    }}

                >
                    <Grid container spacing={3}>
                        <Grid item xs={3}>
                            <Field
                                name="destination"
                                label="Destination"
                                component={Select}
                                disabled={destinationsLoading}
                                validate={formValidation.validate.required}
                                options={destinationsItems}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <Field
                                name="check_in"
                                label="Check In"
                                component={DatePicker}
                                validate={formValidation.validate.required}
                                disabled={destinationsLoading}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <Field
                                name="check_out"
                                label="Check Out"
                                component={DatePicker}
                                validate={formValidation.validate.required}
                                disabled={destinationsLoading}
                            />
                        </Grid>
                        <Grid item xs={1}>
                            <Field
                                name="adults"
                                label="Adults"
                                component={TextField}
                                validate={formValidation.validate.numbersOnly}
                            />
                        </Grid>
                        <Grid item xs={1}>
                            <Field
                                name="children"
                                label="Children"
                                component={TextField}
                                validate={formValidation.validate.numbersOnly}
                            />
                        </Grid>
                        <Grid item xs={1}>
                            <Button type="submit" loading={destinationsLoading} sx={{ height: '55px' }} color="white">SEND</Button>
                        </Grid>
                    </Grid>
                </Box>
            )}
        />
    );
}
