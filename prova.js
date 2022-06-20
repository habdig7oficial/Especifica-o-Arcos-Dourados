class Lanche {
    constructor(lanche,ingredientes,extras,combo,comentario,loja){
	this.lanche = lanche
	this.ingredientes = ingredientes
	this.extras = extras
	this.combo = combo
	this.comentario = comentario
	this.loja = loja
    }

    logger(){
	console.log(`
Lanche: ${this.lanche}\n
Ingredientes: ${this.ingredientes}\n
Extras: ${this.extras}\n
Combo: ${this.combo}\n
Comentário: ${this.comentario}\n
Loja: ${this.loja}\n
----------------------------------------
 
`)
    }
    
}

let McAlegre = new Lanche("McLanche Alegre",["carne","queijo"],["batata pequena","fruta"],false,"Lanche Simples", "Loja Legal");
McAlegre.logger();


let BigLanche = new Lanche("Big Lanche", ["2 carnes","alface","queijo","molho bacana","cebola","picles","pão"],["batata média","CocaGlue"],true,"No combo é mais caro", "Loja Incrivel" );
BigLanche.logger();


let McHen = new Lanche("McHen", ["frango empanado","hambúrguer de frango", "alface", "queijo","picles" ],["batata média", "CocaGlue"],true, "No combo é mais caro","Loja Sensacional" );
McHen.logger();
