wptt = [
    [
        {
            name:"WKP1",
            checkrequirement:()=>{if(wikipoints.gte(200)){return true}else{return false}},
            onbuy:()=>{wikipointmult=wikipointmult.plus(100);wikipoints=wikipoints.minus(200)},
            tooltip:"100x more wikipoints,\n costs 200 wikipoints",
        },
        {
            name:"MDS1",
            checkrequirement:()=>{if(wikipoints.gte(300)&&achievments[7].awarded){return true}else{return false}},
            onbuy:()=>{generatorProduction[0] = generatorProduction[0].times(1000);wikipoints=wikipoints.minus(300)},
            tooltip:"1000x more mods,\n costs 300 wikipoints and achievment game design is my passion",
        },
        {
            name:"ACHV",
            checkrequirement:()=>{if(wikipoints.gte(10000)){return true}else{return false}},
            onbuy:()=>{achievment9=1;wikipoints=wikipoints.minus(10000)},
            tooltip:"gives you an achievment for no reason, worth 10000 wikipoints",
        }
    ], 
    [
        {
            name:"WKP2",
            checkrequirement:()=>{if(wikipoints.gte(800)){return true}else{return false}},
            onbuy:()=>{factor=290;wikipoints=wikipoints.minus(800)},
            tooltip:"upgrades wikipoint formula to 10(floor(log10(mods))/308)-0.75 to 10(floor(log10(mods))/290)-0.75, costs 800 wikipoints",
        },
        {
            name:"BYND",
            checkrequirement:()=>{},
            onbuy:()=>{alert("prestige layer coming soon!!")},
            tooltip:"unlock next prestige layer, costs 1e12 wikipoints",
        }
    ]   
]
totalrows = 2
$( function() {
    wptt.forEach((abc)=>{
        node = document.createElement("li");
        abc.forEach((element)=>{
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
            $(textnode).click(()=>{
                if(element.checkrequirement()){
                    element.onbuy()
                    $(tn).attr('disabled','disabled');
                }
            })
        })
    })
})