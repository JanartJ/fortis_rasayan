import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './theme/theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import EnquiryModal from './components/EnquiryModal';
import ProductDetailModal from './components/ProductDetailModal';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Modals state
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [initialProductForQuote, setInitialProductForQuote] = useState(null);

  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [productForDetail, setProductForDetail] = useState(null);

  const handleOpenQuote = (product = null) => {
    setInitialProductForQuote(product);
    setQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setQuoteModalOpen(false);
    setInitialProductForQuote(null);
  };

  const handleViewProductDetails = (product) => {
    setProductForDetail(product);
    setDetailModalOpen(true);
  };

  const handleCloseProductDetails = () => {
    setDetailModalOpen(false);
    setProductForDetail(null);
  };

  const handleEnquireFromDetails = (product) => {
    handleCloseProductDetails();
    handleOpenQuote(product);
  };

  const renderActivePage = () => {
    switch (activePage) {
      case 'home':
        return (
          <HomePage
            setActivePage={setActivePage}
            onOpenQuote={() => handleOpenQuote()}
            onSelectProduct={(product) => handleOpenQuote(product)}
            onViewProductDetails={handleViewProductDetails}
          />
        );
      case 'products':
        return (
          <ProductsPage
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            onViewProductDetails={handleViewProductDetails}
            onEnquireProduct={(product) => handleOpenQuote(product)}
            onOpenQuote={() => handleOpenQuote()}
          />
        );
      case 'about':
        return (
          <AboutPage
            setActivePage={setActivePage}
            onOpenQuote={() => handleOpenQuote()}
          />
        );
      case 'contact':
        return <ContactPage />;
      default:
        return (
          <HomePage
            setActivePage={setActivePage}
            onOpenQuote={() => handleOpenQuote()}
            onSelectProduct={(product) => handleOpenQuote(product)}
            onViewProductDetails={handleViewProductDetails}
          />
        );
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* Header Navigation */}
        <Navbar
          activePage={activePage}
          setActivePage={setActivePage}
          onOpenQuote={() => handleOpenQuote()}
        />

        {/* Dynamic Page Content */}
        <Box component="main" sx={{ flexGrow: 1 }}>
          {renderActivePage()}
        </Box>

        {/* Footer */}
        <Footer
          setActivePage={setActivePage}
          setSelectedCategory={setSelectedCategory}
        />

        {/* Modals & Helpers */}
        <EnquiryModal
          open={quoteModalOpen}
          onClose={handleCloseQuote}
          initialProduct={initialProductForQuote}
        />

        <ProductDetailModal
          open={detailModalOpen}
          onClose={handleCloseProductDetails}
          product={productForDetail}
          onEnquire={handleEnquireFromDetails}
        />

        <ScrollToTop />
      </Box>
    </ThemeProvider>
  );
}

export default App;
