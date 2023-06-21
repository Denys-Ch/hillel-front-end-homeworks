import { Box, Typography } from '@mui/material';

export default function About() {
    return (
        <Box>
            <Typography
                component="h2"
                variant="h5"
                marginTop="20px"
                marginBottom="20px"
            >About
            </Typography>
            <Typography component="p">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus excepturi explicabo iure maiores nam natus voluptatibus.
                Aliquam dolores excepturi, facere itaque modi nihil placeat repudiandae vitae. Dicta ducimus minus non. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus excepturi explicabo iure maiores nam natus voluptatibus.
                Aliquam dolores excepturi, facere itaque modi nihil placeat repudiandae vitae. Dicta ducimus minus non.
            </Typography>
        </Box>
    );
}
