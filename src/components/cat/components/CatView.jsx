import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "../../../hooks/useForm";
import {
  setActiveCat,
  startDeletingCat,
  startSaveCat,
} from "../../../store/cat";

export const CatView = ({ activeCat }) => {
  const dispatch = useDispatch();
  const { id, title, description, formState, onInputChange } =
    useForm(activeCat);

  useEffect(() => {
    dispatch(setActiveCat(formState));
  }, [formState]);

  const onSaveCat = () => {
    dispatch(startSaveCat());
  };

  const onDelete = () => {
    dispatch(startDeletingCat());
  };

  return (
    <>
      <form className="g-3 animate__animated animate__fadeIn">
        <div class="mb-3 row">
          <label for="id" class="col-sm-2 col-form-label">
            Id:
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              readonly
              name="id"
              class="form-control-plaintext"
              id="id"
              value={id || ""}
              onChange={onInputChange}
            />
          </div>
        </div>
        <div class="col-auto  form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder=" "
            name="title"
            value={title || ""}
            onChange={onInputChange}
          />
          <label for="floatingInput">Titulo</label>
        </div>

        <div className="form-floating mb-3">
          <textarea
            className="form-control"
            name="description"
            placeholder=" "
            id="floatingTextarea"
            value={description || ""}
            onChange={onInputChange}
            cols="30"
            rows="10"
          ></textarea>
          <label for="floatingTextarea">Descripción</label>
        </div>
        <div className="col-auto">
          <button
            type="button"
            className="btn btn-primary mb-3"
            onClick={onSaveCat}
          >
            Actualizar Info
          </button>
          <button
            type="button"
            className="btn btn-danger mx-2 mb-3"
            onClick={onDelete}
          >
            Borrar Gato
          </button>
        </div>
      </form>
    </>
  );
};
