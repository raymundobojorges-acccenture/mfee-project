import { useForm } from 'react-hook-form';
import { TextField, Button } from '@mui/material';

function AddCommentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); 
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <TextField
          id="comment"
          label="Comment"
          multiline
          rows={4}
          {...register('comment', { required: true, minLength: 5 })}
          error={errors.comment ? true : false}
          helperText={
            errors.comment && errors.comment.type === 'required'
              ? 'This field is required'
              : errors.comment && errors.comment.type === 'minLength'
              ? 'Comment must be at least 5 characters long'
              : ''
          }
        />
      </div>
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </form>
  );
}

export default AddCommentForm;
