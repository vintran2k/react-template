import React, { useEffect, useState } from 'react';
import { Configuration, OpenAIApi } from "openai";
import { ReactComponent as SendMsgLogo } from '../assets/sendMessageLogo.svg';
import { ReactComponent as OpenaiLogo } from '../assets/openaiLogo.svg';

const configuration = new Configuration({
	organization: "org-Obqbgyh5SMgXB3xh8MHfAFKQ",
	apiKey: import.meta.env.VITE_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const Sidebar = () => {

	const [input, setInput] = useState("");
	const [messages, setMessages] = useState([]);

	const handleKeyUp = e => {
		if (e.key === 'Enter') {
			setMessages(prevMessages => [...prevMessages, {
				sender: 'user',
				content: input
			}]);
			fetchOpenAiResponse(input);
			setInput("");
		}
	}

	const fetchOpenAiResponse = async prompt => {
		setMessages(prevMessages => [...prevMessages, {
			sender: 'loader',
			content: ''
		}]);
		const	response = await openai.createCompletion({
			model: "text-davinci-003",
			prompt: prompt,
			max_tokens: 4000,
		});
		setMessages(prevMessages => {
			prevMessages.pop();
			return [...prevMessages, {
				sender: 'bot',
				content: response.data.choices[0].text
			}];
		})
	}

	useEffect(() => {
		const lastMessage = document.querySelector('.message:last-child');
		if (lastMessage) {
			lastMessage.scrollIntoView();
		}
	}, [messages]);

	useEffect(() => {
		// fetchOpenAiResponse("Tu es un chat bot. Envois moi un premier message.");
	}, []);

	return (
		<div className="Sidebar">
			<div className="sidebar-conv">
				<div className="conv-header">
					<OpenaiLogo className="conv-logo" />
					<h2>Chat bot</h2>
				</div>
				<div className="conv-content">
					{messages.map((message, index) => {
						const last = index === messages.length - 1 ? ' last-message' : '';
						if (message.sender === 'user') {
							return (
								<div className={"message user-message" + last} key={index}>
									<p>{message.content}</p>
								</div>
							);
						} else if (message.sender === 'loader'){
							return (
								<div className={"message bot-message loader-message" + last} key={index}>
								</div>
							);
						} else {
							return (
								<div className={"message bot-message" + last} key={index}>
									<p>{message.content}</p>
								</div>
							);
						}
					})}
				</div>
			</div>
			<div className="input-wrapper">
				<input
					type="text"
					value={input}
					placeholder="Write your message"
					onChange={e => setInput(e.target.value)}
					onKeyUp={handleKeyUp}
				/>
				<SendMsgLogo className="input-logo" />
			</div>
		</div>
	);
};

export default Sidebar;