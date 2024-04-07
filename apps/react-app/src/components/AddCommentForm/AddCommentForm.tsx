import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button } from '@mui/material';

interface CommentFormData {
  author: string;
  comment: string;
}

function AddCommentForm() {
  const { control, handleSubmit, formState: { errors } } = useForm<CommentFormData>();

  const onSubmit = (data: CommentFormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Controller
          name="author"
          control={control}
          defaultValue=""
          rules={{ required: 'Author is required', maxLength: { value: 20, message: 'Author must be less than 20 characters' } }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Author"
              variant="outlined"
              fullWidth
              error={!!errors.author}
              helperText={errors.author ? errors.author.message : ''}
            />
          )}
        />
      </div>
      <div>
        <Controller
          name="comment"
          control={control}
          defaultValue=""
          rules={{ required: 'Comment is required', minLength: { value: 10, message: 'Comment must be at least 10 characters' }, maxLength: { value: 100, message: 'Comment must be less than 100 characters' } }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Comment"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              error={!!errors.comment}
              helperText={errors.comment ? errors.comment.message : ''}
            />
          )}
        />
      </div>
      <Button type="submit" variant="contained" color="primary">Submit</Button>
    </form>
  );
}

export default AddCommentForm;
