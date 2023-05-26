import Link from './Link'

export default function Header() {
    return (
        <header className='header'>
            <h1>ToDoList</h1>
            <nav>
                <ul className='nav-list'>
                    <li className='nav-list__item'><Link type='nav' to='/'>Home</Link></li>
                    <li className='nav-list__item'><Link type='nav' to='/about'>About</Link></li>
                    <li className='nav-list__item'><Link type='nav' to='/contacts'>Contacts</Link></li>
                </ul>
            </nav>
        </header>
    )
}