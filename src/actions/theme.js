import actionTypes from './actionTypes'

const colors = {
  header: '',
  sidebar: '',
  content: '',
  fontColor: 'white',
}

export const PeterRiver = () => {
  colors.header = 'rgb(52, 73, 94)'
  colors.sidebar = 'rgba(52, 152, 219, 0.5)'
  colors.content = 'rgba(52, 152, 219, 0.5)'
  colors.fontColor = 'white'
  return {
    type: actionTypes.PETER_RIVER,
    payload: {
      colors
    }
  }
}

export const GreenSea = () => {
  colors.header = 'rgb(52, 73, 94)'
  colors.sidebar = 'rgba(22, 160, 133, 0.5)'
  colors.content = 'rgba(22, 160, 133, 0.5)'
  colors.fontColor = 'white'
  return {
    type: actionTypes.PETER_RIVER,
    payload: {
      colors
    }
  }
}

export const Carrot = () => {
  colors.header = 'rgb(52, 73, 94)'
  colors.sidebar = 'rgba(230, 126, 34, 0.5)'
  colors.content = 'rgba(230, 126, 34, 0.5)'
  colors.fontColor = 'white'
  return {
    type: actionTypes.PETER_RIVER,
    payload: {
      colors
    }
  }
}

export const Default = () => {
  colors.header = 'white'
  colors.sidebar = 'white'
  colors.content = 'white'
  colors.fontColor = ''
  return {
    type: actionTypes.DEFAULT_COLOR,
    payload: {
      colors
    }
  }
}