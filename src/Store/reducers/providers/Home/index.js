import {useProvider} from '~/Hooks/Redux';
import Actions from './actions';
import Provider from './provider';

const HomeProvider = useProvider(Actions, Provider)

export default HomeProvider;
