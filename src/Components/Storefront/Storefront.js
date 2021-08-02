import React, { Component } from 'react';

var pokeball =['poké ball - ', 10]
var greatball = ['great ball - ', 15]
var ultraball = ['ultra ball - ', 25]
var diveball = ['dive ball - ', 30]
var masterball = ['master ball - ', 350]
var allPokeballs = [pokeball, greatball, ultraball, diveball, masterball]
//{Healing}
var awakening = ['awakening - ', 20]
var fullrestore = ['full restore - ', 25]
var potion = ['potion - ', 10]
var hyperpotion = ['hyper potion - ', 40]
var revive = ['revive - ', 50]
var allHealing = [awakening, fullrestore, potion, hyperpotion, revive]
//{Evolution}
var rarecandy = ['rare candy - ', 50]
var metalcoat = ['metal coat - ', 60]
var sinnohstone = ['sinnoh stone - ', 200]
var thunderstone = ['thunder stone - ', 125]
var waterstone = ['water stone - ', 165]
var allEvolution = [rarecandy, metalcoat, sinnohstone, thunderstone, waterstone]
//{Competition}
var calcium = ['calcium - ', 500]
var carbos = ['carbos - ', 300]
var hpup = ['hp up - ', 400]
var protien = ['Protien - ', 265]
var zinc = ['zinc - ', 200]
var allCompetition = [calcium, carbos, hpup, protien, zinc]
//{Exploration}
var oldrod = ['old rod - ', 30]
var goodrod = ['good rod - ', 60]
var superrod = ['super rod - ', 90]
var bicycle = ['bicycle - ', 300]
var explorerkit = ['explorer kit - ', 600]
var allExploration = [oldrod, goodrod, superrod, bicycle, explorerkit]

class Storefront extends Component {
    constructor(props){
        super(props)

        this.state = {
            pokeball: 0,
            greatball: 0,
            ultraball: 0,
            diveball: 0,
            masterball: 0,
            awakening: 0,
            fullrestore: 0,
            potion: 0,
            hyperpotion: 0,
            revive: 0,
            rarecandy: 0,
            metalcoat: 0,
            sinnohstone: 0,
            thunderstone: 0,
            waterstone: 0,
            calcium: 0,
            carbos: 0,
            hpup: 0,
            protien: 0,
            zinc: 0,
            oldrod: 0,
            goodrod: 0,
            superrod: 0,
            bicycle: 0,
            explorerkit: 0,
            items: 0,
            total: 0
        }
        //{button bindings}
        this.emptycart = this.emptycart.bind(this)
        //{pokeballs}
        this.addpokeball = this.addpokeball.bind(this)
        this.removepokeball = this.removepokeball.bind(this)
        this.addgreatball = this.addgreatball.bind(this)
        this.removegreatball = this.removegreatball.bind(this)
        this.addultraball = this.addultraball.bind(this)
        this.removeultraball = this.removeultraball.bind(this)
        this.adddiveball = this.adddiveball.bind(this)
        this.removediveball = this.removediveball.bind(this)
        this.addmasterball = this.addmasterball.bind(this)
        this.removemasterball = this.removemasterball.bind(this)
        //{healing}
        this.addawakening = this.addawakening.bind(this)
        this.removeawakening = this.removeawakening.bind(this)
        this.addfullrestore = this.addfullrestore.bind(this)
        this.removefullrestore = this.removefullrestore.bind(this)
        this.addpotion = this.addpotion.bind(this)
        this.removepotion = this.removepotion.bind(this)
        this.addhyperpotion = this.addhyperpotion.bind(this)
        this.removehyperpotion = this.removehyperpotion.bind(this)
        this.addrevive = this.addrevive.bind(this)
        this.removerevive = this.removerevive.bind(this)
        //{evolution}
        this.addrarecandy = this.addrarecandy.bind(this)
        this.removerarecandy = this.removerarecandy.bind(this)
        this.addmetalcoat = this.addmetalcoat.bind(this)
        this.removemetalcoat = this.removemetalcoat.bind(this)
        this.addsinnohstone = this.addsinnohstone.bind(this)
        this.removesinnohstone = this.removesinnohstone.bind(this)
        this.addthunderstone = this.addthunderstone.bind(this)
        this.removethunderstone = this.removethunderstone.bind(this)
        this.addwaterstone = this.addwaterstone.bind(this)
        this.removewaterstone = this.removewaterstone.bind(this)
        //{competition}
        this.addcalcium = this.addcalcium.bind(this)
        this.removecalcium = this.removecalcium.bind(this)
        this.addcarbos = this.addcarbos.bind(this)
        this.removecarbos = this.removecarbos.bind(this)
        this.addhpup = this.addhpup.bind(this)
        this.removehpup = this.removehpup.bind(this)
        this.addprotien = this.addprotien.bind(this)
        this.removeprotien = this.removeprotien.bind(this)
        this.addzinc = this.addzinc.bind(this)
        this.removezinc = this.removezinc.bind(this)
        //{exploration}
        this.addoldrod = this.addoldrod.bind(this)
        this.removeoldrod = this.removeoldrod.bind(this)
        this.addgoodrod = this.addgoodrod.bind(this)
        this.removegoodrod = this.removegoodrod.bind(this)
        this.addsuperrod = this.addsuperrod.bind(this)
        this.removesuperrod = this.removesuperrod.bind(this)
        this.addbicycle = this.addbicycle.bind(this)
        this.removebicycle = this.removebicycle.bind(this)
        this.addexplorerkit = this.addexplorerkit.bind(this)
        this.removeexplorerkit = this.removeexplorerkit.bind(this)
    }
        //{state modify functions}
    addpokeball(){
        this.setState({
            items: this.state.items + 1,
            total: 1,
            pokeball: this.state.pokeball + 1,
            total: this.state.total + pokeball[1]
        })
    }

