import Counter from "./components/Counter";
import Headers from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      <Headers />
      {!isAuth && <Auth />} {isAuth && <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
