import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  Prompt,
  useParams,
  useRouteMatch
} from "react-router-dom";
//import bookFacade from "./bookFacade";
import React, { useState } from "react";


function AddBook({ bookFacade }) {
  const emptyBook = { id: "", title: "", info: "" }
  const [book, setBook] = useState({...emptyBook});
  let [isBlocking, setIsBlocking] = useState(false);

  const handleChange = e => {
    setIsBlocking(e.target.value.length > 0);
    const {id, value} = e.target;
    setBook({ ...book, [id]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    bookFacade.addBook(book);
    setIsBlocking(false);
    setBook({ ...emptyBook });
  };

  return (
    <div>
      <h1>Add Book</h1>
      <form>
        <input id="title" value={book.title} onChange={handleChange} type="text" placeholder="Add title" /> <br />
        <input id="info" value={book.info} onChange={handleChange} type="text" placeholder="Add info" />  <br />
        <input type="submit" onClick={handleSubmit} value="Save" />
      
      <Prompt
        when={isBlocking}
        message={location =>
          `You have unsaved changes, are you sure you want to go to ${location.pathname}`
        }
      />
     
      </form>
    </div>
  );
}

function Header() {
  return (
    <div>
      <ul className="header">
        <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
        <li><NavLink activeClassName="active" to="/products">Products</NavLink></li>
        <li><NavLink activeClassName="active" to="/add-book">Add Book</NavLink></li>
        <li><NavLink activeClassName="active" to="/company">Company</NavLink></li>
      </ul>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

function Details({bookFacade}) {
  let { bookId } = useParams();
  const specificBook = bookFacade.findBook(bookId);

  return (
    <div>
    <h2>Book details for selected book will go here:</h2>
    <p>Book ID: {specificBook.id}</p>
    <p>Book Title: {specificBook.title} </p>
    <p>Book Info: {specificBook.info} </p>
    </div>
  )
}

function Products({ bookFacade }) {
  const books = bookFacade.getBooks();
  let { path, url } = useRouteMatch();
  console.log(path, url)

  const listItems = books.map(book => (
    <li key={book.id}>
      {book.title}
      <Link to={`${url}/${book.id}`}> -Details</Link>
    </li>
  ))

  return (
    <div>
      <h1>Products</h1>
      {listItems}
      <Switch>
        <Route exact path={path}>
          <h3>Please select a book</h3>
        </Route>
         <Route path={`${path}/:bookId`}>
          <Details bookFacade={bookFacade}/>
        </Route>
      </Switch>
    </div>
  );
}

function Company() {
  return (
    <h1>Company</h1>
  );
}

function NoMatch() {

  return (
    <div>
      <h1>404 not found for this URL</h1>
    </div>
  );

}

function App({ bookFacade }) {

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Products bookFacade={bookFacade} />
        </Route>
        <Route path="/company">
          <Company />
        </Route>
        <Route path="/add-book">
          <AddBook bookFacade={bookFacade}/>
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
