import axios from "axios";

export async function auth(req: any, res: any, next: any) {

    const cookie = req.cookie;

    if (!cookie.authCookie) {
        res.status(401).send('Unauthorized');
        return
    }

    if (cookie.authCookie && !req.session.user) {
        const response = await axios.post('http://ya-praktikum.tech/api/v2/auth/user/', {
            Headers: {
                Cookie: cookie
            }
        })
        req.session.user = await response.data.json();
    }

    next();
}
