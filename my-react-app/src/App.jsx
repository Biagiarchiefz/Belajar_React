
import React from "react";
import LoginPage from "./Pages/login";
import RegisterPage from "./Pages/register";

function App() {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <RegisterPage></RegisterPage>
    </div>
  );
}

export default App;


// tahapan atomic design:
// 1. Atoms   = elements
// 2. Molecules  = atom dan molecules di gabungkan di dalam elements (contoh input dan label tidak bisa di pisahkan)
// 3. Oragnisms = fragment (contoh form)
// 4. Templates = layout
// 5. Pages

