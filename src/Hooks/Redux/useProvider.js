const useProvider = (Actions, Provider) => {
    const provider = (state = Provider, action) => {
        const fn = Actions[action.type]
        return fn ? fn(state, action) : state;
    }
    return provider;
};

export {useProvider}
