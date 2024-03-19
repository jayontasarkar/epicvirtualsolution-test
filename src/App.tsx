import React from 'react';
import MainLayout from './layouts/MainLayout';
import AppRoutes from './components/AppRoutes';
import Alert from './components/ui/Alert';
import useMenuWithProduct from './hooks/useMenuWithProduct';
import ScreenLoader from './components/loaders/ScreenLoader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const { isLoading, isError } = useMenuWithProduct();

  if (isLoading) {
    return <ScreenLoader />;
  }

  return (
    <>
      <MainLayout>
        {isError && (
          <div className="container mt-3">
            <div className="row">
              <div className="col-md-12">
                <Alert type="danger">Failed to fetch menu & mobile list</Alert>
              </div>
            </div>
          </div>
        )}
        <AppRoutes />
      </MainLayout>
      <ToastContainer position="bottom-right" />
    </>
  );
};

export default App;
