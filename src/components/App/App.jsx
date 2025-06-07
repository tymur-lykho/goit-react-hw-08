import "modern-normalize";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage.jsx";
import Layout from "../Layout/Layout.jsx";
import LoginPage from "../../pages/LoginPage.jsx";
import RegstrationPage from "../../pages/RegistrationPage.jsx";
import ContactsPage from "../../pages/ContactsPage.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, lazy, Suspense } from "react";
import { selectIsRefreshing } from "../../redux/auth/selectors.js";
import { refreshUser } from "../../redux/auth/operations.js";
import { RestrictedRoute } from "../RestrictedRoute.jsx";
import { PrivateRoute } from "../PrivateRoute.jsx";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <strong>Refreshing user...</strong>
  ) : (
    <>
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/" component={<LoginPage />} />
              }
            />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/"
                  component={<RegstrationPage />}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsPage />}
                />
              }
            />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
