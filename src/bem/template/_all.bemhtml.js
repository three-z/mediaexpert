block('home-advantages').elem('title')(
    tag()('h2')
);

block('home-advantages').elem('list')(
    tag()('ul')
);

block('home-advantages').elem('item')(
    tag()('li')
);

block('home-on-tv').elem('title')(
    tag()('h2')
);

block('home-on-radio').elem('title')(
    tag()('h2')
);
block('news-item').elem('title')(
    tag()('h2')
);
block('news').elem('title')(
    tag()('h2')
);
block('on-radio-item').elem('title')(
    tag()('h2')
);
block('on-radio').elem('title')(
    tag()('h2')
);
block('on-tv-item').elem('title')(
    tag()('h2')
);
block('on-tv').elem('title')(
    tag()('h2')
);
block('reviews').elem('title')(
    tag()('h2')
);
block('video').elem('title')(
    tag()('h2')
);
block('footer').elem('title')(
    tag()('h3')
);

block('secondary-navigation').elem('list')(
    tag()('ul')
);

block('secondary-navigation').elem('item')(
    tag()('li')
);
block('site-title')(
    tag()('h1')
);

block('social-links').elem('list')(
    tag()('ul')
);

block('social-links').elem('item')(
    tag()('li')
);

block('navigation').elem('list')(
    tag()('ul')
);

block('navigation').elem('item')(
    tag()('li')
);
block('pagination').elem('list')(
    tag()('ul')
);

block('pagination').elem('item')(
    tag()('li')
);

block('pagination').elem('current')(
    tag()('span')
);

block('breadcrumbs').elem('list')(
    tag()('ul')
);

block('breadcrumbs').elem('item')(
    tag()('li')
);

block('last-news').elem('title')(
    tag()('h2')
);

block('clients').elem('title')(
    tag()('h2')
);
block('template-footer').replace()(function() {
	var ctx = this.ctx;

	return [
		{
			block: 'bottom-line',
			content: [
				{
					elem: 'layout',
					mods: { 'container': true },
					mix: { block: 'container' },
					content: [
						{
							elem: 'layout',
							mods: { 'left': true },
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
							elem: 'layout',
							mods: { 'right': true },
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
					mods: { 'container': true },
					mix: { block: 'container' },
					content: [
						{
							elem: 'layout',
							mods: { 'left': true },
							content: [
								{
									elem: 'layout',
									mods: { 'columns': true },
									content: [
										{
											elem: 'layout',
											mods: { 'column': true },
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
											elem: 'layout',
											mods: { 'column': true },
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
											elem: 'layout',
											mods: { 'column': true },
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
							elem: 'layout',
							mods: { 'right': true },
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
					mods: { 'container': true },
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
	var ctx = this.ctx;

	return [
		{
			block: 'top-line',
			content: [
				{
					elem: 'layout',
					mods: { 'container': true },
					mix: { block: 'container' },
					content: [
						{
							elem: 'layout',
							mods: { 'left': true },
							content: [
								{
									block: 'site-title',
									content: 'Медиа Эксперт Вашего Бизнеса'
								}
							]
						},
						{
							elem: 'layout',
							mods: { 'right': true },
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
											tag: 'a',
											attrs: { href: '#' },
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
					mods: { 'container': true },
					mix: { block: 'container' },
					content: [
						{
							elem: 'layout',
							mods: { 'left': true },
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
							elem: 'layout',
							mods: { 'center': true },
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
							elem: 'layout',
							mods: { 'right': true },
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
											attrs: { href: '#' },
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
					mods: { 'container': true },
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
							attrs: { src: 'js/scripts.js' }
						},
					]
				}
			]
		}
	];
});