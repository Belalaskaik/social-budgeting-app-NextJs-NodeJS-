'use client';

import Link from 'next/link';
import { useEffect } from 'react';

import { useUserService } from '_services';
import { Spinner } from '_components';
import Dashboard from '../dashboard/page';

export default Home;

function Home() {
    const userService = useUserService();
    const user = userService.currentUser;

    useEffect(() => {
        userService.getCurrent();
    }, []);

    if (user) {
        return (
            <>
                <h1>Hi {user.firstName}!</h1>
                <p>You&apos;re logged in</p>
                <Dashboard />
            </>
        );
    } else {
        return <Spinner />;
    }
}
