(function($) {
	"use strict";

	$(function() {

		var $widgetList = $(".widget-list");
		var $widget;

		$widget = $("<div class='widget'></div>");
		$widgetList.append($widget);

		$widget.baseWidget({
			title: "Базовый виджет",
			content: "Подробное описание задания...",
			minimized: true,
		});

		$widget = $("<div class='widget'></div>");
		$widgetList.append($widget);

		$widget.baseWidget({
			title: "Развернутый виджет",
			content: "Развернутый контент виджета...",
			minimized: false,
		});
	});
}(jQuery));
