const url = 'conlore2.json';

//     fetch(url)
//       .then(res => res.json())
//       .then(coin => {
//           let output = '';
//           coin.forEach(function(coninDetail){
//               output += `
//               <tr>
//                 <td>${coninDetail.name}</td>
//                 <td>${coninDetail.symbol}</td>
//                 <td>$${coninDetail.price_usd}</td>
//                 <td>${coninDetail.tsupply}</td>
//               </tr>
//               `;
//           });
//           document.getElementById('coin-list').innerHTML = output;
//       })
//       .catch(error => console.log('error is', error));



/* 
 * ✅ Use the Coinlore API (Coins) 
 *    https://www.coinlore.com/cryptocurrency-data-api
 * 
 *    Get 10 coins per "page"
 */

 window.addEventListener('load', () => {
    let startValue = 10;
    const url = `https://api.coinlore.com/api/tickers/?start=${startValue}&limit=10`;

    const apiData = (startValue) => {
    
        fetch(url)
        .then(res => res.json())
        .then(output => {
            let tableData = '';
            output.data.map(post => {
                let tableTd = `<tr>
                    <td><p class="hide">💰 Coin</p><p>${post.name}</p></td> 
                    <td><p class="hide">📄 Code</p><p>${post.symbol}</p></td> 
                    <td><p class="hide">🤑 Price</p><p>$ ${post.price_usd}</p></td> 
                    <td><p class="hide">📉 Total supply</p><p>${post.tsupply} ${post.symbol}</p></td>
                </tr>`
                tableData += tableTd
                
                document.querySelector('tbody').innerHTML = tableData;

            })
    
        
        })
        
        
    }
    
    apiData(startValue)

    let nextBtn = document.getElementById('btn-next');

    nextBtn.onclick = () =>{
        apiData(startValue+=20)
        setTimeout(function(){prevBtn.style.visibility = 'visible'}, 1000)
        if(startValue >= 200){
            nextBtn.style.visibility = 'hidden'
        }
    }

    let prevBtn = document.getElementById('btn-prev');

    prevBtn.onclick = () =>{
        apiData(startValue-=20);
        if(startValue <= 10){
            prevBtn.style.visibility = 'hidden'
        }else if(startValue <= 190){
            nextBtn.style.visibility = 'visible'
        }
    }

})

