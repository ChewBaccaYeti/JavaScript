/**
 * LEVEL 1: TASK MANAGER - Basic Implementation
 * =============================================
 *
 * Focus: DOM manipulation, events, arrays, functions
 *
 * TODO List (in order):
 * 1. Create tasks array
 * 2. Implement addTask() function
 * 3. Implement renderTasks() function
 * 4. Connect button click to addTask()
 * 5. Show task count
 */

// ============================================
// STATE (Data)
// ============================================

let tasks = [];
let nextId = 1;

// TODO: Initialize with 2-3 sample tasks for testing
// Example: { id: 1, title: "Learn JavaScript", done: false }

// ============================================
// FUNCTIONS
// ============================================

/**
 * Add a new task to the tasks array
 *
 * TODO: Implement this function
 * - Get title from input element
 * - Validate: title cannot be empty
 * - Create task object with: id, title, done: false
 * - Add to tasks array
 * - Clear the input
 * - Call renderTasks()
 *
 * Hints:
 * - document.querySelector('#taskInput')
 * - element.value to get input value
 * - element.value = '' to clear it
 * - tasks.push(object) to add to array
 */
function addTask(title) {
    // your code here
    console.log('addTask() not implemented yet');
}

/**
 * Render all tasks in the DOM
 *
 * TODO: Implement this function
 * - Get the task list element (#taskList)
 * - Clear its innerHTML (or use textContent = '')
 * - Loop through tasks array (for, forEach, or map)
 * - For each task, create a <li> element with:
 *   - task.id as a unique identifier (use data-id attribute)
 *   - task.title as text content
 *   - A simple display (will add buttons later)
 * - Append each <li> to the list
 * - Call updateTaskCount()
 *
 * Hints:
 * - ul.innerHTML = '' clears the list
 * - Create elements: document.createElement('li')
 * - Set text: li.textContent = task.title
 * - Set attributes: li.setAttribute('data-id', task.id)
 * - Or use: li.dataset.id = task.id
 * - Add to DOM: ul.appendChild(li)
 *
 * Alternative (using innerHTML string):
 * let html = '';
 * tasks.forEach(task => {
 *   html += `<li data-id="${task.id}">${task.title}</li>`;
 * });
 * ul.innerHTML = html;
 */
function renderTasks() {
    // your code here
    console.log('renderTasks() not implemented yet');
}

/**
 * Update the task count display
 *
 * TODO: Implement this function
 * - Get the #taskCount element
 * - Calculate total tasks: tasks.length
 * - Set the text: "Total: X"
 */
function updateTaskCount() {
    // your code here
    console.log('updateTaskCount() not implemented yet');
}

// ============================================
// EVENT LISTENERS
// ============================================

/**
 * TODO: Connect the "Add" button to addTask
 *
 * Hints:
 * - Get button: document.querySelector('#addBtn')
 * - Add listener: button.addEventListener('click', ...)
 * - Inside listener, call addTask(getInputValue)
 *
 * OR on input keypress:
 * - input.addEventListener('keypress', (e) => {
 *     if (e.key === 'Enter') addTask(...);
 *   });
 */

// your code here

// ============================================
// INITIALIZATION
// ============================================

/**
 * TODO: Initialize the app when page loads
 *
 * Options:
 * 1. Call renderTasks() at the end of this file
 * 2. Or wrap in DOMContentLoaded event:
 *    window.addEventListener('DOMContentLoaded', () => { ... });
 */

// your code here

// ============================================
// TESTING
// ============================================

// Uncomment to test your functions:
// console.log('Initial tasks:', tasks);
// addTask('Test task 1');
// addTask('Test task 2');
// console.log('After adding:', tasks);
// renderTasks();
