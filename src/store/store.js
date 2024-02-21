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
        { id: uuidv4(), title: "Origen", imageUrl: "./src/assets/type-movie.png", typeId: 1, creationDate: new Date("2024-02-01T12:55:00.245Z") },
        { id: uuidv4(), title: "Titanic", imageUrl: "./src/assets/type-movie.png", typeId: 1, creationDate: new Date("2024-02-02T10:00:00.245Z")  },
        { id: uuidv4(), title: "Comando", imageUrl: "./src/assets/type-movie.png", typeId: 1, creationDate: new Date("2024-02-03T12:00:00.245Z")  },

        { id: uuidv4(), title: "Castle", imageUrl: "./src/assets/type-series.png", typeId: 1, creationDate: new Date("2024-02-04T12:55:00.245Z") },
        { id: uuidv4(), title: "El mentalista", imageUrl: "./src/assets/type-series.png", typeId: 1, creationDate: new Date("2024-02-05T10:00:00.245Z")  },
        { id: uuidv4(), title: "Dinastía", imageUrl: "./src/assets/type-series.png", typeId: 1, creationDate: new Date("2024-02-06T12:00:00.245Z")  },
        
        { id: uuidv4(), title: "Pro Evolution Soccer 2009", imageUrl: "./src/assets/type-videogame.png", typeId: 2, creationDate: new Date("2024-02-07T12:00:00.245Z")  },
        { id: uuidv4(), title: "Grand Theft Auto V", imageUrl: "./src/assets/type-videogame.png", typeId: 2, creationDate: new Date("2024-02-08T12:00:00.245Z")  },
        { id: uuidv4(), title: "Super Mario Bros", imageUrl: "./src/assets/type-videogame.png", typeId: 2, creationDate: new Date("2024-02-09T12:00:00.245Z")  },

        { id: uuidv4(), title: "Bajo tierra seca", imageUrl: "./src/assets/type-ebook.png", typeId: 3, creationDate: new Date("2024-02-10T12:00:00.245Z")  },
        { id: uuidv4(), title: "El hijo olvidado", imageUrl: "./src/assets/type-ebook.png", typeId: 3, creationDate: new Date("2024-02-11T12:00:00.245Z")  },
        { id: uuidv4(), title: "Las hijas de la criada", imageUrl: "./src/assets/type-ebook.png", typeId: 3, creationDate: new Date("2024-02-20T12:00:00.245Z")  },
    ],
};

const mediaReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default configureStore({
  reducer: {
    media: mediaReducer
  }
});
