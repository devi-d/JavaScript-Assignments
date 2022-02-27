import fetch from "node-fetch";

async function extApiCalling() {
    try {
        let response= await fetch(api);                 //Response of  Api 
        let jsonObject= await response.json();          //Api response to json format
        let dataArray= await jsonObject.data;           //json response to dataArray
        let extractedObject= dataArray.map( element => {//mentionning the required data's
            return {
                "id": element.id,
                "email": element.email,
                "firstName": element.first_name,
                "lastName": element.last_name
            }
        });
        return await extractedObject;
    }
    catch(error) {
        console.log(error)
    }
}
 let api= 'https://reqres.in/api/users';            //API address
 let dataResponse= await extApiCalling(api);        //function call
 console.log(dataResponse);