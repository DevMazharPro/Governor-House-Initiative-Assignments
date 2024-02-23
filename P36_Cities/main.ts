function describeCities(city: string, country:string= "Unknown"):void{
    console.log(`${city} is in ${country}.`);
}
describeCities("Karachi", "Pakistan");
describeCities("Mumbai", "India");
describeCities("Quetta");