    removepokeball(){
        this.setState({
            pokeball: this.state.pokeball - 1,
            total: this.state.total - pokeball[1]
        })
        if(this.state.total < 1){
            this.setState({
                total: 0
            })
        }
    }

    addgreatball(){
        this.setState({
            items: this.state.items + 1,
            greatball: this.state.greatball + 1,
            total: this.state.total + greatball[1]
        })
    }

    removegreatball(){
        this.setState({
            items: this.state.items - 1 ,
            greatball: this.state.greatball - 1,
            total: this.state.total - greatball[1]
        })
    }

    addultraball(){
        this.setState({
            items: this.state.items + 1,
            ultraball: this.state.ultraball + 1,
            total: this.state.total + ultraball[1]
        })
    }

    removeultraball(){
        this.setState({
            items: this.state.items - 1,
            ultraball: this.state.ultraball - 1,
            total: this.state.total - ultraball[1]
        })
    }

    adddiveball(){
        this.setState({
            items: this.state.items + 1,
            diveball: this.state.diveball + 1,
            total: this.state.total + diveball[1]
        })
    }

    removediveball(){
        this.setState({
            items: this.state.items -1,
            diveball: this.state.diveball - 1,
            total: this.state.total - diveball[1]
        })
    }

    addmasterball(){
        this.setState({
            items: this.state.items + 1,
            masterball: this.state.masterball + 1,
            total: this.state.total + masterball[1]
        })
    }

    removemasterball(){
        this.setState({
            items: this.state.items - 1,
            masterball: this.state.masterball -1,
            total: this.state.total - masterball[1]
        })
    }
    //{healling}
    addawakening(){
        this.setState({
            items: this.state.items + 1,
            awakening: this.state.awakening + 1,
            total: this.state.total + awakening[1]
        })
    }

    removeawakening(){
        this.setState({
            items: this.state.items - 1,
            awakening: this.state.awakening -1,
            total: this.state.total - awakening[1]
        })
    }

