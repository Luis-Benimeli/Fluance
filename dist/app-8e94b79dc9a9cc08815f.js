webpackJsonp([1],[function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.SHOW_ALL="show_all",t.SHOW_COMPLETED="show_completed",t.SHOW_ACTIVE="show_active"},,function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();t.initialTodo={text:"Use AngularJS",completed:!1,id:0},t.TodoService=function(){function e(){n(this,e)}return o(e,[{key:"addTodo",value:function(e,t){return[{id:0===t.length?0:t[0].id+1,completed:!1,text:e}].concat(t)}},{key:"completeTodo",value:function(e,t){return t.map(function(t){return t.id===e?Object.assign({},t,{completed:!t.completed}):t})}},{key:"deleteTodo",value:function(e,t){return t.filter(function(t){return t.id!==e})}},{key:"editTodo",value:function(e,t,n){return n.map(function(n){return n.id===e?Object.assign({},n,{text:t}):n})}},{key:"completeAll",value:function(e){var t=e.every(function(e){return e.completed});return e.map(function(e){return Object.assign({},e,{completed:!t})})}},{key:"clearCompleted",value:function(e){return e.filter(function(e){return e.completed===!1})}}]),e}()},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var i=n(1),r=o(i);r["default"].module("app").run(["$templateCache",function(e){e.put("app/components/Footer.html",'<footer class="footer">\n  <span class="todo-count">\n    <strong>{{$ctrl.activeCount || \'No\'}}</strong> {{$ctrl.activeCount === 1 ? \'item\' : \'items\'}} left\n  </span>\n  <ul class="filters">\n    <li key="filter" ng-repeat="filter in $ctrl.filters">\n      <a ng-class="{\'selected\': filter === $ctrl.selectedFilter.type}" ng-click="$ctrl.handleChange(filter)">{{$ctrl.filterTitles[filter]}}</a>\n    </li>\n  </ul>\n  <button ng-if="$ctrl.completedCount > 0" class="clear-completed" ng-click="$ctrl.handleClear()">\n    Clear completed\n  </button>\n</footer>'),e.put("app/components/Header.html",'<header class="header">\n  <h1>todos</h1>\n  <todo-text-input new-todo="true" on-save="$ctrl.handleSave(text)" placeholder="What needs to be done?"></todo-text-input>\n</header>'),e.put("app/components/MainSection.html",'<section class="main">\n  <input ng-if="$ctrl.todos.length" class="toggle-all" type="checkbox" ng-checked="$ctrl.todos.reduce($ctrl.completeReducer, 0) === $ctrl.todos.length" ng-click="$ctrl.handleCompleteAll()">\n  <ul class="todo-list">\n    <todo-item ng-repeat="todo in $ctrl.todos.filter($ctrl.selectedFilter.filter)" todo="todo" on-destroy="$ctrl.handleDestroy(id)" on-change="$ctrl.handleChange(id)" on-save="$ctrl.handleSave(todo)"></todo-item>\n  </ul>\n  <footer-component ng-if="$ctrl.todos.length" completed-count="$ctrl.todos.reduce($ctrl.completeReducer, 0)" active-count="$ctrl.todos.length - $ctr.todos.reduce($ctrl.completeReducer, 0)" filter="$ctrl.selectedFilter" on-clear-completed="$ctrl.handleClearCompleted()" on-show="$ctrl.handleShow(filter)"></footer-component>\n</section>'),e.put("app/components/TodoItem.html",'<li ng-class="{\'editing\': $ctrl.editing, \'completed\': $ctrl.todo.completed}">\n  <todo-text-input ng-if="$ctrl.editing" text="$ctrl.todo.text" editing="$ctrl.editing" on-save="$ctrl.handleSave(text)"></todo-text-input>\n  <div class="view" ng-if="!$ctrl.editing">\n    <input class="toggle" type="checkbox" ng-checked="$ctrl.todo.completed" ng-click="$ctrl.onChange({id: $ctrl.todo.id})">\n    <label ng-dblclick="$ctrl.handleDoubleClick()">{{$ctrl.todo.text}}</label>\n    <button class="destroy" ng-click="$ctrl.handleDestroy($ctrl.todo.id)"></button>\n  </div>\n</li>'),e.put("app/components/TodoTextInput.html",'<input class="textInput" ng-class="{\'edit\': $ctrl.editing, \'new-todo\': $ctrl.newTodo}" ng-model="$ctrl.text" ng-keypress="$ctrl.handleSubmit($event)" ng-blur="$ctrl.handleBlur()" placeholder="{{$ctrl.placeholder}}" type="text">'),e.put("app/containers/App.html",'<header-component todos="$ctrl.todos"></header-component>\n<main-section todos="$ctrl.todos" filter="$ctrl.filter"></main-section>\n')}])},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var i=n(1),r=o(i);n(7);var l=n(2),c=n(15),a=n(10),u=n(11),d=n(13),s=n(12),f=n(9);n(5);var p=n(16),h=o(p);n(8),r["default"].module("app",["ui.router"]).config(h["default"]).service("todoService",l.TodoService).component("app",c.App).component("headerComponent",a.Header).component("footerComponent",f.Footer).component("mainSection",u.MainSection).component("todoTextInput",d.TodoTextInput).component("todoItem",s.TodoItem)},,,,function(e,t){},function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.Footer=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(0),c=function(){function e(){var t;i(this,e),this.filters=[l.SHOW_ALL,l.SHOW_ACTIVE,l.SHOW_COMPLETED],this.filterTitles=(t={},o(t,l.SHOW_ALL,"All"),o(t,l.SHOW_ACTIVE,"Active"),o(t,l.SHOW_COMPLETED,"Completed"),t)}return r(e,[{key:"handleClear",value:function(){this.onClearCompleted()}},{key:"handleChange",value:function(e){this.onShow({filter:e})}}]),e}();t.Footer={templateUrl:"app/components/Footer.html",controller:c,bindings:{completedCount:"<",activeCount:"<",selectedFilter:"<filter",onClearCompleted:"&",onShow:"&"}}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=function(){function e(t){n(this,e),this.todoService=t}return e.$inject=["todoService"],o(e,[{key:"handleSave",value:function(e){0!==e.length&&(this.todos=this.todoService.addTodo(e,this.todos))}}]),e}();t.Header={templateUrl:"app/components/Header.html",controller:i,bindings:{todos:"="}}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.MainSection=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(14),c=o(l),a=function(){function e(t){i(this,e),this.todoService=t,this.selectedFilter=c["default"][this.filter],this.completeReducer=function(e,t){return t.completed?e+1:e}}return e.$inject=["todoService"],r(e,[{key:"handleClearCompleted",value:function(){this.todos=this.todoService.clearCompleted(this.todos)}},{key:"handleCompleteAll",value:function(){this.todos=this.todoService.completeAll(this.todos)}},{key:"handleShow",value:function(e){this.filter=e,this.selectedFilter=c["default"][e]}},{key:"handleChange",value:function(e){this.todos=this.todoService.completeTodo(e,this.todos)}},{key:"handleSave",value:function(e){0===e.text.length?this.todos=this.todoService.deleteTodo(e.id,this.todos):this.todos=this.todoService.editTodo(e.id,e.text,this.todos)}},{key:"handleDestroy",value:function(e){this.todos=this.todoService.deleteTodo(e,this.todos)}}]),e}();t.MainSection={templateUrl:"app/components/MainSection.html",controller:a,bindings:{todos:"=",filter:"<"}}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=function(){function e(){n(this,e),this.editing=!1}return o(e,[{key:"handleDoubleClick",value:function(){this.editing=!0}},{key:"handleSave",value:function(e){this.onSave({todo:{text:e,id:this.todo.id}}),this.editing=!1}},{key:"handleDestroy",value:function(e){this.onDestroy({id:e})}}]),e}();t.TodoItem={templateUrl:"app/components/TodoItem.html",controller:i,bindings:{todo:"<",onDestroy:"&",onChange:"&",onSave:"&"}}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=function(){function e(t,o,i){n(this,e),this.$timeout=i,this.$window=o,this.todoService=t,this.editing=this.editing||!1,this.text=this.text||"",this.text.length&&this.focus()}return e.$inject=["todoService","$window","$timeout"],o(e,[{key:"handleBlur",value:function(){this.newTodo||this.onSave({text:this.text})}},{key:"handleSubmit",value:function(e){13===e.keyCode&&(this.onSave({text:this.text}),this.newTodo&&(this.text=""))}},{key:"focus",value:function(){var e=this;this.$timeout(function(){var t=e.$window.document.querySelector(".editing .textInput");t&&t.focus()},0)}}]),e}();t.TodoTextInput={templateUrl:"app/components/TodoTextInput.html",controller:i,bindings:{onSave:"&",placeholder:"@",newTodo:"@",editing:"@",text:"<"}}},function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return!0}function r(e){return e.completed}function l(e){return!e.completed}Object.defineProperty(t,"__esModule",{value:!0});var c,a=n(0);t["default"]=(c={},o(c,a.SHOW_ALL,{filter:i,type:a.SHOW_ALL}),o(c,a.SHOW_COMPLETED,{filter:r,type:a.SHOW_COMPLETED}),o(c,a.SHOW_ACTIVE,{filter:l,type:a.SHOW_ACTIVE}),c)},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;var i=n(0),r=n(2),l=function c(){o(this,c),this.todos=[r.initialTodo],this.filter=i.SHOW_ALL};t.App={templateUrl:"app/containers/App.html",controller:l}},function(e,t){"use strict";function n(e,t,n){n.html5Mode(!0).hashPrefix("!"),t.otherwise("/"),e.state("app",{url:"/",template:"<app></app>"})}n.$inject=["$stateProvider","$urlRouterProvider","$locationProvider"],Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n},function(e,t,n){n(4),e.exports=n(3)}],[17]);