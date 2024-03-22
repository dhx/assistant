OC.L10N.register(
    "assistant",
    {
    "Failed to process prompt; unknown user" : "Falha ao processar o prompt; usuário desconhecido",
    "Failed to get prompt history; unknown user" : "Falha ao obter histórico de prompt; usuário desconhecido",
    "Failed to get outputs; unknown user" : "Falha ao obter resultados; usuário desconhecido",
    "Failed to cancel generation; unknown user" : "Falha ao cancelar a geração; usuário desconhecido",
    "Some internal error occurred. Contact your sysadmin for more info." : "Ocorreu algum erro interno. Entre em contato com seu administrador de sistema para obter mais informações.",
    "No Speech-to-Text provider found, install one from the app store to use this feature." : "Nenhum provedor de conversão de fala em texto foi encontrado. Instale um da app store para usar esse recurso.",
    "Audio file not found." : "Arquivo de áudio não encontrado.",
    "No permission to create recording file/directory, contact your sysadmin to resolve this issue." : "Sem permissão para criar arquivo/diretório de gravação, entre em contato com o administrador do sistema para resolver esse problema.",
    "Unknown error while retrieving prompt history." : "Erro desconhecido ao recuperar o histórico de prompts.",
    "Failed to set visibility of image files; unknown user" : "Falha ao definir a visibilidade dos arquivos de imagem; usuário desconhecido",
    "Failed to notify when ready; unknown user" : "Falha ao notificar quando estiver pronto; usuário desconhecido",
    "Nextcloud Assistant" : "Assistente Nextcloud",
    "AI context writer" : "Escritor de contexto de IA",
    "Writing style: %1$s; Source material: %2$s" : "Estilo de escrita: %1$s; Material de origem: %2$s",
    "AI text generation" : "Gerador de texto com IA",
    "AI image generation" : "Geração de imagem de IA",
    "AI audio transcription" : "Transcrição de áudio AI",
    "Task for \"%1$s\" has finished" : "A tarefa para \"%1$s\" foi concluída",
    "\"%1$s\" task for \"%2$s\" has finished" : "A tarefa \"%1$s\" para \"%2$s\" foi concluída",
    "Input: %1$s" : "Entrada: %1$s",
    "Result: %1$s" : "Resultado: %1$s",
    "View results" : "Ver resultados",
    "Task for \"%1$s\" has failed" : "6 A tarefa para \"%1$s\" falhou",
    "\"%1$s\" task for \"%2$s\" has failed" : "A tarefa \"%1$s\" para \"%2$s\" falhou",
    "View task" : "Ver tarefa",
    "Generate text" : "Gerar texto",
    "Send a request to the Assistant, for example: write a first draft of a presentation, give me suggestions for a presentation, write a draft reply to my colleague." : "Envie um pedido ao Assistente, por exemplo: escreva um primeiro rascunho de uma apresentação, dê-me sugestões de apresentação, escreva um rascunho de resposta ao meu colega.",
    "Context write" : "Gravação de contexto",
    "Writes text in a given style based on the provided source material." : "Escreve texto em um determinado estilo com base no material de origem fornecido.",
    "Transcribe" : "Transcrever",
    "Transcribe audio to text" : "Transcrever áudio para texto",
    "Generate image" : "Gerar imagem",
    "Generate an image from a text" : "Gerar uma imagem a partir de um texto",
    "Canceled by user" : "Cancelado pelo usuário",
    "FreePromptTaskType not available" : "FreePromptTaskType não disponível",
    "Failed to run or schedule a task" : "Falha ao executar ou agendar uma tarefa",
    "Failed to get prompt history" : "Falha ao obter o histórico de prompts",
    "Generation not found" : "Geração não encontrada",
    "Multiple tasks found" : "Várias tarefas encontradas",
    "Transcript not found" : "Transcrição não encontrada",
    "No text to image processing provider available" : "Não há provedor de processamento de texto em imagem disponível",
    "Image request error" : "Erro na requisição de imagem",
    "Image generation not found." : "Geração de imagem não encontrada.",
    "Retrieving the image generation failed." : "Falha ao recuperar a geração da imagem.",
    "Image generation failed." : "Geração de imagem falhou.",
    "Image file names could not be fetched from database" : "Nomes de arquivos de imagem não puderam ser recuperados do banco de dados",
    "Image file not found in database" : "Arquivo da imagem não foi encontrado no banco de dados",
    "Image file not found" : "Arquivo de imagem não encontrado",
    "Artificial Intelligence" : "Inteligência artificial",
    "Process and transform text" : "Processar e transformar texto",
    "This app brings a user interface to use the Nextcloud text processing feature.\n\nIt allows users to launch AI tasks, be notified when they finish and see the results.\nThe assistant also appears in others apps like Text to easily process parts of a document.\n\n### How to use it\n\nA new right header menu entry appears. Once clicked, the assistant is displayed and you can select and task type and\nset the input you want to process.\n\nThe task might run immediately or be scheduled depending on the time estimation given by the AI provider.\nOnce a task is scheduled, it will run as a background job. When it is finished, you will receive a notification\nfrom which the results can be displayed.\n\nOther apps can integrate with the assistant. For example, Text will display an inline button besides every paragraph\nto directly select a task type to process this paragraph. Selecting a task this way will open the assistant with the task\nbeing pre-selected and the input text set.\n\n## Features\n\nIn the assistant, the list of available tasks depends on the available providers installed via other apps.\nThis means you have complete freedom over which service/software will actually run your AI tasks.\n\n### Text processing providers\n\nSo far, the [Large language model](https://github.com/nextcloud/llm#readme)\nand the [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai) apps\ninclude text processing providers to:\n* Summarize\n* Extract topics\n* Generate a headline\n* Get an answer from a free prompt\n* Reformulate (OpenAi/LocalAi only)\n* Context writer: Generate text with a specified style. The style can be described or provided via an example text.\n\n### Text to image (Image generation)\n\nKnown providers:\n* [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai)\n* [Text2Image Stable Diffusion](https://apps.nextcloud.com/apps/text2image_stablediffusion)\n\n### Speech to text (Audio transcription)\n\nKnown providers:\n* [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai)\n* [Local Whisper Speech-To-Text](https://apps.nextcloud.com/apps/stt_whisper)" : "Este aplicativo traz uma interface de usuário para usar o recurso de processamento de texto Nextcloud.\n\nEle permite que os usuários iniciem tarefas de IA, sejam notificados quando terminarem e vejam os resultados.\nO assistente também aparece em outros aplicativos como o Text para processar facilmente partes de um documento.\n\n### Como usá-lo\n\nUma nova entrada de menu no cabeçalho direito é exibida. Uma vez clicado, o assistente é exibido e você pode selecionar o tipo de tarefa e\ndefina a entrada que deseja processar.\n\nA tarefa pode ser executada imediatamente ou agendada dependendo da estimativa de tempo fornecida pelo provedor de IA.\nDepois que uma tarefa for agendada, ela será executada como um trabalho em segundo plano. Quando terminar, você receberá uma notificação\na partir do qual os resultados podem ser exibidos.\n\nOutros aplicativos podem ser integrados ao assistente. Por exemplo, o Texto exibirá um botão embutido além de cada parágrafo\npara selecionar diretamente um tipo de tarefa para processar este parágrafo. Selecionar uma tarefa desta forma abrirá o assistente com a tarefa\nsendo pré-selecionado e o texto de entrada definido.\n\n## Características\n\nNo assistente, a lista de tarefas disponíveis depende dos provedores disponíveis instalados por meio de outros aplicativos.\nIsso significa que você tem total liberdade sobre qual serviço/software realmente executará suas tarefas de IA.\n\n### Provedores de processamento de texto\n\nAté agora, o [modelo de linguagem grande](https://github.com/nextcloud/llm#readme)\ne os aplicativos [integração OpenAi/LocalAI](https://apps.nextcloud.com/apps/integration_openai)\nincluem provedores de processamento de texto para:\n* Resumir\n* Extrair tópicos\n* Gere um título\n* Obtenha uma resposta em um prompt gratuito\n* Reformulado (somente OpenAi/LocalAi)\n* Escritor de contexto: gera texto com um estilo especificado. O estilo pode ser descrito ou fornecido através de um texto de exemplo.\n\n### Texto para imagem (geração de imagem)\n\nFornecedores conhecidos:\n* [Integração OpenAi/LocalAI](https://apps.nextcloud.com/apps/integration_openai)\n* [Difusão estável Text2Image](https://apps.nextcloud.com/apps/text2image_stablediffusion)\n\n### Fala para texto (transcrição de áudio)\n\nFornecedores conhecidos:\n* [Integração OpenAi/LocalAI](https://apps.nextcloud.com/apps/integration_openai)\n* [Conversão de fala em texto por sussurro local](https://apps.nextcloud.com/apps/stt_whisper)",
    "Select which features you want to enable" : "Selecione quais recursos você deseja ativar",
    "Top-right assistant" : "Assistente superior direito",
    "AI text generation smart picker" : "Seletor inteligente de geração de texto AI",
    "To enable this feature, please install an AI text processing provider for the free prompt task type." : "Para ativar esse recurso, instale um provedor de processamento de texto AI para o tipo de tarefa de prompt gratuito.",
    "Text-to-image smart picker" : "Seletor inteligente de texto para imagem",
    "To enable this feature, please install a text-to-image provider." : "Para ativar esse recurso, instale um provedor de texto para imagem.",
    "Speech-to-text smart picker" : "Seletor inteligente de fala para texto",
    "To enable this feature, please install a speech-to-text provider." : "Para ativar esse recurso, instale um provedor de voz para texto.",
    "Image storage" : "Armazenamento de imagens",
    "Image generation idle time (days)" : "Tempo ocioso de geração de imagem (dias)",
    "Days until generated images are deleted if they are not viewed" : "Dias até que as imagens geradas sejam excluídas se não forem visualizadas",
    "Assistant admin options saved" : "Opções de administração do assistente salvas",
    "Failed to save assistant admin options" : "Falha ao salvar as opções de administração do assistente",
    "Writing style" : "Estilo de escrita",
    "Choose file" : "Escolher arquivo",
    "Describe the writing style you want to use or supply an example document." : "Descreva o estilo de escrita que deseja usar ou forneça um documento de exemplo.",
    "Source material" : "Material de origem",
    "Describe what you want the document to be written on." : "Descreva onde você deseja que o documento seja escrito.",
    "Input" : "Entrada",
    "Type some text" : "Digite algum texto",
    "Choose a text file" : "Escolha um arquivo de texto",
    "No file selected" : "Nenhum arquivo selecionado",
    "Unexpected response from text parser" : "Resposta inesperada do analisador de texto",
    "Could not parse file" : "Não foi possível analisar o arquivo",
    "Close" : "Fechar",
    "Close Nextcloud Assistant" : "Fechar o Assistente Nextcloud",
    "Output" : "Saída",
    "This output was generated by AI. Make sure to double-check and adjust." : "Esta saída foi gerada pela IA. Certifique-se de verificar e ajustar.",
    "Copy output text to clipboard" : "Copie o texto de saída para a área de transferência",
    "Copy output" : "Copiar saída",
    "Reset the output value to the originally generated one" : "Redefina o valor de saída para o gerado originalmente",
    "Reset" : "Redefinir",
    "Text Generation" : "Geração de texto",
    "Audio transcription" : "Transcrição de áudio",
    "Unknown Result Type" : "Tipo de resultado desconhecido",
    "Result could not be copied to clipboard" : "O resultado não pôde ser copiado para a área de transferência",
    "Previous \"{taskTypeName}\" tasks" : "Tarefas anteriores de \"{taskTypeName}\"",
    "Result" : "Resultado",
    "The task ran successfully but the result is identical to the input." : "A tarefa foi executada com êxito, mas o resultado é idêntico à entrada.",
    "The task ran successfully but the generated text is empty." : "A tarefa foi executada com êxito, mas o texto gerado está vazio.",
    "Show previous tasks" : "Mostrar tarefas anteriores",
    "Run a task" : "Execute uma tarefa",
    "Copy" : "Copiar",
    "Try again" : "Tente novamente",
    "Send request" : "Enviar solicitação",
    "Text generation content" : "Conteúdo de geração de texto",
    "The text generation task was scheduled to run in the background." : "A tarefa de geração de texto foi agendada para ser executada em segundo plano.",
    "Estimated completion time: " : "Tempo estimado de conclusão:",
    "This can take a while…" : "Isso pode demorar um pouco…",
    "Some generations are still being processed in the background! Showing finished generations." : "Algumas gerações ainda estão sendo processadas em segundo plano! Mostrando gerações acabadas.",
    "Loading generations…" : "Carregando gerações…",
    "Include prompt in the final result" : "Incluir prompt no resultado final",
    "Unexpected server response" : "Resposta inesperada do servidor",
    "The processing of generations failed." : "O processamento de gerações falhou.",
    "The processing of some generations failed." : "O processamento de algumas gerações falhou.",
    "Text generation error" : "Erro na geração de texto",
    "Unknown text generation API error" : "Erro desconhecido na API de geração de texto",
    "Prompt" : "Pronto",
    "Result {index}" : "Resultado {index}",
    "AI image generation smart picker" : "Seletor inteligente de geração de imagens AI",
    "AI transcription smart picker" : "Seletor inteligente de transcrição de IA",
    "No suitable providers are available. They must first be enabled by your administrator." : "Não há fornecedores adequados disponíveis. Eles devem primeiro ser habilitados pelo administrador.",
    "Assistant options saved" : "Opções do assistente salvas",
    "Failed to save assistant options" : "Falha ao salvar as opções do assistente",
    "Getting results…" : "Obtendo resultados…",
    "Run in the background" : "Executar em segundo plano",
    "You will receive a notification when it has finished" : "Você receberá uma notificação quando terminar",
    "Your task has been scheduled" : "Sua tarefa foi agendada",
    "Record Audio" : "Gravar Áudio",
    "Choose Audio File" : "Escolha o Arquivo de Áudio",
    "Reset recorded audio" : "Redefinir áudio gravado",
    "Start recording" : "Comece a gravar",
    "Stop recording" : "Pare de gravar",
    "No audio file selected" : "Nenhum arquivo de áudio selecionado",
    "Selected Audio File:" : "Arquivo de Áudio Selecionado:",
    "Choose audio file in your storage" : "Escolha o arquivo de áudio em seu armazenamento",
    "Choose audio File" : "Escolha o arquivo de áudio",
    "Copy result" : "Copiar resultado",
    "Cancel" : "Cancelar",
    "Delete" : "Excluir",
    "Audio input" : "Entrada de áudio",
    "Unknown input" : "Entrada desconhecida",
    "This task is scheduled" : "Esta tarefa está agendada",
    "Running..." : "Rodando...",
    "Failed" : "Falhou",
    "Unknown error" : "Erro desconhecido",
    "Unknown status" : "Estado desconhecido",
    "Succeeded" : "Sucesso",
    "Running" : "Corrida",
    "Scheduled" : "Agendada",
    "Task result was copied to clipboard" : "O resultado da tarefa foi copiado para a área de transferência",
    "_{n} image has been generated_::_{n} images have been generated_" : ["{n} imagens foram geradas","{n} imagens foram geradas","{n} imagens foram geradas"],
    "_Generation of {n} image is scheduled_::_Generation of {n} images is scheduled_" : ["A geração de {n} imagens está agendada","A geração de {n} imagens está agendada","A geração de {n} imagens está agendada"],
    "Image generation" : "Geração de imagem",
    "Edit visible images" : "Edita imagens visíveis",
    "Click to toggle generation visibility" : "Clique para alternar a visualização da geração",
    "Generated image" : "Imagem gerada",
    "This generation has no visible images" : "Essa geração não possui imagens visíveis",
    "Estimated generation time left: " : "Tempo estimado para fim da geração:",
    "The image(s) will be displayed here once generated." : "As imagem(ns) serão exibidas aqui depois de geradas.",
    "This image generation was scheduled to run in the background." : "Essa geração de imagem estava programada para ser executada em segundo plano.",
    "Image generation failed" : "Geração de imagem falhou",
    "Rate limit reached. Please try again later." : "Limite atingido. Tente novamente mais tarde.",
    "Unknown server query error" : "Erro desconhecido em solicitação ao servidor",
    "Failed to get images" : "Falha ao obter imagens",
    "Include the prompt in the result" : "Incluir o prompt no resultado",
    "Number of results" : "Número de resultados",
    "Enter your question or task here:" : "Digite sua pergunta ou tarefa aqui:",
    "Preview text generation by AI" : "Prever geração de texto com IA",
    "Notify when ready" : "Notificar quando estiver pronto",
    "Submit text generated by AI" : "Enviar texto gerado por IA",
    "Submit" : "Enviar",
    "Regenerate" : "Regenerado",
    "Preview" : "Visualizar",
    "You will be notified when the text generation is ready." : "Você será notificado quando a geração do texto estiver pronta.",
    "Notify when ready error" : "Erro ao notificar quando pronto",
    "Unknown notify when ready error" : "Erro desconhecido ao notificar quando pronto",
    "The task could not be found. It may have been deleted." : "A tarefa não foi encontrada. Pode ter sido excluído.",
    "Schedule Transcription" : "Transcrição do Cronograma",
    "Successfully scheduled transcription" : "Transcrição agendada com sucesso",
    "Failed to schedule transcription" : "Falha ao agendar a transcrição",
    "Unknown API error" : "Erro de API desconhecido",
    "Failed to schedule your task" : "Falha ao agendar sua tarefa",
    "Preview image generation by AI" : "Prever geração de imagem por IA",
    "Submit image(s) generated by AI" : "Enviar imagens geradas pela IA",
    "Send" : "Enviar",
    "Show/hide advanced options" : "Exibir/Esconder opçòes avançadas",
    "Advanced options" : "Opções avançadas",
    "A description of the image you want to generate" : "Uma descrição da imagem que você deseja gerar",
    "Image generation cancel error" : "Erro de cancelamento de geração de imagem",
    "Unknown image generation cancel error" : "Erro desconhecido de cancelamento na geração de imagem",
    "Unexpected response from server." : "Resposta inesperada do servidor.",
    "Image generation error" : "Erro na geração da imagem",
    "Unknown image generation error" : "Erro desconhecido ao gerar imagem",
    "You will be notified when the image generation is ready." : "Você será notificado quando a geração de imagem estiver pronta.",
    "Copy the link to this generation to clipboard" : "Copie o link desta geração para a área de transferência",
    "Copy link to clipboard" : "Copiar link para a área de transferência",
    "Image link copied to clipboard" : "Link da imagem copiado para a área de transferência",
    "Image link could not be copied to clipboard" : "Não foi possível copiar o link da imagem para a área de transferência",
    "Assistant error" : "Erro do assistente",
    "This task does not exist or has been cleaned up" : "Esta tarefa não existe ou foi limpa",
    "Failed to schedule the task" : "Falha ao agendar a tarefa"
},
"nplurals=3; plural=(n == 0 || n == 1) ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;");
