
describe('a suite of tests', () => {
  
  it('passes a test', () => {
    expect(true).toBe(true);
  });
  
  it.skip('fails a test', () => {
    expect(true).toBe(false);
  });

  it('updates a text node', () => {
    const textNode = document.createTextNode('goodbye');
    textNode.data = 'hello';
    expect(textNode.data).toBe('hello');
  });

  it('has a constructor argument', () => {
    class MyClass {}
    const obj1 = new MyClass();
    expect(obj1.constructor.name).toBe('MyClass');
  });

});