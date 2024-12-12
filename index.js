function rolldice(){
    const numofdice=document.getElementById("numofdice").value;
    const diceresult=document.getElementById("diceresult");
    const diceimage=document.getElementById("diceresult");
    const values =[];
    const image=[];

    for(let i=0;i<numofdice;i++){
        const value=Math.floor(Math.random()*6)+1;
        values.push(value);
        image.push(`<img src="dice_image/${value}.jpg" alt ="dice ${value}">`);
    }
    diceresult.textContent=`dice:${values.join(',')}`;
    diceimage.innerHTML=image.join('');
} 