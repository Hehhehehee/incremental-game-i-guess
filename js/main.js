achievment9 = 0
givemefreeachievment = 0
cash = new Decimal(0)
cashpersecond = new Decimal(0.000000001)
wikipointmult = new Decimal(1)
factor = 308
beyondpoint=new Decimal(0)
beyondpointmult = new Decimal(1)
function showtextinfullscreen(a) {
    screencover = document.createElement("div");
    span = document.createElement("span");
    $(screencover).addClass("highzindex")
    $(screencover).addClass("fullscreen")
    document.body.appendChild(screencover);
    document.body.appendChild(span);
    $(span).addClass("higherzindex")
    $(span).text(a)
}
generatorprices = [  
    new Decimal("2e-7"),
    new Decimal("1"),
    new Decimal("1e4"),
    new Decimal("1e10"),
]
generators = [
    new Decimal(1),
    new Decimal(0),
    new Decimal(0),
    new Decimal(0),
]
generatorProduction = [
    new Decimal("0.000000001"),
    new Decimal("1"),
    new Decimal("1"),
    new Decimal("1"),
]
wikipoints = new Decimal(0)
setInterval(() => {
    tick()
    displays()
}, 33);

$( function() {
    $("#gobeyond").click(()=>{
        beyondpoint = beyondpoint.plus(
            new Decimal(wikipoints
            .log10())
            .floor()
            .div(12)
            .times(10)
            .minus(0.75)
            .times(beyondpointmult)
            )
        cash = new Decimal(0)
        wikipoints = new Decimal(0)
        wikipointmult = new Decimal(0)
        upgrades.forEach((element, index)=>{
            upgrades[index].unlocked = false
        })
        generatorprices = [
            new Decimal("2e-7"),
            new Decimal("1"),
            new Decimal("1e4"),
            new Decimal("1e10"),
        ]
        generators = [
            new Decimal(1),
            new Decimal(0),
            new Decimal(0),
            new Decimal(0),
        ]
        generatorProduction = [
            new Decimal("0.000000001"),
            new Decimal("1"),
            new Decimal("1"),
            new Decimal("1"),
        ]
    })
    $("#beyondtab").hide()
    $("#beyondtab").draggable()
    generatorprices.forEach((element, index) => {
        var x = document.getElementById("MG" + index + "-button"); 
        $(x).click(() => {
          if (cash.gte(generatorprices[index])) {
            cash = cash.minus(generatorprices[index]);
            generatorprices[index] = generatorprices[index].times(1.3)
            generators[index] = generators[index].plus(1);
            displays()
          }
        });
      });
    
    $("#purge").click(()=>{
        if (cash.gte(new Decimal(1e308))) {
            wikipoints = wikipoints.plus(
                new Decimal(cash
                .log10())
                .floor()
                .div(factor)
                .times(10)
                .minus(0.75)
                .times(wikipointmult)
                )
            cash = new Decimal(0)
            generatorprices = [
                new Decimal("2e-7"),
                new Decimal("1"),
                new Decimal("1e4"),
                new Decimal("1e10"),
            ]
            generators = [
                new Decimal(1),
                new Decimal(0),
                new Decimal(0),
                new Decimal(0),
            ]
            generatorProduction = [
                new Decimal("0.000000001"),
                new Decimal("1"),
                new Decimal("1"),
                new Decimal("1"),
            ]
            $("#gobeyond").click(()=>{
        beyondpoint = beyondpoint.plus(
            new Decimal(wikipoints
            .log10())
            .floor()
            .div(12)
            .times(10)
            .minus(0.75)
            .times(beyondpointmult)
            )
        cash = new Decimal(0)
        wikipoints = new Decimal(0)
        wikipointmult = new Decimal(0)
        upgrades.forEach((element, index)=>{
            upgrades[index].unlocked = false
        })
        generatorprices = [
            new Decimal("2e-7"),
            new Decimal("1"),
            new Decimal("1e4"),
            new Decimal("1e10"),
        ]
        generators = [
            new Decimal(1),
            new Decimal(0),
            new Decimal(0),
            new Decimal(0),
        ]
        generatorProduction = [
            new Decimal("0.000000001"),
            new Decimal("1"),
            new Decimal("1"),
            new Decimal("1"),
        ]
    })
        }
    })
});

function displays() {
    $("#cash").text(cash)
    $("#wikipoints").text(wikipoints)
    generatorprices.forEach((element, index) => {
        var x = document.getElementById("MG" + index + "-price"); 
        $(x).text(element);
      });
    generators.forEach((element, index) => {
        var x = document.getElementById("MG" + index); 
        $(x).text(element);
      });
    upgrades.forEach((element,index)=>{
        if (element.checkforunlock()&&element.unlocked==false) {
            const node = document.createElement("li");
            const textnode = document.createElement("BUTTON");
            textnode.textContent = element.name
            node.appendChild(textnode);
            document.getElementById("upgrades").appendChild(node);
            upgrades[index].unlocked = true
            $(textnode).click(()=>{
                if (element.pricetype === "cash") {
                    if (cash.gte(element.price)) {
                        cash=cash.minus(element.price)
                        element.onbuy()
                        textnode.remove()
                        node.remove()
                    }
                }
                if (element.pricetype === "wikipoint") {
                    if (wikipoints.gte(element.price)) {
                        wikipoints=wikipoints.minus(element.price)
                        element.onbuy()
                        textnode.remove()
                        node.remove()
                    }
                }
            })
        }
    })
}

function tick() {
    cash = cash.plus(cashpersecond.times(wikipoints.plus(new Decimal(1))).pow(beyondpoint.div(100).plus(1)))
    generators.forEach((element, index) => {
        if (index !== 0) {
            generators[index-1] = generators[index-1].plus(generatorProduction[index].times(generators[index]))
        } else {
            cashpersecond = element.times(generatorProduction[index])
        }
      });
    achievments.forEach((element,index)=>{
        if (element.reqcheck()&&element.awarded==false) {
            const node = document.createElement("li");
            const textnode = document.createTextNode(element.name);
            node.appendChild(textnode);
            document.getElementById("achievments").appendChild(node);
            achievments[index].awarded = true
        }
    })
}