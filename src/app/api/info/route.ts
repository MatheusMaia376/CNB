
// Esta função é uma rota API que responde a requisições GET, 
// retornando um objeto JSON com informações de nome e Instagram.
export function GET(){
    return Response.json({
        name: 'Matheus',
        instagram: 'matheus_maia376'
    })
        
    
}