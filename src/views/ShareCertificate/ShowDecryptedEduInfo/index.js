import { makeStyles } from "@material-ui/core";

const useStyels = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2, 0),
    },
  },
}));

export default function ShowDecryptInfo(props) {
  const cls = useStyels();

  return <div className={cls.root}></div>;
}
