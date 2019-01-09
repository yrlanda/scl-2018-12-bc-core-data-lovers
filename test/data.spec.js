require('../src/data.js');


describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});

// describe('checkClass', () =>{
//   it('Regresa false cuando no es mago', () =>{
//     assert.equal(checkClass(["Fighter", "Mage"], "Mage"), true);

//   });
// });
