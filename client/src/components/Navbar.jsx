import poll from '../assets/poll.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='flex justify-between p-6 mx-4 sm:px-10 border-b-2 text-green-600 font-semibold  border-b-sky-800 ' >
            <Link to={'/'} ><img className='w-12' src={poll} alt="poll" /></Link>
            <div>
                <Link to={'/profile'} >Profile</Link>
                <h2>Logout</h2>
            </div>
        </nav>
    )
}

export default Navbar
