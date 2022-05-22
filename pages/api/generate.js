import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion("text-curie-001", {
    prompt: generatePrompt(req.body.prompt),
    temperature: 0.8,
    max_tokens: 60,
    top_p: 1,
    frequency_penalty: 0.5,
    presence_penalty: 0,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(prompt) {
  const capitalizedPromot =
    prompt[0].toUpperCase() + prompt.slice(1).toLowerCase();
  return `Create a story about the entered topic.

Topic: Breakfast
Story: He always stops crying when I pour the milk on his cereal. I just have to remember not to let him see his face on the carton.
Topic: Wind
Story: The wind always seems to howl around my house at night. I can't help but feel like it's looking for a way inside.
Topic: ${capitalizedPromot}
Story:`;
}
