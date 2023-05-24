import React from 'react';
import ReactDOM from 'react-dom/client';
import TicTacToe from './TicTacToe';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCXSa8YS7yAkwlqJapg5ryHOYVSOT-VPLE",
  authDomain: "tic-tac-toes1.firebaseapp.com",
  projectId: "tic-tac-toes1",
  storageBucket: "tic-tac-toes1.appspot.com",
  messagingSenderId: "963118357749",
  appId: "1:963118357749:web:a561be00dfbc35e8ab79bc",
  measurementId: "G-PKCD1JS39L"
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TicTacToe />
  </React.StrictMode>
);

// Initialize Firebase
initializeApp(firebaseConfig);