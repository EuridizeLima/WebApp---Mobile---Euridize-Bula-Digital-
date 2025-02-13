------------------------------------ARQUIVO HTML-------------------------------------



<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="CSS/STYLE.CSS">
    <title> Bula Digital - Eurí </title>
</head>
<body>
    <div class="background-verde">
        <!--Começo do header-->
        <header>

            <!--container começoo-->
            <div class="container">
                <nav>
                    <div class="logo">
                      <a href="index.html"> Bula Digital </a>  
                    </div>
                    <ul class="ul">
                    <ul class="ul.ativo"></ul>
                        <li> <a href="#"> Começo </a></li>
                        <li> <a href="#"> Sobre </a></li>
                        <li> <a href="#"> Fármacias próximas</a></li>
                        <li> <a href="#"> Passo a passo para escannear</a></li>
                        <li>  <button class="btn-gradiente">Leia aqui seu QRcode</button></li>

                    </ul>
                    <div class="menu-icon">
                        <img src="Img/icone.png" alt="menu">
                    
                    </div>
                   



               
                </nav>
            </div>
            <!--container final-->

        </header>
        <!--Final do header-->
        <main>
            <div class="container">
                <div class="main-text">
                    <h1> Aqui você encontra a bula 
                        e informações 
                        importantes sobre o seu remédio de forma
                        rápida e prática!</h1>
                </div>
                <!--imagem grandona - começo -->
                <div class="main-img">
                    <img src="img/img.prim.webp" alt="caixa de remédio sendo escanneada"> 

                </div>
                <!--imagem grandona - final -->
            </div>


        </main>

    </div>

    <script src="JS/main.js"></script>
    
</body>
</html>


------------------------------------ARQUIVO CSS-------------------------------------
@import url('https://fonts.googleapis.com/css2?family=Poiret+One&display=swap');

/* seletor, visse*/ 

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
}
body{
    font-family: "Poiret One", serif;
 }      

 :root{
    --verde:#A5B68D;
    --laranja:#DA8359;
    --degrade-btn: linear-gradient(#DA8359,#DA8359 );
    --rosa:#ECDFCC;
 }

.background-verde{
    background: var(--verde);
}

/*posso reutilizar essa classe*/

.container{
    font-size: 50px;
    max-width: 1440px;
    padding: 0 5%; 
    margin: 0 auto;

}

.btn-gradiente{
    font-family: "Poiret One", serif;
    padding: 10px 15px; 
    color: white;
    border: none; 
    cursor: pointer;
    background: var(--degrade-btn);
    font-size: 70%;
}


/*aqui vou colocar as classess do site p/ não esquecer kk*/

nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    
}

.logo a{
    font-size: 40px;
    font-weight: bold;
    color: white;

    
}

.ul{
    display:flex;
    
 
   
}

.ul li{
    margin: 0 30px;
    font-size: 20px;
    
    

}

.ul li a{ 
    color: white ;
}

/* IMAGem grAndona*/

main .container{
  display: flex; 
  align-items: center ;
  justify-content:space-between ;
  margin-top: 30px;


}



.main-text{
    width: 50%;
    color: white;

}

.main-text h1{
    font-size: 2.5rem;
}

.main-img{
    width:40%;
    transform: translateX(-7px);
    

}

.main-img img{
    width:100%;

}


/* aqui eu to tornando responsivo o iconee*/

.menu-icon{
    display: none;
    position: relative;
    z-index:10 ;


    
}
.menu-icon img{
    width:100%;
    height: 60px;
  
}


/* respnsi */

@media (max-width: 960px) {


    .menu-aberto .main-img,
    .menu-aberto .main-text {
        display: none;
    }

    
    .menu-aberto {
        overflow: hidden;
        height: 100vh;
    }

    
    .menu-icon {
        display: block;
        cursor:pointer;}



    .ul {
        position: fixed;
        background-color: #143D60;
        top: 0;
        left:100%;
        width: 100%;
        height: 100%;
        transition: left 0.3s ease-in-out;
        justify-content: center;
        text-align: center;
        flex-direction: column;

      
    }
    .ul li{
        font-family: 20px;
        margin: 15px 0px;
    }
    .ul.ativo{
        left:0%;
    }

    main .container{
        flex-direction: column;
       
    }
    main .container .main-text,
    main .container .main-img{
        width:50% ;
        text-align: center;
        
    }

    main .container .main-text h1{

        font-size: 1.8rem;
        margin-bottom: 20px;
        width: 100%;


    }



     

    
      
}



------------------------------------ARQUIVO JS-------------------------------------



var menuIcon = document.querySelector('.menu-icon');
var ul = document.querySelector('.ul');
var body = document.body; 

menuIcon.addEventListener('click', () => {
   if (ul.classList.contains('ativo')) {
        ul.classList.remove('ativo');
        document.querySelector('.menu-icon img').src = 'img/icone.png';
        body.classList.remove('menu-aberto'); 
   } else {
        ul.classList.add('ativo');
        document.querySelector('.menu-icon img').src = 'img/close2.png';
        body.classList.add('menu-aberto'); 
   }
});