    addfullrestore(){
        this.setState({
            items: this.state.items + 1,
            fullrestore: this.state.fullrestore + 1,
            total: this.state.total + fullrestore[1]
        })
    }

    removefullrestore(){
        this.setState({
            items: this.state.items - 1,
            fullrestore: this.state.fullrestore -1,
            total: this.state.total - fullrestore[1]
        })
    }

    addpotion(){
        this.setState({
            items: this.state.items + 1,
            potion: this.state.potion + 1,
            total: this.state.total + potion[1]
        })
    }

    removepotion(){
        this.setState({
            items: this.state.items - 1,
            potion: this.state.potion - 1,
            total: this.state.total - potion[1]
        })
    }

    addhyperpotion(){
        this.setState({
            items: this.state.items + 1,
            hyperpotion: this.state.hyperpotion + 1,
            total: this.state.total + hyperpotion[1]
        })
    }

    removehyperpotion(){
        this.setState({
            items: this.state.items - 1,
            hyperpotion: this.state.hyperpotion - 1,
            total: this.state.total - hyperpotion[1]
        })
    }

    addrevive(){
        this.setState({
            items: this.state.items + 1,
            revive: this.state.revive + 1,
            total: this.state.total + revive[1]
        })
    }

    removerevive(){
        this.setState({
            items: this.state.items - 1,
            revive: this.state.revive - 1,
            total: this.state.total - revive[1]
        })
    }
    //{evolution}
    addrarecandy(){
        this.setState({
            items: this.state.items + 1,
            rarecandy: this.state.rarecandy + 1,
            total: this.state.total + rarecandy[1]
        })
    }

    removerarecandy(){
        this.setState({
            items: this.state.items - 1,
            rarecandy: this.state.rarecandy - 1,
            total: this.state.total - rarecandy[1]
        })
    }

    addmetalcoat(){
        this.setState({
            items: this.state.items + 1,
            metalcoat: this.state.metalcoat + 1,
            total: this.state.total + metalcoat[1]
        })
    }

    removemetalcoat(){
        this.setState({
            items: this.state.items - 1,
            metalcoat: this.state.metalcoat - 1,
            total: this.state.total - metalcoat[1]
        })
    }

    addsinnohstone(){
        this.setState({
            items: this.state.items + 1,
            sinnohstone: this.state.sinnohstone + 1,
            total: this.state.total + sinnohstone[1]
        })
    }

    removesinnohstone(){
        this.setState({
            items: this.state.items + 1,
            sinnohstone: this.state.sinnohstone - 1,
            total: this.state.total - sinnohstone[1]
        })
    }

    addthunderstone(){
        this.setState({
            items: this.state.items + 1,
            thunderstone: this.state.thunderstone + 1,
            total: this.state.total + thunderstone[1]
        })
    }

    removethunderstone(){
        this.setState({
            items: this.state.items - 1,
            thunderstone: this.state.thunderstone - 1,
            total: this.state.total - thunderstone[1]
        })
    }

    addwaterstone(){
        this.setState({
            items: this.state.items + 1,
            waterstone: this.state.waterstone + 1,
            total: this.state.total + waterstone[1]
        })
    }

    removewaterstone(){
        this.setState({
            items: this.state.items - 1,
            waterstone: this.state.waterstone - 1,
            total: this.state.total - waterstone[1]
        })
    }
    //{competition}
    addcalcium(){
        this.setState({
            items: this.state.items + 1,
            calcium: this.state.calcium + 1,
            total: this.state.total + calcium[1]
        })
    }

    removecalcium(){
        this.setState({
            items: this.state.items - 1,
            calcium: this.state.calcium - 1,
            total: this.state.total - calcium[1]
        })
    }

    addcarbos(){
        this.setState({
            items: this.state.items + 1,
            carbos: this.state.carbos + 1,
            total: this.state.total + carbos[1]
        })
    }

