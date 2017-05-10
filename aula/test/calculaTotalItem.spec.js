const { expect } = require('code');
const Lab = require('lab');
const lab = expect.lab = Lab.script();

const { calculaTotalItem } = require('../app/calculaTotalItem');

lab.test('verificar retorno maça'. (done) => {
  expect(calculaTotalItem(2, 4)).to.equal({ produto: 'Maça', valor:10});
  done();
});

lab.test('verificar retorno uva', (done) => {
  expect(calculaTotalItem(3, 1)).to.equal({ produto: 'Uva', valor: 3});
  done();
});

lab.test('verificar retorno maça com desconto', (done) =>{
  expect(calculaTotalItem(2, 4, 2)).to.equal({ produto: 'Maça', valor: 16});
  done();
});






// 2 id pro produto. 4 valor unitario. 2 desconto
