import './App.css'
import MyHeader from './components/Header';
import { SignedIn, SignedOut, UserButton, useUser, RedirectToSignIn } from '@clerk/clerk-react'

function App() {
  const { user } = useUser();

  return (
    <>
      <MyHeader />
      <SignedIn>
        <UserButton />
        {user ? <h1>Hello, {user.firstName}!</h1> : null}
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  )
}

export default App
