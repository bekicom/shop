import React from 'react'
import Carousel from 'react-material-ui-carousel'
// import { Paper, Button } from '@mui/material'
import c1 from '../assets/corusell/c1.png'
import c2 from '../assets/corusell/c2.png'
import c3 from '../assets/corusell/c3.png'

export default function Corusel() {

    var items = [
        {
            image: c1

        },
        {
            image: c2

        },
        {
            image: c3

        },


    ]

    return (
        <div>
            <Carousel interval={3000} timeout={3000} animation="fade">
                {
                    items.map((item) => (
                        <div className='corusell'>
                            <img src={item.image} alt="" />
                        </div>
                    ))
                }
            </Carousel>

        </div>
    )
}