    removecarbos(){
        this.setState({
            items: this.state.items - 1,
            carbos: this.state.carbos - 1,
            total: this.state.total - carbos[1]
        })
    }

    addhpup(){
        this.setState({
            items: this.state.items + 1,
            hpup: this.state.hpup + 1,
            total: this.state.total + hpup[1]
        })
    }

    removehpup(){
        this.setState({
            items: this.state.items - 1,
            hpup: this.state.hpup - 1,
            total: this.state.total - hpup[1]
        })
    }

    addprotien(){
        this.setState({
            items: this.state.items + 1,
            protien: this.state.protien + 1,
            total: this.state.total + protien[1]
        })
    }

    removeprotien(){
        this.setState({
            items: this.state.items - 1,
            protien: this.state.protien - 1,
            total: this.state.total - protien[1]
        })
    }

    addzinc(){
        this.setState({
            items: this.state.items + 1,
            zinc: this.state.zinc + 1,
            total: this.state.total + zinc[1]
        })
    }

    removezinc(){
        this.setState({
            items: this.state.items - 1,
            zinc: this.state.zinc - 1,
            total: this.state.total - zinc[1]
        })
    }
    //{exploration}
    addoldrod(){
        this.setState({
            items: this.state.items + 1,
            oldrod: this.state.oldrod + 1,
            total: this.state.total + oldrod[1]
        })
    }

    removeoldrod(){
        this.setState({
            items: this.state.items - 1,
            oldrod: this.state.oldrod - 1,
            total: this.state.total - oldrod[1]
        })
    }

    addgoodrod(){
        this.setState({
            items: this.state.items + 1,
            goodrod: this.state.goodrod + 1,
            total: this.state.total + goodrod[1]
        })
    }

    removegoodrod(){
        this.setState({
            items: this.state.items - 1,
            goodrod: this.state.goodrod - 1,
            total: this.state.total - goodrod[1]
        })
    }

    addsuperrod(){
        this.setState({
            items: this.state.items + 1,
            superrod: this.state.superrod + 1,
            total: this.state.total + superrod[1]
        })
    }

    removesuperrod(){
        this.setState({
            items: this.state.items + 1,
            superrod: this.state.superrod + 1,
            total: this.state.total - superrod[1]
        })
    }

    addbicycle(){
        this.setState({
            items: this.state.items + 1,
            bicycle: this.state.bicycle + 1,
            total: this.state.total + bicycle[1]
        })
    }

    removebicycle(){
        this.setState({
            items: this.state.items - 1,
            bicycle: this.state.bicycle - 1,
            total: this.state.total - bicycle[1]
        })
    }

    addexplorerkit(){
        this.setState({
            items: this.state.items + 1,
            explorerkit: this.state.explorerkit + 1,
            total: this.state.total + explorerkit[1]
        })
    }

    removeexplorerkit(){
        this.setState({
            items: this.state.items - 1,
            explorerkit: this.state.explorerkit - 1,
            total: this.state.total - explorerkit[1]
        })
    }

    emptycart(){
        this.setState({
            pokeball: 0,
            greatball: 0,
            ultraball: 0,
            diveball: 0,
            masterball: 0,
            awakening: 0,
            fullrestore: 0,
            potion: 0,
            hyperpotion: 0,
            revive: 0,
            rarecandy: 0,
            metalcoat: 0,
            sinnohstone: 0,
            thunderstone: 0,
            waterstone: 0,
            calcium: 0,
            carbos: 0,
            hpup: 0,
            protien: 0,
            zinc: 0,
            oldrod: 0,
            goodrod: 0,
            superrod: 0,
            bicycle: 0,
            explorerkit: 0,
            items: 0,
            total: 0
        })
    }

