import { openai } from "./config"


export const openVectorStore = async (name) => {
    let vectorStore = await openai.beta.vectorStores.create({
        name: name,
      });
      return vectorStore.id
}