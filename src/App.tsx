import ErrorBoundary from "./components/shared/ErrorBoundary"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'
import LoadingSpinner from "./components/shared/LoadingSpinner"
import LoginPage from "./la-fortuna/pages/LoginPage"

function App() {
  const PageLoader = () => (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <LoadingSpinner />
    </div>
  )

  return (
    <ErrorBoundary>
      <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              {/* <Route path="/about-us" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/collections" element={<CollectionsPage />} />
              <Route
                path="/collections/:category"
                element={<CollectionsPage />}
              />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/sign-up" element={<SignUpPage />} />
              <Route path="/sign-in" element={<SignInPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/wishlist" element={<WishlistPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/payment-success" element={<PaymentSuccessPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route
                path="/terms-of-service"
                element={<TermsOfServicePage />}
              />
              <Route path="/return-policy" element={<ReturnPolicyPage />} />
              <Route path="/orders" element={<OrderHistoryPage />} /> */}
            </Routes>
          </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App
