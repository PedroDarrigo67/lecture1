import React, { useEffect } from "react";
import NoteDetails from "../containers/NoteDetails";
import SpinnerLoad from "../components/SpinnerLoad";
import { useDispatch, useSelector } from "react-redux";
import { fetchCono } from "../state/actions/conosActions";


const NoteDetailsRoute = () => {

  const centrales = useSelector((state) => state.centrales);
  const dispatch = useDispatch();

  useEffect(() => {
    window.centralesInfo.forEach(({ ip, central }) => {
      dispatch(fetchCono(ip, central));
    });
  }, []);

  if (centrales.isGetting || centrales.currentEntity === null) {
    return <SpinnerLoad />;
  }
  return (
    <div>
      <NoteDetails />
    </div>
  );
};

export default NoteDetailsRoute;