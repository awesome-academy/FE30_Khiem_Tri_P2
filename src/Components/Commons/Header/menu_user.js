import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from '../../../action/action'
import { useTranslation } from 'react-i18next';
import ModalBox from '../Modal';



const MenuUser = ({ history },props) => {

  const { t } = useTranslation();
  const user = useSelector(state=>state.user)

  const showModal = (e) => {
    e.preventDefault();
    document.querySelector('.modal-box').style.transform = "none";
    document.querySelector('.modal-box').style.zIndex = 11;
    document.querySelector('.modal-box').style.opacity = 1;
  }
  
  return (
    <React.Fragment>
      <ul>
        <li className="-left -usernot">
          <a href="#" onClick={(e) => {
            e.preventDefault();
            sessionStorage.removeItem('userData')
            window.location.reload()
          }}>{t('button.logout')}</a>
        </li>
        <li className="-left -usernot">
          <a href="#" onClick={showModal}>{t(`header.hello`)+ user.name}</a>
        </li>
      </ul>
      <ModalBox user={user}></ModalBox>
    </React.Fragment>
  )
}

export default MenuUser