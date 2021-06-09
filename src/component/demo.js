import axios from 'axios';


export async function hello() {
    await axios.get('http://localhost:5000/hello').then(
        res => {
            console.log('Hello work ' + JSON.stringify(res));
            // console.log('Hello work ' + res.data.toString() + " " + res.status.toString() + ' ' + res.statusText.toString());

        },
        err => {
            console.log('error hello: ' + err);
        }
    )
    // const url="https://localhost:5000/hello"
    //     const response =  await fetch(url)
    //  const data= await response.json()
    //     console.log("data")
}