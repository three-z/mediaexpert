block('template-popups').replace()(function() {
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
							cls: 'js-gradient',
							content : this.ctx.title
						}
					]
				}
			]
		}
	];
});

block('template-request-form').replace()(function() {
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

block('template-last-reclam').replace()(function() {
	return [
		{
			block: 'last-reclam',
			content: [
				{
					elem: 'layout',
					mix: { block: 'container' },
					content: [
						{
							elem: 'title',
							content: 'Рекламные ролики'
						},
						{
							block: 'last-reclam-slider',
							content: [
								{
									url: '#',
									thumb: 'img/tmp/video/1.jpg'
								},
								{
									url: '#',
									thumb: 'img/tmp/video/2.jpg'
								},
								{
									url: '#',
									thumb: 'img/tmp/video/1.jpg'
								},
								{
									url: '#',
									thumb: 'img/tmp/video/2.jpg'
								}
							].map(function(item) {
								return {
									block: 'last-reclam-slider-item',
									content: [
										{
											elem: 'link',
											tag: 'a',
											attrs: { href: item.url },
											content: [
												{
													tag: 'img',
													attrs: { src: item.thumb },
												}
											]
										}
									]
								};
							})
						},
						{
							elem: 'other',
							content: [
								{
									tag: 'a',
									attrs: { href: '#' },
									content: 'Все рекламные ролики'
								}
							]
						}
					]
				}
			]
		}
	];
});

block('template-last-news').replace()(function() {
	return [
		{
			block: 'template-page-title',
			title : 'Новости',
			underline: true
		},
		{
			block: 'last-news',
			content: [
				{
					elem: 'layout',
					mix: { block: 'container' },
					content: [
						{
							block: 'news-list',
							content: [
								{
									url: '#',
									thumb: 'img/tmp/last-news/1.png',
									title: 'Энергоснабжение Южной Осетии восстановлено. Энергоснабжение Южной Осетии восстановлено.',
									date: '10.12.15',
									text: 'Энергоснабжение Южной Осетии восстановлено. Энергоснабжение Южной Осетии восстановлено.'
								},
								{
									url: '#',
									thumb: 'img/tmp/last-news/1.png',
									title: 'Энергоснабжение Южной Осетии восстановлено. Энергоснабжение Южной Осетии восстановлено.',
									date: '10.12.15',
									text: 'Энергоснабжение Южной Осетии восстановлено. Энергоснабжение Южной Осетии восстановлено.'
								},
								{
									url: '#',
									thumb: 'img/tmp/last-news/1.png',
									title: 'Энергоснабжение Южной Осетии восстановлено. Энергоснабжение Южной Осетии восстановлено.',
									date: '10.12.15',
									text: 'Энергоснабжение Южной Осетии восстановлено. Энергоснабжение Южной Осетии восстановлено.'
								},
								{
									url: '#',
									thumb: 'img/tmp/last-news/1.png',
									title: 'Энергоснабжение Южной Осетии восстановлено. Энергоснабжение Южной Осетии восстановлено.',
									date: '10.12.15',
									text: 'Энергоснабжение Южной Осетии восстановлено. Энергоснабжение Южной Осетии восстановлено.'
								}
							].map(function(item) {
								return {
									block: 'news-list-item',
									content: [
										{
											elem: 'thumb',
											content: [
												{
													tag: 'img',
													attrs: { src: 'img/tmp/last-news/1.png' },
												}
											]
										},
										{
											elem: 'info',
											content: [
												{
													elem: 'title',
													cls: 'js-dotted',
													content: [
														{
															tag: 'a',
															attrs: { href: item.url },
															content: item.title
														}
													]
												},
												{
													elem: 'date',
													content: item.date
												},
												{
													elem: 'text',
													cls: 'js-dotted',
													content: item.text
												},
												{
													elem: 'more',
													content: [
														{
															block: 'more-button',
															tag: 'a',
															attrs: { href: item.url },
															content: 'подробнее'
														}
													]
												}
											]
										}
									]
								};
							})
						},
						{
							elem: 'other',
							content: [
								{
									tag: 'a',
									attrs: { href: '#' },
									content: 'Другие новости'
								}
							]
						}
					]
				}
			]
		}
	];
});

block('template-clients').replace()(function() {
	return [
		{
			block: 'template-page-title',
			title : 'Наши клиенты',
			underline: true
		},
		{
			block: 'clients',
			content: [
				{
					elem: 'layout',
					mix: { block: 'container' },
					content: [
						{
							block: 'clients-slider',
							content: [
								{
									block: 'clients-slider-item',
									content: [
										{
											tag: 'a',
											attrs: { href: '#' },
											content: [
												{
													tag: 'img',
													attrs: { src: 'img/tmp/clients/1.png' },
												}
											]
										}
									]
								},
								{
									block: 'clients-slider-item',
									content: [
										{
											tag: 'a',
											attrs: { href: '#' },
											content: [
												{
													tag: 'img',
													attrs: { src: 'img/tmp/clients/2.png' },
												}
											]
										}
									]
								},
								{
									block: 'clients-slider-item',
									content: [
										{
											tag: 'a',
											attrs: { href: '#' },
											content: [
												{
													tag: 'img',
													attrs: { src: 'img/tmp/clients/1.png' },
												}
											]
										}
									]
								},
								{
									block: 'clients-slider-item',
									content: [
										{
											tag: 'a',
											attrs: { href: '#' },
											content: [
												{
													tag: 'img',
													attrs: { src: 'img/tmp/clients/2.png' },
												}
											]
										}
									]
								},
								{
									block: 'clients-slider-item',
									content: [
										{
											tag: 'a',
											attrs: { href: '#' },
											content: [
												{
													tag: 'img',
													attrs: { src: 'img/tmp/clients/1.png' },
												}
											]
										}
									]
								},
								{
									block: 'clients-slider-item',
									content: [
										{
											tag: 'a',
											attrs: { href: '#' },
											content: [
												{
													tag: 'img',
													attrs: { src: 'img/tmp/clients/2.png' },
												}
											]
										}
									]
								},
								{
									block: 'clients-slider-item',
									content: [
										{
											tag: 'a',
											attrs: { href: '#' },
											content: [
												{
													tag: 'img',
													attrs: { src: 'img/tmp/clients/1.png' },
												}
											]
										}
									]
								},
								{
									block: 'clients-slider-item',
									content: [
										{
											tag: 'a',
											attrs: { href: '#' },
											content: [
												{
													tag: 'img',
													attrs: { src: 'img/tmp/clients/2.png' },
												}
											]
										}
									]
								}
							]
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

block('site-contacts').elem('list')(
    tag()('ul')
);

block('site-contacts').elem('item')(
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