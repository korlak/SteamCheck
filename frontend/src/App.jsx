import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import { Login, Register, Me, Upload, CreatePost, GetAllPosts, GetOnePost, Test, GetUserGames, GetUserAchievement, Patch, DeletePost} from '../components/links/index';

import  Login from './links/login'
import  Register from './links/register'
import  Me from './links/me'
import  Upload from './links/upload'
import  CreatePost from './links/createPost'
import  GetAllPosts from './links/getAllPosts'
import  GetOnePost from './links/getOnePost'
import  Test from './links/test'
import  GetUserGames from './links/getUserGames'
import  GetUserAchievement from './links/getUserAchievement'
import  Patch from './links/patchPost'
import  DeletePost from './links/deletePost'
import MainPage from './links/mainPage'

export default function App() {

  return (
    <Router>
      <Routes>
       <Route path='/' element={ <MainPage />}></Route>
       <Route path='/auth/login' element={ <Login />}></Route>
       <Route path='/auth/register' element={ <Register />}></Route>
       <Route path='/auth/me' element={ <Me />}></Route>
       <Route path='/upload' element={ <Upload />}></Route>
       <Route path='/posts/create' element={ <CreatePost />}></Route>
       <Route path='/posts/getAll' element={ <GetAllPosts />}></Route>
       <Route path='/posts/getOne/:id' element={ <GetOnePost />}></Route>
       <Route path='/test' element={ <Test />}></Route>
       <Route path='/steam/userGames' element={ <GetUserGames />}></Route>
       <Route path='/steam/userGameAchievements/:userId/:gameId' element={ <GetUserAchievement />}></Route>
       <Route path='/posts/patch/:id' element={ <Patch />}></Route>
       <Route path='/posts/delete/:id' element={ <DeletePost />}></Route>
      </Routes>
    </Router>
  );
}
