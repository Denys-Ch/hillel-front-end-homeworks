import React from 'react';
import { links } from '../../../engine/config/routers';
import { Wrapper, Icon, Text } from './styles';

function Logo(props) {
    const { color } = props;
    return (
        <Wrapper to={links.main} component="div" color={color}>
            <Icon component="div" color={color} />
            <Text component="h1">Booking</Text>
        </Wrapper>
    );
}

export default Logo;
