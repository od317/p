import BookList from "./pages/BookList"
import Book from "./pages/Book"
import NewBook from "./pages/NewBook"
import {Route,Routes} from "react-router-dom"
import BookLayout from "./BookLayout"

export default function BookRoutes(){
    return(<>
    <BookLayout></BookLayout>
    <Routes>
            <Route index element={<BookList/>}></Route>
            <Route path=':id' element={<Book/>}></Route>
            <Route path='new' element={<NewBook/>}></Route>
    </Routes>
    </>)
}