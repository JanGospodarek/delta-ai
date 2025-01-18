const htmlAnalyzer = (html) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const questions = {};

  // Generate UUID (simple implementation)
  function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0,
          v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      },
    );
  }

  // Utility to get element position
  function getElementPosition(el) {
    const rect = el.getBoundingClientRect();
    return { top: rect.top + window.scrollY, left: rect.left + window.scrollX };
  }

  // Process all questions
  doc.querySelectorAll('.formulation').forEach((questionEl) => {
    const uuid = generateUUID();
    const position = getElementPosition(questionEl);

    // Handle True/False questions
    const radioOptions = questionEl.querySelectorAll(
      'input[type="radio"] + label',
    );
    if (radioOptions.length > 0) {
      const questionText =
        questionEl.querySelector('.qtext')?.textContent.trim() || '';
      const options = Array.from(radioOptions).map((el) =>
        el.textContent.trim(),
      );
      questions[uuid] = {
        question: questionText,
        answers: options,
        position: position,
      };
      return;
    }

    // Handle Selects questions
    const table = questionEl.querySelector('table');
    if (table) {
      const mainQuestionText =
        questionEl.querySelector('.qtext')?.textContent.trim() || '';
      const subQuestions = [];
      const rows = table.querySelectorAll('tr');

      rows.forEach((row) => {
        const subQuestionText =
          row.querySelector('td:first-child')?.textContent.trim() || '';
        const options = Array.from(row.querySelectorAll('select option'))
          .filter((option) => option.value)
          .map((option) => option.textContent.trim());

        if (subQuestionText && options.length > 0) {
          subQuestions.push({
            subQuestion: subQuestionText,
            availableAnswers: options,
          });
        }
      });

      if (subQuestions.length > 0) {
        questions[uuid] = {
          question: mainQuestionText,
          subQuestions: subQuestions,
          position: position,
        };
      }
      return;
    }

    // Handle Missing Words questions
    let questionParts = Array.from(questionEl.childNodes).map((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        // Preserve text nodes
        return node.textContent.trim();
      } else if (
        node.nodeType === Node.ELEMENT_NODE &&
        node.tagName === 'SPAN'
      ) {
        // Replace <span> elements containing input fields with "[Answer here]"
        return '[Answer here]';
      }
      return ''; // Ignore other elements
    });

    const questionText = questionParts.filter((part) => part).join(' ');
    if (questionText) {
      questions[uuid] = {
        question: questionText,
        answers: [], // No predefined answers
        position: position,
      };
    }
  });

  return questions;
};
export { htmlAnalyzer };
