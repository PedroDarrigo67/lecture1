import { panicoServer } from "../panicoServer";

export const fetchNoteListAPI = async (ip, central) => {
  let notelist;
  await panicoServer
    .get(`http://${ip}:8000/api/notes`)
    .then((response) => {
      notelist = response.data;
      central = response.data
    })
    .catch((error) => {
      if (error.response) {
        notelist = error.response.data;
      } else {
        throw new Error(
          "Error al intentar obtener la información de los conos"
        );
      }
    });
  return notelist;
};