import { useDispatch, useSelector } from "react-redux"
import authSelectors from "redux/auth/auth-selectors";
import defaultAvatar from './download.jpg'
import authOperations from '../../../redux/auth/auth-operations'

export const UserInfo = () => {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUserName);
    const avatar = defaultAvatar;
    
    return (
        <div>
            <img src={avatar} alt='img' width="32" />
            <p>Glad to see you, {name}</p>
            <button type='button' onClick={() => dispatch(authOperations.logOut())}>
                Log OUT
            </button>
            
        </div>
    )
}