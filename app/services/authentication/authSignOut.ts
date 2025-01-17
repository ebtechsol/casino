import { deleteAuthSession } from '@/lib/authenticationSession'

const authSignOut = async () => 
{
    await deleteAuthSession();
}

export default authSignOut;