import { Navigate, Route,Routes } from "react-router-dom";
import { CatMainPage,CatLibraryPage } from "../components/cat/pages/index";


export const AppRouter = () => {
  return (
    <Routes>
      {/* Main Page */}
      <Route path="/" element={<CatMainPage />} />

      {/* Cat Library */}
      <Route path="library" element={<CatLibraryPage />} />

      <Route path='/*' element= {<Navigate to="/"/>}/>
    </Routes>
  );
};
