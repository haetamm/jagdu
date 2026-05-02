import { useModalStore } from "@/lib/store/useModalStore";
import TemplateModal from "../organisms/TemplateModal";

export default function DeleteModal() {
  const { close, confirm, loading } = useModalStore();

  return (
    <TemplateModal
      title="Delete Confirmation"
      classSize="max-w-sm"
      desc="Are you sure you want to delete this data?"
      buttonLabel="Delete"
      loading={loading}
      handleButton={confirm}
      cancelButton={close}
    />
  );
}
