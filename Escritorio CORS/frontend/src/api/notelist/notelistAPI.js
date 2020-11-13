import { panicoServer } from "../panicoServer";

export const fetchNoteListAPI = async (ip) => {  
  return panicoServer
    .get(`http://${ip}/api/notes`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (error.response) {
        return error.response.data;
      } else {
        throw new Error(
          `Error al intentar obtener la información de la central IP: http://${ip}/api/notes`
        );
      }
    });
};

export const fetchConoAPI = async (ip) => {
  return panicoServer
    .get(`http://${ip}/api/notes`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (error.response) {
        return error.response.data;
      } else {
        throw new Error(
          `Error al intentar obtener la información del cono`
        );
      }
    });
};
