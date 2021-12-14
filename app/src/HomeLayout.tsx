import { Outlet } from 'react-router-dom';
import Header from './components/Header';

const HomeLayout: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <div style={{ paddingTop: 60, height: '100%' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
