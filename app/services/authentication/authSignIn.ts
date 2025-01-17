import { setAuthSession } from '@/lib/authenticationSession';

const authSignIn = async (email: string, password: string) : Promise<boolean> => 
{
    let authSignInStatus = false;
    try {
        const request = {
            email, password
        }
        const requestSource = "/api/authenticateUser";
        const response = await fetch(requestSource, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
        })
        const responseJson = await response.json();
        if(responseJson.status == true){
            await setAuthSession(responseJson.data)
            authSignInStatus = true;
        }
    } catch (err) {
        console.log(err);
    }    
    return authSignInStatus;
}

export default authSignIn;