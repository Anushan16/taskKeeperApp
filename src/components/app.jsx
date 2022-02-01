import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import Note from './Note.jsx';
import Footer from './Footer.jsx';
import notes from '../notes.js';


const App = () => 
    
   
     <div>
        <Header/>
        {notes.map(note =>(     
        <Note title = {note.title} content = {note.content} key = {note.key} />
        ))}
        <Footer/>
    </div> 
;

export default App;