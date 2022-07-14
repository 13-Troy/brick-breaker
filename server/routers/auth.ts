import axios from "axios";

export async function auth(req: any, res: any, next: any) {

  const cookie = req.cookies || {};

  if (!cookie.authCookie) {
    res.status(401).send('Unauthorized')
    return
  }


  if (cookie.authCookie && !req.session.user) {    
    try {
      const response = await axios.get('http://ya-praktikum.tech/api/v2/auth/user/', {
        headers: {
          Accept: 'application/json',
          Cookie: req.headers.cookie
        }
      })

      req.session.user = response.data;
      console.log(req.session.user)
    } catch (e) {
      console.log(e)
      res.status(401).send('Unauthorized')
      return
    }
  }
  next();

}
