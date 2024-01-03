achievments = [ 
    {
        name:"a whole mod! (have 1 mod)",
        reqcheck: ()=>{if(cash.gte(1)){return true}else{return false}},
        awarded:false
    },
    {
        name:"THATS A LOT OF MODS (have 1000 mods)",
        reqcheck: ()=>{if(cash.gte(1000)){return true}else{return false}},
        awarded:false
    },
    {
        name:"beyond your understanding (have 1e308 mods)",
        reqcheck: ()=>{if(cash.gte(1e308)){return true}else{return false}},
        awarded:false
    },
    {
        name:"UNGODLY AMOUNTS OF MODS (have 1e308 mods (without mod hirer hirer+))",
        reqcheck: ()=>{if(cash.gte(1e308)&&generators[1].eq(0)){return true}else{return false}},
        awarded:false
    },
    {
        name:"god complex (1e308 wikipoints)",
        reqcheck: ()=>{if(wikipoints.gte(1e308)){return true}else{return false}},
        awarded:false
    },
    {
        name:"the start of the end (1 wikipoints)",
        reqcheck: ()=>{if(wikipoints.gte(1)){return true}else{return false}},
        awarded:false
    },
    {
        name:"ah yes, 10000x multiplier (10000 wikipoints)",
        reqcheck: ()=>{if(wikipoints.gte(1)){return true}else{return false}},
        awarded:false
    },
    {
        name:"game design is my passion (1e-5 mod hirer production)",
        reqcheck: ()=>{if(generatorProduction[0].gte("1e-5")){return true}else{return false}},
        awarded:false
    },
    {
        name:"yo dawg, i heard you liked moderators (1 mod hirer production)",
        reqcheck: ()=>{if(generatorProduction[0].gte("1")){return true}else{return false}},
        awarded:false
    },
]

