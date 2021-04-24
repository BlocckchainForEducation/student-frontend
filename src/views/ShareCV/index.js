import { useState } from "react";
import View from "../../shared/View";

export default function ShareCV(props) {
  const [fetching, setFetching] = useState(true);
  return <View>{fetching ? null : <div>Hello world!</div>}</View>;
}
