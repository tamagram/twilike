import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";

interface IFormInput {
  tweet: String;
}

const StyledForm: React.VFC = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Tweet autoComplete='off' {...register("tweet")} />
      <Submit>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      </Submit>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`
const Tweet = styled.textarea`
  text-align: left;
  font-size: 12px;
  font-family: Roboto;
  border-radius: 0.625rem;
  height: 65px;
  background-color: #c4c4c4;
  align-self: stretch;
  flex: 1;
`

const Submit = styled.button`
  width: 30px;
  height: 30px;
  transform: rotate(90deg);
`

export default StyledForm;