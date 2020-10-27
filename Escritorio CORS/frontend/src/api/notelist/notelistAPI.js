import { panicoServer } from "../panicoServer";

export const fetchNoteListAPI = async (ip) => {
  let notelist;
  await panicoServer
    .get(`http://${ip}/api/notes`)
    .then((response) => {
      notelist = response.data;
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