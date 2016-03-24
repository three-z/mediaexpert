({
	block: 'template-page',
	title: 'Оформить заявку',
	content: [
		{
			block: 'content',
			content: [
				{
					block: 'breadcrumbs',
					content: [
						{
							elem: 'layout',
							mods: { 'container': true },
							mix: { block: 'container' },
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
													content: 'Главная'
												},
											]
										},
										{
											elem: 'item',
											content: [
												{
													tag: 'a',
													elem: 'link',
													attrs: { href: '#' },
													content: 'Реклама на телевидении'
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
					block: 'on-tv',
					content: [
						{
							elem: 'layout',
							mods: { 'container': true },
							mix: { block: 'container' },
							content: [
								{
									elem: 'title',
									cls: 'js-gradient',
									content: 'Оформить заявку'
								},
								{
									elem: 'content',
									content: [
										{
											block: 'request-form',
											content: [
												{
													tag: 'form',
													elem: 'form',
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
										},
										{
											block: 'on-tv-list',
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
					block: 'last-news',
					content: [
						{
							elem: 'layout',
							mods: { 'container': true },
							mix: { block: 'container' },
							content: [
								{
									elem: 'title',
									cls: 'js-gradient',
									content: 'Новости'
								},
								{
									block: 'news-list',
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
							mods: { 'container': true },
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