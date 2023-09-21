import { Link } from 'react-router-dom'

export function Te() {
  return (
    <div>
      <h1>Te</h1>
      <button>
        <Link className='Link' to={"/Amo"}>Proximo</Link>
      </button>
    </div>
  )
}
