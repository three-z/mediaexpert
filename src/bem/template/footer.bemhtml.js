block('template-footer').replace()(function() {
	var ctx = this.ctx;

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