import api from './api';

const error = null; 

const items = [];
let hideCheckedItems = false;

const findById = function (id) {
  return this.items.find(currentItem => currentItem.id === id);
};

const addItem = function (item) {
  this.items.push(item);
};

const findAndUpdate = function(id, newData){
  const currentItem = this.findById(id);
  Object.assign(currentItem ,newData);
};

const findAndDelete = function (id) {
  this.items = this.items.filter(currentItem => currentItem.id !== id);
};

const toggleCheckedFilter = function () {
  this.hideCheckedItems = !this.hideCheckedItems;
};

const setError = function(error){
  this.error = error;
}

export default {
  items,
  hideCheckedItems: hideCheckedItems,
  findById,
  addItem,
  findAndUpdate,
  findAndDelete,
  toggleCheckedFilter,
  setError,
};