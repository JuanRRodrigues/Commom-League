import React, { useState } from 'react';
import NavListData from '../../data/navListData';
import NavListItem from '../NavListItem/NavListItem';
import './SideMenu.css';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import ShareIcon from '@mui/icons-material/Share';
import YouTubeIcon from '@mui/icons-material/YouTube';

// Use o tipo `number` em vez de `Number`
interface NavItem {
  id: number; // Corrigido para `number`
  name: string;
  icon: string;
}

// Definir o tipo para as propriedades do SideMenu
interface SideMenuProps {
  active: boolean;
}

const SideMenu: React.FC<SideMenuProps> = ({ active }) => {
  const [navData, setNavData] = useState<NavItem[]>(NavListData);

  return (
    <div className={`SideMenu ${active ? 'active' : ''}`}>
      <a href="#" className='logo'>
        <SportsEsportsIcon />
        <span className='brand'>Commom</span>
      </a>
      <ul className='nav'>
        {navData.map((item) => (
          <NavListItem key={item.id} item={item} />
        ))}
      </ul>

      <ul className='social'>
        <li>
          <a href="#">
            <InstagramIcon />
          </a>
        </li>
        <li>
          <a href="#">
            <XIcon />
          </a>
        </li>
        <li>
          <a href="#">
            <YouTubeIcon />
          </a>
        </li>
        <li>
          <a href="#" className='share'>
            <ShareIcon />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SideMenu;