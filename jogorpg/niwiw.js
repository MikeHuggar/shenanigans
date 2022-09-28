//essa linha serve para deixar o personagem focado no início do jogo
document.getElementById("membro1").style.borderColor="red"
//foco do turno
let foco = 1
function mudafoco(){
    if (foco==1){
        document.getElementById("membro1").style.borderColor="red"
        document.getElementById("membro2").style.borderColor="black"
        document.getElementById("membro3").style.borderColor="black"
        document.getElementById("membro4").style.borderColor="black"
        document.getElementById("membro5").style.borderColor="black"
        document.getElementById("membro6").style.borderColor="black"
        document.getElementById("nome").innerText="Timberth"
    }
    if (foco==2){
        document.getElementById("membro1").style.borderColor="black"
        document.getElementById("membro2").style.borderColor="red"
        document.getElementById("membro3").style.borderColor="black"
        document.getElementById("membro4").style.borderColor="black"
        document.getElementById("membro5").style.borderColor="black"
        document.getElementById("membro6").style.borderColor="black"
        document.getElementById("nome").innerText="Vlad"
    }
    if (foco==3){
        document.getElementById("membro1").style.borderColor="black"
        document.getElementById("membro2").style.borderColor="black"
        document.getElementById("membro3").style.borderColor="red"
        document.getElementById("membro4").style.borderColor="black"
        document.getElementById("membro5").style.borderColor="black"
        document.getElementById("membro6").style.borderColor="black"
        document.getElementById("nome").innerText="Demoman"
    }
    if (foco==4){
        document.getElementById("membro1").style.borderColor="black"
        document.getElementById("membro2").style.borderColor="black"
        document.getElementById("membro3").style.borderColor="black"
        document.getElementById("membro4").style.borderColor="red"
        document.getElementById("membro5").style.borderColor="black"
        document.getElementById("membro6").style.borderColor="black"
        document.getElementById("nome").innerText="Spy"
    }
    if (foco==5){
        document.getElementById("membro1").style.borderColor="black"
        document.getElementById("membro2").style.borderColor="black"
        document.getElementById("membro3").style.borderColor="black"
        document.getElementById("membro4").style.borderColor="black"
        document.getElementById("membro5").style.borderColor="red"
        document.getElementById("membro6").style.borderColor="black"
        document.getElementById("nome").innerText="Sniper"
    }
    if (foco==6){
        document.getElementById("membro1").style.borderColor="black"
        document.getElementById("membro2").style.borderColor="black"
        document.getElementById("membro3").style.borderColor="black"
        document.getElementById("membro4").style.borderColor="black"
        document.getElementById("membro5").style.borderColor="black"
        document.getElementById("membro6").style.borderColor="red"
        document.getElementById("nome").innerText="Sonic"
    }
    if (foco==7){
        document.getElementById("membro1").style.borderColor="black"
        document.getElementById("membro2").style.borderColor="black"
        document.getElementById("membro3").style.borderColor="black"
        document.getElementById("membro4").style.borderColor="black"
        document.getElementById("membro5").style.borderColor="black"
        document.getElementById("membro6").style.borderColor="black"
    }
};
//aumenta o medidor de magia do personagem ao atacar
function aumentamagia(){
    if(foco==1){
        timberth.magia = timberth.magia+10
        if(timberth.magia<100){
            document.getElementById("mptimberth").innerText = "MP: " + timberth.magia + "%"
        } else {
            timberth.magia = 100
            document.getElementById("mptimberth").innerText = "MP: " + timberth.magia + "%"
        }
    }
    if(foco==2){
        vlad.magia = vlad.magia+10
        if(vlad.magia<100){
            document.getElementById("mpvlad").innerText = "MP: " + vlad.magia + "%"
        } else {
            vlad.magia = 100
            document.getElementById("mpvlad").innerText = "MP: " + vlad.magia + "%"
        }
    }
    if(foco==3){
        demoman.magia = demoman.magia+10
        if(demoman.magia<100){
            document.getElementById("mpdemo").innerText = "MP: " + demoman.magia + "%"
        } else {
            demoman.magia = 100
            document.getElementById("mpdemo").innerText = "MP: " + demoman.magia + "%"
        }
    }
    if(foco==4){
        spy.magia = spy.magia+10
        if(spy.magia<100){
            document.getElementById("mpspy").innerText = "MP: " + spy.magia + "%"
        } else {
            spy.magia = 100
            document.getElementById("mpspyh").innerText = "MP: " + spy.magia + "%"
        }
    }
    if(foco==5){
        sniper.magia = sniper.magia+20
        if(sniper.magia<100){
            document.getElementById("mpsniper").innerText = "MP: " + sniper.magia + "%"
        } else {
            sniper.magia = 100
            document.getElementById("mpsniper").innerText = "MP: " + sniper.magia + "%"
        }
    }
    if(foco==6){
        sonic.magia = sonic.magia+15
        if(sonic.magia<100){
            document.getElementById("mpsonic").innerText = "MP: " + sonic.magia + "%"
        } else {
            sonic.magia = 100
            document.getElementById("mpsonic").innerText = "MP: " + sonic.magia + "%"
        }
    }
};
//aumenta o medidor de magia do personagem ao defender
function aumentamagiadefesa(){
    if(foco==1){
        timberth.magia = timberth.magia+20
        if(timberth.magia<100){
            document.getElementById("mptimberth").innerText = "MP: " + timberth.magia + "%"
        } else {
            timberth.magia = 100
            document.getElementById("mptimberth").innerText = "MP: " + timberth.magia + "%"
        }
    }
    if(foco==2){
        vlad.magia = vlad.magia+20
        if(vlad.magia<100){
            document.getElementById("mpvlad").innerText = "MP: " + vlad.magia + "%"
        } else {
            vlad.magia = 100
            document.getElementById("mpvlad").innerText = "MP: " + vlad.magia + "%"
        }
    }
    if(foco==3){
        demoman.magia = demoman.magia+20
        if(demoman.magia<100){
            document.getElementById("mpdemo").innerText = "MP: " + demoman.magia + "%"
        } else {
            demoman.magia = 100
            document.getElementById("mpdemo").innerText = "MP: " + demoman.magia + "%"
        }
    }
    if(foco==4){
        spy.magia = spy.magia+20
        if(spy.magia<100){
            document.getElementById("mpspy").innerText = "MP: " + spy.magia + "%"
        } else {
            spy.magia = 100
            document.getElementById("mpspyh").innerText = "MP: " + spy.magia + "%"
        }
    }
    if(foco==5){
        sniper.magia = sniper.magia+20
        if(sniper.magia<100){
            document.getElementById("mpsniper").innerText = "MP: " + sniper.magia + "%"
        } else {
            sniper.magia = 100
            document.getElementById("mpsniper").innerText = "MP: " + sniper.magia + "%"
        }
    }
    if(foco==6){
        sonic.magia = sonic.magia+20
        if(sonic.magia<100){
            document.getElementById("mpsonic").innerText = "MP: " + sonic.magia + "%"
        } else {
            sonic.magia = 100
            document.getElementById("mpsonic").innerText = "MP: " + sonic.magia + "%"
        }
    }
};
//menus
let acao = document.getElementById("acao")
let confirma = document.getElementById("confirma")
let descricao = document.getElementById("descricao")
let outcome = document.getElementById("outcome")
let narracao = document.getElementById("narracao")
let selectvlad = document.getElementById("selectvlad")
let magias = document.getElementById("magias")
let magiastimberth = document.getElementById("magiastimberth")
let magiasvlad = document.getElementById("magiasvlad")
let magiasdemo = document.getElementById("magiasdemo")
let magiasspy = document.getElementById("magiasspy")
let magiassniper = document.getElementById("magiassniper")
let magiassonic = document.getElementById("magiassonic")
//opcoes dos menus
let ataca = false
let defesa = false
let magia = false
let item = false
let skip = false
//dados dos personagens
class Personagem {
    constructor(vida, precisao, magia, adrenalina) {
        this.vida = vida;
        this.precisao = precisao;
        this. magia = magia;
        this.adrenalina = adrenalina;
    }
}
let niwiw = {vida:125000, jarrate: false, chaos: false}
let timberth = new Personagem(8000, 75, 0, false)
let vlad = new Personagem(4000, 70, 0, false)
let demoman = new Personagem(10000, 60, 0, false)
let spy = new Personagem(6000, 80, 0, false)
let sniper = new Personagem(8000, 100, 0, false)
let sonic = new Personagem(6000, 100, 0, false)
let magia1 = false
let magia2 = false
let demododge = false
let spydodge = false
let sniperreload = false
//acao dos personagens
//codigo para a funcao de ataques
document.getElementById("ataque").addEventListener("click",function atacando(){
    acao.classList.remove("mostra");
    acao.classList.add("esconde");
    confirma.classList.remove("esconde");
    confirma.classList.add("mostra");
    if(foco==1){
        descricao.innerText= "Timberth irá disparar com a usa famigerada pistola Daisy (200 de dano)."
    }
    if(foco==2){
        descricao.innerText= "Vlad dará uma combinação tática de socos (100 de dano)."
    }
    if(foco==3){
        descricao.innerText= "Demoman lançará uma granada até Niwiw (500 de dano)."
    }
    if(foco==4){
        descricao.innerText= "Spy dará um tiro com seu revólver (200 de dano)."
    }
    if(foco==5){
        descricao.innerText= "Sniper dará um poderoso tiro, mas terá que recarregar sua arma no próximo turno (1000 de dano)."
    }
    if(foco==6){
        descricao.innerText= "Sonic fará uma arremetida em formato de esfera até Niwiw (100 de dano)."
    }
    ataca = true
    defesa = false
    magia = false
    magia1 = false
    magia2 = false
    item = false
    skip = false
});
//codigo para defesa
document.getElementById("defesa").addEventListener("click",function defende(){
    acao.classList.remove("mostra");
    acao.classList.add("esconde");
    confirma.classList.remove("esconde");
    confirma.classList.add("mostra");
    ataca = false
    defesa = true
    magia = false
    magia1 = false
    magia2 = false
    item = false
    skip = false
    descricao.innerText= "Deseja passar esse turno se defendendo? (+20% de magia, -20% de dano sofrido até o próximo turno)"
});
//mostra o menu de magias correspondente ao personagem
document.getElementById("magia").addEventListener("click",function menumagia(){
    acao.classList.remove("mostra");
    acao.classList.add("esconde");
    magias.classList.remove("esconde");
    magias.classList.add("mostra");
    if(foco==1){
        magiastimberth.classList.remove("esconde");
        magiastimberth.classList.add("mostra");
        magiasvlad.classList.remove("mostra");
        magiasvlad.classList.add("esconde");
        magiasdemo.classList.remove("mostra");
        magiasdemo.classList.add("esconde");
        magiasspy.classList.remove("mostra");
        magiasspy.classList.add("esconde");
        magiassniper.classList.remove("mostra");
        magiassniper.classList.add("esconde");
        magiassonic.classList.remove("mostra");
        magiassonic.classList.add("esconde");
    }
    if(foco==2){
        magiastimberth.classList.remove("mostra");
        magiastimberth.classList.add("esconde");
        magiasvlad.classList.remove("esconde");
        magiasvlad.classList.add("mostra");
        magiasdemo.classList.remove("mostra");
        magiasdemo.classList.add("esconde");
        magiasspy.classList.remove("mostra");
        magiasspy.classList.add("esconde");
        magiassniper.classList.remove("mostra");
        magiassniper.classList.add("esconde");
        magiassonic.classList.remove("mostra");
        magiassonic.classList.add("esconde");
    }
    if(foco==3){
        magiastimberth.classList.remove("mostra");
        magiastimberth.classList.add("esconde");
        magiasvlad.classList.remove("mostra");
        magiasvlad.classList.add("esconde");
        magiasdemo.classList.remove("esconde");
        magiasdemo.classList.add("mostra");
        magiasspy.classList.remove("mostra");
        magiasspy.classList.add("esconde");
        magiassniper.classList.remove("mostra");
        magiassniper.classList.add("esconde");
        magiassonic.classList.remove("mostra");
        magiassonic.classList.add("esconde");
    }
    if(foco==4){
        magiastimberth.classList.remove("mostra");
        magiastimberth.classList.add("esconde");
        magiasvlad.classList.remove("mostra");
        magiasvlad.classList.add("esconde");
        magiasdemo.classList.remove("mostra");
        magiasdemo.classList.add("esconde");
        magiasspy.classList.remove("esconde");
        magiasspy.classList.add("mostra");
        magiassniper.classList.remove("mostra");
        magiassniper.classList.add("esconde");
        magiassonic.classList.remove("mostra");
        magiassonic.classList.add("esconde");
    }
    if(foco==5){
        magiastimberth.classList.remove("mostra");
        magiastimberth.classList.add("remove");
        magiasvlad.classList.remove("mostra");
        magiasvlad.classList.add("esconde");
        magiasdemo.classList.remove("mostra");
        magiasdemo.classList.add("esconde");
        magiasspy.classList.remove("mostra");
        magiasspy.classList.add("esconde");
        magiassniper.classList.remove("esconde");
        magiassniper.classList.add("mostra");
        magiassonic.classList.remove("mostra");
        magiassonic.classList.add("esconde");
    }
    if(foco==6){
        magiastimberth.classList.remove("mostra");
        magiastimberth.classList.add("esconde");
        magiasvlad.classList.remove("mostra");
        magiasvlad.classList.add("esconde");
        magiasdemo.classList.remove("mostra");
        magiasdemo.classList.add("esconde");
        magiasspy.classList.remove("mostra");
        magiasspy.classList.add("esconde");
        magiassniper.classList.remove("mostra");
        magiassniper.classList.add("esconde");
        magiassonic.classList.remove("esconde");
        magiassonic.classList.add("mostra");
    }
    ataca = false
    defesa = false
    magia = true
    magia1 = false
    magia2 = false
    item = false
    skip = false
});
//descreve o efeito da magia para o jogador na escolha
document.getElementById("descarregar").addEventListener("click",function magiatimberth1(){
    magias.classList.remove("mostra");
    magias.classList.add("esconde");
    confirma.classList.remove("esconde");
    confirma.classList.add("mostra");
    magia1 = true
    descricao.innerText= "Timberth irá disparar todos as balas em seu revólver (Equivale a seis ataques)."
});
document.getElementById("pulso").addEventListener("click",function magiatimberth2(){
    magias.classList.remove("mostra");
    magias.classList.add("esconde");
    confirma.classList.remove("esconde");
    confirma.classList.add("mostra");
    magia2 = true
    descricao.innerText= "Timberth causará uma instabilidade espacial em Niwiw (700 de dano)."
});
document.getElementById("cura").addEventListener("click", function magiavlad1(){
    magias.classList.remove("mostra");
    magias.classList.add("esconde");
    confirma.classList.remove("esconde");
    confirma.classList.add("mostra");
    magia1 = true
    descricao.innerText= "Vlad irá injetar um soro curativo em um aliado de sua escolha, lhe dando 3000 pontos de vida."
});
document.getElementById("adrenalina").addEventListener("click", function magiavlad2(){
    magias.classList.remove("mostra");
    magias.classList.add("esconde");
    confirma.classList.remove("esconde");
    confirma.classList.add("mostra");
    magia2 = true
    descricao.innerText= "Vlad irá injetar ADRENALINA em um aliado de sua escolha, dobrando o dano de seu próximo ataque."
});
document.getElementById("eyelander").addEventListener("click", function magiademo1(){
    magias.classList.remove("mostra");
    magias.classList.add("esconde");
    confirma.classList.remove("esconde");
    confirma.classList.add("mostra");
    magia1 = true
    descricao.innerText= "Demoman atacará Niwiw com sua espada, a Eyelander (300 de dano, +500 de vida para Demoman)."
});
document.getElementById("sticky").addEventListener("click", function magiademo2(){
    magias.classList.remove("mostra");
    magias.classList.add("esconde");
    confirma.classList.remove("esconde");
    confirma.classList.add("mostra");
    magia2 = true
    descricao.innerText= "Demoman irá detonar explosivos colocados diretamente abaixo de si, lançando-se aos ares e ficando imune à dano pelo próximo turno."
});
document.getElementById("invis").addEventListener("click", function magiaspy1(){
    magias.classList.remove("mostra");
    magias.classList.add("esconde");
    confirma.classList.remove("esconde");
    confirma.classList.add("mostra");
    magia1 = true
    descricao.innerText= "Spy ficará invisível até o fim do próximo turno, confundindo e diminuindo a precisão de Niwiw."
});
document.getElementById("faca").addEventListener("click", function magiaspy2(){
    magias.classList.remove("mostra");
    magias.classList.add("esconde");
    confirma.classList.remove("esconde");
    confirma.classList.add("mostra");
    magia2 = true
    descricao.innerText= "Spy irá tentar esfaquear Niwiw pelas costas. Uma tarefa difícil, mas com retorno proporcional ao risco (Acerto garantido caso Spy esteja invisível)."
});
document.getElementById("jarate").addEventListener("click", function magiasniper1(){
    magias.classList.remove("mostra");
    magias.classList.add("esconde");
    confirma.classList.remove("esconde");
    confirma.classList.add("mostra");
    magia1 = true
    descricao.innerText= "Sniper irá tentar lançar um jarro com líquido corrosivo em Niwiw, diminuindo suas defesas caso acerte."
});
document.getElementById("provocacao").addEventListener("click", function magiasniper2(){
    magias.classList.remove("mostra");
    magias.classList.add("esconde");
    confirma.classList.remove("esconde");
    confirma.classList.add("mostra");
    magia2 = true
    descricao.innerText= "Sniper provocará Niwiw, tornando-se o foco de seu próximo ataque."
});
document.getElementById("spin").addEventListener("click", function magiasonic1(){
    magias.classList.remove("mostra");
    magias.classList.add("esconde");
    confirma.classList.remove("esconde");
    confirma.classList.add("mostra");
    magia1 = true
    descricao.innerText= "Sonic irá carregar seu Spindash em cima de Niwiw, causando uma grande quantidade de dano."
});
document.getElementById("chaos").addEventListener("click", function magiasonic2(){
    magias.classList.remove("mostra");
    magias.classList.add("esconde");
    confirma.classList.remove("esconde");
    confirma.classList.add("mostra");
    magia2 = true
    descricao.innerText= "Sonic irá tentar congelar Niwiw usando o poder de uma de suas Esmeraldas do Caos (Possui pequena chance de acerto)."
});
//selecao dos alvos das magias do vlad
document.getElementById("alvotimberth").addEventListener("click", function alvotimberth(){
    selectvlad.classList.remove("mostra");
    selectvlad.classList.add("esconde");
    outcome.classList.remove("esconde");
    outcome.classList.add("mostra");
    if(magia1==true){
        narracao.innerText= "Timberth recebeu 3000 pontos de vida!"
        timberth.vida = timberth.vida+3000
        document.getElementById("hptimberth").innerText= "HP: " + timberth.vida
    }
    if(magia2==true){
        narracao.innerText= "Timberth agora está sobre os efeitos da ADRENALINA!"
        timberth.adrenalina=true
    }
});
document.getElementById("alvovlad").addEventListener("click", function alvovlad(){
    selectvlad.classList.remove("mostra");
    selectvlad.classList.add("esconde");
    outcome.classList.remove("esconde");
    outcome.classList.add("mostra");
    if(magia1==true){
        narracao.innerText= "Vlad recebeu 3000 pontos de vida!"
        vlad.vida = vlad.vida+3000
        document.getElementById("hpvlad").innerText= "HP: " + vlad.vida
    }
    if(magia2==true){
        narracao.innerText= "Vlad agora está sobre os efeitos da ADRENALINA!"
        vlad.adrenalina=true
    }
});
document.getElementById("alvodemo").addEventListener("click", function alvodemo(){
    selectvlad.classList.remove("mostra");
    selectvlad.classList.add("esconde");
    outcome.classList.remove("esconde");
    outcome.classList.add("mostra");
    if(magia1==true){
        narracao.innerText= "Demoman recebeu 3000 pontos de vida!"
        demoman.vida = demoman.vida+3000
        document.getElementById("hpdemo").innerText= "HP: " + demoman.vida
    }
    if(magia2==true){
        narracao.innerText= "Demoman agora está sobre os efeitos da ADRENALINA!"
        demoman.adrenalina=true
    }
});
document.getElementById("alvospy").addEventListener("click", function alvospy(){
    selectvlad.classList.remove("mostra");
    selectvlad.classList.add("esconde");
    outcome.classList.remove("esconde");
    outcome.classList.add("mostra");
    if(magia1==true){
        narracao.innerText= "Spy recebeu 3000 pontos de vida!"
        spy.vida = spy.vida+3000
        document.getElementById("hpspy").innerText= "HP: " + spy.vida
    }
    if(magia2==true){
        narracao.innerText= "Spy agora está sobre os efeitos da ADRENALINA!"
        spy.adrenalina=true
    }
});
document.getElementById("alvosniper").addEventListener("click", function alvosniper(){
    selectvlad.classList.remove("mostra");
    selectvlad.classList.add("esconde");
    outcome.classList.remove("esconde");
    outcome.classList.add("mostra");
    if(magia1==true){
        narracao.innerText= "Sniper recebeu 3000 pontos de vida!"
        sniper.vida = sniper.vida+3000
        document.getElementById("hpsniper").innerText= "HP: " + sniper.vida
    }
    if(magia2==true){
        narracao.innerText= "Sniper agora está sobre os efeitos da ADRENALINA!"
        sniper.adrenalina=true
    }
});
document.getElementById("alvosonic").addEventListener("click", function alvosonic(){
    selectvlad.classList.remove("mostra");
    selectvlad.classList.add("esconde");
    outcome.classList.remove("esconde");
    outcome.classList.add("mostra");
    if(magia1==true){
        narracao.innerText= "Sonic recebeu 3000 pontos de vida!"
        sonic.vida = sonic.vida+3000
        document.getElementById("hpsonic").innerText= "HP: " + sonic.vida
    }
    if(magia2==true){
        narracao.innerText= "Sonic agora está sobre os efeitos da ADRENALINA!"
        sonic.adrenalina=true
    }
});
//codigo para pular o turno
document.getElementById("pulaturno").addEventListener("click", function pulaturno(){
    acao.classList.remove("mostra");
    acao.classList.add("esconde");
    confirma.classList.remove("esconde");
    confirma.classList.add("mostra");
    ataca = false
    defesa = false
    magia = false
    magia1 = false
    magia2 = false
    item = false
    skip=true
    descricao.innerText= "Deseja passar esse turno descansando? (+500 pontos de vida)"
});
//volta para o menu de acao caso o jogador negue sua confirmacao
document.getElementById("negaacao").addEventListener("click",function voltaselecao(){
    confirma.classList.remove("mostra");
    confirma.classList.add("esconde");
    magias.classList.remove("mostra");
    magias.classList.add("esconde") ; 
    acao.classList.remove("esconde");
    acao.classList.add("mostra");
    ataca = false
    defesa = false
    magia = false
    magia1 = false
    magia2 = false
    item = false
    skip = false
});
document.getElementById("voltamagia").addEventListener("click",function voltamagia(){
    magias.classList.remove("mostra");
    magias.classList.add("esconde");
    acao.classList.remove("esconde");
    acao.classList.add("mostra");
    magia = false
    magia1 = false
    magia2 = false
});
document.getElementById("confirmaacao").addEventListener("click",function confirmaselecao(){
    confirma.classList.remove("mostra");
    confirma.classList.add("esconde");
    outcome.classList.remove("esconde");
    outcome.classList.add("mostra");
    //faz uma checagem baseada na precisao do personagem para ver se o ataque vai acertar
    // personagens que nao tem precisao sempre acertam
    if (ataca==true && foco==1){
        acerto=Math.floor(Math.random()*100)+1
        if (acerto<=timberth.precisao){
            narracao.innerText= "Niwiw é baleado, levando 200 de dano!"
            niwiw.vida = niwiw.vida-200
            document.getElementById("hpniwiw").innerText = "HP: " + niwiw.vida
            aumentamagia()
        } else {
            narracao.innerText= "Timberth se lembrou das atrocidades que Niwiw fez e congelou de medo."
        }
    }
    if (ataca==true && foco==2){
        acerto=Math.floor(Math.random()*100)+1
        if (acerto<=vlad.precisao){
            narracao.innerText= "Niwiw foi socado, levando 100 de dano!"
            niwiw.vida = niwiw.vida-100
            document.getElementById("hpniwiw").innerText = "HP: " + niwiw.vida
            aumentamagia()
        } else {
            narracao.innerText= "Vlad ainda não consegue superar os seus traumas causados por Niwiw."
        }
    }
    if (ataca==true && foco==3){
        acerto=Math.floor(Math.random()*100)+1
        if (acerto<=demoman.precisao){
            narracao.innerText= "A granada faz contato, causando 500 de dano em Niwiw!"
            niwiw.vida = niwiw.vida-500
            document.getElementById("hpniwiw").innerText = "HP: " + niwiw.vida
            aumentamagia()
        } else {
            narracao.innerText= "Apesar da granada não ter atingido Niwiw, ela explode perto o suficiente para causar 100 de dano!"
            niwiw.vida = niwiw.vida-100
            document.getElementById("hpniwiw").innerText = "HP: " + niwiw.vida
        }
    }    
    if (ataca==true && foco==4){
        acerto=Math.floor(Math.random()*100)+1
        if (acerto<=vlad.precisao){
            narracao.innerText= "Niwiw é baleado, levando 200 de dano!"
            niwiw.vida = niwiw.vida-200
            document.getElementById("hpniwiw").innerText = "HP: " + niwiw.vida
            aumentamagia()
        } else {
            narracao.innerText= "Spy errou seu disparo."
        }
    }
    if (ataca==true && foco==5){
        if(sniperreload==false) {
            narracao.innerText= "Tiro certeiro! Niwiw leva 1000 de dano!"
            niwiw.vida = niwiw.vida-1000
            document.getElementById("hpniwiw").innerText = "HP: " + niwiw.vida
            aumentamagia()
            sniperreload=true
        } else {
            sniperreload=false
            narracao.innerText= "Sniper recarregou sua arma."
        }
    }
    if (ataca==true && foco==6){
        narracao.innerText= "Niwiw é atingido, levando 100 de dano!"
        niwiw.vida = niwiw.vida-100
        document.getElementById("hpniwiw").innerText = "HP: " + niwiw.vida
        aumentamagia()
    }
    //aplica os efeitos da acao de defesa
    if(defesa==true && foco==1){
        aumentamagiadefesa()
        narracao.innerText= "Timberth assume uma posição defensiva."
    }
    if(defesa==true && foco==2){
        aumentamagiadefesa()
        narracao.innerText= "Vlad assume uma posição defensiva."
    }
    if(defesa==true && foco==3){
        aumentamagiadefesa()
        narracao.innerText= "Demoman ergue sua Eyelander de forma defensiva."
    }
    if(defesa==true && foco==4){
        aumentamagiadefesa()
        narracao.innerText= "Spy assume uma posição defensiva."
    }
    if(defesa==true && foco==5){
        aumentamagiadefesa()
        narracao.innerText= "Sniper assume uma posição defensiva."
    }
    if(defesa==true && foco==6){
        aumentamagiadefesa()
        narracao.innerText= "Sonic assume uma posição defensiva."
    }
    //aplica o efeito das magias correspondentes aos personagens
    if (magia==true && magia1==true && foco==1){
        tiros=0
        danoniwiw = 0
        tirosacertados = 0
        while(tiros<6){
            acerto=Math.floor(Math.random()*100)+1
            if(acerto<=timberth.precisao){
                tirosacertados++
            }
            tiros++
        }
        danoniwiw = tirosacertados*200
        niwiw.vida = niwiw.vida-danoniwiw
        document.getElementById("hpniwiw").innerText = "HP: " + niwiw.vida
        narracao.innerText= "Timberth acertou "+ tirosacertados + " tiro(s), causando um total de "+ danoniwiw + " de dano à Niwiw."
    }
    if (magia==true && magia2==true && foco==1){
        niwiw.vida = niwiw.vida-700
        document.getElementById("hpniwiw").innerText = "HP: " + niwiw.vida
        narracao.innerText= "A estrutura atômica de Niwiw foi levemente desestabilizada, lhe causando 700 de dano!"
    }
    if (magia==true && foco==2){
        outcome.classList.remove("mostra");
        outcome.classList.add("esconde");
        selectvlad.classList.remove("esconde");
        selectvlad.classList.add("mostra");
    }
    if (magia==true && magia1==true && foco==3){
        niwiw.vida = niwiw.vida-300
        demoman.vida = demoman.vida+500
        document.getElementById("hpniwiw").innerText = "HP: " + niwiw.vida
        document.getElementById("hpdemo").innerText = "HP: " + demoman.vida
        narracao.innerText= "Demoman atinge Niwiw com a sua Eyelander, causando 300 de dano e roubando um pouco de sua vitalidade!"
    }
    if(magia==true && magia2==true && foco==3){
        demododge==true
        narracao.innerText= "Demoman ficará nos ares até o próximo turno!"
    }
    if(magia==true && magia1==true && foco==4){
        spydodge=true
        narracao.innerText= "Spy ficou invisível."
        console.log("ta invisivel")
    }
    if(magia==true && magia2==true && foco==4){
        acerto=Math.floor(Math.random()*100)+1
        if(acerto<=spy.precisao-70 || spydodge==true){
            niwiw.vida = niwiw.vida-5000
            document.getElementById("hpniwiw").innerText = "HP: " + niwiw.vida
            narracao.innerText= "Spy consegue esfaquear Niwiw, causando 5000 pontos de dano! Ele sentiu essa, com certeza."
            spydodge==false
        } else {
            narracao.innerText= "Spy foi avistado por Niwiw e foi obrigado a recuar."
        }
    }
    if(magia==true && magia1==true && foco==5){
        acerto=Math.floor(Math.random()*100)+1
        if(acerto<=sniper.precisao-20){
            niwiw.jarrate=true
            narracao.innerText= "O jarro atinge Niwiw, deixando-o ensopado no líquido corrosivo!"
        } else {
            narracao.innerText= "Sniper errou o arremesso."
        }
    }
    if(magia==true && magia2==true && foco==5){
        narracao.innerText= "Niwiw voltou sua atenção para Sniper."
    }
    if(magia==true && magia1==true && foco==6){
        niwiw.vida = niwiw.vida-800
        document.getElementById("hpniwiw").innerText = "HP: " + niwiw.vida
        narracao.innerText= "Sonic inflige 800 pontos de dano à Niwiw!"
    }
    if(magia==true && magia2==true && foco==6){
        acerto=Math.floor(Math.random()*100)+1
        if(acerto<=5){
            niwiw.chaos=true
            narracao.innerText= "Niwiw foi imobilizado! Ele será obrigado a pular seu próximo turno."
        } else {
            narracao.innerText= "O poder da Esmeralda parece não funcionar em Niwiw."
        }
    }
    if(skip==true && foco==1){
        timberth.vida = timberth.vida+500
        document.getElementById("hptimberth").innerText = "HP: " + timberth.vida
        narracao.innerText= "Timberth retomou um pouco de seu fôlego."
    }
    if(skip==true && foco==2){
        vlad.vida = vlad.vida+500
        document.getElementById("hpvlad").innerText = "HP: " + vlad.vida
        narracao.innerText= "Vlad retomou um pouco de seu fôlego."
    }
    if(skip==true && foco==3){
        demoman.vida = demoman.vida+500
        document.getElementById("hpdemo").innerText = "HP: " + demoman.vida
        narracao.innerText= "Demoman retomou um pouco de seu fôlego."
    }
    if(skip==true && foco==4){
        spy.vida = spy.vida+500
        document.getElementById("hpspy").innerText = "HP: " + spy.vida
        narracao.innerText= "Spy retomou um pouco de seu fôlego."
    }
    if(skip==true && foco==5){
        sniper.vida = sniper.vida+500
        document.getElementById("hpsniper").innerText = "HP: " + sniper.vida
        narracao.innerText= "Sniper retomou um pouco de seu fôlego."
    }
    if(skip==true && foco==6){
        sonic.vida = sonic.vida+500
        document.getElementById("hpsonic").innerText = "HP: " + sonic.vida
        narracao.innerText= "Sonic retomou um pouco de seu fôlego."
    }
});
document.getElementById("proximoturno").addEventListener("click",function mudaturno(){
    outcome.classList.remove("mostra");
    outcome.classList.add("esconde");
    acao.classList.remove("esconde");
    acao.classList.add("mostra");
    if (foco<6){
        foco++
    } else {
        foco = 1
    }
    mudafoco()
});