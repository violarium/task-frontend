# Тестовое задание для frontend разработчика.

К заданию прилогается код одностраничного js-приложение (SPA).
На странице выводятся базовые виджеты, реализующие функционал сворачивания/разворачивания.

**Задание**:

Нужно создать виджеты двух типов. Виджеты должны расширять функционал базового виджета, используя прототипное наследование

- Виджет 1 типа - с полем для ввода адреса и кнопки добавления новых виджетов 2 типа.
- Виджет 2 типа - с контентом (например, текстовым).

Виджеты должны добавляться в свернутом виде.

При раскрытии по кнопке "Развернуть виджет" должен подгружаться текстовый контент, используя адрес, указанный в поле виджета 1 типа.

По адресу должны отдаваться данные (например, текстовые, json).

Подгрузка должна быть реализована c помощью Ajax.

Виджеты обоих типов должны поддерживать Drag-and-drop, а также сохранять свое состояние при перезагрузке страницы.

Код JS будет проверяться на валидность анализатором качества кода eslint. Конфигурация для проверки находится в файле .eslintrc.js.

Результат задания должен быть предоставлен в отдельной ветке, как merge-request к текущему репозиторию.
