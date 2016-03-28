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
							block: 'home-slider-item',
							attrs: { style: 'background-image: url(img/tmp/slider/1.jpg);' },
							content: ''
						},
						{
							block: 'home-slider-item',
							attrs: { style: 'background-image: url(img/tmp/slider/2.jpg);' },
							content: ''
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
											block: 'home-tv-slider-item',
											content: [
												{
													elem: 'thumb',
													content: [
														{
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
											block: 'home-tv-slider-item',
											content: [
												{
													elem: 'thumb',
													content: [
														{
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
											block: 'home-tv-slider-item',
											content: [
												{
													elem: 'thumb',
													content: [
														{
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
											block: 'home-tv-slider-item',
											content: [
												{
													elem: 'thumb',
													content: [
														{
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
											block: 'home-tv-slider-item',
											content: [
												{
													elem: 'thumb',
													content: [
														{
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
											block: 'home-tv-slider-item',
											content: [
												{
													elem: 'thumb',
													content: [
														{
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
										}
									]
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
											block: 'home-radio-slider-item',
											content: [
												{
													elem: 'thumb',
													content: [
														{
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
											block: 'home-radio-slider-item',
											content: [
												{
													elem: 'thumb',
													content: [
														{
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
											block: 'home-radio-slider-item',
											content: [
												{
													elem: 'thumb',
													content: [
														{
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
											block: 'home-radio-slider-item',
											content: [
												{
													elem: 'thumb',
													content: [
														{
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
											block: 'home-radio-slider-item',
											content: [
												{
													elem: 'thumb',
													content: [
														{
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
											block: 'home-radio-slider-item',
											content: [
												{
													elem: 'thumb',
													content: [
														{
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
											block: 'home-radio-slider-item',
											content: [
												{
													elem: 'thumb',
													content: [
														{
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
											block: 'home-radio-slider-item',
											content: [
												{
													elem: 'thumb',
													content: [
														{
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
																	block: 'more-button',
																	tag: 'a',
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
																	block: 'more-button',
																	tag: 'a',
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
																	block: 'more-button',
																	tag: 'a',
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