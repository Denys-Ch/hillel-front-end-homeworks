import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DestinationForm from '../components/DestinationForm';
import { destinationsAsyncActions } from '../../engine/core/destinations/saga/asyncActions';

export default function Main() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(destinationsAsyncActions.getDestinationsAsync());
    }, []);
    return (
        <Box>
            <DestinationForm />
            <Typography
                component="h1"
                variant="h4"
                sx={{ fontWeight: '700' }}
                marginBottom="15px"
            >
                Travel With {' '}
                <Box
                    component="span"
                    sx={{
                        color: 'primary.main',
                    }}
                >
                    Booking
                </Box>
            </Typography>
            <Typography component="p">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus excepturi explicabo iure maiores nam natus voluptatibus.
                Aliquam dolores excepturi, facere itaque modi nihil placeat repudiandae vitae. Dicta ducimus minus non. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus excepturi explicabo iure maiores nam natus voluptatibus.
                Aliquam dolores excepturi, facere itaque modi nihil placeat repudiandae vitae. Dicta ducimus minus non.
            </Typography>
        </Box>
    );
}
