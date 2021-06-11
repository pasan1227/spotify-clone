
export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    //token: 'BQBHKfvM9APAB7VddQ8awCcA4_YlA9uaNSZ_G4rMIBgYeGj13Xx1Wo2plu5Bb6c8JrN2PZpN45aFuRpRX--wAwpqLDABDNPIaBpTF5h2NiwuKXCIi2CCJUzVoXeua6spm897DA3q6Uwg6KZQEW4jg9j1H4_D4nYRdiOX43IQ1L1oZ_xYqEeb',
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };

            case "SET_TOKEN":
                return {
                    ...state,
                    token: action.token,
                };

            case "SET_PLAYLISTS":
                return {
                    ...state,
                    playlists: action.playlists,
                };

            case "SET_DISCOVER_WEEKLY":
                return {
                    ...state,
                    discover_weekly: action.discover_weekly,
                }
            

            default: 
                return state;
    }
}

export default reducer;