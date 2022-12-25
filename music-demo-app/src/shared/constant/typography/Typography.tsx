import Typography from '@mui/material/Typography';

interface H6TypographyProps {
  text: string;
}

export const H6Typography = (props: H6TypographyProps) => {
  const { text } = props;
  return (
    <Typography variant="h6" component="div">
      {text}
    </Typography>
  );
};
