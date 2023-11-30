import Button from '../button.component';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    onPinButton: { action: 'onPinButton' },
    onArchiveButton: { action: 'onArchiveButton' },
  },
};

export const Default = {
  args: {
    id: '1',
    title: 'Test Button',
    state: 'Button_INBOX',
  },
};