    //{rendering storefront}
    render(){
        return(
            <div className='Storefront-Wholepage'>
            <div className='Recommend'>
                <h1>Available For Purchase: </h1>
                <div className='Available-items'>
                <ul className='Pokeballs'>
                    <h1>Poké Balls</h1>
                    <li className='itemlist'><img className='item-photo' src='https://www.serebii.net/platinum/items/pokeball.gif' alt=''/>
                    {allPokeballs[0]}<button onClick={this.addpokeball}>+</button><button onClick={this.removepokeball}>-</button>({this.state.pokeball})</li>
                    <li className='itemlist'><img className='item-photo' src='https://www.serebii.net/platinum/items/greatball.gif' alt=''/>
                    {allPokeballs[1]}<button onClick={this.addgreatball}>+</button><button onClick={this.removegreatball}>-</button>({this.state.greatball})</li>
                    <li className='itemlist'><img className='item-photo' src='https://www.serebii.net/platinum/items/ultraball.gif' alt=''/>
                    {allPokeballs[2]}<button onClick={this.addultraball}>+</button><button onClick={this.removeultraball}>-</button>({this.state.ultraball}</li>
                    <li className='itemlist'><img className='item-photo' src='https://www.serebii.net/platinum/items/dive-ball.gif' alt=''/>
                    {allPokeballs[3]}<button onClick={this.adddiveball}>+</button><button onClick={this.removediveball}>-</button>({this.state.diveball})</li>
                    <li className='itemlist'><img className='item-photo' src='https://www.serebii.net/platinum/items/masterball.gif' alt=''/>
                    {allPokeballs[4]}<button onClick={this.addmasterball}>+</button><button onClick={this.removemasterball}>-</button>({this.state.masterball})</li>
                </ul>
                <ul className='Healing'>
                    <h1>Healing</h1>
                    <li className='itemlist'><img className='item-photo' src='https://www.serebii.net/platinum/items/awakening.gif' alt=''/>
                    {allHealing[0]}<button onClick={this.addawakening}>+</button><button onClick={this.removeawakening}>-</button>({this.state.awakening})</li>
                    <li className='itemlist'><img className='item-photo' src='https://www.serebii.net/platinum/items/full-restore.gif' alt=''/>
                    {allHealing[1]}<button onClick={this.addfullrestore}>+</button><button onClick={this.removefullrestore}>-</button>({this.state.fullrestore})</li>
                    <li className='itemlist'><img className='item-photo' src='https://www.serebii.net/platinum/items/potion.gif' alt=''/>
                    {allHealing[2]}<button onClick={this.addpotion}>+</button><button onClick={this.removepotion}>-</button>({this.state.potion})</li>
                    <li className='itemlist'><img className='item-photo' src='https://www.serebii.net/platinum/items/hyper-potion.gif' alt=''/>
                    {allHealing[3]}<button onClick={this.addhyperpotion}>+</button><button onClick={this.removehyperpotion}>-</button>({this.state.hyperpotion})</li>
                    <li className='itemlist'><img className='item-photo' src='https://www.serebii.net/platinum/items/revive.gif' alt=''/>
                    {allHealing[4]}<button onClick={this.addrevive}>+</button><button onClick={this.removerevive}>-</button>({this.state.revive})</li>
                </ul>
                <ul className='Evolution'>
                <h1>Evolution</h1>
                    <li className='itemlist'><img className='item-photo' src='https://www.serebii.net/platinum/items/rare-candy.gif' alt=''/>
                    {allEvolution[0]}<button onClick={this.addrarecandy}>+</button><button onClick={this.removerarecandy}>-</button>({this.state.rarecandy})</li>
                    <li className='itemlist'><img className='item-photo' src='https://www.serebii.net/platinum/items/metal-coat.gif' alt=''/>
                    {allEvolution[1]}<button onClick={this.addmetalcoat}>+</button><button onClick={this.removemetalcoat}>-</button>({this.state.metalcoat})</li>
                    <li className='itemlist'><img className='item-photo' src='https://www.serebii.net/platinum/items/shoal-shell.gif' alt=''/>
                    {allEvolution[2]}<button onClick={this.addsinnohstone}>+</button><button onClick={this.removesinnohstone}>-</button>({this.state.sinnohstone})</li>
                    <li className='itemlist'><img className='item-photo' src='https://www.serebii.net/platinum/items/thunderstone.gif' alt=''/>
                    {allEvolution[3]}<button onClick={this.addthunderstone}>+</button><button onClick={this.removethunderstone}>-</button>({this.state.thunderstone})</li>
                    <li className='itemlist'><img className='item-photo' src='https://www.serebii.net/platinum/items/waterstone.gif' alt=''/>
                    {allEvolution[4]}<button onClick={this.addwaterstone}>+</button><button onClick={this.removewaterstone}>-</button>({this.state.waterstone})</li>
                </ul>
                <ul className='Competition'>
                <h1>Competition</h1>
                    <li className='itemlist'><img className='item-photo' src='https://www.serebii.net/platinum/items/calcium.gif' alt=''/>
                    {allCompetition[0]}<button onClick={this.addcalcium}>+</button><button onClick={this.removecalcium}>-</button>({this.state.calcium})</li>
                    <li className='itemlist'><img className='item-photo' src='https://www.serebii.net/platinum/items/carbos.gif' alt=''/>
                    {allCompetition[1]}<button onClick={this.addcarbos}>+</button><button onClick={this.removecarbos}>-</button>({this.state.carbos})</li>
                    <li className='itemlist'><img className='item-photo' src='https://www.serebii.net/platinum/items/hp-up.gif' alt=''/>
                    {allCompetition[2]}<button onClick={this.addhpup}>+</button><button onClick={this.removehpup}>-</button>({this.state.hpup})</li>
                    <li className='itemlist'><img className='item-photo' src='https://www.serebii.net/platinum/items/protein.gif' alt=''/>
                    {allCompetition[3]}<button onClick={this.addprotien}>+</button><button onClick={this.removeprotien}>-</button>({this.state.protien})</li>
                    <li className='itemlist'><img className='item-photo' src='https://www.serebii.net/platinum/items/zinc.gif' alt=''/>
                    {allCompetition[4]}<button onClick={this.addzinc}>+</button><button onClick={this.removezinc}>-</button>({this.state.zinc})</li>
                </ul>
                <ul className='Exploration'>
                <h1>Explortation</h1>
                    <li className='itemlist'><img className='item-photo' src='https://www.serebii.net/platinum/items/old-rod.png' alt=''/>
                    {allExploration[0]}<button onClick={this.addoldrod}>+</button><button onClick={this.removeoldrod}>-</button>({this.state.oldrod})</li>
                    <li className='itemlist'><img className='item-photo' src='https://www.serebii.net/platinum/items/good-rod.png' alt=''/>
                    {allExploration[1]}<button onClick={this.addgoodrod}>+</button><button onClick={this.removegoodrod}>-</button>({this.state.goodrod})</li>
                    <li className='itemlist'><img className='item-photo' src='https://www.serebii.net/platinum/items/super-rod.png' alt=''/>
                    {allExploration[2]}<button onClick={this.addsuperrod}>+</button><button onClick={this.removesuperrod}>-</button>({this.state.superrod})</li>
                    <li className='itemlist'><img className='item-photo' src='https://www.serebii.net/platinum/items/bike.png' alt=''/>
                    {allExploration[3]}<button onClick={this.addbicycle}>+</button><button onClick={this.removebicycle}>-</button>({this.state.bicycle})</li>
                    <li className='itemlist'><img className='item-photo' src='https://www.serebii.net/platinum/items/explore-set.png' alt=''/>
                    {allExploration[4]}<button onClick={this.addexplorerkit}>+</button><button onClick={this.removeexplorerkit}>-</button>({this.state.explorerkit})</li>
                </ul>
                <h3> User Total: <br />{this.state.total} <br /><button onClick={this.emptycart}>Empty Cart</button><br />items( {this.state.items} )</h3>
                </div>
            </div>
        </div>
        )
    }
}

export default Storefront