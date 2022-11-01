import { useStore } from '@context/App/AppProvider';
import { Navigate } from 'react-router-dom';

const Protected = ({ children }) => {
    const { user } = useStore()

    if(Object.keys(user).length === 0){
        return <Navigate to={'/'} />
    }

    return children
}

export default Protected
