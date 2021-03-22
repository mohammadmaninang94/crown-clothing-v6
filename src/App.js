import { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import userContext from './context/user/user.context';

import HomePage from './pages/home-page/home-page.component';
import ShopPage from './pages/shop-page/shop-page.component';
import SignInSignUpPage from './pages/sign-in-sign-up-page/sign-in-sign-up-page.component';
import CheckoutPage from './pages/checkout-page/checkout-page.component';

import Header from './components/header/header.component';

import { AppContainer } from './App.styles';

const App = () => {

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        });
      } else {
        setCurrentUser(userAuth);
      }
    });

    return () => unsubscribeFromAuth();
  });

  return (
    <AppContainer>
      <userContext.Provider value={currentUser}>
        <Header />
      </userContext.Provider>
      <Switch>
        <Route exact path='/' render={() => <HomePage />} />
        <Route path='/shop' render={routeProps => <ShopPage {...routeProps} />} />
        <Route exact path='/checkout' render={() => <CheckoutPage />} />
        <Route path='/signin' render={() =>
          currentUser ? (
            <Redirect to='/' />
          ) : (
            <SignInSignUpPage />
          )
        } />
      </Switch>
    </AppContainer>
  );
}

export default App;
