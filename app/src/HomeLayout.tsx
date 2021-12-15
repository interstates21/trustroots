import { Outlet } from 'react-router-dom';
import Header from './components/Header';

const HomeLayout: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <div
        style={{
          margin: 0,
          padding: 0,
          marginTop: 60,
          height: 'calc(100% - 60px)',
          width: '100vw',
          overflowX: 'hidden',
          overflowY: 'auto'
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
