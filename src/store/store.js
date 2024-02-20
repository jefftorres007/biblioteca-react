import { configureStore } from '@reduxjs/toolkit';

const initialState = {
    mediaTypes: [
        {typeId: 1, name:"Película"},
        {typeId: 2, name:"Serie"},
        {typeId: 3, name:"Videojuego"},
        {typeId: 4, name:"E-book"}
    ],
    mediaList: [
        { id: 1, title: "Película 1", imageUrl: "https://via.placeholder.com/150", typeId: 1, creationDate: new Date("2024-02-20T12:55:00.245Z") },
        { id: 2, title: "Película 2", imageUrl: "https://via.placeholder.com/150", typeId: 1, creationDate: new Date("2024-02-20T10:00:00.245Z")  },
        { id: 3, title: "Película 3", imageUrl: "https://via.placeholder.com/150", typeId: 1, creationDate: new Date("2024-02-20T12:00:00.245Z")  },
        
        { id: 4, title: "Videojuego 1", imageUrl: "https://via.placeholder.com/150", typeId: 2, creationDate: new Date("2024-02-20T12:00:00.245Z")  },
        { id: 5, title: "Videojuego 2", imageUrl: "https://via.placeholder.com/150", typeId: 2, creationDate: new Date("2024-02-20T12:00:00.245Z")  },
        { id: 6, title: "Videojuego 3", imageUrl: "https://via.placeholder.com/150", typeId: 2, creationDate: new Date("2024-02-20T12:00:00.245Z")  },

        { id: 7, title: "E-book 1", imageUrl: "https://via.placeholder.com/150", typeId: 3, creationDate: new Date("2024-02-20T12:00:00.245Z")  },
        { id: 8, title: "E-book 2", imageUrl: "https://via.placeholder.com/150", typeId: 3, creationDate: new Date("2024-02-20T12:00:00.245Z")  },
        { id: 9, title: "E-book 3", imageUrl: "https://via.placeholder.com/150", typeId: 3, creationDate: new Date("2024-02-20T12:00:00.245Z")  },
        { id: 10, title: "E-book 3", imageUrl: "https://via.placeholder.com/150", typeId: 3, creationDate: new Date("2024-02-20T12:00:00.245Z")  },
        { id: 11, title: "E-book 3", imageUrl: "https://via.placeholder.com/150", typeId: 3, creationDate: new Date("2024-02-20T12:00:00.245Z")  },
        { id: 12, title: "E-book 3", imageUrl: "https://via.placeholder.com/150", typeId: 3, creationDate: new Date("2024-02-20T12:00:00.245Z")  },
        { id: 14, title: "E-book 3", imageUrl: "https://via.placeholder.com/150", typeId: 3, creationDate: new Date("2024-02-20T12:00:00.245Z")  },
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
