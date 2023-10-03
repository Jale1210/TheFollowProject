import axios from 'axios';
import { BASE_URL } from './Variables'

  const API_URL_SOCIAL = `${BASE_URL}`

 export const SocialPanel = {
    postPanel(params){
        const url = `${API_URL_SOCIAL}?key=${params.apiKey}&action=${params.action}`

        // console.log(url)

        return axios.get(url)
//         const url = `${API_URL_SURVEY}/${params.hash}`;
//         return axios.get(url)
    },


    trytoUseActions(){

let action 

    if  (action == ' '){
       
    }
    else if( action == 'add'){
        
      // key: 	Your API key
      // action	add
      // service	Service ID
      // link	Link to page
      // quantity	Needed quantity
      // runs (optional)	Runs to deliver
      // interval (optional)	Interval in minutes

 
    }
    else if(action == 'status'){
      action =  'status'
    }
    else if(action == 'refill'){

    }
    else if (action == 'balance'){

      action = balance 
 
    }


    }



 

 
 }
