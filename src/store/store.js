import { configureStore } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    mediaTypes: [
        {typeId: 1, name:"Película"},
        {typeId: 2, name:"Serie"},
        {typeId: 3, name:"Videojuego"},
        {typeId: 4, name:"E-book"}
    ],
    mediaList: [
        { id: uuidv4(), title: "El origen", imageUrl: "./src/assets/type-movie.png", typeId: 1, creationDate: "2024-02-01" },
        { id: uuidv4(), title: "Titanic", imageUrl: "./src/assets/type-movie.png", typeId: 1, creationDate: "2024-02-02"  },
        { id: uuidv4(), title: "Comando", imageUrl: "./src/assets/type-movie.png", typeId: 1, creationDate: "2024-02-03"  },

        { id: uuidv4(), title: "Castle", imageUrl: "./src/assets/type-series.png", typeId: 2, creationDate: "2024-02-04" },
        { id: uuidv4(), title: "El mentalista", imageUrl: "./src/assets/type-series.png", typeId: 2, creationDate: "2024-02-05"  },
        { id: uuidv4(), title: "Dinastía", imageUrl: "./src/assets/type-series.png", typeId: 2, creationDate: "2024-02-06"  },
        
        { id: uuidv4(), title: "Pro Evolution Soccer 2014", imageUrl: "./src/assets/type-videogame.png", typeId: 3, creationDate: "2024-02-07"  },
        { id: uuidv4(), title: "Grand Theft Auto V", imageUrl: "./src/assets/type-videogame.png", typeId: 3, creationDate: "2024-02-08"  },
        { id: uuidv4(), title: "Super Mario Bros", imageUrl: "./src/assets/type-videogame.png", typeId: 3, creationDate: "2024-02-09"  },

        { id: uuidv4(), title: "Bajo tierra seca", imageUrl: "./src/assets/type-ebook.png", typeId: 4, creationDate: "2024-02-10"  },
        { id: uuidv4(), title: "El hijo olvidado", imageUrl: "./src/assets/type-ebook.png", typeId: 4, creationDate: "2024-02-11"  },
        { id: uuidv4(), title: "Las hijas de la criada", imageUrl: "./src/assets/type-ebook.png", typeId: 4, creationDate: "2024-02-20"  },
    ],
};


const mediaTypesDictionary = {};
  initialState.mediaTypes.forEach(type => {
  mediaTypesDictionary[type.typeId] = type.name;
});



const mediaReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NEW_RECORD':
      return {
        ...state,
        mediaList: [...state.mediaList, action.payload]
      };
    case 'EDIT_RECORD':
        return {
          ...state,
          mediaList: state.mediaList.map(media => {
            if (media.id === action.payload.id) {
              // Si el ID del medio coincide, reemplaza el medio existente con el medio actualizado
              return action.payload;
            } else {
              // De lo contrario, devuelve el medio sin cambios
              return media;
            }
          })
    };
    case 'DELETE_RECORD':
      return {
        ...state,
        mediaList: state.mediaList.filter(media => media.id !== action.payload.id)
    };
    default:
      return state;
  }
};

export const deleteRecord = (deleteRecord) => ({
  type: 'DELETE_RECORD',
  payload: deleteRecord
});
export const updateRecord = (editRecord) => ({
  type: 'EDIT_RECORD',
  payload: editRecord
});
export const addNewRecord = (newRecord) => ({
  type: 'ADD_NEW_RECORD',
  payload: newRecord
});

export default configureStore({
  reducer: {
    media: mediaReducer
  }
});
export { mediaTypesDictionary };

export const getItemById = (state, id) => {
  return state.media.mediaList.find(item => item.id === id);
};
