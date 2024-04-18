OC.L10N.register(
    "assistant",
    {
    "Failed to process prompt; unknown user" : "Није успела обрада захтева; корисник није познат",
    "Failed to get prompt history; unknown user" : "Није успело преузимање историје захтева; корисник није познат",
    "Failed to get outputs; unknown user" : "Није успео пријем излаза; корисник није познат",
    "Failed to cancel generation; unknown user" : "Није успело отказивање генерисања; корисник није познат",
    "Some internal error occurred. Contact your sysadmin for more info." : "Дошло је до неке интерне грешке. Да бисте сазнате више, обратите се свом систем админу.",
    "No Speech-to-Text provider found, install one from the app store to use this feature." : "Није пронађен ниједан пружалац услуге претварања говора у текст, инсталирајте неки из продавнице апликација ако желите да користите ову функцију.",
    "Audio file not found." : "Није пронађен аѕудио фајл",
    "No permission to create recording file/directory, contact your sysadmin to resolve this issue." : "Нема дозвола за креирање фајла/директоријума снимка. Обратите се систем админу да бисте решили проблем.",
    "Failed to set visibility of image files; unknown user" : "Није успело постављање видљивости фајлова слике; корисник није познат",
    "Failed to notify when ready; unknown user" : "Није успело обавештавање када је спремно; корисник није познат",
    "Unknown error while retrieving prompt history." : "Грешка приликом преузимања историје захтева",
    "Nextcloud Assistant" : "Nextcloud Асистент",
    "AI context writer" : "AI писац контекста",
    "Writing style: %1$s; Source material: %2$s" : "Стил писања: %1$s; Изворни материја: %2$s",
    "AI text generation" : "AI генерисање текста",
    "AI image generation" : "AI генерисање слике",
    "AI audio transcription" : "AI звучна транскрипција",
    "Task for \"%1$s\" has finished" : "Задатак за „%1$s” се завршио",
    "\"%1$s\" task for \"%2$s\" has finished" : "Задатак „%1$s” за „%2$s” се завршио",
    "Input: %1$s" : "Улаз: %1$s",
    "Result: %1$s" : "Резултат: %1$s",
    "View results" : "Види резултате",
    "Task for \"%1$s\" has failed" : "Задатак за „%1$s” није успео",
    "\"%1$s\" task for \"%2$s\" has failed" : "Задатак „%1$s” за „%2$s” није успео",
    "View task" : "Прикажи задатак",
    "Generate text" : "Генериши текст",
    "Send a request to the Assistant, for example: write a first draft of a presentation, give me suggestions for a presentation, write a draft reply to my colleague." : "Пошаљите захтев Асистенту, на пример: напиши први нацрт презентације, дај ми сугестије за презентацију, напиши нацрт одговора мом колеги.",
    "Context write" : "Писање контекста",
    "Writes text in a given style based on the provided source material." : "Пише текст у датом стилу заснован на наведеном изворном материјалу.",
    "Transcribe" : "Транскрибуј",
    "Transcribe audio to text" : "Транскрибуј звук у текст",
    "Generate image" : "Генериши слику",
    "Generate an image from a text" : "Генерише слику из текста",
    "Canceled by user" : "Отказао је корисник",
    "FreePromptTaskType not available" : "Није доступан FreePromptTaskType",
    "Failed to run or schedule a task" : "Није успело покретање или заказивање задатка",
    "Failed to get prompt history" : "Није успело преузимање историје захтева",
    "Generation not found" : "Није пронађено генерисање",
    "Multiple tasks found" : "Пронађено је више задатака",
    "Transcript not found" : "Није пронађен транскипт",
    "No text to image processing provider available" : "Није доступан ниједан пружалац услуге обраде текста у слику",
    "Image request error" : "Грешка захтева слике",
    "Image generation not found." : "Није пронађено генерисање слике.",
    "Retrieving the image generation failed." : "Није успело добављање генерисања слике.",
    "Image generation failed." : "Није успело генерисање слике.",
    "Image file names could not be fetched from database" : "Иза базе података нису могла да се преузму имена фајлова слике",
    "Image file not found in database" : "У бази података није пронађен фајл слике",
    "Image file not found" : "Није пронађен фајл слике",
    "Artificial Intelligence" : "Вештачка интелигенција",
    "Process and transform text" : "Обрада и трансформација текста",
    "This app brings a user interface to use the Nextcloud text processing feature.\n\nIt allows users to launch AI tasks, be notified when they finish and see the results.\nThe assistant also appears in others apps like Text to easily process parts of a document.\n\nMore details on the assistant OCS API and frontend integration possibilities in the\n[developer doc](https://github.com/nextcloud/assistant/raw/main/docs/developer)\n\n### How to use it\n\nA new right header menu entry appears. Once clicked, the assistant is displayed and you can select and task type and\nset the input you want to process.\n\nThe task might run immediately or be scheduled depending on the time estimation given by the AI provider.\nOnce a task is scheduled, it will run as a background job. When it is finished, you will receive a notification\nfrom which the results can be displayed.\n\nOther apps can integrate with the assistant. For example, Text will display an inline button besides every paragraph\nto directly select a task type to process this paragraph. Selecting a task this way will open the assistant with the task\nbeing pre-selected and the input text set.\n\nMore details and screenshots in the [user doc](https://github.com/nextcloud/assistant/raw/main/docs/user).\n\n## Features\n\nIn the assistant, the list of available tasks depends on the available providers installed via other apps.\nThis means you have complete freedom over which service/software will actually run your AI tasks.\n\n### Text processing providers\n\nSo far, the [Large language model](https://github.com/nextcloud/llm#readme)\nand the [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai) apps\ninclude text processing providers to:\n* Summarize\n* Extract topics\n* Generate a headline\n* Get an answer from a free prompt\n* Reformulate (OpenAi/LocalAi only)\n* Context writer: Generate text with a specified style. The style can be described or provided via an example text.\n\n### Text to image (Image generation)\n\nKnown providers:\n* [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai)\n* [Text2Image Stable Diffusion](https://apps.nextcloud.com/apps/text2image_stablediffusion)\n\n### Speech to text (Audio transcription)\n\nKnown providers:\n* [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai)\n* [Local Whisper Speech-To-Text](https://apps.nextcloud.com/apps/stt_whisper)" : "Ова апликација доноси на Nextcloud кориснички интерфејс за могућност обраде текста.\n\nОна омогућава да корисници покрену задатке AI обраде, да се обавесте када се ти задаци заврше и да погледају резултате.\nАсистент се такође појављује и у осталим апликацијама као што је  Текст како би се једноставно обрадили делови документа.\n\nВише детаља у вези са асистентовим OCS API и могућностма за интеграцију чеоног приказа се налази у\n[програмерској документацији](https://github.com/nextcloud/assistant/raw/main/docs/developer)\n\n### Како се користи\n\nПојављује се нова ставка у менију десног заглавља. Када се кликне на њу, приказаће се асистент и ту можете да изаберете врсту задатка\nи да поставите упит који желите да се обради.\n\nЗадатак може одмах да се покрене, или да се закаже, што зависи од процене потребног времена коју достави пружалац AI услуге.\nКада се задатак закаже, покренуће се као посао у позадини. Примићете обавештење након завршетка посла, и из њега ћете моћи да прикажете резултате.\n\nОстале апликације могу да се интегришу са асистентом. На пример, Текст ће да прикаже дугме у линији поред сваког пасуса којим\nдиректно бирате врсту задатка за обраду тог пасуса. Када се задатак изабере на овај начин, отвориће се асистент са већ изабраним задатком\nи постављеним улазним текстом.\n\nВише детаља и снимака екрана се налази у [корисничкој документацији](https://github.com/nextcloud/assistant/raw/main/docs/user).\n\n## Функције\n\nЛиста доступних задатака у асистену зависи од доступних пружаоца услуга које су инсталирале остале апликације.\nОво значи да имате потпуну слободу избора сервиса/софтвера који ће извршавати ваши задатке AI обраде.\n\n### Пружаоци услуге обраде текста\n\nЗа сада, [Large language model](https://github.com/nextcloud/llm#readme)\nи [OpenAi/LocalAI интеграција](https://apps.nextcloud.com/apps/integration_openai) апликације\nукључују и пружаоце услуге обраде текста за:\n* Резимирање\n* Издвајање тема\n* Генерисање линије наслова\n* Добијања одговора на произвољни захтев\n* Реформулисање (само OpenAi/LocalAi)\n* Писање контекста: генерисање текста у наведеном стилу. Стил може да се опише или зада текстом за пример.\n\n### Текст у слику (генерисање слике)\n\nПознати пружаоци усуге:\n* [OpenAi/LocalAI интеграција](https://apps.nextcloud.com/apps/integration_openai)\n* [Text2Image Стабилна Дифузија](https://apps.nextcloud.com/apps/text2image_stablediffusion)\n\n### Говор у текст (звучна транскрипција)\n\nПознати пружаоци услуге:\n* [OpenAi/LocalAI интеграција](https://apps.nextcloud.com/apps/integration_openai)\n* [Локални Whisper Говор-у-Текст](https://apps.nextcloud.com/apps/stt_whisper)",
    "Select which features you want to enable" : "Изаберите могућности које желите да укључите",
    "Top-right assistant" : "Асистент у горњем десном углу",
    "To be able to use this feature, please install at least one AI text processing provider." : "Да бисте могли да користите ову функцију, молимо вас да инсталирате барем један пружалац услуге AI обраде текста.",
    "AI text generation smart picker" : "Паметни бирач AI генерисања текста",
    "To enable this feature, please install an AI text processing provider for the free prompt task type." : "Да бисте укључили ову функцију, молимо вас да инсталирате било који пружалац услуге AI обраде текста за задатак типа слободног упита.",
    "Text-to-image smart picker" : "Паметни бирач претварања текста у слику",
    "To enable this feature, please install a text-to-image provider." : "Да бисте укључили ову функцију, молимо вас да инсталирате пружалац услуге претварања текста у слику.",
    "Speech-to-text smart picker" : "Паметни бирач претварања говора у текст",
    "To enable this feature, please install a speech-to-text provider." : "Да бисте укључили ову функцију, молимо вас да инсталирате пружалац услуге претварања говора у текст.",
    "Image storage" : "Складиштење слике",
    "Image generation idle time (days)" : "Време неактивности генерисане слике (дана)",
    "Days until generated images are deleted if they are not viewed" : "Број дана након којег се генерисане слике бришу ако нису погледане",
    "Assistant admin options saved" : "Сачуване су админ опције асистента",
    "Failed to save assistant admin options" : "Није успело чување админ опција асистента",
    "Writing style" : "Стил писања",
    "Choose file" : "Изаберите фајл",
    "Describe the writing style you want to use or supply an example document." : "Опишите стил који желите да користите или наведите документ за пример.",
    "Source material" : "Изворни материјал",
    "Describe what you want the document to be written on." : "Изаберите на чему желите да документ буде написан.",
    "Selective context" : "Контекст за разликовање",
    "Input" : "Унос",
    "Type some text" : "Откуцајте неки текст",
    "Choose a text file" : "Изаберите текст фајл",
    "Choose" : "Изаберите",
    "No file selected" : "Нисте изабрали фајл",
    "Unexpected response from text parser" : "Неочекивани одговор од парсера текста",
    "Could not parse file" : "Фајл не може да се парсира",
    "Close" : "Затвори",
    "Close Nextcloud Assistant" : "Затвори Nextcloud Асистент",
    "Output" : "Излаз",
    "This output was generated by AI. Make sure to double-check and adjust." : "Овај излаз је генерисала AI. Обавезно детаљно проверите и исправите.",
    "Copy output text to clipboard" : "Копира излазни текст у клипборд",
    "Copy output" : "Копирај излаз",
    "Reset the output value to the originally generated one" : "Ресетује излазну вредност на оригинално генерисану",
    "Reset" : "Ресетуј",
    "Text Generation" : "Генерисање текста",
    "Audio transcription" : "Звучни транскрипт",
    "Unknown Result Type" : "Непознати тип резултата",
    "Result could not be copied to clipboard" : "Резултат није могао да се копира у клипборд",
    "Back to the assistant" : "Назад на асистента",
    "Previous \"{taskTypeName}\" tasks" : "Претходни „{taskTypeName}” задаци",
    "Result" : "Резултат",
    "The task ran successfully but the result is identical to the input." : "Задатак се извршио исправно, али је резултат исти као и унос.",
    "The task ran successfully but the generated text is empty." : "Задатак се извршио исправно, али је генерисани текст празан.",
    "Show previous tasks" : "Прикажи претходне задатке",
    "Run a task" : "Покрени задатак",
    "Copy" : "Копирај",
    "Try again" : "Покушајте поново",
    "Send request" : "Пошаљи захтев",
    "Select Files/Folders" : "Изабери фајлове/фолдере",
    "Select Providers" : "Изабери пружаоце услуге",
    "Choose Files/Folders" : "Изабери фајлове/фолдере",
    "Clear Selection" : "Уклони избор",
    "Error fetching default provider key" : "Грешка приликом преузимања подразумеваног кључа пружаоца услуге",
    "Error fetching providers" : "Грешка приликом преузимања листе пружаоца услуге",
    "Text generation content" : "Садржај генерисања текста",
    "The text generation task was scheduled to run in the background." : "Задатак генерисања текста је заказан за извршавање у позадини.",
    "Estimated completion time: " : "Процењено време завршетка:",
    "This can take a while…" : "Ово може да потраје",
    "Some generations are still being processed in the background! Showing finished generations." : "Нека генерисања се још увек обрађују у позадини! Приказују се завршена генерисања.",
    "Loading generations…" : "Учитавају се генерисања",
    "Include prompt in the final result" : "Укључи захтев у коначни резултат",
    "Unexpected server response" : "Неочекивани одговор сервера",
    "The processing of generations failed." : "Није успео процес генерисања.",
    "The processing of some generations failed." : "Није успело обрађивање неких генерисања.",
    "Text generation error" : "Грешка генерисања текста",
    "Unknown text generation API error" : "Непозната грешка API генерисања текста",
    "Prompt" : "Захтев за унос",
    "Result {index}" : "Резултат {index}",
    "No provider found" : "Није пронађен ниједан пружалац услуге",
    "AI Providers need to be installed to use the Assistant" : "Да би се користио Асистент, морају да буду инсталирани пружаоци AI услуге",
    "tool" : "алат",
    "integration" : "интеграција",
    "complete AI documentation" : "комплетна AI документација",
    "AI provider apps can be found in the {toolLink} and {integrationLink} app settings sections." : "Апликације пружаоца AI услуге могу да се пронађу у одељцима подшавања апликација {toolLink} и {integrationLink}.",
    "You can also check the {aiAdminDocLink}" : "Такође можете да погледате и {aiAdminDocLink}",
    "AI image generation smart picker" : "Паметни бирач AI генерисања слике",
    "AI transcription smart picker" : "Паметни бирач AI транскрибовања",
    "No suitable providers are available. They must first be enabled by your administrator." : "Није доступан ниједан пригодни пружалац услуге. Ваш администратор најпре треба да их укључи.",
    "Assistant options saved" : "Сачуване су опције асистента",
    "Failed to save assistant options" : "Није успело чување опција асистента",
    "Getting results…" : "Преузимање резултата",
    "Run in the background" : "Покрени у позадини",
    "You will receive a notification when it has finished" : "Добићете обавештење када се извршавање заврши",
    "Your task has been scheduled" : "Ваш задатак је заказан",
    "Record Audio" : "Сними аудио",
    "Choose Audio File" : "Изаберите аудио фајл",
    "Reset recorded audio" : "Ресетуј снимљени аудио",
    "Start recording" : "Почни снимање",
    "Stop recording" : "Заустави снимање",
    "No audio file selected" : "Није изабран ниједан звучни фајл",
    "Selected Audio File:" : "Изабрани аудио фајл:",
    "Choose audio file in your storage" : "Изаберите аудио фајл из складишта",
    "Choose audio File" : "Изаберите аудио фајл",
    "Nothing yet" : "Још увек ништа",
    "You have not submitted any \"{taskTypeName}\" task yet" : "Још увек нисте предали ниједан \"{taskTypeName}\" задатак",
    "Copy result" : "Копирај резултат",
    "Cancel" : "Откажи",
    "Delete" : "Избриши",
    "Audio input" : "Аудио улаз",
    "Unknown input" : "Непознати улаз",
    "This task is scheduled" : "Овај задатак је заказан",
    "Running..." : "Извршава се…",
    "Failed" : "Није успело",
    "Unknown error" : "Непозната грешка",
    "Unknown status" : "Статус се не зна",
    "Succeeded" : "Успело",
    "Running" : "Трчање",
    "Scheduled" : "Заказано",
    "Task result was copied to clipboard" : "Резултат задатка је копиран у клипборд",
    "_{n} image has been generated_::_{n} images have been generated_" : ["Генерисана је {n} слика","Генерисане су {n} слике","Генерисано је {n} слика"],
    "_Generation of {n} image is scheduled_::_Generation of {n} images is scheduled_" : ["Заказано је генерисање {n} слике","Заказано је генерисање {n} слике","Заказано је генерисање {n} слика"],
    "Image generation" : "Генерисање слике",
    "Edit visible images" : "Уреди видљиве слике",
    "Click to toggle generation visibility" : "Кликните да промените видљивост слике",
    "Generated image" : "Генерисана слика",
    "This generation has no visible images" : "Ово генерисање нема видљивих слика",
    "Estimated generation time left: " : "Процењено преостало време генерисања:",
    "The image(s) will be displayed here once generated." : "Слика (или више њих) ће се приказати овде након што се генерише.",
    "This image generation was scheduled to run in the background." : "Овај задатак генерисања слике је заказан за извршавање у позадини.",
    "Image generation failed" : "Није успело генерисање слике",
    "Rate limit reached. Please try again later." : "Достигнуто је ограничење. Молимо вас да касније покушајте поново.",
    "Unknown server query error" : "Непозната грешка серверског упита",
    "Failed to get images" : "Није успело добијање слика",
    "Include the prompt in the result" : "Укључи захтев у резултату",
    "Number of results" : "Број резултата",
    "Failed to schedule your task" : "Није успело заказивање вашег задатка",
    "Enter your question or task here:" : "Унесите овде своје питање или задатак:",
    "Preview text generation by AI" : "Прегледај текст који је генерисала AI",
    "Notify when ready" : "Обавести када је спремно",
    "Submit text generated by AI" : "Предај текст који је генерисала AI",
    "Submit" : "Пошаљи",
    "Regenerate" : "Регенериши",
    "Preview" : "Преглед",
    "You will be notified when the text generation is ready." : "Бићете обавештени када генерисани текст буде спреман.",
    "Notify when ready error" : "Грешка при обавештавању о завршетку",
    "Unknown notify when ready error" : "Непозната грешка при обавештавању о завршетку",
    "The task could not be found. It may have been deleted." : "Није могао да се пронађе задатак. Можда је обрисан.",
    "Schedule Transcription" : "Закажи транскрипцију",
    "Successfully scheduled transcription" : "Транскрипција је успешно заказана",
    "Failed to schedule transcription" : "Није успело заказивање транскрипције",
    "Unknown API error" : "Непозната API грешка",
    "Preview image generation by AI" : "Прегледај слику коју је генерисала AI",
    "Submit image(s) generated by AI" : "Предај слику (или више њих) коју је генерисала AI",
    "Send" : "Пошаљи",
    "Show/hide advanced options" : "Прикажи/сакриј напредне опције",
    "Advanced options" : "Напредне опције",
    "A description of the image you want to generate" : "Опис слике коју желите да генеришете",
    "Image generation cancel error" : "Грешка приликом отказивања генерисања слике",
    "Unknown image generation cancel error" : "Непозната грешка приликом отказивања генерисања слике",
    "Unexpected response from server." : "Неочекивани одговор сервера.",
    "Image generation error" : "Грешка при генерисању слике",
    "Unknown image generation error" : "Непозната грешка генерисања слике",
    "You will be notified when the image generation is ready." : "Бићете обавештени када генерисање слике заврши посао.",
    "Copy the link to this generation to clipboard" : "Копирај у клипборд линк на ово генерисање",
    "Copy link to clipboard" : "Копирај везу у оставу",
    "Image link copied to clipboard" : "Линк слике је копиран у клипборд",
    "Image link could not be copied to clipboard" : "Линк слике није могао да се копира у клипборд",
    "Assistant error" : "Грешка Асистента",
    "This task does not exist or has been cleaned up" : "Овај задатак не постоји или је обрисан",
    "Failed to schedule the task" : "Није успело заказивање задатка"
},
"nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);");
