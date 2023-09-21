import { Link } from 'react-router-dom'

export function Amo() {
  return (
    <div>
      <h1>Amo</h1>
      <button>
        <Link className='Link' to={"/Cora"}>Proximo</Link>
      </button>
    </div>
  )
}
