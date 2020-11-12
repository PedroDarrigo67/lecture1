import React, { useEffect } from "react";
import SpinnerLoad from "../components/SpinnerLoad";
import { useDispatch, useSelector } from "react-redux";
import { cleanErrorMsgList } from "../state/actions/conosActions";
import NotesList from "../containers/NotesList";
import { fetchList } from "../state/actions/conosActions";
import ErrorMessageModal from "../components/ErrorMessageModal";

const ListadoConosRuta = () => {
  const centrales = useSelector((state) => state.centrales);
  const dispatch = useDispatch();

  useEffect(() => {
    window.centralesInfo.forEach(({ ip, central }) => {
      dispatch(fetchList(ip, central));
    });
  }, []);

  const handleClearErrorMessage = () => {
    dispatch(cleanErrorMsgList());
  };

  return (
    <div>
      {centrales.isFetching || centrales.entities === null ? <SpinnerLoad /> :  <NotesList />}
      <ErrorMessageModal
        visible={centrales.fetchListErrorMessage != null}
        errorMessage={centrales.fetchListErrorMessage}
        handleClose={handleClearErrorMessage}
      />
      ;
    </div>
  );
};

export default ListadoConosRuta;
