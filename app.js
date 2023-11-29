let url = "http://universities.hipolabs.com/search?name="

let btn = document.querySelector('button');

btn.addEventListener("click",async () => {
    let country = document.querySelector('input').value
    let collArr = await getColleges(country)
    showCol(collArr)
})

function showCol(collArr) {
    let list = document.querySelector('.list')
    list.innerText = ""
    for(col of collArr) {
        let li = document.createElement('li')
        li.innerText = col.name
        list.appendChild(li)
    }
}

async function getColleges(country) {
    try {
        let res = await axios.get(url + country)
        return res.data
    }
    catch(e) {
        console.log('error: ',e)
        return []
    }
}

