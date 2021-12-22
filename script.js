/*
    -estrelas numeradas de 1 a 5
    -ao clicar na estrela "1", estrela "1" acende
    -ao clicar na estrela "2", estrelas "1" e "2" acendem
    -ao clicar na estrela "3", estrelas "1", "2" e "3" acendem
    ..
    -ao clicar na estrela "n", estrelas "1", "2", ..., "n" acendem 
    ...
    -construir Laço de Repetição, onde ao clicar na estrela "i", as estrelas de "1" a "i" acendem
    -criar um array que armazena esses valores
    [star1, star2, star3, star4, star5]
    -talvez criar um Switch/Case
*/

const star1 = document.getElementById('estrela1')
const star2 = document.getElementById('estrela2')
const star3 = document.getElementById('estrela3')
const star4 = document.getElementById('estrela4')
const star5 = document.getElementById('estrela5')

//--> criar um Array com os nomes de cada Id das estrelas
var star = [star1,star2,star3,star4,star5]


const buttonConfirm = document.getElementById('tm-button')

function notaAtribuida(posicao)
{
    //Parametro "posicao" é a posição da Estrela clicado no Array
    var nota = posicao + 1
    
    //ao clicar no botão CONFIRMAR    
    buttonConfirm.onclick = function ()
    {
        alert('A nota atribuída foi de ' + nota + ' estrelas')
        for(i=0; i<=posicao; i++)
        {
            star[i].src='images/estrela_vazia.svg'
            buttonConfirm.style.background = '#C8C8C8'
        }
    }
} 


function clickStar(element)
{
    //--> identificar em qual posição do meu array está localizado o elemento 
    //    que possue valor igual a "element". Essa posição receberá o nome N
    var N = star.indexOf(element)
    
    //--> será feito um FOR, que irá iterar N vezes. 
    //    Cada uma dessa iterações acenderá uma estrela até o Número N
    for(i=0; i<=N;i++)
    {
        star[i].src='images/estrela_cheia.svg'
    }
    //ao mesmo tempo, irá apagar as estrelas seguintes (5-i)
    for(i=N+1; i<5;i++)
    {
        star[i].src='images/estrela_vazia.svg'
    }

    //const buttonConfirm = document.getElementById('tm-button')
    buttonConfirm.style.background = '#2CC6D0'
    notaAtribuida(N)
     
}  

