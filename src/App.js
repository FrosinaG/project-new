import apiClient from "./Services/apiClient";
import { MdLocalFireDepartment } from "react-icons/md";
import React, { createContext, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./Components/Users";
import Userlink from "./Components/Userlink";
import Products from "./Components/Products";
import Productlink from "./Components/Productlink";
import Cart from "./Components/Cart";
import Cardlink from "./Components/Cardlink";
import Posts from "./Components/Posts";
import Postslink from "./Components/Postslink";
import Notfound from "./Components/Notfound";
import Nav from "./Components/Nav";
import Search from "./Components/Search";
import Login from "./Components/Login";
import { useNavigate } from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute";
import ListTodo from "./Components/ListTodo";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Newtodo from "./Components/Newtodo";
import Context1 from "./Components/Context1";
import ContextT from "./Components/ContextT";
import Async from "./Components/Async";

import { ContextProveder } from "./Components/NewContext";
import Loading from "./Components/Loading";
import { LoadingProvider } from "./Components/LoadingContext";
import { Provider } from "react-redux";
import store from "./state/store";
import Redux from "./Components/Redux";
import Redux1 from "./Components/Redux1";
import Pagination from "./Components/Pagination";
import UserPagination from "./Components/UserPagination";

// export const context = React.createContext(null);
// // //
// const App = () => {
//   const [balls, setBalls] = useState(5);

const App = () => {
  // const [balls,setBalls]=useState(80);
  // useEffect(() => {
  //  console.log("balls",balls);
  //  return ()=>{};
  // }, [balls])

  return (
    <BrowserRouter>
      <Provider store={store}>
        <LoadingProvider>
          <ContextProveder>
            <Nav />
            <Search />
            <Loading />
            <Routes>
              <Route element={<PrivateRoute />}>
                <Route path="productlink/:id" element={<Productlink />} />
              </Route>
              <Route path="/" element={<Hero />} />
              <Route path="users" element={<Users />} />
              <Route path="userlink/:id" element={<Userlink />} />
              <Route path="product" element={<Products />} />

              <Route path="card" element={<Cart />} />
              <Route path="cardlink/:id" element={<Cardlink />} />
              <Route path="posts" element={<Posts />} />
              <Route path="postslink/:id" element={<Postslink />} />
              <Route path="listtodo" element={<ListTodo />} />
              <Route path="newtodo" element={<Newtodo />} />
              <Route path="asy" element={<Async />} />
              <Route path="redux" element={<Redux />} />
              <Route path="redux1" element={<Redux1 />} />
              <Route path="pag" element={<Pagination />} />
              <Route path="usepag" element={<UserPagination />} />

              <Route path="login" element={<Login />} />
              <Route path="*" element={<Notfound />} />
              <Route path="contextt" element={<ContextT />} />
              <Route path="context1" element={<Context1 />} />
            </Routes>
          </ContextProveder>

          <ListTodo />
          <Footer />
        </LoadingProvider>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
