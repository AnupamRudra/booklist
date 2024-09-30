/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import { List } from './components/page/users/List'
import { CreateBooks } from './components/page/Admin/CreateBooks'
import { BookData } from './components/page/Admin/BookData';
import { UpdateBook } from './components/page/Admin/UpdateBook';
import { ProductProfile } from './components/page/users/ProductProfile';
import { ProductOverview } from './components/page/Admin/ProductOverview';
import { BookScreenShots } from './components/page/Admin/BookScreenShots';
import { BookPdf } from './components/page/users/BookPdf';
import { Navbar } from './components/component/Navbar';
import { Login } from './components/Login/Login';
import { UserSignUp } from './components/Registration/UserSignUp';
import { Home } from './components/page/users/Home';
import { Footer } from './components/component/Footer';
import { AdminLogin } from './components/Login/AdminLogin';
import Blog from './components/page/Admin/Blog';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* user  */}
          <Route path='/' element={<Home />} />
          <Route path='/:type' element={<List />} />
          <Route path='/:type/:id/:title/:auther' element={<ProductProfile />} />
          <Route path='/book/pdf/:id/:title/:auther' element={<BookPdf />} />
          <Route path='/user/login' element={<Login />} />
          <Route path='/user/registration' element={<UserSignUp />} />

          {/* admin  */}
          <Route path='/admin/login' element={<AdminLogin />} />
          <Route path='/book/add' element={<CreateBooks />} />
          <Route path='/update/:id/:title/:auther' element={<UpdateBook />} />
          <Route path='/book/store' element={<BookData />} />
          <Route path='/book/overview/:id/:title/:auther' element={<ProductOverview />} />
          <Route path='/create/pdf/:id/:title/:auther' element={<BookScreenShots />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
