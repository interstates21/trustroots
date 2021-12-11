
import SearchPage from "./pages/Search";
import CirclesPage from "./pages/Circles";
import { Routes, Route } from "react-router-dom";
import HomeLayout from './HomeLayout'
import Profile from './pages/Profile'
import Page404 from './pages/Page404'

const Router = () => { 
  return (
    <Routes>
     <Route element={<HomeLayout />}>
        <Route path="search" element={<SearchPage />}>
        </Route>
		<Route path="profile">
          <Route path=":userId" element={<Profile />} />
        </Route>
        <Route path="circles" element={<CirclesPage />}/>
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default Router;
