// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"scripts/index.js":[function(require,module,exports) {
var modal = document.getElementById("add_todo_modal");
var closeButton = document.querySelector("#add_todo_modal .close");
var saveButton = document.getElementById("saveChanges");
var cancelButton = document.getElementById("cancelChanges");
var modalTitleInput = document.getElementById("modalTitle");
var modalDescriptionTextarea = document.getElementById("modalDescription");
var todosContainer = document.querySelector(".new_todos_space");
var inProgressContainer = document.querySelector(".in_progress_space");
var doneContainer = document.querySelector(".done_space");
var deleteAllCard = document.querySelector(".delete_all_button");
function openModal() {
  modal.style.display = "flex";
}
function closeModal() {
  modal.style.display = "none";
}

// Счётчики карточек
function updateCounters() {
  var newTodosCounter = document.querySelector(".new_todos_counter");
  var inProgressCounter = document.querySelector(".in_progress_counter");
  var doneCounter = document.querySelector(".done_counter");
  newTodosCounter.textContent = "TODO: ".concat(todosContainer.childElementCount);
  inProgressCounter.textContent = "IN PROGRESS: ".concat(inProgressContainer.childElementCount);
  doneCounter.textContent = "DONE: ".concat(doneContainer.childElementCount);
}

// Функция для добавления новой карточки
function addTodo() {
  openModal();
  var title = modalTitleInput.value;
  var description = modalDescriptionTextarea.value;
  var carddate = NewCardClock();
  if (title && description) {
    var newTodoCard = document.createElement("div");
    newTodoCard.classList.add("column_new_todos_card");
    var titleElement = document.createElement("div");
    titleElement.classList.add("title");
    titleElement.textContent = title;
    var descriptionElement = document.createElement("div");
    descriptionElement.classList.add("description");
    descriptionElement.textContent = description;
    var timeElement = document.createElement("div");
    timeElement.classList.add("time");
    timeElement.textContent = carddate;

    // const selectElement = document.createElement("div");
    // selectElement.classList.add("select");
    // selectElement.textContent = user;

    var editButton = createEditButton(newTodoCard);
    var deleteButton = createDeleteButton(newTodoCard);
    var inprogressButton = createMoveInProgressButton(newTodoCard);
    newTodoCard.appendChild(titleElement);
    newTodoCard.appendChild(timeElement);
    newTodoCard.appendChild(descriptionElement);
    // newTodoCard.appendChild(selectElement);
    newTodoCard.appendChild(editButton);
    newTodoCard.appendChild(deleteButton);
    newTodoCard.appendChild(inprogressButton);
    NewCardClock(timeElement);
    todosContainer.appendChild(newTodoCard);
    modalTitleInput.value = "";
    modalDescriptionTextarea.value = "";
    updateCounters();
  } else {
    alert("Пожалуйста, введите данные в оба поля.");
  }
  closeModal();
  saveToLocalStorage();
}
function NewCardClock() {
  var carddate = new Date();
  var hours = carddate.getHours().toString().padStart(2, '0');
  var minutes = carddate.getMinutes().toString().padStart(2, '0');
  var seconds = carddate.getSeconds().toString().padStart(2, '0');
  return "".concat(hours, ":").concat(minutes, ":").concat(seconds);
}
function saveToLocalStorage() {
  var todos = [];
  var cards = todosContainer.querySelectorAll(".column_new_todos_card");
  cards.forEach(function (card) {
    var title = card.querySelector(".title").textContent;
    var description = card.querySelector(".description").textContent;
    var time = card.querySelector(".time").textContent;
    todos.push({
      title: title,
      description: description,
      time: time
    });
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}
function loadFromLocalStorage() {
  var storedTodos = localStorage.getItem("todos");
  if (storedTodos) {
    var parsedTodos = JSON.parse(storedTodos);
    parsedTodos.forEach(function (todo) {
      var newTodoCard = document.createElement("div");
      newTodoCard.classList.add("column_new_todos_card");
      var titleElement = document.createElement("div");
      titleElement.classList.add("title");
      titleElement.textContent = todo.title;
      var timeElement = document.createElement("div");
      timeElement.classList.add("time");
      timeElement.textContent = todo.time;
      var descriptionElement = document.createElement("div");
      descriptionElement.classList.add("description");
      descriptionElement.textContent = todo.description;
      var editButton = createEditButton(newTodoCard);
      var deleteButton = createDeleteButton(newTodoCard);
      var inprogressButton = createMoveInProgressButton(newTodoCard);
      newTodoCard.appendChild(titleElement);
      newTodoCard.appendChild(timeElement);
      newTodoCard.appendChild(descriptionElement);
      newTodoCard.appendChild(editButton);
      newTodoCard.appendChild(deleteButton);
      newTodoCard.appendChild(inprogressButton);
      todosContainer.appendChild(newTodoCard);
    });
    updateCounters();
  }
}
function handleSaveChanges() {
  saveButton.addEventListener("click", saveToLocalStorage);
}
function initApp() {
  loadFromLocalStorage();
  handleSaveChanges();
}
initApp();

//кнопка удаления карточки
function createDeleteButton(card) {
  var deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete");
  deleteButton.addEventListener("click", function () {
    deleteCard(card);
    saveToLocalStorage();
  });
  function deleteCard(card) {
    card.remove();
    updateCounters();
  }
  return deleteButton;
}

// Функция создания кнопки перемещения карточки в соседнюю колонну
function createMoveInProgressButton(card) {
  var moveButton = document.createElement("button");
  moveButton.textContent = " > ";
  moveButton.classList.add("move_to_in_progress");
  moveButton.addEventListener("click", function () {
    moveToInProgress(card);
  });
  return moveButton;
}
function moveToInProgress(card) {
  var title = card.querySelector(".title").textContent;
  var description = card.querySelector(".description").textContent;
  var time = card.querySelector(".time").textContent;
  var newInProgressCard = document.createElement("div");
  newInProgressCard.classList.add("column_in_progress_card");
  var inProgressTitleElement = document.createElement("div");
  inProgressTitleElement.classList.add("title");
  inProgressTitleElement.textContent = title;
  var inProgressDescriptionElement = document.createElement("div");
  inProgressDescriptionElement.classList.add("description");
  inProgressDescriptionElement.textContent = description;
  var inProgressTimeElement = document.createElement("div");
  inProgressTimeElement.classList.add("time");
  inProgressTimeElement.textContent = time;
  var backButton = createBackButton(newInProgressCard);
  var doneButton = createDoneButton(newInProgressCard);
  newInProgressCard.appendChild(inProgressTitleElement);
  newInProgressCard.appendChild(inProgressTimeElement);
  newInProgressCard.appendChild(inProgressDescriptionElement);
  newInProgressCard.appendChild(backButton);
  newInProgressCard.appendChild(doneButton);
  inProgressContainer.appendChild(newInProgressCard);
  card.remove();
  saveToLocalStorage();
  updateCounters();
}

// Функция создания кнопки "Назад" для карточки
function createBackButton(card) {
  var backButton = document.createElement("button");
  backButton.textContent = "BACK";
  backButton.classList.add("back");
  backButton.addEventListener("click", function () {
    moveToNew(card);
  });
  return backButton;
}
function moveToNew(card) {
  var title = card.querySelector(".title").textContent;
  var description = card.querySelector(".description").textContent;
  var time = card.querySelector(".time").textContent;
  var newTodoCard = document.createElement("div");
  newTodoCard.classList.add("column_new_todos_card");
  var titleElement = document.createElement("div");
  titleElement.classList = "title";
  titleElement.textContent = title;
  var timeElement = document.createElement("div");
  timeElement.classList.add("time");
  timeElement.textContent = time;
  var descriptionElement = document.createElement("div");
  descriptionElement.classList = "description";
  descriptionElement.textContent = description;
  var editButton = createEditButton(newTodoCard);
  var deleteButton = createDeleteButton(newTodoCard);
  var inprogressButton = createMoveInProgressButton(newTodoCard);
  newTodoCard.appendChild(titleElement);
  newTodoCard.appendChild(timeElement);
  newTodoCard.appendChild(descriptionElement);
  newTodoCard.appendChild(editButton);
  newTodoCard.appendChild(deleteButton);
  newTodoCard.appendChild(inprogressButton);
  todosContainer.appendChild(newTodoCard);
  inProgressContainer.removeChild(card);
  updateCounters();
}

// Функция создания кнопки завершено для карточки
function createDoneButton(card) {
  var doneButton = document.createElement("button");
  doneButton.textContent = "DONE";
  doneButton.classList.add("done");
  doneButton.addEventListener("click", function () {
    moveToDone(card);
  });
  return doneButton;
}
function moveToDone(card) {
  var title = card.querySelector(".title").textContent;
  var description = card.querySelector(".description").textContent;
  var time = card.querySelector(".time").textContent;
  var newDoneCard = document.createElement("div");
  newDoneCard.classList.add("done_card");
  var doneTitleElement = document.createElement("div");
  doneTitleElement.classList.add("title");
  doneTitleElement.textContent = title;
  var donetimeElement = document.createElement("div");
  donetimeElement.classList.add("time");
  donetimeElement.textContent = time;
  var doneDescriptionElement = document.createElement("div");
  doneDescriptionElement.classList.add("description");
  doneDescriptionElement.textContent = description;
  newDoneCard.appendChild(doneTitleElement);
  newDoneCard.appendChild(donetimeElement);
  newDoneCard.appendChild(doneDescriptionElement);
  doneContainer.appendChild(newDoneCard);
  inProgressContainer.removeChild(card);
  updateCounters();
}
function checkInProgressCount() {
  var inProgressContainer = document.querySelector(".in_progress_space");
  if (inProgressContainer.childElementCount > 6) {
    alert("Слишком много дел в процессе!");
  }
}
var observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    if (mutation.type === 'childList' && mutation.target === inProgressContainer) {
      checkInProgressCount();
    }
  });
});
observer.observe(inProgressContainer, {
  childList: true
});
deleteAllCard.addEventListener('click', function () {
  if (confirm("Вы уверены?")) {
    clearCards(doneContainer);
  }
});
function clearCards(doneContainer) {
  while (doneContainer.childElementCount > 0) {
    doneContainer.removeChild(doneContainer.lastChild);
    updateCounters();
    saveToLocalStorage();
  }
}

