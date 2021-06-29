export default {
    setUser(state, action) {
        return {
            ...state,
            data: [
                action.payload
            ]
        }
    }
};
