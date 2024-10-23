import { useEffect } from "react";

useEffect(() => {
  //API call
  GetRestaurants();
}, []); //Empty Dependency Array

OR;

useEffect(() => {
  //API call
  GetRestaurants();
}); //No Dependency Array

useEffect(() => {
  //API call
  GetRestaurants();
}, [searchText]); //Non-Empty Dependency Array
