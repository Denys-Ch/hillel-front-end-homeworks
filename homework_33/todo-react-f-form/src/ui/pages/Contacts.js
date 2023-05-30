import Link from '../components/Link';
import { useStyles } from '../../useStyle';

export default function Contacts(props) {
    const classes = useStyles(props);
    return (
        <div>
            <h1>Contacts</h1>
            <ul className={classes.contactList}>
                <li>Email: <Link to='mailto: example@test.com'>example@test.com</Link></li>
                <li>Phone: <Link to='tel:381234567890'>38(123)456-78-90</Link></li>
            </ul>
        </div>
    )
}
