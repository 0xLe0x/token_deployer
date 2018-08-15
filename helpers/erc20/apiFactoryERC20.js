import web3 from '../../ethereum/api/web3';
import erc20FactoryAt from '../../ethereum/api/erc20/erc20Factory';
import sendTx from '../web3TxHandler';
import solver from '../solver';


async function getPrices(factoryAddress) {
  let prices = [];
 
  
  for(let j = 0; j < 2; j++) {
    const factory = erc20FactoryAt(factoryAddress, web3);
    let price = await factory.methods.getPrice(j).call();
    price = solver.convertToEther(price);
    prices.push(price);
  }

  return prices;
  
}


async function setPrice(factoryAddress, tokenType, price) {
  price = solver.convertToWei(price);
  const factory = erc20FactoryAt(factoryAddress, web3);
  const method = factory.methods.setPrice(tokenType, price);
  const response = await sendTx(method);
  return response;
}





export default {
  getPrices, setPrice
}

 