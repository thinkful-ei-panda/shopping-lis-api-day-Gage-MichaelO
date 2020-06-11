
const BASE_URL = 'https://thinkful-list-api.herokuapp.com/gage';

function errorHandler (...args) {
  let error;
  return fetch(...args)
    .then(res => {
      if(!res.ok) {
        error = {code : res.status};
      }
      return res.json();
    })
    .then(data => { 
      if (error) {
        error.message = data.message; 
        return Promise.reject(error);
      }
      return data; 
    }
    );

}

function getItems(){
  return errorHandler(`${BASE_URL}/items`);
}

const createItem = function(name){
  const newItem  = JSON.stringify({ name }); 
  
  return errorHandler(`${BASE_URL}/items`,{
    method : 'POST',
    headers : {
      'Content-Type': 'application/json'    
    },
    body : newItem
  });  
};

const updateItem = function(id, updateData){
  const newData = JSON.stringify(updateData);
  return fetch(`${BASE_URL}/items/${id}`,{
    method: 'PATCH',
    headers: {
      'Content-Type' : 'application/json',
    },
    body: newData 
  });
};

const deleteItem = function(id){
  return errorHandler(`${BASE_URL}/items/${id}`,{
    method : 'DELETE',
  });
};

export default{
  getItems,
  createItem,
  updateItem,
  deleteItem,
};