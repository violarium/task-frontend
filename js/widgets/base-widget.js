(function($) {
	"use strict";

	$.widget("custom.baseWidget", {
		_firstInit: true,

		_init: function() {
			var self = this;
			self._superApply(arguments);

			if (this._firstInit) {
				self._firstInit = false;
				self._setOptions(self.options);
			}
		},
		_setOptions: function(options) {
			var self = this;
			self._superApply(arguments);

			if (options.minimized) {
				self.minimize();
			}
			else {
				self.unminimize();
			}

			if (options.title) {
				self.$title.text(options.title);
			}

			if (options.content) {
				self.$content.text(options.content);
			}
		},
		_create: function() {
			var self = this;

			self.$header = $('<div class="header"></div>');
			self.element.append(self.$header);

			self.$title = $('<div class="title">Заголовок виджета</div>');
			self.$header.append(self.$title);

			self.$buttons = $('<div class="buttons"></div>');
			self.$header.append(self.$buttons);
			self.$header.append('<div class="clearfix"></div>');

			self.$minimizeButton = $('<span title="Свернуть виджет" class="ui-icon ui-icon-circle-minus minimize"></span>');
			self.$buttons.append(self.$minimizeButton);

			self.$unminimizeButton = $('<span title="Развернуть виджет" class="ui-icon ui-icon-circle-plus unminimize"></span>');
			self.$buttons.append(self.$unminimizeButton);

			self.$content = $('<div class="content">Контент виджета</div>');
			self.element.append(self.$content);

			self.$minimizeButton.click(function() {
				self.minimize();
			});

			self.$unminimizeButton.click(function() {
				self.unminimize();
			});

			self.element.append(self.$header);
			self.element.append(self.$content);

		},
		minimize: function() {
			var self = this;

			self.$minimizeButton.hide();
			self.$unminimizeButton.show();

			self.$content.hide();
		},
		unminimize: function() {
			var self = this;

			self.$minimizeButton.show();
			self.$unminimizeButton.hide();
			self.$content.show();
		},
	});
}(jQuery));
