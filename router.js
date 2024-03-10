
export function loadRoute(url) {
   // Push new url to history
   history.pushState({}, '', url);
   let template = '<h1>Oh No 404</h1>'

   // find a template
   switch (window.location.pathname) {
      case '/': {
         template = `<h1>Home</h1>
         <h2>SPA Home</h2>`
         break;
      }
      case '/about': {
         template = `<h1>About</h1>
         <h2>About SPA</h2>`
         break;
      }
      case '/help': {
         template = `<h1>Help</h1>
         <h2>SPA Help</h2>`
         break;
      }
      default:
         template = `<h1>Oh No 404</h1>
         <h2>${window.location.pathname} not found</h2>`
         alert("404")
         break;
   }
   const page = document.getElementById('page')
   page.innerHTML = template;
}