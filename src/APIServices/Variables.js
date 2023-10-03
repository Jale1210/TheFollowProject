  let domain = (new URL(window.location.href));
  domain = domain.hostname;
  let BASE_URL_v

    // let apiKey = 'cf31cb381eae9003640551cfc063241a&action=services'
    // let action = 'services'

  if (domain == 'localhost') {
     BASE_URL_v = `https://socialpanel.app/api/v2`
     //${apiKey}&action=${action}
//  
} else {
      BASE_URL_v = 'https://socialpanel.app/api/v2'
  }

 export const BASE_URL = BASE_URL_v;
