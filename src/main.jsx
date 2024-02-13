import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home.jsx'
import First from './Component/First/First.jsx'
import Friends from './Component/Friends/Friends.jsx';
import About from './Component/About/About.jsx';
import Contact from './Component/Contact/Contact.jsx';
import ErrorPage from './Component/ErrorPage/ErrorPage.jsx';
import FriendDetail from './Component/FriendDetail/FriendDetail.jsx';
import Posts from './Component/Posts/Posts.jsx';
import PostDetail from './Component/PostDetail/PostDetail.jsx';
import NotFound from './Component/NotFound/NotFound.jsx';
import Form from './Component/Form/Form.jsx';
import StateFullForm from './Component/StateFullForm/StateFullForm.jsx';
import RefForm from './Component/RefForm/RefForm.jsx';
import HookForm from './Component/HookForm/HookForm.jsx';
import CallReusableForm from './Component/CallReusableForm/CallReusableForm.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <First></First>
      },
      {
        path: "friends",
        element: <Friends></Friends>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: "friend/:friendId",
        element: <FriendDetail></FriendDetail>,
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      {
        path: "about",
        element: <About></About>
      },
      {
        path: "contact",
        element: <Contact></Contact>
      },
      {
        path: "posts",
        element: <Posts></Posts>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path: "post/:postId",
        element: <PostDetail></PostDetail>,
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
      {
        path: "form",
        element: <Form></Form>
      },
      {
        path: "stateFull",
        element: <StateFullForm></StateFullForm>
      },
      {
        path: "refForm",
        element: <RefForm></RefForm>
      },
      {
        path: "hookForm",
        element: <HookForm></HookForm>
      },
      {
        path: "reusableForm",
        element: <CallReusableForm></CallReusableForm>
      },
      {
        path: '*',
        element: <NotFound></NotFound>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
