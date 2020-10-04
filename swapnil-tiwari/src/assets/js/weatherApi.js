export async function getWeather()
{
    return new Promise((res,rej)=>
    {
        navigator.geolocation.getCurrentPosition(async (pos)=>{
            try{
                let result=await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=ef1bb3ad3792b120bdd592b943fed4d2`);
                res(await result.json());
                console.log("Weather Fetched")
            }
            catch(e)
            {
                rej(e);
            }
        })
    })
}