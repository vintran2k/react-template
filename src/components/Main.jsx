import React from 'react';

import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-Obqbgyh5SMgXB3xh8MHfAFKQ",
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();
// const response = await openai.listModels();
const response = await openai.createCompletion({
	model: "text-davinci-003",
	prompt: "quel est le meilleur langage de programmation ?",
	max_tokens: 4000,
  });
console.log(response);
// console.log(import.meta.env.VITE_OPENAI_API_KEY);

const Main = () => {
	return (
		<main className="Main">
			<h1>HELLO</h1>
		</main>
	);
};

export default Main;