function cadastro(nome,idade){
    if(nome == undefined || idade == undefined){
        console.log("preencha o nome e a idade");
    }else{
        console.log("Olá " + nome + "Bem vindo!");
    }
}

cadastro("Alan",5);
cadastro("Alan");