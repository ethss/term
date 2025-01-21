class Terminal {
  constructor() {
    this.outputDiv = document.getElementById('output');
    this.input = document.getElementById('commandInput');
    this.inputLine = document.querySelector('.input-line');
    
    // Hide input initially
    this.inputLine.style.display = 'none';
    
    this.setupDraggableTerminal();
    this.setup();
    this.initializeTerminal();
  }

  setupDraggableTerminal() {
    const terminal = document.querySelector('.terminal');
    const header = document.querySelector('.terminal-header');
    let isDragging = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;
    let xOffset = 0;
    let yOffset = 0;

    header.addEventListener('mousedown', startDragging);

    function startDragging(e) {
      if (!e.target.closest('.terminal-header') || e.target.closest('.control')) {
        return;
      }
      initialX = e.clientX - xOffset;
      initialY = e.clientY - yOffset;
      isDragging = true;
    }

    function drag(e) {
      if (isDragging) {
        e.preventDefault();
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;

        xOffset = currentX;
        yOffset = currentY;

        setTranslate(currentX, currentY, terminal);
      }
    }

    function stopDragging() {
      initialX = currentX;
      initialY = currentY;
      isDragging = false;
    }

    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDragging);

    function setTranslate(xPos, yPos, el) {
      el.style.transform = `translate(${xPos}px, ${yPos}px)`;
    }
  }

  setup() {
    this.input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const command = this.input.value.toLowerCase().trim();
        if (command) { 
          this.processCommand(command);
          this.input.value = '';
        }
      }
    });
  }

  async initializeTerminal() {
    this.outputDiv.innerHTML = '';
    
    await this.typeText(
      "INITIALIZING SECURE SYSTEMS...\n" +
      "■■■■■■■■■■■■■■■■■■■■■ 100%\n\n" +
      "ESTABLISHING SECURE CONNECTION...\n" +
      "ENCRYPTION PROTOCOLS: ACTIVE\n" +
      "FIREWALL STATUS: ENABLED\n" +
      "SYSTEM INTEGRITY: VERIFIED\n\n" +
      "SECURE TERMINAL v2.0.3 READY\n" +
      "Welcome to the secure communication terminal.\n\n" +
      "Available commands:\n" +
      "help     - Show available commands\n" +
      "clear    - Clear screen\n" +
      "email    - Show contact email\n" +
      "about    - About this terminal\n" +
      "time     - Show current time\n" +
      "contact  - Display contact methods\n" +
      "matrix   - Display matrix effect\n" +
      "system   - Show system status\n" +
      "Type a command to begin."
    );
    
    // Show input line after initialization
    this.inputLine.style.display = 'flex';
    this.input.focus();
  }

  async typeText(text, className = '') {
    const line = document.createElement('div');
    line.className = `output-line ${className}`;
    this.outputDiv.appendChild(line);
    
    for (let char of text) {
      line.textContent += char;
      // Auto scroll with each character
      this.outputDiv.scrollTop = this.outputDiv.scrollHeight;
      await new Promise(resolve => setTimeout(resolve, 10));
    }
    // Ensure final scroll
    this.outputDiv.scrollTop = this.outputDiv.scrollHeight;
  }

  async processCommand(command) {
    await this.typeText(`> ${command}`, 'command');

    switch(command) {
      case 'help':
        await this.showHelp();
        break;
      case 'clear':
        this.outputDiv.innerHTML = '';
        break;
      case 'email':
        await this.showEmail();
        break;
      case 'about':
        await this.showAbout();
        break;
      case 'time':
        await this.showTime();
        break;
      case 'contact':
        await this.showContact();
        break;
      case 'matrix':
        await this.showMatrix();
        break;
      case 'system':
        await this.showSystemStatus();
        break;
      default:
        await this.typeText('Command not recognized. Type "help" for available commands.', 'error');
    }
    
    this.outputDiv.scrollTop = this.outputDiv.scrollHeight;
  }

  async showHelp() {
    const commands = [
      'AVAILABLE COMMANDS:\n',
      'help     - Show this help message',
      'clear    - Clear terminal screen',
      'email    - Show contact email',
      'about    - About this terminal',
      'time     - Show current time',
      'contact  - Display contact methods',
      'matrix   - Display matrix effect',
      'system   - Show system status'
    ].join('\n');
    
    await this.typeText(commands);
  }

  async showEmail() {
    await this.typeText(
      '\nSECURE CONTACT EMAIL:\n' +
      '████████████████████\n' +
      'downfall@email.com\n' +
      '████████████████████\n',
      'success'
    );
  }

  async showAbout() {
    await this.typeText(
      '\nSECURE TERMINAL v2.0.3\n' +
      'Developed for secure communications\n' +
      'Build: 20231124\n' +
      'Encryption: AES-256\n' +
      'Status: OPERATIONAL\n'
    );
  }

  async showTime() {
    const now = new Date();
    await this.typeText(
      '\nCURRENT SYSTEM TIME:\n' +
      now.toLocaleString() + '\n' +
      'TIMEZONE: ' + Intl.DateTimeFormat().resolvedOptions().timeZone + '\n'
    );
  }

  async showContact() {
    await this.typeText(
      '\nCONTACT METHODS:\n' +
      '██████████████████████████████\n' +
      'EMAIL: downfall@email.com\n' +
      'SECURE LINE: ACTIVE\n' +
      'ENCRYPTION: ENABLED\n' +
      'STATUS: ONLINE\n' +
      '██████████████████████████████\n',
      'success'
    );
  }

  async showMatrix() {
    await this.typeText(
      '\nINITIATING MATRIX SEQUENCE...\n' +
      '██████████████████████\n' +
      '01001000 01000101 01001100 01001100 01001111\n' +
      '10101010 11001100 10101010 11001100\n' +
      'MATRIX ONLINE\n' +
      '██████████████████████\n',
      'success'
    );
  }

  async showSystemStatus() {
    const status = [
      '\nSYSTEM STATUS REPORT:',
      '━━━━━━━━━━━━━━━━━━━━━━━',
      'CPU: 3.6 GHz Quantum Processor',
      'MEMORY: 32TB Quantum RAM',
      'ENCRYPTION: AES-512 Military Grade',
      'FIREWALL: ACTIVE - 0 THREATS DETECTED',
      'NETWORK: SECURED VIA QUANTUM TUNNEL',
      'LOCATION: CLASSIFIED',
      'UPTIME: 1337 DAYS',
      '━━━━━━━━━━━━━━━━━━━━━━━'
    ].join('\n');
    
    await this.typeText(status, 'warning');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const terminal = new Terminal();
  
  const themeBtns = document.querySelectorAll('.theme-btn');
  
  themeBtns.forEach(btn => {
    const theme = btn.dataset.theme;
    setThemeButtonColor(btn, theme);
    
    btn.addEventListener('click', () => {
      document.body.dataset.theme = theme;
      themeBtns.forEach(btn => setThemeButtonColor(btn, btn.dataset.theme));
    });
  });
});

function setThemeButtonColor(btn, theme) {
  const themeStyles = {
    'pastel': ['#ffb5e8', '#b8c0ff'],
    'forest': ['#57b894', '#7ed957'],
    'cyber': ['#00ff9f', '#00b8ff'],
    'sunset': ['#ff7e5f', '#feb47b'],
    'galaxy': ['#8A2BE2', '#FF69B4']
  };
  
  const [primary, secondary] = themeStyles[theme];
  btn.style.background = `linear-gradient(45deg, ${primary}, ${secondary})`;
}
