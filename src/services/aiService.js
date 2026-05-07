/* // aiService.js
export const getAIResponse = async (question) => {
  try {
    const response = await fetch("http://localhost:5000/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: question }],
        max_tokens: 150
      })
    });

    const data = await response.json();

    if (data.error) {
      console.error("AI Error:", data.error.message);
      return "Error: " + data.error.message;
    }

    return data.choices[0].message.content;
  } catch (error) {
    console.error("AI Service Error:", error);
    return "Sorry, I couldn't fetch an answer right now.";
  }
};
 */

export const getAIResponse = async (question) => {
  try {
    const response = await fetch("http://localhost:5000/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: [{ role: "user", content: question }]
      })
    });

    const data = await response.json();

    if (data.error) {
      return "Error: " + data.error;
    }

    return data.choices?.[0]?.message?.content || "No response from model.";
  } catch (error) {
    console.error("AI Service Error:", error);
    return "Sorry, I couldn't fetch an answer right now.";
  }
};


