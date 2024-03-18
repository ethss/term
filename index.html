async function typeText(text, delay, targetElement) {
  return new Promise(resolve => {
      let index = 0;
      const intervalId = setInterval(() => {
          targetElement.textContent += text[index++];
          if (index === text.length) {
              clearInterval(intervalId);
              resolve();
          }
      }, delay);
  });
}

async function displayText(targetElement, messages) {
  for (const message of messages) {
      await typeText(message, 50, targetElement);
  }
}

async function startTerminal() {
  const initialText = document.getElementById('initialText');
  await displayText(initialText, [
      "Welcome to the Hacker Terminal!\n",
      "Initializing system...\n",
      "Accessing secure servers...\n",
      "Securing connection...\n",
      "Ready.\n\n",
      " ________________________________________\n",
      "< Hacker Mode Activated >\n",
      " ----------------------------------------\n"
  ]);

  document.getElementById('infoButton1').style.display = 'block';
  document.getElementById('infoButton2').style.display = 'block';
  document.getElementById('jokeButton').style.display = 'block';
}

startTerminal();

async function addTextToTerminal(text) {
  const terminal = document.getElementById('terminal');
  const pre = document.createElement('pre');
  pre.textContent = text;
  terminal.appendChild(pre);
  terminal.scrollTop = terminal.scrollHeight;
}

function addEventListeners() {
  document.getElementById('infoButton1').addEventListener('click', async function() {
      const response = await fetch('https://api.coinbase.com/v2/prices/LTC-USD/spot');
      const data = await response.json();
      const ltcPrice = data.data.amount;
      await addTextToTerminal(`Litecoin Price: $${ltcPrice}\n`);
  });

  document.getElementById('infoButton2').addEventListener('click', async function() {
      const pythonCodes = [
          "print('Hello, world!')",
          "for i in range(5):\n    print(i)",
          "def factorial(n):\n    if n == 0:\n        return 1\n    else:\n        return n * factorial(n-1)"
          // Add more Python code snippets as needed
      ];
      const randomCode = pythonCodes[Math.floor(Math.random() * pythonCodes.length)];
      await addTextToTerminal(`Random Python Code:\n${randomCode}\n`);
  });

  document.getElementById('tosButton').addEventListener('click', async function() {
      await displayText(document.getElementById('terminal'), [
          "\n",
          "$ 1. NO SNITCHING\n",
          "Snitching results in permanent blacklist from all services.\n",
          "\n",
          "$ 2. No Pedo Activity\n",
          "\n",
          "$ 3. No Abuse of Services\n",
          "\n",
          "$ Love\n"
      ]);
  });

  document.getElementById('jokeButton').addEventListener('click', async function() {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      const data = await response.json();
      const setup = data.setup;
      const punchline = data.punchline;
      await addTextToTerminal(`\nJoke:\n${setup}\n${punchline}\n`);
  });
}

addEventListeners();
