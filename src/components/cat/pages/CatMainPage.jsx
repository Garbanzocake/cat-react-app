import { useDispatch, useSelector } from "react-redux";
import { getCat, saveNewCat } from "../../../store/cat/thunks";
import { CatCard } from "../components/CatCard";
import { NavLink } from "react-router-dom";
export const CatMainPage = () => {
  const dispatch = useDispatch();
  const {
    isLoading,
    isSaving,
    activeCat = [],
  } = useSelector((state) => state.cats);

  const onClickSaveCat = () => {
    
    dispatch(saveNewCat(activeCat));
  };

  return (
    <>
      <div className="container animate__animated animate__fadeIn ">
        <div className="row  text-center">
          <h1>Hola amantes de gatos!</h1>
            <p>Presiona el boton para ver gatos.</p>
          <hr />
        </div>

        <div className="row d-flex align-items-center justify-content-center animate__animated animate__fadeIn animate__delay-1s ">
          <div className="col-auto">
            <div className="flex-row">
              <ul>
                {activeCat.map(({ id, idDoc = "", url }) => (
                  <CatCard key={id} id={id} idDoc={idDoc} url={url} />
                ))}
              </ul>
            </div>
            <div className="flex-row text-center animate__animated animate__fadeIn">
              <button
                className="btn btn-primary "
                onClick={() => dispatch(getCat())}
              >
                Siguiente Gato
              </button>
              {!isLoading ? (
                <>
                  <button
                    className="btn btn-success mx-2 "
                    disabled={isSaving}
                    onClick={onClickSaveCat}
                  >
                    Guardar en Favoritos
                  </button>
                  <div className="flex-row  text-center mx-2 mt-2">
                    <NavLink className="btn btn-warning text-white" to="/library">
                      Ver Gatos Favoritos!
                    </NavLink>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
