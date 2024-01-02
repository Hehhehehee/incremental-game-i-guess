cash = new Decimal(0)
cashpersecond = new Decimal(0.000000001)
vandalizedprice = new Decimal(2e-7)
banprice = new Decimal(1)
wikipoints = new Decimal(0)
setInterval(() => {
    tick()
    displays()
}, 33);

$( function() {
    $("#vandalized").click(()=>{
        if (cash.gte(vandalizedprice)) {
        cash = cash.minus(vandalizedprice)
        cashpersecond = cashpersecond.times(2)
        vandalizedprice = vandalizedprice.times(2)
        }
    })
    $("#ban").click(()=>{
        if (cash.gte(banprice)) {
        cash = cash.minus(banprice)
        cashpersecond = cashpersecond.times(128)
        banprice = banprice.times(128)
        }
    })
    $("#purge").click(()=>{
        if (cash.gte(new Decimal(1e6))) {
            cash = new Decimal(0)
            cashpersecond = new Decimal(0.000000001)
            vandalizedprice = new Decimal(2e-7)
            banprice = new Decimal(1)
            wikipoints = wikipoints.plus(cashpersecond.pow(new Decimal(0.5)))
            wikipoints = wikipoints.plus(cash.pow(new Decimal(0.1)))

        }
    })
});

function displays() {
    $("#cash").text(cash)
    $("#wikipoints").text(wikipoints)
    $("#V-price").text(vandalizedprice)
    $("#B-price").text(banprice)
}

function tick() {
    cash = cash.plus(cashpersecond.times(wikipoints.plus(new Decimal(1))))
}
