import React, { useEffect } from "react";
import SpinnerLoad from "../components/SpinnerLoad";
import { useDispatch, useSelector } from "react-redux";
import { cleanErrorMsgList } from "../state/actions/conosActions";
import NotesList from "../containers/NotesList";
import { fetchList } from "../state/actions/conosActions";
import ErrorMessageModal from "../components/ErrorMessageModal";

const ListadoConosRuta = () => {
  const lista = useSelector((state) => state.lista);
  const dispatch = useDispatch();

  useEffect(() => {
    window.centralesInfo.forEach(({ ip, central }) => {
      dispatch(fetchList(ip, central));
    });
  }, []);

  const handleClearErrorMessage = () => {
    dispatch(cleanErrorMsgList());
  };

  if (lista.isFetching || lista.entities === null) {
    return <SpinnerLoad />;
  }

  return (
    <div>
      <NotesList />
      <ErrorMessageModal
        visible={lista.fetchListErrorMessage != null}
        errorMessage={lista.fetchListErrorMessage}
        handleClose={handleClearErrorMessage}
      />
      ;
    </div>
  );
};

export default ListadoConosRuta;
