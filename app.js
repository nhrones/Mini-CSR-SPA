import {loadRoute} from './router.js'
const on = (id, event, callback) => {
   document.getElementById(id).addEventListener(event, callback)
}
on("home", 'click', () => loadRoute('/'))
on("about", 'click', () => loadRoute('/about'))
on("help", 'click', () => loadRoute('/help'))
