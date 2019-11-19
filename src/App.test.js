import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from './App';
import Movies from './Movies';

// it('Api testing', async () => {
//     const response = new Movies();
//     var res = await response.api();
//     expect(res.movies[0].id).toEqual("1");
// });

test("snapshot test",()=>{
  const component  = renderer.create(
    <App/>
  );
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
})