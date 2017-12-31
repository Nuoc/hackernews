import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Button from './index';

describe('Button', () => {
  const props = {
    onClick() {
      return;
    }
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button {...props}>Give me More</Button>, div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(<Button {...props}>Give me More</Button>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
