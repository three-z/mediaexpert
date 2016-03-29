({
	block: 'template-page',
	title: 'Главная',
	content: [
		{
			block: 'content',
			content: [
				{
					block: 'home-slider',
					content: [
						{
							img: 'img/tmp/slider/1.jpg'
						},
						{
							img: 'img/tmp/slider/2.jpg'
						}
					].map(function(item) {
						return {
							block: 'home-slider-item',
							attrs: { style: 'background-image: url(' + item.img + ');' },
							content: ''
						};
					})
				},
				{
					block: 'home-advantages',
					content: [
						{
							elem: 'layout',
							mix: { block: 'container' },
							content: [
								{
									elem: 'layout-left',
									content: [
										{
											elem: 'title',
											content: 'Преимущества нашей компании'
										},
										{
											block: 'home-advantages-list',
											content: [
												{
													block: 'home-advantages-list-item',
													mods: { 'exclusive': true },
													content: 'Эксклюзивное право <br>на размещение рекламы <br>на радио и ТВ <br>'
												},
												{
													block: 'home-advantages-list-item',
													mods: { 'reputation': true },
													content: 'Надежность и отличная <br>репутация <br>'
												},
												{
													block: 'home-advantages-list-item',
													mods: { 'service': true },
													content: 'Высокий уровень клиентского <br>сервиса, постоянное повышение <br>квалификации сотрудников <br>(тренинги, курсы, обмен опытом) <br>'
												},
												{
													block: 'home-advantages-list-item',
													mods: { 'price': true },
													content: 'Гибкая ценовая <br>политика, <br>индивидуальный <br>подход <br>'
												},
												{
													block: 'home-advantages-list-item',
													mods: { 'advertising': true },
													content: 'Планирование рекламных <br>компаний, оптимально <br>соответствующих <br>бюджету Клиента <br>'
												},
												{
													block: 'home-advantages-list-item',
													mods: { 'creative': true },
													content: 'Оригинальный творческий подход <br>к решению рекламных задач <br>Клиента. <br>'
												},
											]
										}
									]
								},
								{
									elem: 'layout-right',
									content: [
										{
											block: 'home-banner',
											content: [
												{
													tag: 'a',
													attrs: { href: '#' },
													content: [
														{
															tag: 'img',
															attrs: { src: 'img/tmp/banners/1.jpg' },
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
					block: 'home-tv',
					content: [
						{
							elem: 'layout',
							mix: { block: 'container' },
							content: [
								{
									elem: 'info',
									content: [
										{
											elem: 'headers',
											content: [
												{
													elem: 'title',
													cls: 'js-gradient',
													content: 'Реклама'
												},
												{
													elem: 'sub-title',
													content: 'на ТЕЛЕВИДЕНИИ'
												}
											]
										},
										{
											elem: 'description',
											content: 'Огромный опыт работы с телеканалами, большой объем размещения и низкий проценткомиссии, - все это позволяет предлагать нашим клиентам оптимальные цены наразмещение ТВ рекламы.'
										}
									]
								},
								{
									block: 'home-tv-slider',
									content: [
										{
											url: '#',
											thumb: 'img/tmp/on-tv/1.png',
											title: 'реклама на телевидении',
											subtitle: 'ПЕРВЫЙ',
										},
										{
											url: '#',
											thumb: 'img/tmp/on-tv/2.png',
											title: 'реклама на телевидении',
											subtitle: 'РОССИЯ',
										},
										{
											url: '#',
											thumb: 'img/tmp/on-tv/1.png',
											title: 'реклама на телевидении',
											subtitle: 'ПЕРВЫЙ',
										},
										{
											url: '#',
											thumb: 'img/tmp/on-tv/2.png',
											title: 'реклама на телевидении',
											subtitle: 'РОССИЯ',
										},
										{
											url: '#',
											thumb: 'img/tmp/on-tv/1.png',
											title: 'реклама на телевидении',
											subtitle: 'ПЕРВЫЙ',
										},
										{
											url: '#',
											thumb: 'img/tmp/on-tv/2.png',
											title: 'реклама на телевидении',
											subtitle: 'РОССИЯ',
										}
									].map(function(item) {
										return {
											block: 'home-tv-slider-item',
											content: [
												{
													tag: 'a',
													attrs: { href: item.url },
													content : [
														{
															elem: 'thumb',
															content: [
																{
																	tag: 'img',
																	attrs: { src: item.thumb },
																}
															]
														},
														{
															elem: 'title',
															content: item.title
														},
														{
															elem: 'sub-title',
															content: item.subtitle
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
				},
				{
					block: 'home-radio',
					content: [
						{
							elem: 'layout',
							mix: { block: 'container' },
							content: [
								{
									elem: 'info',
									content: [
										{
											elem: 'headers',
											content: [
												{
													elem: 'title',
													content: 'Реклама'
												},
												{
													elem: 'sub-title',
													content: 'на РАДИО'
												}
											]
										},
										{
											elem: 'description',
											content: 'Длительный опыт работы с радиостанциями, большой объем размещения и низкий процентагентского вознаграждения позволяет предлагать нашим клиентам оптимальные цены наразмещение рекламы на радио.'
										}
									]
								},
								{
									block: 'home-radio-slider',
									content: [
										{
											url: '#',
											thumb: 'img/tmp/on-radio/1.png',
											title: 'реклама на радиостанции',
											subtitle: 'Европа Плюс',
										},
										{
											url: '#',
											thumb: 'img/tmp/on-radio/2.png',
											title: 'реклама на радиостанции',
											subtitle: 'Русское Радио',
										},
										{
											url: '#',
											thumb: 'img/tmp/on-radio/1.png',
											title: 'реклама на радиостанции',
											subtitle: 'Европа Плюс',
										},
										{
											url: '#',
											thumb: 'img/tmp/on-radio/2.png',
											title: 'реклама на радиостанции',
											subtitle: 'Русское Радио',
										},
										{
											url: '#',
											thumb: 'img/tmp/on-radio/1.png',
											title: 'реклама на радиостанции',
											subtitle: 'Европа Плюс',
										},
										{
											url: '#',
											thumb: 'img/tmp/on-radio/2.png',
											title: 'реклама на радиостанции',
											subtitle: 'Русское Радио',
										},
										{
											url: '#',
											thumb: 'img/tmp/on-radio/1.png',
											title: 'реклама на радиостанции',
											subtitle: 'Европа Плюс',
										},
										{
											url: '#',
											thumb: 'img/tmp/on-radio/2.png',
											title: 'реклама на радиостанции',
											subtitle: 'Русское Радио',
										},
										{
											url: '#',
											thumb: 'img/tmp/on-radio/1.png',
											title: 'реклама на радиостанции',
											subtitle: 'Европа Плюс',
										},
										{
											url: '#',
											thumb: 'img/tmp/on-radio/2.png',
											title: 'реклама на радиостанции',
											subtitle: 'Русское Радио',
										}
									].map(function(item) {
										return {
											block: 'home-radio-slider-item',
											content: [
												{
													tag: 'a',
													attrs: { href: item.url },
													content : [
														{
															elem: 'thumb',
															content: [
																{
																	tag: 'img',
																	attrs: { src: item.thumb },
																}
															]
														},
														{
															elem: 'title',
															content: item.title
														},
														{
															elem: 'sub-title',
															content: item.subtitle
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
				},
				{
					block: 'home-news',
					content: [
						{
							elem: 'layout',
							mix: { block: 'container' },
							content: [
								{
									block: 'template-page-title',
									title : 'Новости',
									underline: true
								},
								{
									block: 'home-news-slider',
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
											block: 'home-news-slider-item',
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
											elem: 'other-link',
											attrs: { href: '#' },
											content: 'Другие новости'
										}
									]
								}
							]
						}
					]
				},
				{
					block: 'template-clients'
				}
			]
		}
	]
})