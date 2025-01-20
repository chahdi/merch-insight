"use client";

import { AIConversation, createAIHooks } from "@aws-amplify/ui-react-ai"; 
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>();
const {useAIConversation} = createAIHooks(client);
export default function Page() {

  const [{data: {messages}}, sendMessage] = useAIConversation("chat");
  return (
    <>
    <AIConversation 
    messages={messages} 
    handleSendMessage={sendMessage}/>
    </>
  )
  
}
