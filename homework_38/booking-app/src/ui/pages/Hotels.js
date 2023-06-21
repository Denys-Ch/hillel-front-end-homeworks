import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import HotelCard from '../components/HotelCard';
import { cards } from '../../engine/core/hotels/slice';

export default function Hotels() {
    const hotelsCards = useSelector(cards);

    return (
        <Box>
            <Typography
                component="h5"
                variant="h5"
                marginTop="15px"
                marginBottom="10px"
            >
                Hotels
            </Typography>
            <Grid container rowSpacing={3} columnSpacing={4}>
                {hotelsCards.map((card) => (
                    <Grid
                        item
                        xs={4}
                        key={card.id}
                    >
                        <Box
                            component={HotelCard}
                            id={card.id}
                            name={card.name}
                            address={card.address}
                            city={card.city}
                            state={card.state}
                            country_code={card.country_code}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
