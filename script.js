async function search(){
  const api="6687d7133a79eef0a12f63aabbff4f0a";
  const inputcity=document.getElementById("text");
  const city=inputcity.value.trim();
  const result=document.getElementById("weather");
  if(!city){
    result.innerHTML=`<p>Please Enter City</p>`;
    return;
  }
  try{
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api}`);
    if(!response.ok){
      throw new Error('City Not found');
    }
    const data=await response.json();
    result.innerHTML=`<h1>${data.name},${data.sys.country}</h1>
    <p>Temperature:${data.main.temp}°C</p>
    <p>weather:${data.weather[0].main}
    (${data.weather[0].description})</p>
    <p>Humidity:${data.main.humidity}%</p>
    <p>WindSpeed:${data.wind.speed}m/s</p>
    `;
  }
  catch(error){
    result.innerHTML=`<p>Error:${error.message}</p>`
  }
  
}