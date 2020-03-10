import React from 'react';
import { Tittle_part, Togle, ListNew, formatter } from '../mixin/mixin'
import * as img__Arr from '../../img/index'
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { getProducts } from '../../action/action'
import { Link } from 'react-router-dom'

const Hot = (props) => {

  const { t } = useTranslation();
  const { new_theme, items } = props
  const dispatch = useDispatch()

  return (
    <React.Fragment>
      <section className="hot">
        <div className="container">
          <div className="row">
            <div className="hot__title" >
              <Tittle_part text={t('common.hot')} />
              <ListNew items={new_theme}></ListNew>
              <Togle></Togle>
            </div>
          </div>
          <div className="row -collum">
            {items.map((item, index) => (
              < div className="product__item" key={index}>
                <div className="item__img">
                  <img src={process.env.PUBLIC_URL + item.image} alt="logo" className="img"></img>
                </div>
                <div className="item__info">
                  <h4 className="-price">{formatter.format(item.price)}</h4>
                  <h4>{item.name}</h4>
                  <p>
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="far fa-star" />
                    <br />
                    {12 +" ( "+ t('common.rate')+" )"}
                  </p>
                </div>
                <div className="item__button">
                  <a className="-left" href="#">{t('button.buyNow')}</a>
                  <Link className="-right" to={"/detail/" + item.id} >{t('button.detail')}</Link>
                </div>
              </div >

            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Hot