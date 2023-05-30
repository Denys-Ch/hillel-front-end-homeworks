import Link from './Link'
import { useStyles } from '../../useStyle'
export default function Header(props) {
    const classes = useStyles(props);
    return (
        <header className={classes.header}>
            <h1>ToDoList</h1>
            <nav>
                <ul className={classes.navList}>
                    <li className='nav-list__item'><Link type='nav' to='/'>Home</Link></li>
                    <li className='nav-list__item'><Link type='nav' to='/about'>About</Link></li>
                    <li className='nav-list__item'><Link type='nav' to='/contacts'>Contacts</Link></li>
                </ul>
            </nav>
        </header>
    )
}