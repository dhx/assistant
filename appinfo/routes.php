<?php

$requirements = [
	'apiVersion' => '(v1)',
];

return [
	'routes' => [
		['name' => 'config#getConfigValue', 'url' => '/config', 'verb' => 'GET'],
		['name' => 'config#setConfig', 'url' => '/config', 'verb' => 'PUT'],
		['name' => 'config#setAdminConfig', 'url' => '/admin-config', 'verb' => 'PUT'],

		['name' => 'assistant#getAssistantTaskResultPage', 'url' => '/task/view/{taskId}', 'verb' => 'GET'],
		['name' => 'assistant#getAssistantStandalonePage', 'url' => '/', 'verb' => 'GET'],

		['name' => 'Text2Image#showGenerationPage', 'url' => '/i/{imageGenId}', 'verb' => 'GET'],
		['name' => 'Text2Image#getPromptHistory', 'url' => '/i/data/prompt_history', 'verb' => 'GET'],

		['name' => 'FreePrompt#processPrompt', 'url' => '/f/process_prompt', 'verb' => 'POST'],
		['name' => 'FreePrompt#getPromptHistory', 'url' => '/f/prompt_history', 'verb' => 'GET'],
		['name' => 'FreePrompt#getOutputs', 'url' => '/f/get_outputs', 'verb' => 'GET'],
		['name' => 'FreePrompt#cancelGeneration', 'url' => '/f/cancel_generation', 'verb' => 'POST'],

		['name' => 'SpeechToText#getResultPage', 'url' => '/stt/result-page/{metaTaskId}', 'verb' => 'GET'],

		['name' => 'preview#getFileImage', 'url' => '/preview', 'verb' => 'GET'],

		['name' => 'chattyLLM#newSession', 'url' => '/chat/new_session', 'verb' => 'PUT'],
		['name' => 'chattyLLM#updateSessionTitle', 'url' => '/chat/update_session', 'verb' => 'PATCH'],
		['name' => 'chattyLLM#deleteSession', 'url' => '/chat/delete_session', 'verb' => 'DELETE'],
		['name' => 'chattyLLM#getSessions', 'url' => '/chat/sessions', 'verb' => 'GET'],
		['name' => 'chattyLLM#newMessage', 'url' => '/chat/new_message', 'verb' => 'PUT'],
		['name' => 'chattyLLM#deleteMessage', 'url' => '/chat/delete_message', 'verb' => 'DELETE'],
		['name' => 'chattyLLM#getMessages', 'url' => '/chat/messages', 'verb' => 'GET'],
		['name' => 'chattyLLM#generateForSession', 'url' => '/chat/generate', 'verb' => 'GET'],
		['name' => 'chattyLLM#regenerateForSession', 'url' => '/chat/regenerate', 'verb' => 'GET'],
		['name' => 'chattyLLM#generateTitle', 'url' => '/chat/generate_title', 'verb' => 'GET'],
	],
	'ocs' => [
		['name' => 'assistantApi#getAvailableTaskTypes', 'url' => '/api/{apiVersion}/task-types', 'verb' => 'GET', 'requirements' => $requirements],
		['name' => 'assistantApi#getUserTasks', 'url' => '/api/{apiVersion}/tasks', 'verb' => 'GET', 'requirements' => $requirements],
		['name' => 'assistantApi#parseTextFromFile', 'url' => '/api/{apiVersion}/parse-file', 'verb' => 'POST', 'requirements' => $requirements],
		['name' => 'assistantApi#notifyWhenReady', 'url' => '/api/{apiVersion}/task/{ocpTaskId}/notify', 'verb' => 'POST', 'requirements' => $requirements],
		['name' => 'assistantApi#uploadInputFile', 'url' => '/api/{apiVersion}/input-file', 'verb' => 'POST', 'requirements' => $requirements],
		['name' => 'assistantApi#displayUserFile', 'url' => '/api/{apiVersion}/file/{fileId}/display', 'verb' => 'GET', 'requirements' => $requirements],
		['name' => 'assistantApi#getUserFileInfo', 'url' => '/api/{apiVersion}/file/{fileId}/info', 'verb' => 'GET', 'requirements' => $requirements],
		['name' => 'assistantApi#shareOutputFile', 'url' => '/api/{apiVersion}/task/{ocpTaskId}/file/{fileId}/share', 'verb' => 'POST', 'requirements' => $requirements],
		['name' => 'assistantApi#getOutputFilePreview', 'url' => '/api/{apiVersion}/task/{ocpTaskId}/output-file/{fileId}/preview', 'verb' => 'GET', 'requirements' => $requirements],

		['name' => 'Text2ImageApi#processPrompt', 'url' => '/api/{apiVersion}/i/process_prompt', 'verb' => 'POST', 'requirements' => $requirements],
		['name' => 'Text2ImageApi#getGenerationInfo', 'url' => '/api/{apiVersion}/i/info/{imageGenId}', 'verb' => 'GET', 'requirements' => $requirements],
		['name' => 'Text2ImageApi#getImage', 'url' => '/api/{apiVersion}/i/{imageGenId}/{fileNameId}', 'verb' => 'GET', 'requirements' => $requirements],
		['name' => 'Text2ImageApi#cancelGeneration', 'url' => '/api/{apiVersion}/i/cancel_generation', 'verb' => 'POST', 'requirements' => $requirements],
		['name' => 'Text2ImageApi#setVisibilityOfImageFiles', 'url' => '/api/{apiVersion}/i/visibility/{imageGenId}', 'verb' => 'POST', 'requirements' => $requirements],
		['name' => 'Text2ImageApi#notifyWhenReady', 'url' => '/api/{apiVersion}/i/notify/{imageGenId}', 'verb' => 'POST', 'requirements' => $requirements],

		['name' => 'SpeechToTextApi#transcribeAudio', 'url' => '/api/{apiVersion}/stt/transcribeAudio', 'verb' => 'POST', 'requirements' => $requirements],
		['name' => 'SpeechToTextApi#transcribeFile', 'url' => '/api/{apiVersion}/stt/transcribeFile', 'verb' => 'POST', 'requirements' => $requirements],
	],
];
