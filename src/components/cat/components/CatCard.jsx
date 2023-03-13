import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { setActiveCat } from "../../../store/cat";

export const CatCard = ({
  id = "",
  idDoc = "",
  url = "",
  title = "",
  description = "",
  date,
}) => {
  const dispatch = useDispatch();

  const onClickCat = () => {
    dispatch(setActiveCat({ idDoc, id, title, url, description, date }));
  };

  const newTitle = useMemo(() => {
    return title.length > 30 ? title.substring(0, 30) + "..." : title;
  }, [title]);

  return (
    <>
      <a href="#" onClick={onClickCat}>
        <div
          className="card animate__animated animate__fadeIn mt-2"
          style={{ width: "16rem" }}
        >
          <img
            src={url}
            className="card-img-top"
            alt="..."
            style={{ height: "16rem" }}
          />
          <div className="card-body text-center">
            {/* <p className="card-text">Id:{id}</p> */}
            {title != "" ? (
              <p className="card-text">Titulo:{newTitle}</p>
            ) : (
              <p></p>
            )}
            {description != "" ? (
              <p className="card-text">Descripcion:{description}</p>
            ) : (
              <p></p>
            )}
          </div>
        </div>
      </a>
    </>
  );
};
