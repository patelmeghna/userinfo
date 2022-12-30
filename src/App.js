import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './assets/scss/index.scss';

// Components
const UserForm = React.lazy(() => import('./components/userForm'));

function App() {
  return (
    <Suspense fallback = {<p>Loading...</p>}>
      <BrowserRouter>
        <Routes>
          <Route index element={<UserForm />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
