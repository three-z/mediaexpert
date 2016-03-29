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
		},
		{
			block: 'request-popup',
			attrs: { 'id': 'request-popup' },
			mix: { block: 'popup' },
			content: [
				{
					elem : 'title',
					content : 'Оставить заявку'
				},
				{
					block : 'request-popup-form',
					tag: 'form',
					content : [
						{
							elem : 'label',
							tag : 'label',
							content : 'Ваше имя'
						},
						{
							elem : 'input',
							tag: 'input',
							attrs: { 'type': 'text' }
						},
						{
							elem : 'label',
							tag : 'label',
							content : 'Комментарий'
						},
						{
							elem : 'text',
							tag: 'textarea',
							content : ''
						},
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
									attrs: { type: 'submit', value: 'Оставить заявку' }
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
			title : 'Наши&nbsp;клиенты',
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
									url: '#',
									thumb: 'img/tmp/clients/1.png'
								},
								{
									url: '#',
									thumb: 'img/tmp/clients/2.png'
								},
								{
									url: '#',
									thumb: 'img/tmp/clients/1.png'
								},
								{
									url: '#',
									thumb: 'img/tmp/clients/2.png'
								},
								{
									url: '#',
									thumb: 'img/tmp/clients/1.png'
								},
								{
									url: '#',
									thumb: 'img/tmp/clients/2.png'
								},
								{
									url: '#',
									thumb: 'img/tmp/clients/1.png'
								},
								{
									url: '#',
									thumb: 'img/tmp/clients/2.png'
								},
								{
									url: '#',
									thumb: 'img/tmp/clients/1.png'
								},
								{
									url: '#',
									thumb: 'img/tmp/clients/2.png'
								}
							].map(function(item) {
								return {
									block: 'clients-slider-item',
									content: [
										{
											tag: 'a',
											attrs: { href: item.url },
											content: [
												{
													tag: 'img',
													attrs: { src: item.thumb }
												}
											]
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
block('template-footer').replace()(function() {
	return [
		{
			block: 'bottom-line',
			content: [
				{
					elem: 'layout',
					mix: { block: 'container' },
					content: [
						{
							elem: 'layout-left',
							content: [
								{
									block: 'secondary-logo',
									content: [
										{
											elem: 'link',
											tag: 'a',
											attrs: { href: '#' },
											content: [
												{
													elem: 'image',
													tag: 'img',
													attrs: { src: 'img/logo-small.png' },
												}
											]
										}
									]
								}
							]
						},
						{
							elem: 'layout-right',
							content: [
								{
									block: 'secondary-site-phone',
									content: '<small>+7(8182)</small> 65-79-70, 65-79-80'
								}
							]
						}
					]
				}
			]
		},
		{
			block: 'footer',
			content: [
				{
					elem: 'layout',
					mix: { block: 'container' },
					content: [
						{
							elem: 'layout-left',
							content: [
								{
									elem: 'columns',
									content: [
										{
											elem: 'column',
											content: [
												{
													elem: 'title',
													content: 'Компания'
												},
												{
													block: 'secondary-navigation',
													content: [
														{
															elem: 'list',
															content: [
																{
																	elem: 'item',
																	content: [
																		{
																			elem: 'link',
																			tag: 'a',
																			attrs: { href: '#' },
																			content: 'О компании'
																		}
																	]
																},
																{
																	elem: 'item',
																	content: [
																		{
																			elem: 'link',
																			tag: 'a',
																			attrs: { href: '#' },
																			content: 'Лицензии'
																		}
																	]
																},
																{
																	elem: 'item',
																	content: [
																		{
																			elem: 'link',
																			tag: 'a',
																			attrs: { href: '#' },
																			content: 'Партнеры'
																		}
																	]
																},
																{
																	elem: 'item',
																	content: [
																		{
																			elem: 'link',
																			tag: 'a',
																			attrs: { href: '#' },
																			content: 'Реквизиты'
																		}
																	]
																},
																{
																	elem: 'item',
																	content: [
																		{
																			elem: 'link',
																			tag: 'a',
																			attrs: { href: '#' },
																			content: 'Сотрудники'
																		}
																	]
																},
																{
																	elem: 'item',
																	content: [
																		{
																			elem: 'link',
																			tag: 'a',
																			attrs: { href: '#' },
																			content: 'Вакансии'
																		}
																	]
																},
																{
																	elem: 'item',
																	content: [
																		{
																			elem: 'link',
																			tag: 'a',
																			attrs: { href: '#' },
																			content: 'Новости компании'
																		}
																	]
																}
															]
														}
													]
												}
											]
										},
										{
											elem: 'column',
											content: [
												{
													elem: 'title',
													content: 'Реклама на радио'
												},
												{
													block: 'secondary-navigation',
													content: [
														{
															elem: 'list',
															content: [
																{
																	elem: 'item',
																	content: [
																		{
																			elem: 'link',
																			tag: 'a',
																			attrs: { href: '#' },
																			content: 'Европа Плюс'
																		}
																	]
																},
																{
																	elem: 'item',
																	content: [
																		{
																			elem: 'link',
																			tag: 'a',
																			attrs: { href: '#' },
																			content: 'Русское Радио'
																		}
																	]
																},
																{
																	elem: 'item',
																	content: [
																		{
																			elem: 'link',
																			tag: 'a',
																			attrs: { href: '#' },
																			content: 'Авто Радио'
																		}
																	]
																},
																{
																	elem: 'item',
																	content: [
																		{
																			elem: 'link',
																			tag: 'a',
																			attrs: { href: '#' },
																			content: 'Ретро ФМ'
																		}
																	]
																},
																{
																	elem: 'item',
																	content: [
																		{
																			elem: 'link',
																			tag: 'a',
																			attrs: { href: '#' },
																			content: 'Мега ФМ'
																		}
																	]
																},
																{
																	elem: 'item',
																	content: [
																		{
																			elem: 'link',
																			tag: 'a',
																			attrs: { href: '#' },
																			content: 'Наше Радио'
																		}
																	]
																},
																{
																	elem: 'item',
																	content: [
																		{
																			elem: 'link',
																			tag: 'a',
																			attrs: { href: '#' },
																			content: 'Маяк'
																		}
																	]
																},
																{
																	elem: 'item',
																	content: [
																		{
																			elem: 'link',
																			tag: 'a',
																			attrs: { href: '#' },
																			content: 'Регион 29'
																		}
																	]
																},
																{
																	elem: 'item',
																	content: [
																		{
																			elem: 'link',
																			tag: 'a',
																			attrs: { href: '#' },
																			content: 'Дорожное радио'
																		}
																	]
																},
																{
																	elem: 'item',
																	content: [
																		{
																			elem: 'link',
																			tag: 'a',
																			attrs: { href: '#' },
																			content: 'Радио Дача'
																		}
																	]
																}
															]
														}
													]
												}
											]
										},
										{
											elem: 'column',
											content: [
												{
													elem: 'title',
													content: 'Реклама на ТВ'
												},
												{
													block: 'secondary-navigation',
													content: [
														{
															elem: 'list',
															content: [
																{
																	elem: 'item',
																	content: [
																		{
																			elem: 'link',
																			tag: 'a',
																			attrs: { href: '#' },
																			content: 'Первый канал'
																		}
																	]
																},
																{
																	elem: 'item',
																	content: [
																		{
																			elem: 'link',
																			tag: 'a',
																			attrs: { href: '#' },
																			content: 'Россия 1'
																		}
																	]
																},
																{
																	elem: 'item',
																	content: [
																		{
																			elem: 'link',
																			tag: 'a',
																			attrs: { href: '#' },
																			content: 'НТВ'
																		}
																	]
																},
																{
																	elem: 'item',
																	content: [
																		{
																			elem: 'link',
																			tag: 'a',
																			attrs: { href: '#' },
																			content: 'ТНТ'
																		}
																	]
																},
																{
																	elem: 'item',
																	content: [
																		{
																			elem: 'link',
																			tag: 'a',
																			attrs: { href: '#' },
																			content: 'СТС'
																		}
																	]
																},
																{
																	elem: 'item',
																	content: [
																		{
																			elem: 'link',
																			tag: 'a',
																			attrs: { href: '#' },
																			content: 'Пятница'
																		}
																	]
																},
																{
																	elem: 'item',
																	content: [
																		{
																			elem: 'link',
																			tag: 'a',
																			attrs: { href: '#' },
																			content: 'Рен ТВ'
																		}
																	]
																},
																{
																	elem: 'item',
																	content: [
																		{
																			elem: 'link',
																			tag: 'a',
																			attrs: { href: '#' },
																			content: 'ТВЦ'
																		}
																	]
																},
																{
																	elem: 'item',
																	content: [
																		{
																			elem: 'link',
																			tag: 'a',
																			attrs: { href: '#' },
																			content: 'Домашний'
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
							]
						},
						{
							elem: 'layout-right',
							content: [
								{
									elem: 'title',
									content: 'Контакты'
								},
								{
									block: 'site-contacts',
									content: [
										{
											elem: 'list',
											content: [
												{
													elem: 'item',
													mods: { 'address': true },
													content: 'г. Архангельск, ул. Попова, д. 6.'
												},
												{
													elem: 'item',
													mods: { 'email': true },
													content: [
														{
															tag: 'a',
															attrs: { href: 'mailto:info@mediaexp.ru' },
															content: 'mailto:info@mediaexp.ru'
														}
													]
												},
												{
													elem: 'item',
													mods: { 'phone': true },
													content: '+7 (8182) 65-79-70; 65-79-80'
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
		},
		{
			block: 'copyright',
			content: [
				{
					elem: 'layout',
					mix: { block: 'container' },
					content: [
						{
							elem: 'text',
							content: '© 2015 "МедиаЭКСПЕРТ" All Rights Reserved, site by <a href="http://leeft.ru/">Leeft</a>'
						}
					]
				}
			]
		}
	];
});
block('template-header').replace()(function() {
	return [
		{
			block: 'top-line',
			content: [
				{
					elem: 'layout',
					mix: { block: 'container' },
					content: [
						{
							elem: 'layout-left',
							content: [
								{
									block: 'site-title',
									content: 'Медиа Эксперт Вашего Бизнеса'
								}
							]
						},
						{
							elem: 'layout-right',
							content: [
								{
									block: 'social-links',
									content: [
										{
											elem: 'list',
											content: [
												{
													elem: 'item',
													content: [
														{
															elem: 'link',
															tag: 'a',
															attrs: { href: '#' },
															content: 'В'
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															elem: 'link',
															tag: 'a',
															attrs: { href: '#' },
															content: 'f'
														}
													]
												}
											]
										}
									]
								},
								{
									block: 'leave-request',
									content: [
										{
											elem: 'button',
											cls: 'fancybox',
											tag: 'a',
											attrs: { href: '#request-popup' },
											content: 'Оставить заявку'
										}
									]
								}
							]
						}
					]
				}
			]
		},
		{
			block: 'header',
			content: [
				{
					elem: 'layout',
					mix: { block: 'container' },
					content: [
						{
							elem: 'layout-left',
							content: [
								{
									block: 'logo',
									content: [
										{
											elem: 'link',
											tag: 'a',
											attrs: { href: '#' },
											content: [
												{
													elem: 'image',
													tag: 'img',
													attrs: { src: 'img/logo.png' },
												}
											]
										}
									]
								}
							]
						},
						{
							elem: 'layout-center',
							content: [
								{
									block: 'site-address',
									content: 'г. Архангельск, ул. Попова, д. 6'
								},
								{
									block: 'site-slogan',
									content: 'Производство и размещение аудио и видео роликов'
								}
							]
						},
						{
							elem: 'layout-right',
							content: [
								{
									block: 'site-phone',
									content: '<small>+7(8182)</small> 65-79-70, 65-79-80'
								},
								{
									block: 'callback',
									content: [
										{
											elem: 'button',
											tag: 'a',
											cls: 'fancybox',
											attrs: { href: '#callback-popup' },
											content: 'Заказать звонок'
										}
									]
								}
							]
						}
					]
				}
			]
		},
		{
			block: 'navigation',
			content: [
				{
					elem: 'layout',
					mix: { block: 'container', mods: { 'no-padding': true } },
					content: [
						{
							elem: 'list',
							content: [
								{
									elem: 'item',
									mods: { 'active': true },
									content: [
										{
											elem: 'link',
											tag: 'a',
											attrs: { href: '#' },
											content: 'Главная'
										}
									]
								},
								{
									elem: 'item',
									content: [
										{
											elem: 'link',
											tag: 'a',
											attrs: { href: '#' },
											content: 'Компания'
										}
									]
								},
								{
									elem: 'item',
									content: [
										{
											elem: 'link',
											tag: 'a',
											attrs: { href: '#' },
											content: 'Реклама на телевидении'
										}
									]
								},
								{
									elem: 'item',
									content: [
										{
											elem: 'link',
											tag: 'a',
											attrs: { href: '#' },
											content: 'Реклама на радио'
										}
									]
								},
								{
									elem: 'item',
									content: [
										{
											elem: 'link',
											tag: 'a',
											attrs: { href: '#' },
											content: 'Новости'
										}
									]
								},
								{
									elem: 'item',
									content: [
										{
											elem: 'link',
											tag: 'a',
											attrs: { href: '#' },
											content: 'Отзывы'
										}
									]
								},
								{
									elem: 'item',
									content: [
										{
											elem: 'link',
											tag: 'a',
											attrs: { href: '#' },
											content: 'Контакты'
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
});
block('template-page').replace()(function() {
	return [
		'<!DOCTYPE html>',
		{
			tag: 'html',
			content: [
				{
					tag: 'head',
					content: [
						{
							tag: 'meta',
							attrs: { charset: 'utf-8' }
						},
						{
							tag: 'title',
							content: this.ctx.title
						},
						{
							tag: 'link',
							attrs: { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Cuprum:400,400italic,700,700italic&subset=latin,latin-ext,cyrillic' }
						},
						{
							tag: 'link',
							attrs: { rel: 'stylesheet', href: 'bower_components/normalize.css/normalize.css' }
						},
						{
							tag: 'link',
							attrs: { rel: 'stylesheet', href: 'bower_components/slick.js/slick/slick.css' }
						},
						{
							tag: 'link',
							attrs: { rel: 'stylesheet', href: 'bower_components/fancybox/source/jquery.fancybox.css' }
						},
						{
							tag: 'link',
							attrs: { rel: 'stylesheet', href: 'css/styles.css' }
						}
					]
				},
				{
					tag: 'body',
					content: [
						{
							cls: 'page',
							bem: false,
							content: [
								{
									block: 'template-header'
								},
								this.ctx.content,
								{
									block: 'template-footer'
								},
								{
									block: 'template-popups'
								}
							]
						},
						{
							tag: 'script',
							attrs: { src: 'bower_components/jquery/dist/jquery.min.js' }
						},
						{
							tag: 'script',
							attrs: { src: 'bower_components/slick.js/slick/slick.min.js' }
						},
						{
							tag: 'script',
							attrs: { src: 'bower_components/pxgradient/pxgradient-1.0.3.min.js' }
						},
						{
							tag: 'script',
							attrs: { src: 'bower_components/jQuery.dotdotdot/src/jquery.dotdotdot.min.js' }
						},
						{
							tag: 'script',
							attrs: { src: 'bower_components/fancybox/source/jquery.fancybox.pack.js' }
						},
						{
							tag: 'script',
							attrs: { src: 'js/scripts.js' }
						},
					]
				}
			]
		}
	];
});
block('template-page').replace()(function() {
	var ctx = this.ctx;

	return [
		'<!DOCTYPE html>',
		{
			tag: 'html',
			content: [
				{
					tag: 'head',
					content: [
						{
							tag: 'meta',
							attrs: { charset: 'utf-8' }
						},
						{
							tag: 'title',
							content: ctx.title
						},
						{
							tag: 'link',
							attrs: { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Cuprum:400,400italic,700,700italic&subset=latin,latin-ext,cyrillic' }
						},
						{
							tag: 'link',
							attrs: { rel: 'stylesheet', href: 'bower_components/normalize.css/normalize.css' }
						},
						{
							tag: 'link',
							attrs: { rel: 'stylesheet', href: 'bower_components/slick.js/slick/slick.css' }
						},
						{
							tag: 'link',
							attrs: { rel: 'stylesheet', href: 'bower_components/fancybox/source/jquery.fancybox.css' }
						},
						{
							tag: 'link',
							attrs: { rel: 'stylesheet', href: 'css/styles.css' }
						}
					]
				},
				{
					tag: 'body',
					content: [
						{
							cls: 'page',
							bem: false,
							content: [
								{
									block: 'template-header'
								},
								ctx.content,
								{
									block: 'template-footer'
								},
								{
									block: 'template-popups'
								}
							]
						},
						{
							tag: 'script',
							attrs: { src: 'bower_components/jquery/dist/jquery.min.js' }
						},
						{
							tag: 'script',
							attrs: { src: 'bower_components/slick.js/slick/slick.min.js' }
						},
						{
							tag: 'script',
							attrs: { src: 'bower_components/pxgradient/pxgradient-1.0.3.min.js' }
						},
						{
							tag: 'script',
							attrs: { src: 'bower_components/jQuery.dotdotdot/src/jquery.dotdotdot.min.js' }
						},
						{
							tag: 'script',
							attrs: { src: 'bower_components/fancybox/source/jquery.fancybox.pack.js' }
						},
						{
							tag: 'script',
							attrs: { src: 'js/scripts.js' }
						},
					]
				}
			]
		}
	];
});