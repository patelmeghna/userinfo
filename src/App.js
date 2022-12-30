import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './assets/scss/index.scss';

// Components
const UserForm = React.lazy(() => import('./components/userForm'));
const UserList = React.lazy(() => import('./components/userListing'))

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <BrowserRouter>
        <Routes>
          <Route index element={<UserForm />} />
          <Route path="/listing" element={<UserList />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
