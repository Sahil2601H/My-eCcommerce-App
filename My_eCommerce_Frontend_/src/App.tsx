import React, { useState, useMemo, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Deals from "./deals/deals";
import Product from "./Products/product";
import PageDetail from "./pages/pagedetails/pageDetail";
import ReviewProduct from "./pages/pagedetails/Reviewprouct";
import Cart from "./pages/Cart/cart";
import Checkout from "./pages/Checkout/checkout";
import Account from "./pages/Account/Account";
import Becomeseller from "./pages/BecomeSeller/Becomeseller";
import SellerDashboard from "./seller/pages/sellerDashboard/sellerDashboard";
import Admindashboard from "./admin/pages/Dashboard/Admindashboard";
import { useAppDispatch, useAppSelector } from "./State/Store";
import { fetchSellerProfile } from "./State/seller/sellerSlice";

function AppContent() {
  const dispatch = useAppDispatch();
  const { profile, loading } = useAppSelector((state) => state.seller); // Fixed selector
  const navigate = useNavigate();
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);
  const [initialProfileCheck, setInitialProfileCheck] = useState(false);

  const theme = useMemo(
    () => createTheme({
      palette: {
        mode: darkMode ? "dark" : "light",
      },
    }),
    [darkMode]
  );

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      dispatch(fetchSellerProfile(jwt)).finally(() => {
        setInitialProfileCheck(true);
      });
    } else {
      setInitialProfileCheck(true);
    }
  }, [dispatch]);

  useEffect(() => {
    if (!initialProfileCheck) return;
    
    const jwt = localStorage.getItem("jwt");
    const isSellerRoute = location.pathname.startsWith("/seller");
    const isAdminRoute = location.pathname.startsWith("/admin");
    const isHomepage = location.pathname === "/";

    // Redirect logic
    if (jwt && profile && !isSellerRoute && !isAdminRoute && isHomepage) {
      navigate("/seller");
    }
    
    // If no jwt but trying to access protected routes
    if (!jwt && (isSellerRoute || isAdminRoute)) {
      navigate("/");
    }
  }, [profile, navigate, location.pathname, initialProfileCheck]);


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/products/:categoryID" element={<Product />} />
        <Route path="/reviews/:productId" element={<ReviewProduct />} />
        <Route
          path="/product-details/:categoryID/:name/:productId"
          element={<PageDetail />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/Account/*" element={<Account />} />
        <Route path="/become-seller/*" element={<Becomeseller />} />
        <Route path="/seller/*" element={<SellerDashboard />} />
        <Route path="/Admindashboard/*" element={<Admindashboard />} />
      </Routes>
    </ThemeProvider>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;