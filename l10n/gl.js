OC.L10N.register(
    "assistant",
    {
    "User not found" : "Non se atopou o usuario",
    "Some internal error occurred. Contact your sysadmin for more info." : "Produciuse un erro interno. Póñase en contacto coa administración do sistema para obter máis información.",
    "No Speech-to-Text provider found, install one from the app store to use this feature." : "Non se atopou ningún provedor de conversión de voz a texto. Instale un da tenda de aplicacións para usar esta función.",
    "Audio file not found." : "Non se atopou o ficheiro de son.",
    "No permission to create recording file/directory, contact your sysadmin to resolve this issue." : "Sen permiso para crear un ficheiro/directorio de gravación, póñase en contacto coa administración do sistema para resolver esta incidencia.",
    "Unknown error while retrieving prompt history." : "Produciuse un erro descoñecido ao recuperar o historial de indicacións.",
    "Nextcloud Assistant" : "Asistente de Nextcloud",
    "AI context writer" : "Redactor de contexto de IA",
    "Writing style: %1$s; Source material: %2$s" : "Estilo de escritura: %1$s; Material de partida: %2$s",
    "AI text generation" : "IA de xeración de texto",
    "AI image generation" : "Xeración de imaxes con IA",
    "AI audio transcription" : "Transcrición de son con IA",
    "Task for \"%1$s\" has finished" : "A tarefa para «%1$s» rematou",
    "\"%1$s\" task for \"%2$s\" has finished" : "A tarefa «%1$s» para «%2$s» rematou",
    "Input: %1$s" : "Entrada: %1$s",
    "Result: %1$s" : "Resultado: %1$s",
    "View results" : "Ver os resultados",
    "Task for \"%1$s\" has failed" : "Produciuse un fallo na tarefa para «%1$s»",
    "\"%1$s\" task for \"%2$s\" has failed" : "Produciuse un fallo na tarefa «%1$s» para «%2$s»",
    "View task" : "Ver tarefa",
    "Generate text" : "Texto xerado",
    "Send a request to the Assistant, for example: write a first draft of a presentation, give me suggestions for a presentation, write a draft reply to my colleague." : "Enviar unha solicitude ao asistente, por exemplo: escribe un primeiro borrador dunha presentación, dáme suxestións para unha presentación, escribe un borrador de resposta ao meu compañeiro.",
    "Context write" : "Redacción por contexto",
    "Writes text in a given style based on the provided source material." : "Escribe texto nun estilo determinado baseándose no material de partida fornecido.",
    "Chat with AI" : "Parola cunha IA",
    "Chat with an AI model." : "Parola cun modelo de IA.",
    "Transcribe" : "Transcribir",
    "Transcribe audio to text" : "Transcribir son a texto",
    "Generate image" : "Xerar imaxe",
    "Generate an image from a text" : "Xerar unha imaxe a partir dun texto",
    "Canceled by user" : "Cancelada polo usuario.",
    "FreePromptTaskType not available" : "Tipo de tarefa de indicación libre (FreePromptTaskType) non dispoñíbel",
    "Failed to run or schedule a task" : "Produciuse un fallo ao executar ou programar unha tarefa",
    "Failed to get prompt history" : "Produciuse un fallo ao obter o historial de indicacións",
    "Generation not found" : "Non se atopou a xeración",
    "Multiple tasks found" : "Atopáronse varias tarefas",
    "Transcript not found" : "Non se atopou a transcrición",
    "No text to image processing provider available" : "Non hai ningún provedor de procesamento de texto para imaxes dispoñíbel",
    "Image request error" : "Produciuse un erro na solicitude de imaxe",
    "Image generation not found." : "Non se atopou a xeración de imaxe.",
    "Retrieving the image generation failed." : "Produciuse un fallo ao recuperar a xeración da imaxe.",
    "Image generation failed." : "Produciuse un fallo na xeración da imaxe.",
    "Image file names could not be fetched from database" : "Non foi posíbel recuperar os nomes dos ficheiros de imaxe da base de datos",
    "Image file not found in database" : "Non se atopou o ficheiro de imaxe na base de datos",
    "Image file not found" : "Non se atopou o ficheiro de imaxe",
    "Artificial Intelligence" : "Intelixencia artificial",
    "Process and transform text" : "Procesar e transformar texto",
    "This app brings a user interface to use the Nextcloud text processing feature.\n\nIt allows users to launch AI tasks, be notified when they finish and see the results.\nThe assistant also appears in others apps like Text to easily process parts of a document.\n\nMore details on the assistant OCS API and frontend integration possibilities in the\n[developer doc](https://github.com/nextcloud/assistant/raw/main/docs/developer)\n\n### How to use it\n\nA new right header menu entry appears. Once clicked, the assistant is displayed and you can select and task type and\nset the input you want to process.\n\nThe task might run immediately or be scheduled depending on the time estimation given by the AI provider.\nOnce a task is scheduled, it will run as a background job. When it is finished, you will receive a notification\nfrom which the results can be displayed.\n\nOther apps can integrate with the assistant. For example, Text will display an inline button besides every paragraph\nto directly select a task type to process this paragraph. Selecting a task this way will open the assistant with the task\nbeing pre-selected and the input text set.\n\nMore details and screenshots in the [user doc](https://github.com/nextcloud/assistant/raw/main/docs/user).\n\n## Features\n\nIn the assistant, the list of available tasks depends on the available providers installed via other apps.\nThis means you have complete freedom over which service/software will actually run your AI tasks.\n\n### Text processing providers\n\nSo far, the [Large language model](https://github.com/nextcloud/llm#readme)\nand the [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai) apps\ninclude text processing providers to:\n* Summarize\n* Extract topics\n* Generate a headline\n* Get an answer from a free prompt\n* Reformulate (OpenAi/LocalAi only)\n* Context writer: Generate text with a specified style. The style can be described or provided via an example text.\n\n### Text to image (Image generation)\n\nKnown providers:\n* [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai)\n* [Text2Image Stable Diffusion](https://apps.nextcloud.com/apps/text2image_stablediffusion)\n\n### Speech to text (Audio transcription)\n\nKnown providers:\n* [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai)\n* [Local Whisper Speech-To-Text](https://apps.nextcloud.com/apps/stt_whisper)" : "Esta aplicación ofrece unha interface de usuario para usar a función de procesamento de texto de Nextcloud.\n\nPermítelle aos usuarios iniciar tarefas de IA, ser notificados cando rematen e ver os resultados.\nO asistente tamén aparece noutras aplicacións como Texto para procesar facilmente partes dun documento.\n\nPode ver máis detalles sobre a API do asistente OCS e as posibilidades de integración da interface no\n[documento do programador](https://github.com/nextcloud/assistant/raw/main/docs/developer)\n\n### Como usalo\n\nAparece unha nova entrada do menú da cabeceira dereita. Cando se preme nela, amosase o asistente e pode seleccionar o tipo de tarefa e definir a entrada que quere procesar.\n\nA tarefa pode executarse inmediatamente ou programarse dependendo da estimación de tempo fornecida polo provedor de IA.\nUnha vez programada a tarefa, executarase como traballo en segundo plano. Cando remate, recibirá unha notificación\nna que se amosarán os resultados.\n\nPoden integrarse outras aplicacións co asistente. Por exemplo, Text amosará un botón en liña xunto a cada parágrafo\npara seleccionar directamente un tipo de tarefa para procesar este parágrafo. Se selecciona unha tarefa deste xeito,\nabrirase o asistente coa tarefa preseleccionada e o texto de entrada definido.\n\nMáis detalles e capturas de pantalla no [documento do usuario](https://github.com/nextcloud/assistant/raw/main/docs/user).\n\n##Características\n\nNo asistente, a lista de tarefas dispoñíbeis depende dos provedores dispoñíbeis instalados a través doutras aplicacións.\nIsto significa que dispón de total liberdade sobre o servizo/software que executará as súas tarefas de IA.\n\n### Provedores de procesamento de texto\n\nAta agora, o [Modelo de idioma grande](https://github.com/nextcloud/llm#readme)\ne as aplicacións [Integración OpenAi/LocalAI](https://apps.nextcloud.com/apps/integration_openai)\ninclúen provedores de procesamento de texto para:\n* Resumr\n* Extraer temas\n* Xerar un títular\n* Obtér unha resposta dunha indicación libre\n* Reformular (só OpenAi/LocalAi)\n* Redacción por contexto: xera texto cun estilo especificado. O estilo pódese describir ou fornecer mediante un texto de exemplo.\n\n### Texto a imaxe (xeración de imaxes)\n\nProvedores coñecidos:\n* [Integración OpenAi/LocalAI](https://apps.nextcloud.com/apps/integration_openai)\n* [Texto a imaxe de Stable Diffusion](https://apps.nextcloud.com/apps/text2image_stablediffusion)\n\n### Voz a texto (transcrición de son)\n\nProvedores coñecidos:\n* [Integración OpenAi/LocalAI](https://apps.nextcloud.com/apps/integration_openai)\n* [Voz a texto de Local Whisper](https://apps.nextcloud.com/apps/stt_whisper)",
    "Select which features you want to enable" : "Seleccione as funcións que quere activar",
    "Top-right assistant" : " Asistente arriba á dereita",
    "AI text generation smart picker" : "Selector intelixente de xeración de texto mediante IA",
    "To enable this feature, please install an AI text processing provider for the free prompt task type." : "Para activar esta funcionalidade, instale un provedor de procesamento de texto mediante IA para o tipo de tarefa de indicación libre.",
    "Text-to-image smart picker" : "Selector intelixente de procesamento de texto a imaxe",
    "To enable this feature, please install a text-to-image provider." : "Para activar esta funcionalidade instale un provedor de procesamento de texto a imaxe.",
    "Speech-to-text smart picker" : "Selector intelixente de procesamento de voz a texto",
    "To enable this feature, please install a speech-to-text provider." : "Para activar esta funcionalidade instale un provedor de procesamento de voz a texto.",
    "Image storage" : "Almacenamento de imaxes",
    "Assistant admin options saved" : "Gardáronse as opcións de administración do Asistente",
    "Failed to save assistant admin options" : "Produciuse un fallo ao gardar as opcións de administración do Asistente",
    "Writing style" : "Estilo de escritura",
    "Choose file" : "Escoller o ficheiro",
    "Source material" : "Material de partida",
    "Input" : "Entrada",
    "Type some text" : "Escriba algún texto",
    "Choose a text file" : "Escoller un ficheiro de texto",
    "Choose" : "Escoller",
    "No file selected" : "Non seleccionou ningún ficheiro",
    "Close" : "Pechar",
    "Close Nextcloud Assistant" : "Pechar o Asistente de Nextcloud",
    "Output" : "Saída",
    "This output was generated by AI. Make sure to double-check and adjust." : "Esta saída foi xerada pola IA. Asegúrese de facer unha dobre comprobación e axustar.",
    "Reset" : "Restabelecer",
    "Text Generation" : "Xeración de texto",
    "Audio transcription" : "Transcrición de son",
    "Result could not be copied to clipboard" : "Non foi posíbel copiar o resultado no portapapeis",
    "Result" : "Resultado",
    "Show previous tasks" : "Amosar tarefas anteriores",
    "Run a task" : "Executar unha tarefa",
    "Copy" : "Copiar",
    "Try again" : "Ténteo de novo",
    "Send request" : "Enviar a solicitude",
    "Delete" : "Eliminar",
    "You" : "Vde.",
    "Cancel editing" : "Cancelar a edición",
    "Submit" : "Enviar",
    "Delete message" : "Eliminar a mensaxe",
    "Select Files/Folders" : "Seleccionar ficheiros/cartafoles",
    "Select Providers" : "Seleccionar provedores",
    "Choose Files/Folders" : "Escoller ficheiros/cartafoles",
    "Clear Selection" : "Limpar a selección",
    "Error fetching default provider key" : "Produciuse un erro ao recuperar a chave predeterminada do provedor",
    "Error fetching providers" : "Produciuse un erro ao recuperar provedores",
    "Text generation content" : "Contido da xeración de texto",
    "The text generation task was scheduled to run in the background." : "A tarefa de xeración de texto foi programada para executarse en segundo plano.",
    "Estimated completion time: " : "Tempo restante estimado de finalización:",
    "This can take a while…" : "Isto pode levar un tempo…",
    "Some generations are still being processed in the background! Showing finished generations." : "Algunhas xeracións aínda están a ser procesadas en segundo plano! Amosando as xeracións acabadas.",
    "Loading generations…" : "Cargando xeracións…",
    "Include prompt in the final result" : "Incluír a indicación no resultado final",
    "Unexpected server response" : "Resposta non agardada do servidor",
    "The processing of generations failed." : "O procesamento das xeracións fracasou.",
    "The processing of some generations failed." : "O procesamento dalgunhas xeracións fracasou.",
    "Text generation error" : "Produciuse un erro na xeración de texto",
    "Unknown text generation API error" : "Produciuse un erro descoñecido na API de xeración de texto",
    "Prompt" : "Indicación",
    "Result {index}" : "Resultado {index}",
    "No provider found" : "Non se atopou ningún provedor",
    "AI Providers need to be installed to use the Assistant" : "Para empregar o asistente deben estar instalados os provedores de IA",
    "tool" : "ferramenta",
    "integration" : "Integración",
    "complete AI documentation" : "completa documentación de IA",
    "Assistant options saved" : "Gardáronse as opcións do Asistente",
    "Failed to save assistant options" : "Produciuse un fallo ao gardar as opcións do Asistente",
    "Getting results…" : "Obtendo resultados…",
    "Run in the background" : "Executar en segundo plano",
    "You will receive a notification when it has finished" : "Recibirá unha notificación cando remate",
    "Your task has been scheduled" : "A súa tarefa foi programada",
    "Record Audio" : "Gravar son",
    "Choose Audio File" : "Escoller o ficheiro de son",
    "Start recording" : "Comezar a gravar",
    "Stop recording" : "Deter a gravación",
    "No audio file selected" : "Non seleccionou ningún ficheiro de son",
    "Selected Audio File:" : "Ficheiro de son seleccionado:",
    "Nothing yet" : "Aínda non hai nada",
    "Cancel" : "Cancelar",
    "Audio input" : "Entrada de son",
    "Failed" : "Fallado",
    "Unknown error" : "Produciuse un erro descoñecido",
    "Unknown status" : "Estado descoñecido",
    "Running" : "En execución",
    "Scheduled" : "Programado",
    "Image generation" : "Xeración de imaxes",
    "Edit visible images" : "Editar as imaxes visíbeis",
    "Click to toggle generation visibility" : "Prema para cambiar a visibilidade da xeración",
    "Generated image" : "Imaxe xerada",
    "This generation has no visible images" : "Esta xeración non ten imaxes visíbeis",
    "Estimated generation time left: " : "Tempo restante estimado de xeración:",
    "Image generation failed" : "Produciuse un fallo na xeración da imaxe.",
    "Rate limit reached. Please try again later." : "Acadouse o límite da taxa. Tenteo de novo máis tarde.",
    "Unknown server query error" : "Produciuse un erro de consulta de servidor descoñecido",
    "Include the prompt in the result" : "Incluír a indicación no resultado",
    "Number of results" : "Número de resultados",
    "Failed to schedule your task" : "Produciuse un fallo ao programar a súa tarefa",
    "Preview text generation by AI" : "Vista previa da xeración de texto por IA",
    "Notify when ready" : "Notificar cando estea listo",
    "Submit text generated by AI" : "Enviar o texto xerado por IA",
    "Regenerate" : "Rexenerar",
    "Preview" : "Vista previa",
    "You will be notified when the text generation is ready." : "Recibirá unha notificación cando a xeración de texto estea lista.",
    "Notify when ready error" : "Produciuse un erro ao notificar cando está listo",
    "Unknown notify when ready error" : "Produciuse un error descoñecido ao notificar cando está listo",
    "Schedule Transcription" : "Programar unha transcrición",
    "Successfully scheduled transcription" : "A transcrición foi programada correctamente",
    "Failed to schedule transcription" : "Produciuse un fallo ao programar a transcrición",
    "Unknown API error" : "Produciuse un erro descoñecido na API",
    "Preview image generation by AI" : "Vista previa da xeración de imaxes mediante IA",
    "Submit image(s) generated by AI" : "Enviar imaxes xeradas por IA",
    "Send" : "Enviar",
    "Show/hide advanced options" : "Amosar/agochar as opcións avanzadas",
    "Advanced options" : "Opcións avanzadas",
    "Image generation cancel error" : "Produciuse un erro de cancelación de xeración de imaxe",
    "Unknown image generation cancel error" : "Produciuse un erro descoñecido de cancelación de xeración de imaxe",
    "Unexpected response from server." : "Resposta non agardada do servidor.",
    "Image generation error" : "Produciuse un erro de xeración de imaxe",
    "Unknown image generation error" : "Produciuse un erro descoñecido de xeración de imaxe",
    "You will be notified when the image generation is ready." : "Recibirá unha notificación cando a xeración de imaxes estea lista.",
    "Copy link to clipboard" : "Copiar a ligazón no portapapeis",
    "This task does not exist or has been cleaned up" : "Esta tarefa non existe ou foi limpada",
    "Failed to schedule the task" : "Produciuse un fallo ao programar a tarefa"
},
"nplurals=2; plural=(n != 1);");
