import EncryptedCertInfo from "./EncryptedCertInfo";
import EncryptedSubjectTable from "./EncryptedSubjectTable";
import BarForDecryptButton from "./BarForDecryptButton";

export default function ShowEncryptedInfo(props) {
  return (
    <div>
      <BarForDecryptButton></BarForDecryptButton>
      <EncryptedCertInfo></EncryptedCertInfo>
      <EncryptedSubjectTable></EncryptedSubjectTable>
    </div>
  );
}
