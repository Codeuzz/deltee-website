import { Link } from "react-router-dom"

function BookList() {
    return(
        <>
            <h1>Booklist</h1>
            <Link to="/books/1">Divergent </Link>
            <Link to="/books/2">Insurgent </Link>
            <Link to="/books/3">Allegiant </Link>
            <br />
            <Link to="/books/new">New book</Link>

        </>
    )
}

export default BookList