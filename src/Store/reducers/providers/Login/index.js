import Actions from './actions';
import Provider from './provider';

const LoginProvider = (state = Provider, action) => {
    const fn = Actions[action.type]
    return fn ? fn(state, action) : state;
};

export default LoginProvider;
