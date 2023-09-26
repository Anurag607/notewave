import Layout from "./Layout";
import HomePage from "./pages/homePage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAppSelector } from './redux/hooks';
import { AddFormPopup } from "./components";

export default function Home() {
  const { isFormOpen } = useAppSelector((state: any) => state.form);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <Layout>
              <>
                {isFormOpen && <AddFormPopup />}
                <HomePage>
                  <div />
                </HomePage>
              </>
            </Layout>
          } />
        </Routes>
      </BrowserRouter>
    </>
  );
}