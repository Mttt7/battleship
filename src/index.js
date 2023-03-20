import './styles/style.css'
import { drawGame } from './drawing'

const CONTAINER = document.querySelector('#container')

CONTAINER.appendChild(drawGame())
