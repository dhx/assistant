OC.L10N.register(
    "assistant",
    {
    "Failed to process prompt; unknown user" : "處理提示失敗；用戶不詳",
    "Failed to get prompt history; unknown user" : "取得提示歷史紀錄失敗；用戶不詳",
    "Failed to get outputs; unknown user" : "取得輸出失敗；用戶不詳",
    "Failed to cancel generation; unknown user" : "取消產生失敗；用戶不詳",
    "Some internal error occurred. Contact your sysadmin for more info." : "遇到一些內部錯誤。聯絡您的系統管理員以取得更多資訊。",
    "No Speech-to-Text provider found, install one from the app store to use this feature." : "找不到語音轉文字提供者，從應用程式商店安裝一個即可使用此功能。",
    "Audio file not found." : "找不到語音檔案。",
    "No permission to create recording file/directory, contact your sysadmin to resolve this issue." : "無權建立錄製檔案/目錄，聯絡您的系統管理員以姐此問題。",
    "Unknown error while retrieving prompt history." : "擷取提示歷史紀錄時發生不詳錯誤。",
    "Failed to set visibility of image files; unknown user" : "設定影像檔案能見度失敗；用戶不詳",
    "Failed to notify when ready; unknown user" : "就緒時通知失敗；用戶不詳",
    "Nextcloud Assistant" : "Nextcloud 小幫手",
    "AI context writer" : "人工智能上下文撰寫者",
    "Writing style: %1$s; Source material: %2$s" : "寫作風格：%1$s；來源資料：%2$s",
    "AI text generation" : "AI 文字產生",
    "AI image generation" : "人工智能圖像生成",
    "AI audio transcription" : "人工智能音訊轉錄",
    "Task for \"%1$s\" has finished" : "「%1$s」任務已結束",
    "\"%1$s\" task for \"%2$s\" has finished" : "「%2$s」的「%1$s」任務已結束",
    "Input: %1$s" : "輸入：%1$s",
    "Result: %1$s" : "結果：%1$s",
    "View results" : "檢視結果",
    "Task for \"%1$s\" has failed" : "「%1$s」任務失敗",
    "\"%1$s\" task for \"%2$s\" has failed" : "「%2$s」的「%1$s」任務失敗",
    "View task" : "檢視任務",
    "Generate text" : "生成文字",
    "Send a request to the Assistant, for example: write a first draft of a presentation, give me suggestions for a presentation, write a draft reply to my colleague." : "傳送一個要求給 Assistant，例如：書寫一份演示文稿的初稿，給我演示文稿的建議，書寫一份回覆給我的同事。",
    "Context write" : "寫作情境",
    "Writes text in a given style based on the provided source material." : "根據提供的來源資料以指定的風格編寫文字。",
    "Transcribe" : "抄錄",
    "Transcribe audio to text" : "抄錄語音為文字",
    "Generate image" : "産生圖像",
    "Generate an image from a text" : "從文字産生圖像",
    "Canceled by user" : "已被用戶取消",
    "FreePromptTaskType not available" : "FreePromptTaskType 不可用",
    "Failed to run or schedule a task" : "執行或安排任務失敗",
    "Failed to get prompt history" : "取得提示歷史紀錄失敗",
    "Generation not found" : "找不到產生",
    "Multiple tasks found" : "找到多個任務",
    "Transcript not found" : "找不到轉錄",
    "No text to image processing provider available" : "無可用的文字轉影像處理提供者",
    "Image request error" : "影像請求錯誤",
    "Image generation not found." : "找不到影像產生。",
    "Retrieving the image generation failed." : "檢索圖像産生無法。",
    "Image generation failed." : "影像產生失敗。",
    "Image file names could not be fetched from database" : "無法從資料庫擷取影像檔案名稱",
    "Image file not found in database" : "資料庫中找不到影像檔案",
    "Image file not found" : "找不到圖像檔案",
    "Artificial Intelligence" : "人工智能",
    "Process and transform text" : "處理與轉換文字",
    "This app brings a user interface to use the Nextcloud text processing feature.\n\nIt allows users to launch AI tasks, be notified when they finish and see the results.\nThe assistant also appears in others apps like Text to easily process parts of a document.\n\n### How to use it\n\nA new right header menu entry appears. Once clicked, the assistant is displayed and you can select and task type and\nset the input you want to process.\n\nThe task might run immediately or be scheduled depending on the time estimation given by the AI provider.\nOnce a task is scheduled, it will run as a background job. When it is finished, you will receive a notification\nfrom which the results can be displayed.\n\nOther apps can integrate with the assistant. For example, Text will display an inline button besides every paragraph\nto directly select a task type to process this paragraph. Selecting a task this way will open the assistant with the task\nbeing pre-selected and the input text set.\n\n## Features\n\nIn the assistant, the list of available tasks depends on the available providers installed via other apps.\nThis means you have complete freedom over which service/software will actually run your AI tasks.\n\n### Text processing providers\n\nSo far, the [Large language model](https://github.com/nextcloud/llm#readme)\nand the [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai) apps\ninclude text processing providers to:\n* Summarize\n* Extract topics\n* Generate a headline\n* Get an answer from a free prompt\n* Reformulate (OpenAi/LocalAi only)\n* Context writer: Generate text with a specified style. The style can be described or provided via an example text.\n\n### Text to image (Image generation)\n\nKnown providers:\n* [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai)\n* [Text2Image Stable Diffusion](https://apps.nextcloud.com/apps/text2image_stablediffusion)\n\n### Speech to text (Audio transcription)\n\nKnown providers:\n* [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai)\n* [Local Whisper Speech-To-Text](https://apps.nextcloud.com/apps/stt_whisper)" : "此應用程式為用戶界面帶來了Nextcloud文字處理功能。\n\n它允許用戶啟動AI任務，並在完成時收到通知並查看結果。\n助理還會出現在其他應用程式中，例如Text，以便輕鬆處理文件的部分。\n\n### 如何使用\n\n將出現一個新的右側標頭選單項目。點擊後，助理將顯示，您可以選擇任務類型並設置要處理的輸入。\n\n任務可能會立即運行，也可能會根據AI提供者給出的時間估計而被預先安排。一旦任務被預先安排，它將作為後台作業運行。當它完成時，您將收到一個通知，從中可以顯示結果。\n\n其他應用程式可以與助理進行整合。例如，Text將在每個段落旁邊顯示一個內聯按鈕，以直接選擇要處理此段落的任務類型。以這種方式選擇任務將打開助理，並預先選擇該任務並設置輸入文字。\n\n## 功能\n\n在助理中，可用任務的清單取決於通過其他應用程式安裝的可用提供者。\n這意味著您對實際運行AI任務的服務/軟件具有完全自由。\n\n### 文字處理提供者\n\n到目前為止，[大型語言模型](https://github.com/nextcloud/llm#readme)\n和[OpenAi/LocalAI整合](https://apps.nextcloud.com/apps/integration_openai)應用程式\n包括以下文字處理提供者：\n* 摘要\n* 提取主題\n* 生成標題\n* 從自由提示獲取答案\n* 重新表達（僅限OpenAi/LocalAi）\n* 上下文寫手：生成具有指定風格的文字。風格可以通過描述或通過示例文字提供。\n\n### 文字轉圖像（圖像生成）\n\n已知提供者：\n* [OpenAi/LocalAI整合](https://apps.nextcloud.com/apps/integration_openai)\n* [Text2Image穩定擴散](https://apps.nextcloud.com/apps/text2image_stablediffusion)\n\n### 語音轉文字（音頻抄錄）\n\n已知提供者：\n* [OpenAi/LocalAI整合](https://apps.nextcloud.com/apps/integration_openai)\n* [Local Whisper語音轉文字](https://apps.nextcloud.com/apps/stt_whisper)",
    "Select which features you want to enable" : "選取要啟用的功能",
    "Top-right assistant" : "右上角的小幫手",
    "AI text generation smart picker" : "人工智慧文字產生智慧型挑選程式",
    "To enable this feature, please install an AI text processing provider for the free prompt task type." : "要啟用此功能，請安裝免費提示任務類型的人工智慧文字處理提供者。",
    "Text-to-image smart picker" : "文字到圖像智慧選擇器",
    "To enable this feature, please install a text-to-image provider." : "請安裝一個文字到圖像提供者，以啟用此特點。",
    "Speech-to-text smart picker" : "語音轉文字智能選擇器",
    "To enable this feature, please install a speech-to-text provider." : "請安裝一個語音轉文字提供者，以啟用此特點。",
    "Image storage" : "圖像儲存",
    "Image generation idle time (days)" : "圖像産生閒置時間 (days)",
    "Days until generated images are deleted if they are not viewed" : "直至圖像産生後的天數，如果未被檢視，則將其刪除",
    "Assistant admin options saved" : "已儲存 Assistant 管理員選項",
    "Failed to save assistant admin options" : "儲存 Assistant 管理選項失敗",
    "Writing style" : "寫作風格",
    "Choose file" : "選擇檔案",
    "Describe the writing style you want to use or supply an example document." : "描述您想要使用的寫作風格或提供範例文件。",
    "Source material" : "來源資料",
    "Describe what you want the document to be written on." : "描述您想要撰寫文件的主題。",
    "Input" : "輸入",
    "Type some text" : "輸入一些文字",
    "Choose a text file" : "選擇文字檔案",
    "No file selected" : "未選擇任何檔案",
    "Unexpected response from text parser" : "文字解析程式回應異常。",
    "Could not parse file" : "無法分析檔案",
    "Close" : "關閉",
    "Close Nextcloud Assistant" : "關閉 Nextcloud 小幫手",
    "Output" : "輸出",
    "This output was generated by AI. Make sure to double-check and adjust." : "此輸出是由人工智慧產生的。請務必仔細檢查與調整。",
    "Copy output text to clipboard" : "複製輸出文字到剪貼簿",
    "Copy output" : "複製輸出",
    "Reset the output value to the originally generated one" : "重設輸出值為最初產生的值",
    "Reset" : "重設",
    "Text Generation" : "產生文字",
    "Audio transcription" : "音訊轉錄",
    "Unknown Result Type" : "結果類型不詳",
    "Result could not be copied to clipboard" : "結果無法複製到剪貼板。",
    "Previous \"{taskTypeName}\" tasks" : "先前的「{taskTypeName}」任務",
    "Result" : "結果",
    "The task ran successfully but the result is identical to the input." : "任務成功運行，但結果與輸入相同。",
    "The task ran successfully but the generated text is empty." : "任務成功運行，但生成的文字是空的。",
    "Show previous tasks" : "顯示先前的任務",
    "Run a task" : "執行任務",
    "Copy" : "複製",
    "Try again" : "重试",
    "Send request" : "傳送請求",
    "Text generation content" : "文字產生內容",
    "The text generation task was scheduled to run in the background." : "文字產生任務已安排於背景執行。",
    "Estimated completion time: " : "預計補齊時間：",
    "This can take a while…" : "這可能需要一段時間…",
    "Some generations are still being processed in the background! Showing finished generations." : "部份產生仍在背景處理！顯示已完成的產生。",
    "Loading generations…" : "正在載入產生…",
    "Include prompt in the final result" : "在最終結果中包含提示詞",
    "Unexpected server response" : "未預期的伺服器回應",
    "The processing of generations failed." : "產生處理失敗。",
    "The processing of some generations failed." : "部份產生處理失敗。",
    "Text generation error" : "文字產生錯誤",
    "Unknown text generation API error" : "不詳的文字產生 API 錯誤",
    "Prompt" : "提示詞",
    "Result {index}" : "結果 {index}",
    "AI image generation smart picker" : "人工智慧圖像產生智慧型挑選程式",
    "AI transcription smart picker" : "人工智能轉錄智能挑選程式",
    "No suitable providers are available. They must first be enabled by your administrator." : "沒有可用的合適提供者。它們必須先由您的管理員啟用。",
    "Assistant options saved" : "已儲存 Assistant 選項",
    "Failed to save assistant options" : "儲存 Assistant 選項失敗",
    "Getting results…" : "正在取得結果…",
    "Run in the background" : "背景執行",
    "You will receive a notification when it has finished" : "完成後，您將會收到通知",
    "Your task has been scheduled" : "您的任務已排程",
    "Record Audio" : "錄製語音",
    "Choose Audio File" : "選擇語音檔案",
    "Reset recorded audio" : "重置錄製的音頻",
    "Start recording" : "開始錄音",
    "Stop recording" : "停止錄音",
    "No audio file selected" : "未選語音檔案",
    "Selected Audio File:" : "所選的語音檔案：",
    "Choose audio file in your storage" : "選擇您的儲存中的語音檔案",
    "Choose audio File" : "選擇語音檔案",
    "Copy result" : "複製結果",
    "Cancel" : "取消",
    "Delete" : "刪除",
    "Audio input" : "語音輸入",
    "Unknown input" : "不詳輸入",
    "This task is scheduled" : "此任務已排程",
    "Running..." : "正在執行 …",
    "Failed" : "失敗了",
    "Unknown error" : "錯誤不詳",
    "Unknown status" : "狀態不詳",
    "Succeeded" : "成功了",
    "Running" : "跑步",
    "Scheduled" : "預定",
    "Task result was copied to clipboard" : "任務結果已複製到剪貼簿",
    "_{n} image has been generated_::_{n} images have been generated_" : ["已產生了 {n} 個圖像"],
    "_Generation of {n} image is scheduled_::_Generation of {n} images is scheduled_" : ["已排程產生 {n} 個圖像"],
    "Image generation" : "圖像產生",
    "Edit visible images" : "編輯可見的影像",
    "Click to toggle generation visibility" : "點擊切換產生能見度",
    "Generated image" : "已產生的圖像",
    "This generation has no visible images" : "這次產生沒有可見的影像",
    "Estimated generation time left: " : "預計剩餘產生時間：",
    "The image(s) will be displayed here once generated." : "圖像將在此處産生後顯示。",
    "This image generation was scheduled to run in the background." : "此圖像産生已預先安排好的在背景中運行。",
    "Image generation failed" : "影像產生失敗",
    "Rate limit reached. Please try again later." : "已達速率限制。請稍後再試。",
    "Unknown server query error" : "不詳的伺服器查詢錯誤",
    "Failed to get images" : "無法取得圖像",
    "Include the prompt in the result" : "在結果中包含提示詞",
    "Number of results" : "結果數目",
    "Enter your question or task here:" : "在此輸入您的問題或任務：",
    "Preview text generation by AI" : "預覽人工智慧產生的文字",
    "Notify when ready" : "就緒時通知",
    "Submit text generated by AI" : "遞交人工智慧產生的文字",
    "Submit" : "遞交",
    "Regenerate" : "重新生成",
    "Preview" : "預覽",
    "You will be notified when the text generation is ready." : "文字產生就緒時將會通知您。",
    "Notify when ready error" : "就緒時通知錯誤",
    "Unknown notify when ready error" : "不詳的就緒時通知錯誤",
    "The task could not be found. It may have been deleted." : "找不到所需的任務。可能已被刪除。",
    "Schedule Transcription" : "安排轉錄",
    "Successfully scheduled transcription" : "成功安排轉錄",
    "Failed to schedule transcription" : "安排轉錄失敗",
    "Unknown API error" : "不詳的 API 錯誤",
    "Failed to schedule your task" : "無法安排您的任務",
    "Preview image generation by AI" : "預覽人工智慧影像產生",
    "Submit image(s) generated by AI" : "遞交由人工智慧產生的影像",
    "Send" : "傳送",
    "Show/hide advanced options" : "顯示/隱藏進階選項",
    "Advanced options" : "進階選項",
    "A description of the image you want to generate" : "描述您想要産生的圖像",
    "Image generation cancel error" : "影像產生取消錯誤",
    "Unknown image generation cancel error" : "不詳的影像產生取消錯誤",
    "Unexpected response from server." : "伺服器回應異常。",
    "Image generation error" : "影像產生錯誤",
    "Unknown image generation error" : "不詳的影像產生錯誤",
    "You will be notified when the image generation is ready." : "影像產生就緒時將會通知您。",
    "Copy the link to this generation to clipboard" : "複製此産生的連結到剪貼板",
    "Copy link to clipboard" : "複製連結到剪貼板",
    "Image link copied to clipboard" : "圖像連結已複製到剪貼板",
    "Image link could not be copied to clipboard" : "圖像連結無法複製到剪貼板",
    "Assistant error" : "Assistant 錯誤",
    "This task does not exist or has been cleaned up" : "任務不存在或已被刪除",
    "Failed to schedule the task" : "無法安排任務"
},
"nplurals=1; plural=0;");
