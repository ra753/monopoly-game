class newgame{
    constructor(name,pos,money)
    {
        this.name = name;
        this.pos = pos;
        this.money = money;
    }
    randomise(player_image)
    {
        let pos = Math.floor(Math.random()*6)+1;
        console.log(pos);
        this.changePos(pos);
    }
    changePos(pos)
    {
        this.pos += pos;
        console.log(this.pos);
        console.log("Position",this.pos);
        this.updateMoney();
    }
    updateMoney()
    {   
        if(this.pos<board.length)
        this.money -= board[this.pos];
        else
        {
            this.pos %= 15;
            this.money -= board[this.pos];
        }
        console.log("balance",this.money);
    }
}
const player1_button = document.getElementById("player-1");
const player2_button = document.getElementById("player-2");
console.log(player1_button);
console.log(player2_button);

var player1 = new newgame("A",0,1000);
var player2 = new newgame("B",0,1000);

player1_button.addEventListener('click',function()
{
    player1.randomise(player_image_1)
},false);

player2_button.addEventListener('click',function()
{
    player2.randomise(player_image_2)
},false);
