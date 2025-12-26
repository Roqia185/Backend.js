const URL='https://api.example.com/data';
const getfacts= async()=>{
    let response= await fetch(URL);
    console.log(response)
    let data = await response.json();
    console.log(data[0].text)
}