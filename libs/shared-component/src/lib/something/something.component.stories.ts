import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SomethingComponent } from './something.component';

export default {
  title: 'SomethingComponent',
  component: SomethingComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<SomethingComponent>;

const Template: Story<SomethingComponent> = (args: SomethingComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}