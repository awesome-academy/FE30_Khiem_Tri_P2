import React from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'

const url = "http://localhost:2020";

export const getData = (page) => {
  return axios.get(`${url}/${page}`)
    .then(res => {
      return res.data
    })
    .catch(error => window.location.pathname = ('/error'))
}

export const RegisUser = (data) => {
  return axios.post(`${url}/user`, data)
    .then(res => {
      console.log(res)
    })
    .catch(error => window.location.pathname = ('/error'))

}

export const getProduct = (id) => {
  return axios.get(`${url}/products/${id}`)
    .then(res => {
      return res.data
    })
    .catch(error => window.location.pathname = ('/error'))

}

export const updateUser = (user) => {
  return axios.put(`${url}/user/${user.id}`, user)
    .then(res => {
      return res.data
    })
    .catch(error => window.location.pathname = ('/error'))

}

export const updateProduct = (product) => {
  return axios.put(`${url}/products/${product.id}`, product)
    .then(res => {
      return res.data
    })
    .catch(error => window.location.pathname = ('/error'))

}

export const updateHistory = (history) => {
  return axios.post(`${url}/carts`, history)
    .then(res => {
      console.log(res)
    })
    .catch(error => window.location.pathname = ('/error'))

}

export const updatePro = (product) => {
  return axios.put(`${url}/products/${product.id}`, product)
    .then(res => {
      console.log(res)
    })
    .catch(error => window.location.pathname = ('/error'))

}

export const getCartsByUser = (username) => {
  return axios.get(`${url}/carts?username=${username}`)
    .then(res => {
      return res.data
    })
    .catch(error => window.location.pathname = ('/error'))

}

export const deleteUser = (user) => {
  return axios.delete(`${url}/user/${user.id}`)
    .then(res => {
      return res.data
    })
    .catch(error => window.location.pathname = ('/error'))

}

export const getAdmin = () => {
  return axios.get(`${url}/user/1`)
    .then(res => {
      return res.data
    })
    .catch(error => window.location.pathname = ('/error'))

}

export const getByUser = (username) => {
  return axios.get(`${url}/user?username=${username}`)
    .then(res => {
      return res.data[0]
    })
    .catch(error => window.location.pathname = ('/error'))
}

export const updateCart = (item) => {
  return axios.put(`${url}/carts/${item.id}`, item)
    .then(res => {})
    .catch(error => window.location.pathname = ('/error'))
}