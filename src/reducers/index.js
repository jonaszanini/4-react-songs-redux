import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: "Intentions", duration: "4:30" },
        { title: "Feeling good", duration: "5:00" },
        { title: "Let it go", duration: "4:30" },
        { title: "Any other", duration: "3:40" },
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});