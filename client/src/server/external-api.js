import React, { useState } from 'react';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { Button } from "react-bulma-components";
import axios from "axios";
import Loading from "../auth/Loading";

const ExternalApi = () => {
    const [message, setMessage] = useState('');
    const serverUrl = process.env.REACT_APP_SERVER_URL;

    const { getAccessTokenSilently } = useAuth0();

    const callApi = async () => {
        try {
            const response = await fetch(
                `${serverUrl}/api/messages/public-message`
            );

            const responseData = await response.json();

            setMessage(responseData.message);
        } catch (error) {
            setMessage(error.message);
        }
    };

    const callSecureApi = async () => {
        try {
            const token = await getAccessTokenSilently();
            console.log(serverUrl);
            const response = await fetch(
                    `${serverUrl}/api/messages/protected-message`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

            const responseData = await response.json();

            setMessage(responseData.message);
        } catch (error) {
            setMessage(error.message);
        }
    };
    

    return (
        <div className="container">
            <Button onClick={callApi} color="primary" className="mt-5">
                Get Public Message
            </Button>

            <Button onClick={callSecureApi} color="light" className="mt-5">
                Get Private Message
            </Button>

            {message && (
                <div className="mt-6">
                    {JSON.stringify(message, null, 2)}
                </div>
            )

            }
        </div>
    )
}

export default ExternalApi;
// export default withAuthenticationRequired(ExternalApi, {
//     onRedirecting: () => <Loading />,
// });