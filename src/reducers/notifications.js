const initState = {
  isLoading: false,
  list: [{
    id: 1,
    title: 'Lorem ipsum',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ',
    hasRead: true
  }, {
    id: 2,
    title: 'Lorem ipsum222',
    desc: '22222222Lorem ipsum dolor, sit amet consectetur adipisicing elit. ',
    hasRead: true
  }]
}

export default (state = initState, action) => {
  switch (action.type) {
    default:
      return state
  }
}