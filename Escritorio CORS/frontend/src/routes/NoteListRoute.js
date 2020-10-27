import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import NotesList from "../containers/NotesList";
import { fetchList } from "../state/actions/conosActions";

const ListadoConosRuta = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.centralesInfo.forEach(({ ip }) => {
      dispatch(fetchList(ip));
    });
  }, []);

  return (
    <div>
      <NotesList />
    </div>
  );
};

export default ListadoConosRuta;
