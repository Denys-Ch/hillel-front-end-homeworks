import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import img from '../../../images/img.png';
import { CardTextWrapper } from './styles';

export default function HotelCard(props) {
    const {
        // eslint-disable-next-line camelcase
        name, address, city, state, country_code,
    } = props;

    return (
        <Card>
            <CardMedia
                component="img"
                alt="hotel picture"
                height="140"
                image={img}
            />
            <CardContent>
                <Typography
                    component="h3"
                    variant="h7"
                >
                    {name}
                </Typography>
                <CardTextWrapper>
                    address: {address}
                </CardTextWrapper>
                <CardTextWrapper>
                    {/* eslint-disable-next-line camelcase */}
                    city: {city}, state: {state}, country code: {country_code}
                </CardTextWrapper>
            </CardContent>
        </Card>
    );
}
