import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { store } from '../../engine/init/store';
import Header from '../components/Header/index';

const theme = createTheme({
    palette: {
        primary: {
            main: orange[500],
        },
    },
});

export default function Layout() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Provider store={store}>
                <Header />
                <Container>
                    <Outlet />
                </Container>
            </Provider>
        </ThemeProvider>
    );
}
