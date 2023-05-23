import Link from '../components/Link';

export default function Contacts() {
    return (
        <div>
            <h1>Contacts</h1>
            <ul className='contacts-list'>
                <li>Email: <Link to='mailto: example@test.com'>example@test.com</Link></li>
                <li>Phone: <Link to='tel:381234567890'>38(123)456-78-90</Link></li>
            </ul>
        </div>
    )
}
