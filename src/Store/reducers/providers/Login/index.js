import {useProvider} from "~/Hooks/Redux";
import Actions from './actions';
import Provider from './provider';

const LoginProvider = useProvider(Actions, Provider);

export default LoginProvider;
