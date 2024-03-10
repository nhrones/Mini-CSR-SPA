import { serveFile } from "https://deno.land/std@0.212.0/http/file_server.ts"

const PORT = 8080

Deno.serve({ port: PORT }, async (request: Request): Promise<Response> => {

   const { pathname } = new URL(request.url);
   console.log('serving: ', pathname)

   // root request
   if (pathname === '/') {
      return await serveRoot(200, './index.html')
   }

   // file request
   if (!isRouteRequest(pathname)) {
      return  await serveFile(request, `.${pathname}`)
   }

   // A route request -- serve index.html with 301 status
   return await serveRoot(301, './index.html')
})

function isRouteRequest(path: string) {
   //@ts-ignore ?
   return path.split('/').pop().indexOf('.') === -1 ? true : false;
}

async function serveRoot(statusCode: number, fullPath: string) {
   const body =  await Deno.readTextFile(fullPath)
   // Create appropriate headers - we don't want to cache this 
   const headers = new Headers([
      ["content-type", "text/html; charset=utf-8"],
      ["pragma", "no-cache"],
      ["expires", "0"],
      ["Cache-Control", "max-age=0, no-cache, no-store, must-revalidate"]
   ])
   return new Response(body, { status: statusCode, headers: headers });
}
