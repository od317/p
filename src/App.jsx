import {Routes,Route,Link, BrowserRouter, useLocation} from 'react-router-dom'
import { useRef, useState } from 'react'
import BookLayout from './BookLayout'
import Book from './pages/Book'
import BookList from './pages/BookList'
import Home from './pages/Home'
import NewBook from './pages/NewBook'
import NotFound from './pages/NotFound'
import BookRoutes from './BookRoutes'

export default function App(){

    const cards = useRef(null)
    const slider = useRef(null)
    let isPressed = false
    let cursorX = 0


    return(<>
        
           <div ref={slider} onMouseDown={(e)=>{
               isPressed = true
               cursorX = e.clientX - cards.current.offsetLeft
               slider.current.style.cursor = "grabbing"
               }}
               onMouseMove={(e)=>{
                    console.log(cursorX)
                    if (!isPressed) return
                    e.preventDefault()
                    cards.current.style.left = `${e.offsetX - cursorX}px`
                }}
                className=' relative w-full bg-red-500 '>
                <div ref={cards} className=' absolute w-full whitespace-nowrap overflow-hidden bg-red-500'>
 
                    <div className='bg-blue-500 inline-block w-[50%] text-center'>1</div>
                    <div className='bg-blue-600 inline-block w-[50%]'>2</div>
                    <div className='bg-blue-700 inline-block w-[50%]'>3</div>
                    <div className='bg-blue-800 inline-block w-[50%]'>4</div>
                    <div className='bg-blue-900 inline-block w-[50%]'>5</div>

                </div>
           </div>



    </>)
}