import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthStacks from '~routes/AuthStack';
import RootStacks from '~routes/RootStack';
import { checkAuthenticated } from '~store/reducers/userSlice';

const AuthNavigator = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);
    const token = useSelector(state => state.user.token);

    useEffect(() => {
        if (token && token !== null) {
            dispatch(checkAuthenticated());
        }
    }, [token])

    if (isAuthenticated) {
        return (
            <RootStacks />
        )
    }
    return <AuthStacks />
}

export default AuthNavigator
