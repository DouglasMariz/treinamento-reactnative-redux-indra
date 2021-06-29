import Actions from './actions';
import Provider from './provider';

const HomeProvider = (state = Provider, action) => {
    const fn = Actions[action.type]
    return fn ? fn(state, action) : state;
};

export default HomeProvider;


// const provider = (state = Provider, action) => {
//     const fn = Actions[action.type]
//     return fn ? fn(state, action) : state;
// };
// return provider