// Редактирование карточки
function openEditModal(card) {
  var title = card.querySelector(".title").textContent;
  var description = card.querySelector(".description").textContent;
  modalTitleInput.value = title;
  modalDescriptionTextarea.value = description;
  openModal();
}
function updateCard(card, newTitle, newDescription) {
  var titleElement = card.querySelector(".title");
  var descriptionElement = card.querySelector(".description");
  titleElement.textContent = newTitle;
  descriptionElement.textContent = newDescription;
  saveToLocalStorage();
}
function handleEditButton(card) {
  var title = card.querySelector(".title").textContent;
  var description = card.querySelector(".description").textContent;
  openEditModal(card);
  modal.addEventListener("click", function (event) {
    if (event.target.id === "saveChanges") {
      var newTitle = modalTitleInput.value;
      var newDescription = modalDescriptionTextarea.value;
      updateCard(card, newTitle, newDescription);
      closeModal();
    }
    saveToLocalStorage();
  });
}
todosContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("edit")) {
    handleEditButton(event.target.parentNode);
  }
});
function createEditButton(card) {
  var editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.classList.add("edit");
  editButton.addEventListener("click", function () {
    handleEditButton(card);
  });
  return editButton;
}

// открывает модальное окно при клике
document.querySelector(".new_todos_add_button").addEventListener("click", openModal);

// сохраняет карточку при клике
saveButton.addEventListener("click", addTodo, saveToLocalStorage);

// Кнопка отмена при клике
cancelButton.addEventListener("click", closeModal);

// Закрытие модального окна при клике
closeButton.addEventListener("click", closeModal);
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52564" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","scripts/index.js"], null)
//# sourceMappingURL=/scripts.bcf3243b.js.map