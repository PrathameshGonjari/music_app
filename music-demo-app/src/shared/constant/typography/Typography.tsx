import Typography from '@mui/material/Typography';

interface H6TypographyProps {
  text: string;
  sx?:any;
}
interface H5TypographyProps {
  text: string;
  sx?:any;
}
interface SubTitleTypographyProps {
  text: string;
  sx?:any;
}

export const H6Typography = (props: H6TypographyProps) => {
  const { text, sx } = props;
  return (
    <Typography variant="h6" sx={sx} component="div">
      {text}
    </Typography>
  );
};

export const H5Typography = (props: H5TypographyProps) => {
  const { text, sx } = props;
  return (
    <Typography variant="h5" sx={sx} component="div">
      {text}
    </Typography>
  );
};

export const SubTitleTypography = (props: SubTitleTypographyProps) => {
  const { text, sx } = props;
  return (
    <Typography variant="subtitle1" color="text.secondary" sx={sx} component="div">
      {text}
    </Typography>
  );
};