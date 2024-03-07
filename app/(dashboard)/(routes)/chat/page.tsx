"use client";

import { Analytics } from "@vercel/analytics/react";

import { Home } from "./components/home";

import { getServerSideConfig } from "./config/server";
import { useProModal } from "@/hooks/use-pro-modal";
import { useRouter } from "next/navigation";

const serverConfig = getServerSideConfig();

const ChatPage = () =>  {
  const proModal = useProModal();
  const router = useRouter();
  return (
    <>
      <Home />
      {serverConfig?.isVercel && (
        <>
          <Analytics />
        </>
      )}
    </>
  );
}

export default ChatPage;
