"use client";
import { ModalConfig, useModalStore } from "@/lib/store/useModalStore";
import { ComponentType } from "react";
import DeleteModal from "../molecules/DeleteModal";
import TopUpModal from "./TopUpModal";
import UpdateBudgetModal from "./UpdateBudgetModal";

// Registry: tambah modal baru = tambah 1 baris saja
const MODALS: { [K in ModalConfig["type"]]: ComponentType } = {
  topUp: TopUpModal,
  updateBudget: UpdateBudgetModal,
  delete: DeleteModal,
};

export default function Modal() {
  const { modal, close } = useModalStore();
  if (!modal) return null;

  const Content = MODALS[modal.type];
  return (
    <div role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-black/50 z-20" onClick={close} />
      <div className="fixed inset-0 z-[60] overflow-y-auto transition-all duration-300 animate-in zoom-in-95 fade-in">
        <Content />
      </div>
    </div>
  );
}
