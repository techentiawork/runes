import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { Airdrop, CryptoHistory, DepositCrypto, WithdrawCrypto, Blog, Navbar, Alert, Dashboard, Stake, } from "./components";
import { BlogAdd, BlogDashboard, Home } from "./pages";
import { useDispatch, useSelector } from "react-redux";
import { setAlert, setBlogs } from "./store/ui";
import { useEffect } from "react";
import axios from "axios";
import BlogUpdate from "./pages/BlogUpdate";

function App() {
  const { pathname } = useLocation()

  const alert = useSelector((state) => state.alert);

  const dispatch = useDispatch();

  const blogs = useSelector((state) => state.blogs);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/blogs`);
      dispatch(setBlogs(res.data.blogs));
    } catch (e) {
      dispatch(setAlert({ message: 'Unable to fetch Blogs', type: 'alert' }))
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchBlogs()
  }, [])

  return (
    <>
      <div className="app w-full">

        {alert.message && <Alert />}

        {
          pathname.split('/')[1] !== 'blogs' && pathname.split('/')[1] !== 'add' &&
          <Navbar />
        }
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deposit" element={<DepositCrypto />} />
          <Route path="/withdraw" element={<WithdrawCrypto />} />
          <Route path="/airdrop" element={<Airdrop />} />
          <Route path="/history" element={<CryptoHistory />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/stake" element={<Stake />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogs" element={<BlogDashboard />} />
          <Route path="/blogs/:id" element={<BlogUpdate />} />
          <Route path="/add" element={<BlogAdd />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
