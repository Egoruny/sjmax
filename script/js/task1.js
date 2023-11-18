// 1)

const usdDate = document.getElementsByClassName('usd')[0]
const result = document.getElementsByClassName("result")[0];
const addInput = document.getElementsByClassName('BYN')[0];

const curenseGet = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`could not fetch ${url}, status: ${res.status}`)
    }
    
    return await res.json();
}

 curenseGet('https://api.nbrb.by/exrates/rates?periodicity=0').then(data => {
    const usd = data.find( item => item.Cur_ID === 431);

    usdDate.innerHTML = `<p> текущий курс ${usd.Cur_Abbreviation}: ${usd.Cur_OfficialRate}</p>`;

    addInput.addEventListener('input', () => {     
        result.innerHTML = `<p>${Math.floor(addInput.value * usd.Cur_OfficialRate)} руб.</p>`
        })
});
