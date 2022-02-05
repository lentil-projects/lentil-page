import { Link } from "react-router-dom"

export const Lentil = () => {
    return (
        <div className='lentil'>
        <div className='lentil-div'>
            <h1>Lentil Homepage</h1>
            <Link to='/lentil-cup'>
                <button>Lentil Cup One</button>
            </Link>
        </div>
        </div>
    )
}