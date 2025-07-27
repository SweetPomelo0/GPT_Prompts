import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { prompts } from "@/data/prompts";

// 读取md文件内容的函数
function readPromptContent(filename: string): string {
  try {
    const filePath = path.join(process.cwd(), "src/data/prompts", filename);
    return fs.readFileSync(filePath, "utf-8");
  } catch (error) {
    console.error(`Error reading prompt file ${filename}:`, error);
    return "";
  }
}

export async function GET() {
  try {
    // 为每个提示词加载对应的md文件内容
    const promptsWithContent = prompts.map((prompt) => {
      if (prompt.id === "2") {
        return {
          ...prompt,
          content: readPromptContent("ChineseWritingOptimization.md"),
        };
      }
      if (prompt.id === "3") {
        return {
          ...prompt,
          content: readPromptContent("SoftwareFunctionNaming.md"),
        };
      }
      if (prompt.id === "4") {
        return {
          ...prompt,
          content: readPromptContent("EnglishtoChinese.md"),
        };
      }
      if (prompt.id === "5") {
        return {
          ...prompt,
          content: readPromptContent("PromptWriting.md"),
        };
      }
      if (prompt.id === "6") {
        return {
          ...prompt,
          content: readPromptContent("ChinesetoEnglish.md"),
        };
      }
      if (prompt.id === "7") {
        return {
          ...prompt,
          content: readPromptContent("MJPromptGenerator.md"),
        };
      }
      if (prompt.id === "8") {
        return {
          ...prompt,
          content: readPromptContent("EnglishTranslation.md"),
        };
      }
      if (prompt.id === "9") {
        return {
          ...prompt,
          content: readPromptContent(
            "English-ChineseBidirectionalTranslator.md"
          ),
        };
      }
      if (prompt.id === "10") {
        return {
          ...prompt,
          content: readPromptContent("SummaryContent.md"),
        };
      }
      if (prompt.id === "11") {
        return {
          ...prompt,
          content: readPromptContent("CodeInterpretation.md"),
        };
      }
      if (prompt.id === "12") {
        return {
          ...prompt,
          content: readPromptContent("PromptEngineer.md"),
        };
      }
      if (prompt.id === "13") {
        return {
          ...prompt,
          content: readPromptContent("ArticlePolishing.md"),
        };
      }
      if (prompt.id === "14") {
        return {
          ...prompt,
          content: readPromptContent("JobDescriptionGenerator.md"),
        };
      }
      if (prompt.id === "15") {
        return {
          ...prompt,
          content: readPromptContent("JobDescriptionGeneration2.md"),
        };
      }
      if (prompt.id === "16") {
        return {
          ...prompt,
          content: readPromptContent("ResumeScreening.md"),
        };
      }
      if (prompt.id === "17") {
        return {
          ...prompt,
          content: readPromptContent("InterviewQuestions.md"),
        };
      }
      if (prompt.id === "18") {
        return {
          ...prompt,
          content: readPromptContent("SixThinkingHats.md"),
        };
      }
      if (prompt.id === "19") {
        return {
          ...prompt,
          content: readPromptContent("CompetitiveAnalysis.md"),
        };
      }
      if (prompt.id === "20") {
        return {
          ...prompt,
          content: readPromptContent("EmailOptimization.md"),
        };
      }
      if (prompt.id === "21") {
        return {
          ...prompt,
          content: readPromptContent("PromptJudger.md"),
        };
      }
      if (prompt.id === "22") {
        return {
          ...prompt,
          content: readPromptContent("TextLayout.md"),
        };
      }
      if (prompt.id === "23") {
        return {
          ...prompt,
          content: readPromptContent("ProductNaming.md"),
        };
      }
      return prompt;
    });

    return NextResponse.json(promptsWithContent);
  } catch (error) {
    console.error("Error loading prompts:", error);
    return NextResponse.json(
      { error: "Failed to load prompts" },
      { status: 500 }
    );
  }
}
