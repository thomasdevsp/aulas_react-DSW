import { Link } from 'react-router-dom'
import '../App.css'

export function Eu() {
  return (
    <div>
      <h1>Eu</h1>
      <button>
        <Link className='Link' to={"/Te"}>Proximo</Link>
      </button>
    </div>
  )
}
