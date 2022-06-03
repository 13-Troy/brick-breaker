

import fetch from 'cross-fetch';


import { UrlSite } from '../client/services/const';


export async function getInitialState() {
  try {

    // const response = await fetch('https://randomuser.me/api/', {
    
    // });

    const response = await fetch(`${UrlSite.URL}/auth/user`, {
      credentials: 'include',
    });


   

   

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log('result', result);
    return result;
  } catch (err) {
    console.log(err);
  }
}
