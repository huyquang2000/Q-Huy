import { users } from '../Data/Userdata'

export function Check_Login(usernumber, password) {
    try {
        let data = users.find(user => (user.usernumber === usernumber && user.password === password));
        return data;
    }
    catch (e) {
        console.log(e);
        return []
    }
}