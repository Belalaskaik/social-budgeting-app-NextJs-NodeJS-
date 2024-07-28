import { useEffect, useState } from 'react';
import { useUserService } from '_services';
import { Spinner } from '_components';
import Dashboard from '../dashboard/page';

export default function Home() {
    const userService = useUserService();
    const [user, setUser] = useState(userService.currentUser);

    useEffect(() => {
        const fetchUser = async () => {
            await userService.getCurrent();
            setUser(userService.currentUser);
        };
        
        fetchUser();
    }, []);

    if (user) {
        return (
            <>
                <h1>Hi {user.firstName}!</h1>
                <p>You're logged in</p>
                <Dashboard />
            </>
        );
    } else {
        return <Spinner />;
    }
}
