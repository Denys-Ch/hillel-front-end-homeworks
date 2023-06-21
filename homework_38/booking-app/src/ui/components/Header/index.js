import Stack from '@mui/material/Stack';
import Button from '../Button';
import Wrapper from './styles';
import { links } from '../../../engine/config/routers';
import Logo from '../Logo';

export default function Header() {
    return (
        <Wrapper>
            <Logo />
            <Stack direction="row" spacing={2}>
                <Button reactHref={links.main}>Home</Button>
                <Button reactHref={links.about}>About</Button>
            </Stack>
        </Wrapper>
    );
}
