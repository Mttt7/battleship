import './styles/style.css'
import { drawGame } from './drawing'
import applyEffects from './settings'

const CONTAINER = document.querySelector('#container')

CONTAINER.appendChild(drawGame())
applyEffects()