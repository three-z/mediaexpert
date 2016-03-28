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
							elem: 'list',
							content: [
								{
									elem: 'item',
									attrs: { style: 'background-image: url(img/tmp/slider/1.jpg);' },
									content: ''
								},
								{
									elem: 'item',
									attrs: { style: 'background-image: url(img/tmp/slider/2.jpg);' },
									content: ''
								}
							]
						}
					]
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
											elem: 'list',
											content: [
												{
													elem: 'item',
													mods: { 'exclusive': true },
													content: 'Эксклюзивное право <br>на размещение рекламы <br>на радио и ТВ <br>'
												},
												{
													elem: 'item',
													mods: { 'reputation': true },
													content: 'Надежность и отличная <br>репутация <br>'
												},
												{
													elem: 'item',
													mods: { 'service': true },
													content: 'Высокий уровень клиентского <br>сервиса, постоянное повышение <br>квалификации сотрудников <br>(тренинги, курсы, обмен опытом) <br>'
												},
												{
													elem: 'item',
													mods: { 'price': true },
													content: 'Гибкая ценовая <br>политика, <br>индивидуальный <br>подход <br>'
												},
												{
													elem: 'item',
													mods: { 'advertising': true },
													content: 'Планирование рекламных <br>компаний, оптимально <br>соответствующих <br>бюджету Клиента <br>'
												},
												{
													elem: 'item',
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
													elem: 'link',
													tag: 'a',
													attrs: { href: '#' },
													content: [
														{
															elem: 'image',
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
					block: 'home-on-tv',
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
									block: 'on-tv-slider',
									content: [
										{
											elem: 'list',
											content: [
												{
													elem: 'item',
													content: [
														{
															elem: 'thumb',
															content: [
																{
																	elem: 'image',
																	tag: 'img',
																	attrs: { src: 'img/tmp/on-tv/1.png' },
																}
															]
														},
														{
															elem: 'title',
															content: 'реклама на телевидении'
														},
														{
															elem: 'sub-title',
															content: 'ПЕРВЫЙ'
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															elem: 'thumb',
															content: [
																{
																	elem: 'image',
																	tag: 'img',
																	attrs: { src: 'img/tmp/on-tv/2.png' },
																}
															]
														},
														{
															elem: 'title',
															content: 'реклама на телевидении'
														},
														{
															elem: 'sub-title',
															content: 'РОССИЯ'
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															elem: 'thumb',
															content: [
																{
																	elem: 'image',
																	tag: 'img',
																	attrs: { src: 'img/tmp/on-tv/1.png' },
																}
															]
														},
														{
															elem: 'title',
															content: 'реклама на телевидении'
														},
														{
															elem: 'sub-title',
															content: 'ПЕРВЫЙ'
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															elem: 'thumb',
															content: [
																{
																	elem: 'image',
																	tag: 'img',
																	attrs: { src: 'img/tmp/on-tv/2.png' },
																}
															]
														},
														{
															elem: 'title',
															content: 'реклама на телевидении'
														},
														{
															elem: 'sub-title',
															content: 'РОССИЯ'
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															elem: 'thumb',
															content: [
																{
																	elem: 'image',
																	tag: 'img',
																	attrs: { src: 'img/tmp/on-tv/1.png' },
																}
															]
														},
														{
															elem: 'title',
															content: 'реклама на телевидении'
														},
														{
															elem: 'sub-title',
															content: 'ПЕРВЫЙ'
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															elem: 'thumb',
															content: [
																{
																	elem: 'image',
																	tag: 'img',
																	attrs: { src: 'img/tmp/on-tv/2.png' },
																}
															]
														},
														{
															elem: 'title',
															content: 'реклама на телевидении'
														},
														{
															elem: 'sub-title',
															content: 'РОССИЯ'
														}
													]
												},
											]
										}
									]
								}
							]
						}
					]
				},
				{
					block: 'home-on-radio',
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
									block: 'on-radio-slider',
									content: [
										{
											elem: 'list',
											content: [
												{
													elem: 'item',
													content: [
														{
															elem: 'thumb',
															content: [
																{
																	elem: 'image',
																	tag: 'img',
																	attrs: { src: 'img/tmp/on-radio/1.png' },
																}
															]
														},
														{
															elem: 'title',
															content: 'реклама на радиостанции'
														},
														{
															elem: 'sub-title',
															content: 'Европа Плюс'
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															elem: 'thumb',
															content: [
																{
																	elem: 'image',
																	tag: 'img',
																	attrs: { src: 'img/tmp/on-radio/2.png' },
																}
															]
														},
														{
															elem: 'title',
															content: 'реклама на радиостанции'
														},
														{
															elem: 'sub-title',
															content: 'Русское Радио'
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															elem: 'thumb',
															content: [
																{
																	elem: 'image',
																	tag: 'img',
																	attrs: { src: 'img/tmp/on-radio/1.png' },
																}
															]
														},
														{
															elem: 'title',
															content: 'реклама на радиостанции'
														},
														{
															elem: 'sub-title',
															content: 'Европа Плюс'
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															elem: 'thumb',
															content: [
																{
																	elem: 'image',
																	tag: 'img',
																	attrs: { src: 'img/tmp/on-radio/2.png' },
																}
															]
														},
														{
															elem: 'title',
															content: 'реклама на радиостанции'
														},
														{
															elem: 'sub-title',
															content: 'Русское Радио'
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															elem: 'thumb',
															content: [
																{
																	elem: 'image',
																	tag: 'img',
																	attrs: { src: 'img/tmp/on-radio/1.png' },
																}
															]
														},
														{
															elem: 'title',
															content: 'реклама на радиостанции'
														},
														{
															elem: 'sub-title',
															content: 'Европа Плюс'
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															elem: 'thumb',
															content: [
																{
																	elem: 'image',
																	tag: 'img',
																	attrs: { src: 'img/tmp/on-radio/2.png' },
																}
															]
														},
														{
															elem: 'title',
															content: 'реклама на радиостанции'
														},
														{
															elem: 'sub-title',
															content: 'Русское Радио'
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															elem: 'thumb',
															content: [
																{
																	elem: 'image',
																	tag: 'img',
																	attrs: { src: 'img/tmp/on-radio/1.png' },
																}
															]
														},
														{
															elem: 'title',
															content: 'реклама на радиостанции'
														},
														{
															elem: 'sub-title',
															content: 'Европа Плюс'
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															elem: 'thumb',
															content: [
																{
																	elem: 'image',
																	tag: 'img',
																	attrs: { src: 'img/tmp/on-radio/2.png' },
																}
															]
														},
														{
															elem: 'title',
															content: 'реклама на радиостанции'
														},
														{
															elem: 'sub-title',
															content: 'Русское Радио'
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
					block: 'last-news',
					content: [
						{
							elem: 'layout',
							mix: { block: 'container' },
							content: [
								{
									elem: 'title',
									cls: 'js-gradient',
									content: 'Новости'
								},
								{
									block: 'last-news-slider',
									content: [
										{
											elem: 'list',
											content: [
												{
													elem: 'item',
													content: [
														{
															elem: 'thumb',
															content: [
																{
																	elem: 'image',
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
																			attrs: { href: '#' },
																			content: 'Энергоснабжение Южной Осетии восстановлено. Энергоснабжение Южной Осетии восстановлено.'
																		}
																	]
																},
																{
																	elem: 'date',
																	content: '10.12.15'
																},
																{
																	elem: 'text',
																	cls: 'js-dotted',
																	content: 'Энергоснабжение Южной Осетии восстановлено. Энергоснабжение Южной Осетии восстановлено.'
																},
																{
																	elem: 'more',
																	content: [
																		{
																			tag: 'a',
																			elem: 'more-link',
																			attrs: { href: '#' },
																			content: 'подробнее'
																		}
																	]
																}
															]
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															elem: 'thumb',
															content: [
																{
																	elem: 'image',
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
																			attrs: { href: '#' },
																			content: 'Энергоснабжение Южной Осетии восстановлено. Энергоснабжение Южной Осетии восстановлено.'
																		}
																	]
																},
																{
																	elem: 'date',
																	content: '10.12.15'
																},
																{
																	elem: 'text',
																	cls: 'js-dotted',
																	content: 'Энергоснабжение Южной Осетии восстановлено. Энергоснабжение Южной Осетии восстановлено.'
																},
																{
																	elem: 'more',
																	content: [
																		{
																			tag: 'a',
																			elem: 'more-link',
																			attrs: { href: '#' },
																			content: 'подробнее'
																		}
																	]
																}
															]
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															elem: 'thumb',
															content: [
																{
																	elem: 'image',
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
																			attrs: { href: '#' },
																			content: 'Энергоснабжение Южной Осетии восстановлено. Энергоснабжение Южной Осетии восстановлено.'
																		}
																	]
																},
																{
																	elem: 'date',
																	content: '10.12.15'
																},
																{
																	elem: 'text',
																	cls: 'js-dotted',
																	content: 'Энергоснабжение Южной Осетии восстановлено. Энергоснабжение Южной Осетии восстановлено.'
																},
																{
																	elem: 'more',
																	content: [
																		{
																			tag: 'a',
																			elem: 'more-link',
																			attrs: { href: '#' },
																			content: 'подробнее'
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
					block: 'clients',
					content: [
						{
							elem: 'layout',
							mix: { block: 'container' },
							content: [
								{
									elem: 'title',
									cls: 'js-gradient',
									content: 'Наши клиенты'
								},
								{
									block: 'clients-slider',
									content: [
										{
											elem: 'list',
											content: [
												{
													elem: 'item',
													content: [
														{
															tag: 'a',
															elem: 'link',
															attrs: { href: '#' },
															content: [
																{
																	elem: 'image',
																	tag: 'img',
																	attrs: { src: 'img/tmp/clients/1.png' },
																}
															]
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															tag: 'a',
															elem: 'link',
															attrs: { href: '#' },
															content: [
																{
																	elem: 'image',
																	tag: 'img',
																	attrs: { src: 'img/tmp/clients/2.png' },
																}
															]
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															tag: 'a',
															elem: 'link',
															attrs: { href: '#' },
															content: [
																{
																	elem: 'image',
																	tag: 'img',
																	attrs: { src: 'img/tmp/clients/1.png' },
																}
															]
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															tag: 'a',
															elem: 'link',
															attrs: { href: '#' },
															content: [
																{
																	elem: 'image',
																	tag: 'img',
																	attrs: { src: 'img/tmp/clients/2.png' },
																}
															]
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															tag: 'a',
															elem: 'link',
															attrs: { href: '#' },
															content: [
																{
																	elem: 'image',
																	tag: 'img',
																	attrs: { src: 'img/tmp/clients/1.png' },
																}
															]
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															tag: 'a',
															elem: 'link',
															attrs: { href: '#' },
															content: [
																{
																	elem: 'image',
																	tag: 'img',
																	attrs: { src: 'img/tmp/clients/2.png' },
																}
															]
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															tag: 'a',
															elem: 'link',
															attrs: { href: '#' },
															content: [
																{
																	elem: 'image',
																	tag: 'img',
																	attrs: { src: 'img/tmp/clients/1.png' },
																}
															]
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															tag: 'a',
															elem: 'link',
															attrs: { href: '#' },
															content: [
																{
																	elem: 'image',
																	tag: 'img',
																	attrs: { src: 'img/tmp/clients/2.png' },
																}
															]
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															tag: 'a',
															elem: 'link',
															attrs: { href: '#' },
															content: [
																{
																	elem: 'image',
																	tag: 'img',
																	attrs: { src: 'img/tmp/clients/1.png' },
																}
															]
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															tag: 'a',
															elem: 'link',
															attrs: { href: '#' },
															content: [
																{
																	elem: 'image',
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
					]
				}
			]
		}
	]
})