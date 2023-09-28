import React from "react";
import Layout from "./Layout";
import HomePage from "./pages/homePage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { AddFormPopup, ColorPopup, Pagination, UpdateFormPopup } from "./components";
import { getNotes } from "./Firebase/scripts";

export default function Home() {
  const { isFormOpen, isUpdateFormOpen } = useAppSelector((state: any) => state.form);
  const { isColorFormOpen } = useAppSelector((state: any) => state.color);
  const { noteData } = useAppSelector((state: any) => state.notes);

  const dispatch = useAppDispatch();
  
  React.useEffect(() => {
    getNotes(dispatch);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <Layout>
              <>
                {isFormOpen && <AddFormPopup />}
                {isUpdateFormOpen && <UpdateFormPopup />}
                {isColorFormOpen && <ColorPopup />}
                <HomePage>
                  <Pagination itemsPerPage={6} data={noteData} />
                </HomePage>
              </>
            </Layout>
          } />
        </Routes>
      </BrowserRouter>
    </>
  );
}