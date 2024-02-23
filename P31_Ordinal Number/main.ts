let numbers: string[]= ["1","2","3","4","5","6","7","8","9"];

for (let ordinals of numbers){
    if (ordinals == "1"){
        console.log(`${ordinals}st.`);
    }
    else if (ordinals == "2"){
        console.log(`${ordinals}nd.`);
    }
    else if (ordinals == "3"){
        console.log(`${ordinals}rd.`);
    }
    else{
        console.log(`${ordinals}th.`);
        
    }
}