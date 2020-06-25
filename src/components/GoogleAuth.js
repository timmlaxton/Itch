import React from 'react';

class GoogleAuth extends React.Component{
    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: "763967793792-4di4cntm1d1imin86ls7sg25ld95uh8t.apps.googleusercontent.com",
                scope: 'email'
            });
        });
    }


    render() {
        return <div>Google Auth</div>;
    };
};

export default GoogleAuth;