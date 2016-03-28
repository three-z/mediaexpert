block('template-popups').replace()(function() {
	var ctx = this.ctx;

	return [
		{
			block: 'callback-popup',
			attrs: { 'id': 'callback-popup' },
			mix: { block: 'popup' },
			content: [
				{
					elem : 'title',
					content : 'Введите ваш номер телефона'
				},
				{
					block : 'callback-popup-form',
					tag: 'form',
					content : [
						{
							elem : 'phone',
							content : [
								{
									tag: '',
									content : '+7'
								},
								{
									elem : 'input',
									tag: 'input',
									attrs: { 'type': 'text' }
								},
							]
						},
						{
							elem : 'buttons',
							content : [
								{
									elem: 'button',
									tag: 'input',
									attrs: { type: 'submit', value: 'Заказать звонок' }
								}
							]
						}
					]
				}
			]
		}
	];
});

block('template-page-title').replace()(function() {
	var ctx = this.ctx;

	return [
		{
			block: 'page-title',
			mods: {
				underline: this.ctx.underline ? true : undefined
			},
			content: [
				{
					elem: 'layout',
					mix: { block: 'container' },
					content: [
						{
							elem : 'text',
							tag: 'h2',
							content : ctx.title
						}
					]
				}
			]
		}
	];
});

block('template-request-form').replace()(function() {
	var ctx = this.ctx;

	return [
		{
			block: 'request-form',
			content: [
				{
					elem: 'form',
					tag: 'form',
					content: [
						{
							tag: 'input',
							elem: 'input',
							attrs: { type: 'text', placeholder: 'Ваше имя' }
						},
						{
							tag: 'input',
							elem: 'input',
							attrs: { type: 'text', placeholder: 'Компания' }
						},
						{
							tag: 'input',
							elem: 'input',
							mods: { 'small': true },
							attrs: { type: 'text', placeholder: 'Телефон' }
						},
						{
							tag: 'input',
							elem: 'input',
							mods: { 'small': true },
							attrs: { type: 'text', placeholder: 'E-mail' }
						},
						{
							tag: 'input',
							elem: 'button',
							attrs: { type: 'submit', placeholder: 'Отправить' }
						}
					]
				}
			]
		}
	];
});

block('template-breadcrumbs').replace()(function() {
	var ctx = this.ctx;

	return [
		{
			block: 'breadcrumbs',
			content: [
				{
					elem: 'layout',
					mix: { block: 'container' },
					content: [
						{
							elem: 'list',
							tag: 'ul',
							content: this.ctx.links.map(function(item) {
								return {
									elem: 'item',
									tag: 'li',
									content: [
										{
											elem: 'link',
											tag: 'a',
											attrs: { href: item.url },
											content: item.content
										}
									]
								};
							})
						}
					]
				}
			]
		}
	];
});

// header

block('site-title')(
    tag()('h1')
);

block('social-links').elem('list')(
    tag()('ul')
);

block('social-links').elem('item')(
    tag()('li')
);

// navigation

block('navigation').elem('list')(
    tag()('ul')
);

block('navigation').elem('item')(
    tag()('li')
);

// footer

block('footer').elem('title')(
    tag()('h3')
);

block('secondary-navigation').elem('list')(
    tag()('ul')
);

block('secondary-navigation').elem('item')(
    tag()('li')
);

// elements

block('pagination').elem('list')(
    tag()('ul')
);

block('pagination').elem('item')(
    tag()('li')
);

block('pagination').elem('current')(
    tag()('span')
);