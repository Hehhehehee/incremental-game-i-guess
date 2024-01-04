wptt = [
    [
        {
            name:"WKP1",
            checkrequirement:()=>{if(wikipoints.gte(200)){return true}else{return false}},
            onbuy:()=>{wikipointmult=wikipointmult.plus(100);wikipoints=wikipoints.minus(200)},
            tooltip:"100x more wikipoints,\n costs 200 wikipoints",
            bought:false
        },
        {
            rect:true,
            direction:"horizontal"
        },
        {
            name:"ACHV",
            checkrequirement:()=>{if(wikipoints.gte(10000)&&wptt[0][0].bought){return true}else{return false}},
            onbuy:()=>{achievment9=1;wikipoints=wikipoints.minus(10000)},
            tooltip:"gives you an achievment for no reason, worth 10000 wikipoints",
            bought:false
        },
        {
            rect:true,
            direction:"horizontal"
        },
        {
            name:"MDS1",
            checkrequirement:()=>{if(wikipoints.gte(300)&&achievments[7].awarded&&wptt[0][2].bought){return true}else{return false}},
            onbuy:()=>{generatorProduction[0] = generatorProduction[0].times(1000);wikipoints=wikipoints.minus(300)},
            tooltip:"1000x more mods,\n costs 300 wikipoints and achievment game design is my passion",
            bought:false
        },
    ], 
    [
        {
            name:"WKP2",
            checkrequirement:()=>{if(wikipoints.gte(800)&&wptt[0][0].bought){return true}else{return false}},
            onbuy:()=>{factor=290;wikipoints=wikipoints.minus(800)},
            tooltip:"upgrades wikipoint formula to 10(floor(log10(mods))/308)-0.75 to 10(floor(log10(mods))/290)-0.75, costs 800 wikipoints",
            bought:false
        },
        {
            rect:true,
            direction:"horizontal"
        },
        {
            name:"BYND",
            checkrequirement:()=>{if(wikipoints.gte(1e12)&&wptt[0][2].bought&&wptt[1][0].bought){return true}else{return false}},
            onbuy:()=>{$("#beyondtab").show()},
            tooltip:"unlock next prestige layer, costs 1e12 wikipoints",
            bought:false
        },
        {
            name:"WKP3",
            checkrequirement:()=>{if(wikipoints.gte(1e15)&&wptt[1][2].bought){return true}else{return false}},
            onbuy:()=>{wikipointmult=wikipointmult.times(100);wikipoints=wikipoints.minus(1e15)},
            tooltip:"upgrades wikipoint by 100x, costs 1e15 wikipoints",
            bought:false
        },
        {
            rect:true,
            direction:"vertical"
        },
    ]   
]
totalrows = 2
$( function() {
    wptt.forEach((abc,ohindex)=>{
        node = document.createElement("li");
        abc.forEach((element, index)=>{
            if (!element.rect) {
            textnode = document.createElement("BUTTON");
            textnode.textContent = element.name
            $(textnode).addClass("square-button")
            tippy(textnode, {
                followCursor: true,
                content: element.tooltip,
                placement: 'top-end',
              });
            node.appendChild(textnode);
            document.getElementById("wptt").appendChild(node);
            var tn = textnode
            var wpttindex = index
            var wpttohindex = ohindex
            $(textnode).click(()=>{
                if(element.checkrequirement()){
                    element.onbuy()
                    wptt[wpttohindex][wpttindex].bought=true
                    $(tn).attr('disabled','disabled');
                }
            })
            } else {
                if (element.direction === "vertical") {
                    var canvas = document.createElement("canvas")
                    ctx = canvas.getContext("2d")
                    canvas.innerHTML = "<canvas width=50 height=50></canvas>"
                    node.appendChild(canvas);
                    document.getElementById("wptt").appendChild(node);       
                    canvas.setAttribute("width", 50)
                    canvas.setAttribute("height", 50)
                    ctx.fillRect(20,0,10,50)   
                }
                else if (element.direction === "horizontal") {
                    var canvas = document.createElement("canvas")
                    ctx = canvas.getContext("2d")
                    canvas.innerHTML = "<canvas width=50 height=50></canvas>"
                    node.appendChild(canvas);
                    document.getElementById("wptt").appendChild(node);       
                    canvas.setAttribute("width", 50)
                    canvas.setAttribute("height", 50)
                    ctx.fillRect(0,20,50,10)   
                }
            }
        })
    })
})