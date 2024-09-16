// Array of 30 tasks
const tasks = [
    { task: "Day 1: Understanding Basic Electronics Components", completed: false },
    { task: "Day 2: Circuit Diagrams and Breadboarding", completed: false },
    { task: "Day 3: Soldering Techniques (Optional)", completed: false },
    { task: "Day 4: Introduction to Programming (Python or Arduino)", completed: false },
    { task: "Day 5: Working with Sensors (Arduino or Raspberry Pi)", completed: false },
    { task: "Day 6: Building an Interactive Circuit", completed: false },
    { task: "Day 7: Review and Build a Simple Project", completed: false },
    { task: "Day 8: Introduction to Microcontrollers (Arduino)", completed: false },
    { task: "Day 9: Programming Variables and Loops", completed: false },
    { task: "Day 10: Controlling LEDs and Motors with Arduino", completed: false },
    { task: "Day 11: Introduction to Resistors and Voltage Dividers", completed: false },
    { task: "Day 12: Basic Circuit Design using Fritzing", completed: false },
    { task: "Day 13: Building Your First Custom Circuit", completed: false },
    { task: "Day 14: Exploring Capacitors and Energy Storage", completed: false },
    { task: "Day 15: Programming Conditionals in Python", completed: false },
    { task: "Day 16: Sensor Integration with Arduino (Light Sensor)", completed: false },
    { task: "Day 17: Introduction to Breadboards and Prototyping", completed: false },
    { task: "Day 18: Understanding Current and Power in Circuits", completed: false },
    { task: "Day 19: Advanced Circuit Diagrams and Symbols", completed: false },
    { task: "Day 20: Introduction to Multimeters and Measurements", completed: false },
    { task: "Day 21: Review and Build a Simple Project", completed: false },
    { task: "Day 22: Introduction to Logic Gates and Binary Systems", completed: false },
    { task: "Day 23: Building a Simple Logic Circuit (AND, OR, NOT)", completed: false },
    { task: "Day 24: Working with Relays and Switches", completed: false },
    { task: "Day 25: Basic Python Functions and Modular Programming", completed: false },
    { task: "Day 26: Introduction to Transistors and Amplification", completed: false },
    { task: "Day 27: Working with DC Motors and Control Circuits", completed: false },
    { task: "Day 28: Introduction to Serial Communication (UART)", completed: false },
    { task: "Day 29: Advanced Breadboarding and Prototyping", completed: false },
    { task: "Day 30: Building an Arduino-Controlled Motor Project", completed: false },
];

// Load saved progress from localStorage
const savedProgress = JSON.parse(localStorage.getItem('taskProgress'));
if (savedProgress) {
    tasks.forEach((task, index) => {
        tasks[index].completed = savedProgress[index].completed;
    });
}

// Function to render tasks and update progress bar
function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = ''; // Clear task list

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task.task;

        if (task.completed) {
            li.classList.add('completed');
        }

        // Button to toggle completion
        const button = document.createElement('button');
        button.textContent = task.completed ? 'Undo' : 'Complete';
        button.addEventListener('click', () => toggleTaskCompletion(index));
        li.appendChild(button);

        taskList.appendChild(li);
    });

    updateProgress();
}

// Toggle completion of tasks
function toggleTaskCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    saveProgress(); // Save progress after toggling
    renderTasks();  // Re-render the tasks
}

// Update the progress bar
function updateProgress() {
    const completedTasks = tasks.filter(task => task.completed).length;
    const progressPercent = (completedTasks / tasks.length) * 100;
    const progressBar = document.getElementById('progress');
    progressBar.style.width = `${progressPercent}%`;
}

// Save progress to localStorage
function saveProgress() {
    localStorage.setItem('taskProgress', JSON.stringify(tasks));
}

// Initial render
document.addEventListener('DOMContentLoaded', renderTasks);
