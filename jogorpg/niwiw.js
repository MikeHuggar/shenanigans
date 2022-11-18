//essa linha serve para deixar o personagem focado no início do jogo
document.getElementById("membro1").style.borderColor="red"
document.getElementById("nometimberth").style.color="red"
//variaveis das pontuações
let point1 = localStorage.getItem("top1")
let point2 = localStorage.getItem("top2")
let point3 = localStorage.getItem("top3")
let pointAtual = 0
//funçao que substitui as pontuaçoes menores
function comparaPoint(){
    if (!point1){
        point1 = 0
    }
    if (!point2){
        point2 = 0
    }
    if (!point3){
        point3 = 0
    }
    if (pointAtual>=point1){
        point3 = point2
        point2 = point1
        point1 = pointAtual
    }else {
        if (pointAtual>=point2){
            point3 = point2
            point2 = pointAtual
        } else {
            if (pointAtual>=point3){
                point3 = pointAtual
            }
        }
    }
}
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
        document.getElementById("niwiw").style.borderColor="black"
        document.getElementById("nometimberth").style.color="red"
        document.getElementById("nomevlad").style.color="black"
        document.getElementById("nomedemo").style.color="black"
        document.getElementById("nomespy").style.color="black"
        document.getElementById("nomesniper").style.color="black"
        document.getElementById("nomesonic").style.color="black"
        document.getElementById("nomeniwiw").style.color="black"
        document.getElementById("nome").innerText="Timberth"
    }
    if (foco==2){
        document.getElementById("membro1").style.borderColor="black"
        document.getElementById("membro2").style.borderColor="red"
        document.getElementById("membro3").style.borderColor="black"
        document.getElementById("membro4").style.borderColor="black"
        document.getElementById("membro5").style.borderColor="black"
        document.getElementById("membro6").style.borderColor="black"
        document.getElementById("niwiw").style.borderColor="black"
        document.getElementById("nometimberth").style.color="black"
        document.getElementById("nomevlad").style.color="red"
        document.getElementById("nomedemo").style.color="black"
        document.getElementById("nomespy").style.color="black"
        document.getElementById("nomesniper").style.color="black"
        document.getElementById("nomesonic").style.color="black"
        document.getElementById("nomeniwiw").style.color="black"
        document.getElementById("nome").innerText="Vlad"
    }
    if (foco==3){
        document.getElementById("membro1").style.borderColor="black"
        document.getElementById("membro2").style.borderColor="black"
        document.getElementById("membro3").style.borderColor="red"
        document.getElementById("membro4").style.borderColor="black"
        document.getElementById("membro5").style.borderColor="black"
        document.getElementById("membro6").style.borderColor="black"
        document.getElementById("niwiw").style.borderColor="black"
        document.getElementById("nometimberth").style.color="black"
        document.getElementById("nomevlad").style.color="black"
        document.getElementById("nomedemo").style.color="red"
        document.getElementById("nomespy").style.color="black"
        document.getElementById("nomesniper").style.color="black"
        document.getElementById("nomesonic").style.color="black"
        document.getElementById("nomeniwiw").style.color="black"
        document.getElementById("nome").innerText="Demoman"
    }
    if (foco==4){
        document.getElementById("membro1").style.borderColor="black"
        document.getElementById("membro2").style.borderColor="black"
        document.getElementById("membro3").style.borderColor="black"
        document.getElementById("membro4").style.borderColor="red"
        document.getElementById("membro5").style.borderColor="black"
        document.getElementById("membro6").style.borderColor="black"
        document.getElementById("niwiw").style.borderColor="black"
        document.getElementById("nometimberth").style.color="black"
        document.getElementById("nomevlad").style.color="black"
        document.getElementById("nomedemo").style.color="black"
        document.getElementById("nomespy").style.color="red"
        document.getElementById("nomesniper").style.color="black"
        document.getElementById("nomesonic").style.color="black"
        document.getElementById("nomeniwiw").style.color="black"
        document.getElementById("nome").innerText="Spy"
    }
    if (foco==5){
        document.getElementById("membro1").style.borderColor="black"
        document.getElementById("membro2").style.borderColor="black"
        document.getElementById("membro3").style.borderColor="black"
        document.getElementById("membro4").style.borderColor="black"
        document.getElementById("membro5").style.borderColor="red"
        document.getElementById("membro6").style.borderColor="black"
        document.getElementById("niwiw").style.borderColor="black"
        document.getElementById("nometimberth").style.color="black"
        document.getElementById("nomevlad").style.color="black"
        document.getElementById("nomedemo").style.color="black"
        document.getElementById("nomespy").style.color="black"
        document.getElementById("nomesniper").style.color="red"
        document.getElementById("nomesonic").style.color="black"
        document.getElementById("nomeniwiw").style.color="black"
        document.getElementById("nome").innerText="Sniper"
    }
    if (foco==6){
        document.getElementById("membro1").style.borderColor="black"
        document.getElementById("membro2").style.borderColor="black"
        document.getElementById("membro3").style.borderColor="black"
        document.getElementById("membro4").style.borderColor="black"
        document.getElementById("membro5").style.borderColor="black"
        document.getElementById("membro6").style.borderColor="red"
        document.getElementById("niwiw").style.borderColor="black"
        document.getElementById("nometimberth").style.color="black"
        document.getElementById("nomevlad").style.color="black"
        document.getElementById("nomedemo").style.color="black"
        document.getElementById("nomespy").style.color="black"
        document.getElementById("nomesniper").style.color="black"
        document.getElementById("nomesonic").style.color="red"
        document.getElementById("nomeniwiw").style.color="black"
        document.getElementById("nome").innerText="Sonic"
    }
    if (foco==7){
        document.getElementById("membro1").style.borderColor="black"
        document.getElementById("membro2").style.borderColor="black"
        document.getElementById("membro3").style.borderColor="black"
        document.getElementById("membro4").style.borderColor="black"
        document.getElementById("membro5").style.borderColor="black"
        document.getElementById("membro6").style.borderColor="black"
        document.getElementById("niwiw").style.borderColor="red"
        document.getElementById("nometimberth").style.color="black"
        document.getElementById("nomevlad").style.color="black"
        document.getElementById("nomedemo").style.color="black"
        document.getElementById("nomespy").style.color="black"
        document.getElementById("nomesniper").style.color="black"
        document.getElementById("nomesonic").style.color="black"
        document.getElementById("nomeniwiw").style.color="red"
    }
};
//aumenta o medidor de magia do personagem ao atacar
function aumentamagia(){
    if(foco==1){
        timberth.magia = timberth.magia+10
        if(timberth.magia<100){
            document.getElementById("mptimberth").innerText = timberth.magia + "%"
        } else {
            timberth.magia = 100
            document.getElementById("mptimberth").innerText = timberth.magia + "%"
        }
    }
    if(foco==2){
        vlad.magia = vlad.magia+10
        if(vlad.magia<100){
            document.getElementById("mpvlad").innerText = vlad.magia + "%"
        } else {
            vlad.magia = 100
            document.getElementById("mpvlad").innerText = vlad.magia + "%"
        }
    }
    if(foco==3){
        demoman.magia = demoman.magia+10
        if(demoman.magia<100){
            document.getElementById("mpdemo").innerText = demoman.magia + "%"
        } else {
            demoman.magia = 100
            document.getElementById("mpdemo").innerText = demoman.magia + "%"
        }
    }
    if(foco==4){
        spy.magia = spy.magia+10
        if(spy.magia<100){
            document.getElementById("mpspy").innerText = spy.magia + "%"
        } else {
            spy.magia = 100
            document.getElementById("mpspyh").innerText = spy.magia + "%"
        }
    }
    if(foco==5){
        sniper.magia = sniper.magia+20
        if(sniper.magia<100){
            document.getElementById("mpsniper").innerText = sniper.magia + "%"
        } else {
            sniper.magia = 100
            document.getElementById("mpsniper").innerText = sniper.magia + "%"
        }
    }
    if(foco==6){
        sonic.magia = sonic.magia+15
        if(sonic.magia<100){
            document.getElementById("mpsonic").innerText = sonic.magia + "%"
        } else {
            sonic.magia = 100
            document.getElementById("mpsonic").innerText = sonic.magia + "%"
        }
    }
};
//aumenta o medidor de magia do personagem ao defender
function aumentamagiadefesa(){
    if(foco==1){
        timberth.magia = timberth.magia+20
        if(timberth.magia<100){
            document.getElementById("mptimberth").innerText = timberth.magia + "%"
        } else {
            timberth.magia = 100
            document.getElementById("mptimberth").innerText = timberth.magia + "%"
        }
    }
    if(foco==2){
        vlad.magia = vlad.magia+20
        if(vlad.magia<100){
            document.getElementById("mpvlad").innerText = vlad.magia + "%"
        } else {
            vlad.magia = 100
            document.getElementById("mpvlad").innerText = vlad.magia + "%"
        }
    }
    if(foco==3){
        demoman.magia = demoman.magia+20
        if(demoman.magia<100){
            document.getElementById("mpdemo").innerText = demoman.magia + "%"
        } else {
            demoman.magia = 100
            document.getElementById("mpdemo").innerText = demoman.magia + "%"
        }
    }
    if(foco==4){
        spy.magia = spy.magia+20
        if(spy.magia<100){
            document.getElementById("mpspy").innerText = spy.magia + "%"
        } else {
            spy.magia = 100
            document.getElementById("mpspy").innerText = spy.magia + "%"
        }
    }
    if(foco==5){
        sniper.magia = sniper.magia+20
        if(sniper.magia<100){
            document.getElementById("mpsniper").innerText = sniper.magia + "%"
        } else {
            sniper.magia = 100
            document.getElementById("mpsniper").innerText = sniper.magia + "%"
        }
    }
    if(foco==6){
        sonic.magia = sonic.magia+20
        if(sonic.magia<100){
            document.getElementById("mpsonic").innerText = sonic.magia + "%"
        } else {
            sonic.magia = 100
            document.getElementById("mpsonic").innerText = sonic.magia + "%"
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
let alvositem = document.getElementById("alvositem")
let magias = document.getElementById("magias")
let menusemmagia = document.getElementById("semmagia")
let magiastimberth = document.getElementById("magiastimberth")
let magiasvlad = document.getElementById("magiasvlad")
let magiasdemo = document.getElementById("magiasdemo")
let magiasspy = document.getElementById("magiasspy")
let magiassniper = document.getElementById("magiassniper")
let magiassonic = document.getElementById("magiassonic")
let itens = document.getElementById("itens")
let anuncio = document.getElementById("anuncioniwiw")
let turnosniwiw = document.getElementById("turnosniwiw")
let fimniwiw = document.getElementById("fimniwiw")
let gameover = document.getElementById("gameover")
let parabens = document.getElementById("parabens")
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
let niwiw = {vida:40000, chaos: false}
let timberth = new Personagem(8000, 75, 0, false)
let vlad = new Personagem(4000, 70, 0, false)
let demoman = new Personagem(10000, 60, 0, false)
let spy = new Personagem(6000, 80, 0, false)
let sniper = new Personagem(8000, 100, 0, false)
let sonic = new Personagem(6000, 100, 0, false)
let magia1 = false
let magia2 = false
let item1 = false
let item2 = false
let item1quant = 2
let item2quant = 2
let demododge = false
let spydodge = false
let sniperreload = false
let snipertaunt = false
//codigo para iniciar/reiniciar o jogo
document.getElementById("start").addEventListener("click",function iniciar(){
    document.getElementById("inicio").classList.add("esconde");
    document.getElementById("fundo").classList.remove("esconde");
    document.getElementById("fundo").style.display="flex";
    document.getElementById("painel").classList.remove("esconde");
    document.getElementById("painel").style.display="flex";
    document.getElementById("niwiwtheme").play();
});
document.getElementById("retry").addEventListener("click",function retry(){
    gameover.classList.remove("mostra");
    gameover.classList.add("esconde");
    acao.classList.remove("esconde");
    acao.classList.add("mostra");
    foco=1
    mudafoco()
    niwiw.vida = 40000
    timberth.vida = 8000
    timberth.magia = 0
    timberth.adrenalina = false
    vlad.vida = 4000
    vlad.magia = 0
    vlad.adrenalina = false
    demoman.vida = 10000
    demoman.magia = 0
    demoman.adrenalina = false
    spy.vida = 6000
    spy.magia = 0
    spy.adrenalina = false
    sniper.vida = 8000
    sniper.magia = 0
    sniper.adrenalina= false
    sonic.vida = 6000
    sonic.magia = 0
    sonic.adrenalina = false
    magia1 = false
    magia2 = false
    item1 = false
    item2 = false
    item1quant = 2
    item2quant = 2
    demododge = false
    spydodge = false
    sniperreload = false
    snipertaunt = false
    niwiw.chaos = false
    document.getElementById("hpniwiw").innerText = niwiw.vida
    document.getElementById("hptimberth").innerText = timberth.vida
    document.getElementById("mptimberth").innerText = "0%"
    document.getElementById("hpvlad").innerText = vlad.vida
    document.getElementById("mpvlad").innerText = "0%"
    document.getElementById("hpdemo").innerText = demoman.vida
    document.getElementById("mpdemo").innerText = "0%"
    document.getElementById("hpspy").innerText = spy.vida
    document.getElementById("mpspy").innerText = "0%"
    document.getElementById("hpsniper").innerText = sniper.vida
    document.getElementById("mpsniper").innerText = "0%"
    document.getElementById("hpsonic").innerText = sonic.vida
    document.getElementById("mpsonic").innerText = "0%"
    document.getElementById("pocao").innerText = "Poção de cura (x" + item1quant + ")"
    document.getElementById("mana").innerText = "Poção de mana (x" + item2quant + ")"
    furia = 1
    document.getElementById("niwiwtheme").play();
});
document.getElementById("replay").addEventListener("click",function replay(){
    parabens.classList.remove("mostra");
    parabens.classList.add("esconde");
    acao.classList.remove("esconde");
    acao.classList.add("mostra");
    foco=1
    mudafoco()
    niwiw.vida = 40000
    timberth.vida = 8000
    timberth.magia = 0
    timberth.adrenalina = false
    vlad.vida = 4000
    vlad.magia = 0
    vlad.adrenalina = false
    demoman.vida = 10000
    demoman.magia = 0
    demoman.adrenalina = false
    spy.vida = 6000
    spy.magia = 0
    spy.adrenalina = false
    sniper.vida = 8000
    sniper.magia = 0
    sniper.adrenalina= false
    sonic.vida = 6000
    sonic.magia = 0
    sonic.adrenalina = false
    magia1 = false
    magia2 = false
    item1 = false
    item2 = false
    item1quant = 2
    item2quant = 2
    demododge = false
    spydodge = false
    sniperreload = false
    snipertaunt = false
    niwiw.chaos = false
    document.getElementById("hpniwiw").innerText = niwiw.vida
    document.getElementById("hptimberth").innerText = timberth.vida
    document.getElementById("mptimberth").innerText = "0%"
    document.getElementById("hpvlad").innerText = vlad.vida
    document.getElementById("mpvlad").innerText = "0%"
    document.getElementById("hpdemo").innerText = demoman.vida
    document.getElementById("mpdemo").innerText = "0%"
    document.getElementById("hpspy").innerText = spy.vida
    document.getElementById("mpspy").innerText = "0%"
    document.getElementById("hpsniper").innerText = sniper.vida
    document.getElementById("mpsniper").innerText = "0%"
    document.getElementById("hpsonic").innerText = sonic.vida
    document.getElementById("mpsonic").innerText = "0%"
    document.getElementById("pocao").innerText = "Poção de cura (x" + item1quant + ")"
    document.getElementById("mana").innerText = "Poção de mana (x" + item2quant + ")"
    furia = 1
    document.getElementById("niwiwtheme").play();
});
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
    item1 = false
    item2 = false
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
    item1 = false
    item2 = false
    skip = false
    descricao.innerText= "Deseja passar esse turno se defendendo? (+20% de magia)"
});
//informa o jogador de que ele não possui MP o suficiente para usar magias
function semmagia(){
   menusemmagia.classList.remove("esconde");
   menusemmagia.classList.add("mostra");
}
document.getElementById("voltasemmagia").addEventListener("click", function voltasemmagia(){
    menusemmagia.classList.remove("mostra");
    menusemmagia.classList.add("esconde");
    acao.classList.remove("esconde");
    acao.classList.add("mostra");
});
//mostra o menu de magias correspondente ao personagem
document.getElementById("magia").addEventListener("click",function menumagia(){
    acao.classList.remove("mostra");
    acao.classList.add("esconde");
    if(foco==1){
        if(timberth.magia==100){
            magias.classList.remove("esconde");
            magias.classList.add("mostra");
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
            ataca = false
            defesa = false
            magia = true
            magia1 = false
            magia2 = false
            item = false
            item1 = false
            item2 = false
            skip = false
        } else {
            semmagia()
        }
    }
    if(foco==2){
        if(vlad.magia==100){
            magias.classList.remove("esconde");
            magias.classList.add("mostra");
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
            ataca = false
            defesa = false
            magia = true
            magia1 = false
            magia2 = false
            item = false
            item1 = false
            item2 = false
            skip = false
        } else {
            semmagia()
        }
    }
    if(foco==3){
        if(demoman.magia==100){
            magias.classList.remove("esconde");
            magias.classList.add("mostra");
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
            ataca = false
            defesa = false
            magia = true
            magia1 = false
            magia2 = false
            item = false
            item1 = false
            item2 = false
            skip = false
        } else {
            semmagia()
        }
    }
    if(foco==4){
        if(spy.magia==100){
            magias.classList.remove("esconde");
            magias.classList.add("mostra");
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
            ataca = false
            defesa = false
            magia = true
            magia1 = false
            magia2 = false
            item = false
            item1 = false
            item2 = false
            skip = false
        } else {
            semmagia()
        }
    }
    if(foco==5){
        if(sniper.magia==100){
            magias.classList.remove("esconde");
            magias.classList.add("mostra");
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
            ataca = false
            defesa = false
            magia = true
            magia1 = false
            magia2 = false
            item = false
            item1 = false
            item2 = false
            skip = false
        } else {
            semmagia()
        }
    }
    if(foco==6){
        if(sonic.magia==100){
            magias.classList.remove("esconde");
            magias.classList.add("mostra");
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
            ataca = false
            defesa = false
            magia = true
            magia1 = false
            magia2 = false
            item = false
            item1 = false
            item2 = false
            skip = false
        } else {
            semmagia()
        }
    }
});
//descreve o efeito da magia para o jogador ao escolher
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
    descricao.innerText= "Demoman atacará Niwiw com sua espada, a Eyelander (300 de dano, +500 de vida para Demoman e irá usar somente 50% de seu MP)."
});
document.getElementById("sticky").addEventListener("click", function magiademo2(){
    magias.classList.remove("mostra");
    magias.classList.add("esconde");
    confirma.classList.remove("esconde");
    confirma.classList.add("mostra");
    magia2 = true
    descricao.innerText= "Demoman irá detonar explosivos colocados diretamente abaixo de si, lançando-se aos ares e ficando imune à proxima instância de dano."
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
    confirma.classList.add("mostra");
    confirma.classList.remove("esconde");
    magia2 = true
    descricao.innerText= "Spy irá tentar esfaquear Niwiw pelas costas. Uma tarefa difícil, mas com retorno proporcional ao risco."
});
document.getElementById("megatiro").addEventListener("click", function magiasniper1(){
    magias.classList.remove("mostra");
    magias.classList.add("esconde");
    confirma.classList.remove("esconde");
    confirma.classList.add("mostra");
    magia1 = true
    descricao.innerText= "Sniper carregará um tiro mais poderoso que o normal, causando 4000 de dano."
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
    descricao.innerText= "Sonic irá girar em cima de Niwiw, causando uma grande quantidade de dano."
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
        document.getElementById("hptimberth").innerText= timberth.vida
    }
    if(magia2==true){
        narracao.innerText= "Timberth agora está sobre os efeitos da ADRENALINA!"
        timberth.adrenalina=true
    }
    vlad.magia=0
    document.getElementById("mpvlad").innerText= vlad.magia + "%"
});
document.getElementById("alvovlad").addEventListener("click", function alvovlad(){
    selectvlad.classList.remove("mostra");
    selectvlad.classList.add("esconde");
    outcome.classList.remove("esconde");
    outcome.classList.add("mostra");
    if(magia1==true){
        narracao.innerText= "Vlad recebeu 3000 pontos de vida!"
        vlad.vida = vlad.vida+3000
        document.getElementById("hpvlad").innerText= vlad.vida
    }
    if(magia2==true){
        narracao.innerText= "Vlad agora está sobre os efeitos da ADRENALINA!"
        vlad.adrenalina=true
    }
    vlad.magia=0
    document.getElementById("mpvlad").innerText= vlad.magia + "%"
});
document.getElementById("alvodemo").addEventListener("click", function alvodemo(){
    selectvlad.classList.remove("mostra");
    selectvlad.classList.add("esconde");
    outcome.classList.remove("esconde");
    outcome.classList.add("mostra");
    if(magia1==true){
        narracao.innerText= "Demoman recebeu 3000 pontos de vida!"
        demoman.vida = demoman.vida+3000
        document.getElementById("hpdemo").innerText= demoman.vida
    }
    if(magia2==true){
        narracao.innerText= "Demoman agora está sobre os efeitos da ADRENALINA!"
        demoman.adrenalina=true
    }
    vlad.magia=0
    document.getElementById("mpvlad").innerText= vlad.magia + "%"
});
document.getElementById("alvospy").addEventListener("click", function alvospy(){
    selectvlad.classList.remove("mostra");
    selectvlad.classList.add("esconde");
    outcome.classList.remove("esconde");
    outcome.classList.add("mostra");
    if(magia1==true){
        narracao.innerText= "Spy recebeu 3000 pontos de vida!"
        spy.vida = spy.vida+3000
        document.getElementById("hpspy").innerText= spy.vida
    }
    if(magia2==true){
        narracao.innerText= "Spy agora está sobre os efeitos da ADRENALINA!"
        spy.adrenalina=true
    }
    vlad.magia=0
    document.getElementById("mpvlad").innerText= vlad.magia + "%"
});
document.getElementById("alvosniper").addEventListener("click", function alvosniper(){
    selectvlad.classList.remove("mostra");
    selectvlad.classList.add("esconde");
    outcome.classList.remove("esconde");
    outcome.classList.add("mostra");
    if(magia1==true){
        narracao.innerText= "Sniper recebeu 3000 pontos de vida!"
        sniper.vida = sniper.vida+3000
        document.getElementById("hpsniper").innerText= sniper.vida
    }
    if(magia2==true){
        narracao.innerText= "Sniper agora está sobre os efeitos da ADRENALINA!"
        sniper.adrenalina=true
    }
    vlad.magia=0
    document.getElementById("mpvlad").innerText= vlad.magia + "%"
});
document.getElementById("alvosonic").addEventListener("click", function alvosonic(){
    selectvlad.classList.remove("mostra");
    selectvlad.classList.add("esconde");
    outcome.classList.remove("esconde");
    outcome.classList.add("mostra");
    if(magia1==true){
        narracao.innerText= "Sonic recebeu 3000 pontos de vida!"
        sonic.vida = sonic.vida+3000
        document.getElementById("hpsonic").innerText= sonic.vida
    }
    if(magia2==true){
        narracao.innerText= "Sonic agora está sobre os efeitos da ADRENALINA!"
        sonic.adrenalina=true
    }
    vlad.magia=0
    document.getElementById("mpvlad").innerText= vlad.magia + "%"
});
//mostra o menu de itens para o jogador ao clicar na aba de itens
document.getElementById("item").addEventListener("click", function selectitem(){
    acao.classList.remove("mostra");
    acao.classList.add("esconde");
    itens.classList.remove("esconde");
    itens.classList.add("mostra");
    ataca = false
    defesa = false
    magia = false
    skip = false
});
document.getElementById("voltaitem").addEventListener("click", function voltaitem(){
    itens.classList.remove("mostra");
    itens.classList.add("esconde");
    acao.classList.remove("esconde");
    acao.classList.add("mostra");
    item = false
    item1 = false
    item2 = false
});
document.getElementById("voltasemitem").addEventListener("click", function voltasemitem(){
    semitem.classList.remove("mostra");
    semitem.classList.add("esconde");
    acao.classList.remove("esconde");
    acao.classList.add("mostra");
    item = false
    item1 = false
    item2 = false
});
//selecao de alvo para itens
document.getElementById("pocao").addEventListener("click", function usapocao(){
    if(item1quant>0){
        itens.classList.remove("mostra");
        itens.classList.add("esconde");
        confirma.classList.remove("esconde");
        confirma.classList.add("mostra");
        descricao.innerText= "Esta poção irá curar um alvo de sua escolha em 3000 pontos de vida."
        item = true
        item1 = true
    } else {
        itens.classList.remove("mostra");
        itens.classList.add("esconde");
        semitem.classList.remove("esconde");
        semitem.classList.add("mostra");
    }
});
document.getElementById("mana").addEventListener("click", function usamana(){
    if(item2quant>0){
        itens.classList.remove("mostra");
        itens.classList.add("esconde");
        confirma.classList.remove("esconde");
        confirma.classList.add("mostra");
        descricao.innerText= "Esta poção irá encher o medidor de mana de um alvo de sua escolha."
        item = true
        item2 = true
    } else {
        itens.classList.remove("mostra");
        itens.classList.add("esconde");
        semitem.classList.remove("esconde");
        semitem.classList.add("mostra");
    }
});
//aplica os efeitos dos itens
document.getElementById("itemtimberth").addEventListener("click", function itemtimberth(){
    alvositem.classList.remove("mostra");
    alvositem.classList.add("esconde");
    outcome.classList.remove("esconde");
    outcome.classList.add("mostra");
    if(item1==true){
        narracao.innerText = "Timberth recebeu 3000 pontos de vida!"
        timberth.vida = timberth.vida+3000
        document.getElementById("hptimberth").innerText = timberth.vida
        item = false
        item1 = false
        item1quant--
        document.getElementById("pocao").innerText = "Poção de cura (x" + item1quant + ")"
    }
    if(item2==true){
        narracao.innerText = "Timberth está com seu medidor de magia cheio!"
        timberth.magia = 100
        document.getElementById("mptimberth").innerText = timberth.magia + "%"
        item = false
        item2 = false
        item2quant--
        document.getElementById("mana").innerText = "Poção de mana (x" + item2quant + ")"
    }
});
document.getElementById("itemvlad").addEventListener("click", function itemvlad(){
    alvositem.classList.remove("mostra");
    alvositem.classList.add("esconde");
    outcome.classList.remove("esconde");
    outcome.classList.add("mostra");
    if(item1==true){
        narracao.innerText = "Vlad recebeu 3000 pontos de vida!"
        vlad.vida = vlad.vida+3000
        document.getElementById("hpvlad").innerText = vlad.vida
        item = false
        item1 = false
        item1quant--
        document.getElementById("pocao").innerText = "Poção de cura (x" + item1quant + ")"
    }
    if(item2==true){
        narracao.innerText = "Vlad está com seu medidor de magia cheio!"
        vlad.magia = 100
        document.getElementById("mpvlad").innerText = vlad.magia + "%"
        item = false
        item2 = false
        item2quant--
        document.getElementById("mana").innerText = "Poção de mana (x" + item2quant + ")"
    }
});
document.getElementById("itemdemo").addEventListener("click", function itemdemo(){
    alvositem.classList.remove("mostra");
    alvositem.classList.add("esconde");
    outcome.classList.remove("esconde");
    outcome.classList.add("mostra");
    if(item1==true){
        narracao.innerText = "Demoman recebeu 3000 pontos de vida!"
        demoman.vida = demoman.vida+3000
        document.getElementById("hpdemo").innerText = demoman.vida
        item = false
        item1 = false
        item1quant--
        document.getElementById("pocao").innerText = "Poção de cura (x" + item1quant + ")"
    }
    if(item2==true){
        narracao.innerText = "Demoman está com seu medidor de magia cheio!"
        demoman.magia = 100
        document.getElementById("mpdemo").innerText = demoman.magia + "%"
        item = false
        item2 = false
        item2quant--
        document.getElementById("mana").innerText = "Poção de mana (x" + item2quant + ")"
    }
});
document.getElementById("itemspy").addEventListener("click", function itemspy(){
    alvositem.classList.remove("mostra");
    alvositem.classList.add("esconde");
    outcome.classList.remove("esconde");
    outcome.classList.add("mostra");
    if(item1==true){
        narracao.innerText = "Spy recebeu 3000 pontos de vida!"
        spy.vida = spy.vida+3000
        document.getElementById("hpspy").innerText = spy.vida
        item = false
        item1 = false
        item1quant--
        document.getElementById("pocao").innerText = "Poção de cura (x" + item1quant + ")"
    }
    if(item2==true){
        narracao.innerText = "Spy está com seu medidor de magia cheio!"
        spy.magia = 100
        document.getElementById("mpspy").innerText = spy.magia + "%"
        item = false
        item2 = false
        item2quant--
        document.getElementById("mana").innerText = "Poção de mana (x" + item2quant + ")"
    }
});
document.getElementById("itemsniper").addEventListener("click", function itemsniper(){
    alvositem.classList.remove("mostra");
    alvositem.classList.add("esconde");
    outcome.classList.remove("esconde");
    outcome.classList.add("mostra");
    if(item1==true){
        narracao.innerText = "Sniper recebeu 3000 pontos de vida!"
        sniper.vida = sniper.vida+3000
        document.getElementById("hpsniper").innerText = sniper.vida
        item = false
        item1 = false
        item1quant--
        document.getElementById("pocao").innerText = "Poção de cura (x" + item1quant + ")"
    }
    if(item2==true){
        narracao.innerText = "Sniper está com seu medidor de magia cheio!"
        sniper.magia = 100
        document.getElementById("mpsniper").innerText = sniper.magia + "%"
        item = false
        item2 = false
        item2quant--
        document.getElementById("mana").innerText = "Poção de mana (x" + item2quant + ")"
    }
});
document.getElementById("itemsonic").addEventListener("click", function itemsonic(){
    alvositem.classList.remove("mostra");
    alvositem.classList.add("esconde");
    outcome.classList.remove("esconde");
    outcome.classList.add("mostra");
    if(item1==true){
        narracao.innerText = "Sonic recebeu 3000 pontos de vida!"
        sonic.vida = sonic.vida+3000
        document.getElementById("hpsonic").innerText = sonic.vida
        item = false
        item1 = false
        item1quant--
        document.getElementById("pocao").innerText = "Poção de cura (x" + item1quant + ")"
    }
    if(item2==true){
        narracao.innerText = "Sonic está com seu medidor de magia cheio!"
        sonic.magia = 100
        document.getElementById("mpsonic").innerText = sonic.magia + "%"
        item = false
        item2 = false
        item2quant--
        document.getElementById("mana").innerText = "Poção de mana (x" + item2quant + ")"
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
    item1 = false
    item2 = false
    skip=true
    descricao.innerText= "Deseja passar esse turno descansando? (+500 pontos de vida)"
});
//volta para o menu de acao caso o jogador negue sua confirmacao
document.getElementById("negaacao").addEventListener("click",function voltaselecao(){
    confirma.classList.remove("mostra");
    confirma.classList.add("esconde");
    magias.classList.remove("mostra");
    magias.classList.add("esconde") ;
    itens.classList.remove("mostra");
    itens.classList.add("esconde"); 
    acao.classList.remove("esconde");
    acao.classList.add("mostra");
    ataca = false
    defesa = false
    magia = false
    magia1 = false
    magia2 = false
    item = false
    item1 = false
    item2 = false
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
//determina o que ocorre de acordo com a acao escolhida pelo jogador
document.getElementById("confirmaacao").addEventListener("click",function confirmaselecao(){
    confirma.classList.remove("mostra");
    confirma.classList.add("esconde");
    outcome.classList.remove("esconde");
    outcome.classList.add("mostra");
    //faz uma checagem baseada na precisao do personagem para ver se o ataque vai acertar
    if (ataca==true && foco==1){
        acerto=Math.floor(Math.random()*100)+1
        if (acerto<=timberth.precisao){
            if(timberth.adrenalina==true){
                narracao.innerText= "Niwiw é baleado, levando 400 de dano!"
                niwiw.vida = niwiw.vida-400
                timberth.adrenalina = false
            } else {
                narracao.innerText= "Niwiw é baleado, levando 200 de dano!"
                niwiw.vida = niwiw.vida-200
            }
            document.getElementById("hpniwiw").innerText = niwiw.vida
            aumentamagia()
        } else {
            narracao.innerText= "Timberth se lembrou das atrocidades que Niwiw fez e congelou de medo."
        }
    }
    if (ataca==true && foco==2){
        acerto=Math.floor(Math.random()*100)+1
        if (acerto<=vlad.precisao){
            if(vlad.adrenalina==true){
                narracao.innerText= "Niwiw foi socado, levando 200 de dano!"
                niwiw.vida = niwiw.vida-200 
                vlad.adrenalina = false
            } else {
                narracao.innerText= "Niwiw foi socado, levando 100 de dano!"
                niwiw.vida = niwiw.vida-100
            }
            document.getElementById("hpniwiw").innerText = niwiw.vida
            aumentamagia()
        } else {
            narracao.innerText= "Vlad ainda não consegue superar os seus traumas causados por Niwiw."
        }
    }
    if (ataca==true && foco==3){
        acerto=Math.floor(Math.random()*100)+1
        if (acerto<=demoman.precisao){
            if(demoman.adrenalina==true){
                narracao.innerText= "A granada faz contato, causando 1000 de dano em Niwiw!"
                niwiw.vida = niwiw.vida-1000
                demoman.adrenalina = false
            } else {
                narracao.innerText= "A granada faz contato, causando 500 de dano em Niwiw!"
                niwiw.vida = niwiw.vida-500
            }
            document.getElementById("hpniwiw").innerText = niwiw.vida
            aumentamagia()
        } else {
            if(demoman.adrenalina==true){
                narracao.innerText= "Apesar da granada não ter atingido Niwiw, ela explode perto o suficiente para causar 200 de dano!"
                niwiw.vida = niwiw.vida-200
                demoman.adrenalina = false
            } else {
                narracao.innerText= "Apesar da granada não ter atingido Niwiw, ela explode perto o suficiente para causar 100 de dano!"
                niwiw.vida = niwiw.vida-100
            }
            document.getElementById("hpniwiw").innerText = niwiw.vida
        }
    }    
    if (ataca==true && foco==4){
        acerto=Math.floor(Math.random()*100)+1
        if (acerto<=vlad.precisao){
            if(spy.adrenalina==true){
                narracao.innerText= "Niwiw é baleado, levando 400 de dano!"
                niwiw.vida = niwiw.vida-400
                spy.adrenalina = false
            } else {
                narracao.innerText= "Niwiw é baleado, levando 200 de dano!"
                niwiw.vida = niwiw.vida-200
            }
            document.getElementById("hpniwiw").innerText = niwiw.vida
            aumentamagia()
        } else {
            narracao.innerText= "Spy errou seu disparo."
        }
    }
    if (ataca==true && foco==5){
        if(sniperreload==false) {
            if(sniper.adrenalina==true){
                narracao.innerText= "Tiro certeiro! Niwiw leva 2000 de dano!"
                niwiw.vida = niwiw.vida-2000
                sniper.adrenalina = false
            } else {
                narracao.innerText= "Tiro certeiro! Niwiw leva 1000 de dano!"
                niwiw.vida = niwiw.vida-1000
            }
            document.getElementById("hpniwiw").innerText = niwiw.vida
            aumentamagia()
            sniperreload=true
        } else {
            sniperreload=false
            narracao.innerText= "Sniper recarregou sua arma."
        }
    }
    if (ataca==true && foco==6){
        if(sonic.adrenalina==true){
            narracao.innerText= "Niwiw é atingido, levando 200 de dano!"
            niwiw.vida = niwiw.vida-200
            sonic.adrenalina = false
        } else {
            narracao.innerText= "Niwiw é atingido, levando 100 de dano!"
            niwiw.vida = niwiw.vida-100
        }
        document.getElementById("hpniwiw").innerText = niwiw.vida
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
        if(timberth.adrenalina==true){
            danoniwiw = danoniwiw*2
            timberth.adrenalina = false
        }
        niwiw.vida = niwiw.vida-danoniwiw
        document.getElementById("hpniwiw").innerText = niwiw.vida
        narracao.innerText= "Timberth acertou "+ tirosacertados + " tiro(s), causando um total de "+ danoniwiw + " de dano à Niwiw."
        timberth.magia=0
        document.getElementById("mptimberth").innerText = timberth.magia + "%"
    }
    if (magia==true && magia2==true && foco==1){
        if(timberth.adrenalina==true){
            niwiw.vida = niwiw.vida-1400
            document.getElementById("hpniwiw").innerText = niwiw.vida
            narracao.innerText= "A estrutura atômica de Niwiw foi levemente desestabilizada, lhe causando 1400 de dano!"
            timberth.magia=0
            document.getElementById("mptimberth").innerText = timberth.magia + "%"
            timberth.adrenalina = false
        } else {
            niwiw.vida = niwiw.vida-700
            document.getElementById("hpniwiw").innerText = niwiw.vida
            narracao.innerText= "A estrutura atômica de Niwiw foi levemente desestabilizada, lhe causando 700 de dano!"
            timberth.magia=0
            document.getElementById("mptimberth").innerText = timberth.magia + "%"
        }
    }
    if (magia==true && foco==2){
        outcome.classList.remove("mostra");
        outcome.classList.add("esconde");
        selectvlad.classList.remove("esconde");
        selectvlad.classList.add("mostra");
    }
    if (magia==true && magia1==true && foco==3){
        niwiw.vida = niwiw.vida-300
        if(demoman.adrenalina==true){
            niwiw.vida = niwiw.vida-300
        }
        demoman.vida = demoman.vida+500
        document.getElementById("hpniwiw").innerText = niwiw.vida
        document.getElementById("hpdemo").innerText = demoman.vida
        if(demoman.adrenalina==true){
            narracao.innerText= "Demoman atinge Niwiw com a sua Eyelander, causando 600 de dano e roubando um pouco de sua vitalidade!"
            demoman.adrenalina = false
        } else {
            narracao.innerText= "Demoman atinge Niwiw com a sua Eyelander, causando 300 de dano e roubando um pouco de sua vitalidade!"
        }
        demoman.magia=50
        document.getElementById("mpdemo").innerText = demoman.magia + "%"
    }
    if(magia==true && magia2==true && foco==3){
        demododge=true
        narracao.innerText= "Demoman está nos ares!"
        demoman.magia=0
        document.getElementById("mpdemo").innerText = demoman.magia + "%"
    }
    if(magia==true && magia1==true && foco==4){
        spydodge=true
        narracao.innerText= "Spy ficou invisível."
        spy.magia=0
        document.getElementById("mpspy").innerText = spy.magia + "%"
    }
    if(magia==true && magia2==true && foco==4){
        if(spydodge==true){
            niwiw.vida = niwiw.vida-5000
            if(spy.adrenalina==true){
                niwiw.vida = niwiw.vida-5000
            }
            document.getElementById("hpniwiw").innerText = niwiw.vida
            if(spy.adrenalina==true){
                narracao.innerText= "Spy consegue esfaquear Niwiw, causando 10000 pontos de dano! Vai ser difícil se recuperar dessa, hein?."
                spy.adrenalina =false
            } else {
                narracao.innerText= "Spy consegue esfaquear Niwiw, causando 5000 pontos de dano! Ele sentiu essa, com certeza."
            }
            spydodge==false
        } else {
            acerto=Math.floor(Math.random()*100)+1
            if(acerto<=spy.precisao-70){
                niwiw.vida = niwiw.vida-5000
                if(spy.adrenalina==true){
                    niwiw.vida = niwiw.vida-5000
                }
                document.getElementById("hpniwiw").innerText = niwiw.vida
                if(spy.adrenalina==true){
                    narracao.innerText= "Spy consegue esfaquear Niwiw, causando 10000 pontos de dano! Vai ser difícil se recuperar dessa, hein?."
                    spy.adrenalina =false
                } else {
                    narracao.innerText= "Spy consegue esfaquear Niwiw, causando 5000 pontos de dano! Ele sentiu essa, com certeza."
                }
            } else {
                narracao.innerText= "Spy foi avistado por Niwiw e foi obrigado a recuar."
            }
        }
        spy.magia=0
        document.getElementById("mpspy").innerText = spy.magia + "%"
    }
    if(magia==true && magia1==true && foco==5){
        niwiw.vida = niwiw.vida-4000
        if(sniper.adrenalina==true){
            niwiw.vida = niwiw.vida-4000
        }
        document.getElementById("hpniwiw").innerText = niwiw.vida
        if(sniper.adrenalina==true){
            narracao.innerText= "Sniper acerta o tiro, causando 8000 de dano!"
            sniper.adrenalina = false
        } else {
            narracao.innerText= "Sniper acerta o tiro, causando 4000 de dano!"
        }
        sniper.magia=0
        document.getElementById("mpsniper").innerText = sniper.magia + "%"
    }
    if(magia==true && magia2==true && foco==5){
        narracao.innerText= "Niwiw voltou sua atenção para Sniper."
        sniper.magia = 0
        snipertaunt=true
        document.getElementById("mpsniper").innerText = sniper.magia + "%"
    }
    if(magia==true && magia1==true && foco==6){
        niwiw.vida = niwiw.vida-800
        if(sonic.adrenalina==true){
            niwiw.vida = niwiw.vida-800
        }
        document.getElementById("hpniwiw").innerText = niwiw.vida
        if(sonic.adrenalina==true){
            narracao.innerText= "Sonic inflige 1600 pontos de dano à Niwiw!"
            sonic.adrenalina = false
        } else {
            narracao.innerText= "Sonic inflige 800 pontos de dano à Niwiw!"
        }
        sonic.magia=0
        document.getElementById("mpsonic").innerText = sonic.magia + "%"
    }
    if(magia==true && magia2==true && foco==6){
        acerto=Math.floor(Math.random()*100)+1
        if(acerto<=5){
            niwiw.chaos=true
            narracao.innerText= "Niwiw foi imobilizado! Ele será obrigado a pular seu próximo turno."
        } else {
            narracao.innerText= "O poder da Esmeralda parece não ter funcionado em Niwiw."
        }
        sonic.magia=0
        document.getElementById("mpsonic").innerText = sonic.magia + "%"
    }
    if(item==true){
        outcome.classList.remove("mostra");
        outcome.classList.add("esconde");
        alvositem.classList.remove("esconde");
        alvositem.classList.add("mostra");
    }
    if(skip==true && foco==1){
        timberth.vida = timberth.vida+500
        document.getElementById("hptimberth").innerText = timberth.vida
        narracao.innerText= "Timberth retomou um pouco de seu fôlego."
    }
    if(skip==true && foco==2){
        vlad.vida = vlad.vida+500
        document.getElementById("hpvlad").innerText = vlad.vida
        narracao.innerText= "Vlad retomou um pouco de seu fôlego."
    }
    if(skip==true && foco==3){
        demoman.vida = demoman.vida+500
        document.getElementById("hpdemo").innerText = demoman.vida
        narracao.innerText= "Demoman retomou um pouco de seu fôlego."
    }
    if(skip==true && foco==4){
        spy.vida = spy.vida+500
        document.getElementById("hpspy").innerText = spy.vida
        narracao.innerText= "Spy retomou um pouco de seu fôlego."
    }
    if(skip==true && foco==5){
        sniper.vida = sniper.vida+500
        document.getElementById("hpsniper").innerText = sniper.vida
        narracao.innerText= "Sniper retomou um pouco de seu fôlego."
    }
    if(skip==true && foco==6){
        sonic.vida = sonic.vida+500
        document.getElementById("hpsonic").innerText = sonic.vida
        narracao.innerText= "Sonic retomou um pouco de seu fôlego."
    }
});
document.getElementById("proximoturno").addEventListener("click",function mudaturno(){
    outcome.classList.remove("mostra");
    outcome.classList.add("esconde");
    acao.classList.remove("esconde");
    acao.classList.add("mostra");
    foco++
    if(foco==2 && vlad.vida<=0){
        foco++
    }
    if(foco==3 && demoman.vida<=0){
        foco++
    }
    if(foco==4 && spy.vida<=0){
        foco++
    }
    if(foco==5 && sniper.vida<=0){
        foco++
    }
    if(foco==6 && sonic.vida<=0){
        foco++
    }
    if(foco==7){
        if(niwiw.chaos==true){
            foco=1
            niwiw.chaos = false
        }
        if(niwiw.vida>0){
            acao.classList.remove("mostra");
            acao.classList.add("esconde");
            anuncio.classList.remove("esconde");
            anuncio.classList.add("mostra");
        } else {
            pointAtual = niwiw.vida*(-1);
            comparaPoint()
            localStorage.setItem("top1",point1);
            localStorage.setItem("top2",point2);
            localStorage.setItem("top3",point3);
            document.getElementById("score1").innerText = "TOP 1 PONTOS: " + point1
            document.getElementById("score2").innerText = "TOP 2 PONTOS: " + point2
            document.getElementById("score3").innerText = "TOP 3 PONTOS: " + point3
            acao.classList.remove("mostra");
            acao.classList.add("esconde");
            parabens.classList.remove("esconde");
            parabens.classList.add("mostra");
            console.log(point1)
            console.log(point2)
            console.log(point3)
            document.getElementById("niwiwtheme").currentTime = 0
            document.getElementById("niwiwtheme").pause();
        }
    }
    mudafoco()
});
//codigos para os ataques de niwiw
let ataquesniwiw = 0
let niwiwataca = 0
//alvocolateral determina quem sofrerá dano além do alvo principal de niwiw
let alvocolateral = 0
//furia é uma variavel que aumenta a cada turno do niwiw. foi criada com a intençao de fazer uma batalha progressivamente mais difícil
let furia = 1
function niwiwataque(){
    danoniwiw = parseInt((600*furia)*ataquesniwiw)
    if(niwiwataca==1){
        timberth.vida = timberth.vida-danoniwiw
        if(alvocolateral==1){
            vlad.vida = vlad.vida-(danoniwiw/2)
            document.getElementById("narraniwiw").innerText = "Niwiw causou " + danoniwiw + " de dano em Timberth! E ainda acabou sobrando pro Vlad..."
        }
        if(alvocolateral==2){
            demoman.vida = demoman.vida-(danoniwiw/2)
            document.getElementById("narraniwiw").innerText = "Niwiw causou " + danoniwiw + " de dano em Timberth! E ainda acabou sobrando pro Demoman..."
        }
        if(alvocolateral==3){
            spy.vida = spy.vida-(danoniwiw/2)
            document.getElementById("narraniwiw").innerText = "Niwiw causou " + danoniwiw + " de dano em Timberth! E ainda acabou sobrando pro Spy..."
        }
        if(alvocolateral==4){
            sniper.vida = sniper.vida-(danoniwiw/2)
            document.getElementById("narraniwiw").innerText = "Niwiw causou " + danoniwiw + " de dano em Timberth! E ainda acabou sobrando pro Sniper..."
        }
        if(alvocolateral==5){
            sonic.vida = sonic.vida-(danoniwiw/2)
            document.getElementById("narraniwiw").innerText = "Niwiw causou " + danoniwiw + " de dano em Timberth! E ainda acabou sobrando pro Sonic..."
        }
    }
    if(niwiwataca==2){
        vlad.vida = vlad.vida-danoniwiw
        if(alvocolateral==1){
            timberth.vida = timberth.vida-(danoniwiw/2)
            document.getElementById("narraniwiw").innerText = "Niwiw causou " + danoniwiw + " de dano em Vlad! E ainda acabou sobrando pro Timberth..."
        }
        if(alvocolateral==2){
            demoman.vida = demoman.vida-(danoniwiw/2)
            document.getElementById("narraniwiw").innerText = "Niwiw causou " + danoniwiw + " de dano em Vlad! E ainda acabou sobrando pro Demoman..."
        }
        if(alvocolateral==3){
            spy.vida = spy.vida-(danoniwiw/2)
            document.getElementById("narraniwiw").innerText = "Niwiw causou " + danoniwiw + " de dano em Vlad! E ainda acabou sobrando pro Spy..."
        }
        if(alvocolateral==4){
            sniper.vida = sniper.vida-(danoniwiw/2)
            document.getElementById("narraniwiw").innerText = "Niwiw causou " + danoniwiw + " de dano em Vlad! E ainda acabou sobrando pro Sniper..."
        }
        if(alvocolateral==5){
            sonic.vida = sonic.vida-(danoniwiw/2)
            document.getElementById("narraniwiw").innerText = "Niwiw causou " + danoniwiw + " de dano em Vlad! E ainda acabou sobrando pro Sonic..."
        }
    }
    if(niwiwataca==3){
        if(demododge==true){
            document.getElementById("narraniwiw").innerText = "Demoman não foi atingido por Niwiw!"
            demododge=false
        } else {
            demoman.vida = demoman.vida-danoniwiw
            if(alvocolateral==1){
                timberth.vida = timberth.vida-(danoniwiw/2)
                document.getElementById("narraniwiw").innerText = "Niwiw causou " + danoniwiw + " de dano em Demoman! E ainda acabou sobrando pro Timberth..."
            }
            if(alvocolateral==2){
                vlad.vida = vlad.vida-(danoniwiw/2)
                document.getElementById("narraniwiw").innerText = "Niwiw causou " + danoniwiw + " de dano em Demoman! E ainda acabou sobrando pro Vlad..."
            }
            if(alvocolateral==3){
                spy.vida = spy.vida-(danoniwiw/2)
                document.getElementById("narraniwiw").innerText = "Niwiw causou " + danoniwiw + " de dano em Demoman! E ainda acabou sobrando pro Spy..."
            }
            if(alvocolateral==4){
                sniper.vida = sniper.vida-(danoniwiw/2)
                document.getElementById("narraniwiw").innerText = "Niwiw causou " + danoniwiw + " de dano em Demoman! E ainda acabou sobrando pro Sniper..."
            }
            if(alvocolateral==5){
                sonic.vida = sonic.vida-(danoniwiw/2)
                document.getElementById("narraniwiw").innerText = "Niwiw causou " + danoniwiw + " de dano em Demoman! E ainda acabou sobrando pro Sonic..."
            }
        }
    }
    if(niwiwataca==4){
        if(spydodge==true){
            document.getElementById("narraniwiw").innerText = "Spy não foi atingido por Niwiw!"
            spydodge=false
        } else {
            spy.vida = spy.vida-danoniwiw
            if(alvocolateral==1){
                timberth.vida = timberth.vida-(danoniwiw/2)
                document.getElementById("narraniwiw").innerText = "Niwiw causou " + danoniwiw + " de dano em Spy! E ainda acabou sobrando pro Timberth..."
            }
            if(alvocolateral==2){
                vlad.vida = vlad.vida-(danoniwiw/2)
                document.getElementById("narraniwiw").innerText = "Niwiw causou " + danoniwiw + " de dano em Spy! E ainda acabou sobrando pro Vlad..."
            }
            if(alvocolateral==3){
                demoman.vida = demoman.vida-(danoniwiw/2)
                document.getElementById("narraniwiw").innerText = "Niwiw causou " + danoniwiw + " de dano em Spy! E ainda acabou sobrando pro Demoman..."
            }
            if(alvocolateral==4){
                sniper.vida = sniper.vida-(danoniwiw/2)
                document.getElementById("narraniwiw").innerText = "Niwiw causou " + danoniwiw + " de dano em Spy! E ainda acabou sobrando pro Sniper..."
            }
            if(alvocolateral==5){
                sonic.vida = sonic.vida-(danoniwiw/2)
                document.getElementById("narraniwiw").innerText = "Niwiw causou " + danoniwiw + " de dano em Spy! E ainda acabou sobrando pro Sonic..."
            }
        }
    }
    if(niwiwataca==5){
        sniper.vida = sniper.vida-danoniwiw
        if(alvocolateral==1){
            timberth.vida = timberth.vida-(danoniwiw/2)
            document.getElementById("narraniwiw").innerText = "Niwiw causou " + danoniwiw + " de dano em Sniper! E ainda acabou sobrando pro Timberth..."
        }
        if(alvocolateral==2){
            vlad.vida = vlad.vida-(danoniwiw/2)
            document.getElementById("narraniwiw").innerText = "Niwiw causou " + danoniwiw + " de dano em Sniper! E ainda acabou sobrando pro Vlad..."
        }
        if(alvocolateral==3){
            demoman.vida = demoman.vida-(danoniwiw/2)
            document.getElementById("narraniwiw").innerText = "Niwiw causou " + danoniwiw + " de dano em Sniper! E ainda acabou sobrando pro Demoman..."
        }
        if(alvocolateral==4){
            spy.vida = spy.vida-(danoniwiw/2)
            document.getElementById("narraniwiw").innerText = "Niwiw causou " + danoniwiw + " de dano em Sniper! E ainda acabou sobrando pro Spy..."
        }
        if(alvocolateral==5){
            sonic.vida = sonic.vida-(danoniwiw/2)
            document.getElementById("narraniwiw").innerText = "Niwiw causou " + danoniwiw + " de dano em Sniper! E ainda acabou sobrando pro Sonic..."
        }
    }
    if(niwiwataca==6){
        sonic.vida = sonic.vida-danoniwiw
        if(alvocolateral==1){
            timberth.vida = timberth.vida-(danoniwiw/2)
            document.getElementById("narraniwiw").innerText = "Niwiw causou " + danoniwiw + " de dano em Sonic! E ainda acabou sobrando pro Timberth..."
        }
        if(alvocolateral==2){
            vlad.vida = vlad.vida-(danoniwiw/2)
            document.getElementById("narraniwiw").innerText = "Niwiw causou " + danoniwiw + " de dano em Sonic! E ainda acabou sobrando pro Vlad..."
        }
        if(alvocolateral==3){
            demoman.vida = demoman.vida-(danoniwiw/2)
            document.getElementById("narraniwiw").innerText = "Niwiw causou " + danoniwiw + " de dano em Sonic! E ainda acabou sobrando pro Demoman..."
        }
        if(alvocolateral==4){
            spy.vida = spy.vida-(danoniwiw/2)
            document.getElementById("narraniwiw").innerText = "Niwiw causou " + danoniwiw + " de dano em Sonic! E ainda acabou sobrando pro Spy..."
        }
        if(alvocolateral==5){
            sniper.vida = sniper.vida-(danoniwiw/2)
            document.getElementById("narraniwiw").innerText = "Niwiw causou " + danoniwiw + " de dano em Sonic! E ainda acabou sobrando pro Sniper..."
        }
    }
    document.getElementById("hptimberth").innerText = timberth.vida
    document.getElementById("hpvlad").innerText = vlad.vida
    document.getElementById("hpdemo").innerText = demoman.vida
    document.getElementById("hpspy").innerText = spy.vida
    document.getElementById("hpsniper").innerText = sniper.vida
    document.getElementById("hpsonic").innerText = sonic.vida
};
document.getElementById("proximoniwiw").addEventListener("click", function proximoniwiw(){
    anuncio.classList.remove("mostra");
    anuncio.classList.add("esconde");
    turnosniwiw.classList.remove("esconde");
    turnosniwiw.classList.add("mostra")
    niwiwataca=Math.floor(Math.random()*6)+1
    alvocolateral=Math.floor(Math.random()*5)+1
    ataquesniwiw=Math.floor(Math.random()*3)+1
    if(snipertaunt==true){
        niwiwataca=5
        snipertaunt=false
    }
    if(niwiwataca==1){
        document.getElementById("alvoniwiw").innerText = "Niwiw ferozmente ataca Timberth " + ataquesniwiw + " vez(es)!"
    }
    if(niwiwataca==2){
        document.getElementById("alvoniwiw").innerText = "Niwiw ferozmente ataca Vlad " + ataquesniwiw + " vez(es)!"
    }
    if(niwiwataca==3){
        document.getElementById("alvoniwiw").innerText = "Niwiw ferozmente ataca Demoman " + ataquesniwiw + " vez(es)!"
    }
    if(niwiwataca==4){
        document.getElementById("alvoniwiw").innerText = "Niwiw ferozmente ataca Spy " + ataquesniwiw + " vez(es)!"
    }
    if(niwiwataca==5){
        document.getElementById("alvoniwiw").innerText = "Niwiw ferozmente ataca Sniper " + ataquesniwiw + " vez(es)!"
    }
    if(niwiwataca==6){
        document.getElementById("alvoniwiw").innerText = "Niwiw ferozmente ataca Sonic " + ataquesniwiw + " vez(es)!"
    }
    niwiwataque()
    furia = furia+0.05  
});
document.getElementById("vish").addEventListener("click", function vish(){
    turnosniwiw.classList.remove("mostra");
    turnosniwiw.classList.add("esconde");
    fimniwiw.classList.remove("esconde");
    fimniwiw.classList.add("mostra");
});
document.getElementById("terminaniwiw").addEventListener("click", function terminaniwiw(){
    fimniwiw.classList.remove("mostra");
    fimniwiw.classList.add("esconde");
    acao.classList.remove("esconde");
    acao.classList.add("mostra");
    foco=1
    if(timberth.vida<=0){
        foco++
    }
    if(foco==2 && vlad.vida<=0){
        foco++
    }
    if(foco==3 && demoman.vida<=0){
        foco++
    }
    if(foco==4 && spy.vida<=0){
        foco++
    }
    if(foco==5 && sniper.vida<=0){
        foco++
    }
    if(foco==6 && sonic.vida<=0){
        foco++
    }
    if (timberth.vida<=0 && vlad.vida<=0 && demoman.vida<=0 && spy.vida<=0 && sniper.vida<=0 && sonic.vida<=0){
        acao.classList.remove("mostra");
        acao.classList.add("esconde");
        gameover.classList.remove("esconde");
        gameover.classList.add("mostra");
        document.getElementById("niwiwtheme").currentTime = 0
        document.getElementById("niwiwtheme").pause();
    }
    mudafoco()
});
