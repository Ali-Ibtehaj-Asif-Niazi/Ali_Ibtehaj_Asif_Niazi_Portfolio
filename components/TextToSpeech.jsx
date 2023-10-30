"use client";
import { AppContext } from "../app/context/IsPlayingContext";
import { useContext, useState} from "react";
import { useChat } from 'ai/react';

export const TextToSpeech = () => {
	const { messages, setMessages, input, handleInputChange, handleSubmit } = useChat();
	const [userText, setUserText] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const { isPlaying, setIsPlaying } = useContext(AppContext);
	const synth = typeof window !== "undefined" ? window.speechSynthesis : null;
	const voices = synth?.getVoices();

	const seletedVoice = voices?.find((voice) => voice.name === "Karen"); // Other voice that sounds good Karen, Tessa, Trinoids

	const speak = (textToSpeak) => {
		const utterance = new SpeechSynthesisUtterance(textToSpeak);
		utterance.rate = 0.2;
		utterance.voice = seletedVoice;
		console.log(utterance);
		window.speechSynthesis.onvoiceschanged = () => {
			const voices = window.speechSynthesis.getVoices();
			console.log(voices);
		  };
		synth?.speak(utterance);
		setIsPlaying(true);
		utterance.onend = () => {
			setIsPlaying(false);
		};
	};

	async function handleUserText(event) {
		event.preventDefault();
		// if (input === "") return alert("Please enter text");
		setIsLoading(true);
		try {
			console.log(input);
			console.log(messages);
			const lastMessage = messages[messages.length-1];
			const lastOutput = lastMessage ? lastMessage.content : '';
			speak(lastOutput);
		} catch (error) {
			let message = "";
			if (error instanceof Error) message = error.message;
			console.log(message);
		} finally {
			setIsLoading(false);
			setUserText("");
		}
	}

	return (
		<div className="relative top-0 z-500 ">
			<div className="flex">
				<form
					onSubmit={handleSubmit}
					className="input-form"
				>
					<div className="flex">
						<input
							value={input}
							className="bg-transparent w-[279px] border border-[#b00c3f]/80 outline-none  rounded-lg placeholder:text-[#b00c3f] p-2 text-[#b00c3f]"
							onChange={handleInputChange}
							placeholder="What do you want to know human...."
						/>
						<button
							disabled={isLoading}
							className="text-[#b00c3f] p-2 border border-[#b00c3f] rounded-lg disabled:text-blue-100 
							disabled:cursor-not-allowed disabled:bg-gray-500 hover:scale-110 hover:bg-[#b00c3f] hover:text-black duration-300 transition-all"
						>
							{isLoading ? "thinking..." : "Enter"}
						</button>
					</div>
				</form>
				<button
						disabled={isLoading}
						onClick={handleUserText}
						className="input-form text-[#b00c3f] p-2 border border-[#b00c3f] rounded-lg disabled:text-blue-100 
						disabled:cursor-not-allowed disabled:bg-gray-500 hover:scale-110 hover:bg-[#b00c3f] hover:text-black duration-300 transition-all"
					>{isLoading ? "thinking..." : "Speak"}
				</button>
			</div>
			<div className="absolute top-3 right-3 ">
				<div className="absolute top-0 bg-black/60" />
			</div>
		</div>
	);
};
