import { render, screen } from '@testing-library/react-native';

import Button from '../button.component';
import 'jest';

describe('<Button/ >', () => {
  test('render', async () => {
    render(<Button title={'Title'} />);

    expect(screen.toJSON()).toMatchSnapshot();
  });
});
