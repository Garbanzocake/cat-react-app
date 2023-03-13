import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CatCard } from "../components/CatCard";
import { NavLink } from "react-router-dom";
import { startClear, startLoadingCats } from "../../../store/cat/thunks";
import { CatView } from "../components/CatView";

export const CatLibraryPage = () => {
  const dispatch = useDispatch();
  const { activeCat, catsLibrary = [] } = useSelector((state) => state.cats);

  useEffect(() => {
    dispatch(startLoadingCats());
  }, []);

  const onClear = () => {
    dispatch(startClear());
  };

  return (
    <>
      <div className="container-fluid text-center animate__animated animate__fadeIn ">
        <h1>Bienvenidos a la biblioteca de gatos</h1>
        <hr />

        <div className="flex-row justify-content-center">
          <NavLink className="btn btn-danger mt-3 " onClick={onClear} to="/">
            Home
          </NavLink>
        </div>
        <div className="row align-items-start justify-items-center mt-4">
          <div className="col-8">
            <div className="row row-cols-3">
              {catsLibrary.map(({ id, idDoc, url, title, description }) => (
                <div key={id} className="col-auto mx-1 mt">
                  <CatCard
                    id={id}
                    idDoc={idDoc}
                    url={url}
                    title={title}
                    description={description}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="col-4 d-flex justify-content-center align-items-center text-center">
            <CatView activeCat={activeCat} />
          </div>
        </div>
      </div>
    </>
  );
};
