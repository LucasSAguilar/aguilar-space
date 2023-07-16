import React from 'react'
import home from '../../assets/icones/home-ativo.png'
import maisCurtidas from '../../assets/icones/mais-curtidas-inativo.png'
import maisVistas from '../../assets/icones/mais-vistas-inativo.png'
import novas from '../../assets/icones/novas-inativo.png'
import surpreendaMe from '../../assets/icones/surpreenda-me-inativo.png'
import styles from './menu.Module.scss';

export default function Menu() {
  return (
    <nav className='menu'>
      <ul className='menu__lista'>
        <li className='menu__item'>
          <img src={home} alt="" />
          <a href="/">Início</a>
        </li>
        <li className='menu__item'>
          <img src={maisCurtidas} alt="" />
          <a href="/">Mais curtidas</a>
        </li>
        <li className='menu__item'>
          <img src={maisVistas} alt="" />
          <a href="/">Mais vistas</a>
        </li>
        <li className='menu__item'>
          <img src={novas} alt="" />
          <a href="/">Novas</a>
        </li>
        <li className='menu__item'>
          <img src={surpreendaMe} alt="" />
          <a href="/">Surpreenda-me</a>
        </li>
      </ul>
    </nav>
  )
}