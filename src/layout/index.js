import {Outlet, useLocation, useNavigate} from 'react-router-dom';
import React from 'react';

function Layout() {
  console.log(useLocation());
  const navigate = useNavigate();
  return (
      <div>
        <h1>Layout</h1>
        <button onClick={() => {
          navigate('/app?name=canoe', {
            state: {
              name: 'canoe',
            },
          });
        }}>app
        </button>
        <button onClick={() => {
          navigate('/bpp', {
            state: {
              name: 'canoe',
            },
          });
        }}>bpp
        </button>
        <button onClick={() => {
          navigate(-1);
        }}>返回
        </button>
        <Outlet/>
      </div>
  )
}

export default Layout
