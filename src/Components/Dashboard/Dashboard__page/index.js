import React, { useEffect, useState } from 'react'
import Total from './Total'
import { dashboard_text } from '../../../database/datatext'
import { getData } from '../../../database/db'
import { formatter } from '../../mixin/mixin'
import ProductChart from './Chart'
import { useTranslation } from 'react-i18next';
import UserChart from './Userchart';
import Category from './Category'

const Dashboard = () => {

  const { t } = useTranslation();
  const [number, setNum] = useState(Object)
  const [Bool, setBool] = useState(false)
  const [pro, setPro] = useState(Object)
  const [us, setUs] = useState(Object)
  const [switchPage, setSwtichPage] = useState(true)

  useEffect(() => {
    const get = async () => {
      let a = 0
      const order = await getData('carts')
      const customer = await getData('user')
      const product = await getData('products')
      await order.map((item, index) => {
        item.cart.map(cartItem => {
          a += cartItem.price * cartItem.quantity
        })
      })
      setNum([order.length, customer.length, product.length, formatter.format(a + a / 10)])
      setPro(product)
      setUs(customer)
      setBool(true)
    }
    get()
  }, [])

  const changePage = (e, bool) => {
    e.preventDefault()
    setSwtichPage(bool)
  }

  if (Bool) {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="total__text">
              <h4>{t('dashboard.dash.5')}</h4>
            </div>
          </div>
          <div className="row">
            <Total items={dashboard_text} number={number} />
          </div>
          <div>
            <div className="row">
              <div className="switch">
                <a href="#" onClick={(e => changePage(e, true))}>
                  {t('dashboard.dash.3')}</a>
                <a href="#" onClick={(e => changePage(e, false))}>
                  {t('dashboard.dash.4')}</a>
              </div>
            </div>
            <div className="row">
              {switchPage ? <ProductChart items={pro.sort((a, b) => b.bought - a.bought).slice(0, 5)} tit={t('dashboard.dash.1')} /> :
                <UserChart items={us.sort((a, b) => b.sumPro - a.sumPro).slice(0, 5).filter((item) => item.id !== 1)} tit={t('dashboard.dash.2')} />}
            </div>
          </div>
          <div className="row">
            <Category items={pro} tit={t('dashboard.dash.6')} />
          </div>
        </div>
      </React.Fragment>
    )
  }
  else {
    return (
      <React.Fragment>

      </React.Fragment>
    )
  }
}

export default Dashboard