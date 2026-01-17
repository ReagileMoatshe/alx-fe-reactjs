import { useState } from 'react';
import UserContext from './UserContext';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';

function App() {
  const userData = { name: "Alice", age: "25", bio: "Loves hiking and photography" };

  return (
    <UserContext.Provider value={userData}>
      <Header />
      <MainContent />
      <Footer />
      <UserProfile />
    </UserContext.Provider>
  );
}

export default App;
