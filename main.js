

import { createStore  } from 'https://cdn.skypack.dev/redux'; 

// reducer
let iniState = 0

function reducer(state = iniState, action) {
    switch(action.type){
        case 'increase':
            return state + 10
        case 'decrease': 
            return state - 10
        default:
            return state
    }
}
// store
let store = createStore(reducer)


// function -render
const $h1 = document.querySelector('h1')
$h1.innerText = iniState

function render(){
    $h1.innerText = store.getState()
}

// action
function action(type) {
    store.dispatch({
        type: type,
    })
}
// 
store.subscribe(render)

// listen events
const $increase = document.querySelector('.increase')
const $decrease = document.querySelector('.decrease')

$increase.addEventListener('click', () => {action('increase')})
$decrease.addEventListener('click', () => {action('decrease')})
