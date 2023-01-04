import React from 'react';
import { useEffect, useState } from 'react';
import './App.css'
import ListadoPeliculas from './peliculas/ListadoPeliculas';
import { landingPageDto } from './peliculas/Peliculas.model';
import Button from './utils/Button';


function App() {

  const [peliculas, setPelculas] = useState<landingPageDto>({})

  useEffect(() => {
    const timerId = setTimeout(() => {
      setPelculas({enCartelera : [
        {
          id : 1,
          titulo : 'Lord of the rings : the fellowship of ring',
          poster : 'https://imgs.search.brave.com/5cNzZj74YgWaRXQcDpNTRzLSaYBUtz6Nd3ct76hIm6I/rs:fit:312:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5M/MnhQRlgwcDU1UzRP/eWRob3B0MXR3SGFM/USZwaWQ9QXBp'
      
        },
        {
          id : 2,
          titulo : 'Sherk',
          poster : 'https://imgs.search.brave.com/nW0EWh5EUoxgGYFk5F1AGgAAxnwkzlgvPtjJAl0p_Gw/rs:fit:1000:1200:1/g:ce/aHR0cHM6Ly9waWNm/aWxlcy5hbHBoYWNv/ZGVycy5jb20vMTQ3/LzE0NzQxOS5qcGc'
        }
      ],
      proximosEstrenos : [
        /*
        {
          id : 3,
          titulo : 'Avatar',
          poster : 'https://imgs.search.brave.com/9fHzYqxYAu518lQiFRYVum6UihE2UhEFzg_WRTSrDvI/rs:fit:320:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5v/TDhIemRKVDM3czU1/enlxVjZtMThRSGFL/OCZwaWQ9QXBp'
      
        },
        {
          id : 4,
          titulo : 'Puss in Boots',
          poster : 'https://imgs.search.brave.com/9csIkfYCoii5kDR6NVpc-3eBEnCiU2YPCQUQZ0q4Oq8/rs:fit:800:1000:1/g:ce/aHR0cHM6Ly9pLnJl/ZGQuaXQvYzRzNDJq/MHlramM5MS5qcGc'
        }
        */
      ]

    })
    }, 1000)

    return () => clearTimeout(timerId)
  })

  return (
    <>
    <div className='container'>
      <Button>Mi componente boton</Button>
    <h3>En cartelera</h3>
    <ListadoPeliculas peliculas={peliculas.enCartelera} />

    <h3>Próximos estrenos</h3>
    <ListadoPeliculas peliculas={peliculas.proximosEstrenos} />
    </div>
    
    </>
  );

}

export default App;
