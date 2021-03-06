import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import Portfolio from './Pages/Portfolio/Portfolio';
import Purchase from './Pages/Purchase/Purchase';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import NotFound from './Pages/Shared/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrder';
import AddReview from './Pages/Dashboard/AddReview.js';
import MyProfile from './Pages/Dashboard/MyProfile';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrder';
import AddProduct from './Pages/Dashboard/AddProduct';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import Payment from './Pages/Dashboard/Payment';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/purchase/:id" element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        } />
        <Route path="/blogs" element={<Blogs></Blogs>} />
        <Route path="/portfolio" element={<Portfolio></Portfolio>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<SignUp></SignUp>} />

        <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={<MyOrders />}></Route>
          <Route path='review' element={<AddReview />}></Route>
          <Route path='myprofile' element={<MyProfile />}></Route>
          <Route path='payment/:id' element={<Payment />}></Route>
          <Route path='users' element={<RequireAdmin><Users /></RequireAdmin>}></Route>
          <Route path='manageorder' element={<RequireAdmin><ManageAllOrders /></RequireAdmin>}></Route>
          <Route path='addproduct' element={<RequireAdmin><AddProduct /></RequireAdmin>}></Route>
          <Route path='manageproduct' element={<RequireAdmin><ManageProducts /></RequireAdmin>}></Route>
        </Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
