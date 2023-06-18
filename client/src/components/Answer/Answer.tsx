import { useState } from "react";

interface AnswerProps {
  answer_id: number;
  question_id: number;
  username: string;
  content: string;
  created_at: string;
  modified_at: string;
}

function Answer() {
  const initialState: AnswerProps = {
    answer_id: 0,
    question_id: 0,
    username: "",
    content: "",
    created_at: "",
    modified_at: "",
  };

  const [answerData, setAnswerDate] = useState<AnswerProps>(initialState);

  return (
    <section>
      <header>
        <div>0 Answer</div>
        <div>
          <label htmlFor="sort_answer">Sorted by:</label>
          <select name="sort" id="sort_answer">
            <option value="score" selected>
              Highest Score (default)
            </option>
            <option value="trend">Trending (recent votes count more)</option>
            <option value="modified">Date modified (newest first)</option>
            <option value="created">Date created (oldest first)</option>
          </select>
        </div>
      </header>
    </section>
  );
}

export default Answer;
