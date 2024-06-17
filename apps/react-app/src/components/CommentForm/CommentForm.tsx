import { Container, Content, Row } from "./CommentForm.styles";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useForm } from "react-hook-form";

type FormValues = {
  comment: string
}

function CommentForm() {
  
  const form = useForm<FormValues>({
    defaultValues: {
      comment: ''
    }
  });

  const { register, handleSubmit, formState } = form;
  const {errors} = formState;

  const onSubmit = ( data: FormValues) => {
    console.log(data)
  }

  return (
    <Container item sm={12}>
      <Content>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <TextField
            fullWidth
            label="Comment"
            type="text"
              {...register("comment", {
                required: "Comment is required", 
                maxLength: { 
                  value: 10,
                  message: "Too Many Characters (max 10)"
                  }
                })
              }
            error= {!!errors.comment}
            helperText={errors.comment?.message}
            />
            <Row>
              <Button type="submit" variant="contained" endIcon={<SendIcon />}>
                Send
              </Button>
            </Row>
        </form>
      </Content>
    </Container>
  );
}

export default CommentForm;
