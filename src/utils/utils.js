import { Link } from "@material-ui/core";

function getHost() {
  const url = process.env.REACT_APP_SERVER_URL;
  const parts = url.split(":");
  parts.pop();
  const host = parts.join(":");
  //  console.log(host);
  return host;
}

function getLinkFromTxid(txid) {
  return (
    <Link
      target="_blank"
      href={`${process.env.REACT_APP_EXPLORER_URL}/#/transactions/${txid}`}
    >
      {txid.slice(0, 30)}...
    </Link>
  );
}

export { getHost, getLinkFromTxid };