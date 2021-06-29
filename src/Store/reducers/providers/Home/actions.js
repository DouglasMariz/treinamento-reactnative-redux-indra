export default {
    setData(state, action) {
        return {
            ...state,
            data: [
                ...state.data,
                action.payload
            ]
        }
    }
};
