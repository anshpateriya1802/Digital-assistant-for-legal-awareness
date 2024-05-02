

const OpenAI = require("openai")

const openai = new OpenAI({
    apiKey:"your api key"
});

async function  handleRequestedPrompt(req,res){

    // console.log(req.body);

    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: req.body.prompt,
          },
        ],
  
        max_tokens: 400,
      });
      
    let data = response.choices[0].message.content;
    console.log(data);

    return res.send(data);

    
}

module.exports ={
    handleRequestedPrompt,
}