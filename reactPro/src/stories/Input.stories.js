import Input from "../components/custom/Input";
import Form from '../components/custom/Form';
import * as yup from "yup";
import es from 'yup-es'
import { fireEvent, within } from "@storybook/testing-library";

yup.setLocale(es)

const schema = yup.object({
  name: yup.string().required()
}).required();

export default {
  title: 'Form/Input',
  component: Input,
  argTypes: {
    onClick: { action: "click" },
    onSubmit: { action: true },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Form onSubmit={() => console.log(true)} resolver={schema}>
        <Story />
        <button type="submit" className="btn btn-danger my-3">
          Click Me!
        </button>
      </Form>
    ),
  ]
};

export const Default = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    fireEvent.change(canvas.getByPlaceholderText("Nombre"), { target: { value: 'Nicolas' } })
    fireEvent.click(canvas.getByRole("button"));
  },
  args: {
    name: "name",
    label: "Nombre",
  },
};